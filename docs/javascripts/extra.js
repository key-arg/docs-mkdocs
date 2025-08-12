// Улучшенные кнопки копирования для блоков кода
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Инициализация красивых кнопок копирования...');

    // Удаляем стандартные кнопки Material если они есть
    const standardButtons = document.querySelectorAll('.md-clipboard');
    standardButtons.forEach(btn => btn.remove());

    // Находим все блоки кода
    const codeBlocks = document.querySelectorAll('div.highlight');

    codeBlocks.forEach(function(block, index) {
        // Проверяем, что внутри есть код
        const codeElement = block.querySelector('pre code') || block.querySelector('pre');
        if (!codeElement) return;

        // Проверяем, что кнопка еще не добавлена
        if (block.querySelector('.custom-copy-button')) return;

        // Создаем красивую кнопку копирования
        const copyButton = document.createElement('button');
        copyButton.className = 'custom-copy-button';
        copyButton.setAttribute('data-tooltip', 'Copy code');
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.setAttribute('data-index', index);

        // Добавляем обработчик клика
        copyButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Получаем текст кода (убираем лишние пробелы и переносы)
            let codeText = codeElement.textContent || codeElement.innerText;

            // Очищаем текст от лишних символов
            codeText = codeText.trim();

            // Копируем в буфер обмена
            copyToClipboard(codeText, copyButton);
        });

        // Добавляем кнопку к блоку кода
        block.appendChild(copyButton);

        // Небольшая задержка для анимации
        setTimeout(() => {
            copyButton.classList.add('show');
        }, index * 50);
    });

    console.log(`✅ Добавлено ${codeBlocks.length} красивых кнопок копирования`);
});

// Функция копирования в буфер обмена
function copyToClipboard(text, button) {
    // Современный способ через Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopySuccess(button);
        }).catch(function(err) {
            console.warn('Clipboard API failed, using fallback:', err);
            fallbackCopyTextToClipboard(text, button);
        });
    } else {
        // Fallback для старых браузеров
        fallbackCopyTextToClipboard(text, button);
    }
}

// Показать успешное копирование
function showCopySuccess(button) {
    // Меняем внешний вид кнопки
    button.classList.add('copied');
    button.setAttribute('data-tooltip', 'Copied!');

    // Возвращаем исходный вид через 2 секунды
    setTimeout(function() {
        button.classList.remove('copied');
        button.setAttribute('data-tooltip', 'Copy code');
    }, 2000);

    // Добавляем небольшую анимацию
    button.style.transform = 'scale(1.1)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

// Fallback для копирования в старых браузерах
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Делаем элемент невидимым но доступным
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
            console.log('✅ Fallback copy successful');
        } else {
            console.error('❌ Fallback copy failed');
            showCopyError(button);
        }
    } catch (err) {
        console.error('❌ Fallback copy error:', err);
        showCopyError(button);
    }

    document.body.removeChild(textArea);
}

// Показать ошибку копирования
function showCopyError(button) {
    button.style.background = 'rgba(239, 68, 68, 0.9)';
    button.setAttribute('data-tooltip', 'Copy failed');

    setTimeout(function() {
        button.style.background = '';
        button.setAttribute('data-tooltip', 'Copy code');
    }, 2000);
}

// Обработка горячих клавиш (опционально)
document.addEventListener('keydown', function(e) {
    // Ctrl+Shift+C для копирования выделенного блока кода
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        const activeElement = document.activeElement;
        const codeBlock = activeElement.closest('.highlight');
        if (codeBlock) {
            const copyButton = codeBlock.querySelector('.custom-copy-button');
            if (copyButton) {
                copyButton.click();
                e.preventDefault();
            }
        }
    }
});

// Добавляем стили для focus-состояния кнопок (для доступности)
const focusStyles = `
.custom-copy-button:focus {
    outline: 2px solid #2196f3;
    outline-offset: 2px;
    opacity: 1 !important;
}

.custom-copy-button:focus-visible {
    outline: 2px solid #2196f3;
    outline-offset: 2px;
}
`;

// Добавляем стили в head
const styleSheet = document.createElement('style');
styleSheet.textContent = focusStyles;
document.head.appendChild(styleSheet);