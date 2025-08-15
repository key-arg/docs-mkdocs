# Pageview & Screenview

**Definition:** Pageviews track when web pages are loaded in browsers, while screenviews track when app screens are displayed, representing the fundamental content consumption metrics for digital platforms.

## Understanding Pageviews

### What is a Pageview?
A pageview is recorded each time a page is loaded or reloaded in a browser. It's the most basic metric for measuring website content consumption.

### Pageview Triggers:
- **Initial page load** - User visits page directly
- **Page refresh** - User reloads current page (F5, browser refresh)
- **Back/forward navigation** - Browser history navigation
- **Internal link clicks** - Navigation within the same site

### Types of Pageviews:
- **Total Pageviews** - All page loads including repeats
- **Unique Pageviews** - Page viewed at least once per session
- **Entrance Pageviews** - First page viewed in a session
- **Exit Pageviews** - Last page viewed before leaving

## Understanding Screenviews

### What is a Screenview?
A screenview is recorded when a screen or view is displayed in a mobile app or single-page application (SPA).

### Screenview Triggers:
- **Screen transitions** - User navigates to different app screens
- **Tab switches** - User changes tabs within an app
- **Modal displays** - Popup or overlay screens appear
- **View state changes** - Dynamic content updates in SPAs

### Implementation Example:
```javascript
// Manual screenview tracking in SPA
gtag('event', 'page_view', {
  'page_title': 'User Dashboard',
  'page_location': '/app/dashboard',
  'page_path': '/app/dashboard'
});
```

## Key Differences

### Web vs Mobile Tracking:

| Aspect | Pageviews (Web) | Screenviews (Mobile) |
|--------|-----------------|---------------------|
| **Trigger** | Page load/reload | Screen display |
| **URL Changes** | Automatic tracking | Manual implementation |
| **Session Context** | Browser-based | App-based |
| **Navigation** | URL-driven | Programmatic |
| **Offline Capability** | Limited | Full support |

## Mobile vs Desktop Differences

### Desktop Behavior:
- **Multiple tabs** - Users often have many tabs open
- **Longer sessions** - Extended browsing periods
- **Complex navigation** - Multiple windows and bookmarks
- **Right-click context** - Advanced navigation options

### Mobile Behavior:
- **Single focus** - One app/page at a time
- **Touch interactions** - Swipe, tap, pinch gestures
- **App switching** - Frequent context changes
- **Portrait/landscape** - Orientation changes

### Tracking Implications:
```javascript
// Mobile-specific considerations
gtag('config', 'GA_MEASUREMENT_ID', {
  'allow_google_signals': true,
  'app_name': 'MyApp',
  'app_version': '1.2.3'
});

// Enhanced mobile tracking
gtag('event', 'screen_view', {
  'screen_name': 'Product Detail',
  'app_name': 'Shopping App',
  'screen_class': 'ProductViewController'
});
```

## Metrics Derived from Pageviews/Screenviews

### Traffic Metrics:
- **Total Views** - Overall content consumption
- **Views per Session** - Content depth indicator
- **Unique Views** - Reach measurement
- **View Duration** - Time spent on content

### Content Performance:
- **Top Pages/Screens** - Most popular content
- **Entry Points** - Where users start their journey
- **Exit Points** - Where users end their session
- **Flow Analysis** - Navigation patterns between pages

### User Behavior:
- **Bounce Rate** - Single page/screen sessions
- **Page/Screen Value** - Conversion contribution
- **Load Time Impact** - Performance effect on engagement
- **Device-specific Performance** - Platform comparison

## Implementation Best Practices

### Web Implementation:
```javascript
// Automatic pageview tracking (default)
gtag('config', 'GA_MEASUREMENT_ID');

// Manual pageview for SPAs
function trackPageview(page_path, page_title) {
  gtag('event', 'page_view', {
    'page_path': page_path,
    'page_title': page_title,
    'page_location': window.location.origin + page_path
  });
}

// Enhanced pageview with custom parameters
gtag('event', 'page_view', {
  'page_title': document.title,
  'page_location': window.location.href,
  'content_group1': 'Blog Posts',
  'content_group2': 'Analytics'
});
```

### Mobile App Implementation:
```swift
// iOS implementation
Analytics.logEvent("screen_view", parameters: [
  "screen_name": "ProductDetail",
  "screen_class": "ProductViewController",
  "product_id": productId
])
```

```java
// Android implementation
Bundle bundle = new Bundle();
bundle.putString("screen_name", "ProductDetail");
bundle.putString("screen_class", "ProductActivity");
mFirebaseAnalytics.logEvent("screen_view", bundle);
```

## Single Page Applications (SPAs)

### Challenge:
SPAs don't trigger automatic pageviews on navigation because the URL changes without full page reloads.

### Solution:
```javascript
// React Router example
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageViews() {
  const location = useLocation();
  
  useEffect(() => {
    gtag('event', 'page_view', {
      'page_path': location.pathname,
      'page_title': document.title
    });
  }, [location]);
}
```

### Vue.js Implementation:
```javascript
// Vue Router tracking
router.afterEach((to, from) => {
  gtag('event', 'page_view', {
    'page_path': to.path,
    'page_title': to.meta.title || document.title
  });
});
```

## Advanced Tracking Scenarios

### Virtual Pageviews:
```javascript
// Track modal windows or AJAX content
function trackVirtualPageview(virtualPath, title) {
  gtag('event', 'page_view', {
    'page_path': virtualPath,
    'page_title': title,
    'page_location': window.location.href + virtualPath
  });
}

// Usage
trackVirtualPageview('/modal/signup', 'Signup Modal');
```

### Enhanced E-commerce:
```javascript
// Track product page views with enhanced data
gtag('event', 'view_item', {
  'currency': 'USD',
  'value': 15.25,
  'items': [{
    'item_id': 'SKU123',
    'item_name': 'Analytics Guide',
    'category': 'Books',
    'price': 15.25
  }]
});
```

## Performance Considerations

### Page Load Impact:
- **Core Web Vitals** - LCP, FID, CLS affect user experience
- **Time to Interactive** - When page becomes fully functional
- **First Contentful Paint** - When first content appears
- **Speed Index** - How quickly content is visually displayed

### Optimization Strategies:
```javascript
// Monitor page performance
gtag('event', 'timing_complete', {
  'name': 'page_load',
  'value': performance.now()
});

// Track loading states
gtag('event', 'page_view', {
  'page_title': document.title,
  'load_time': performance.timing.loadEventEnd - performance.timing.navigationStart
});
```

## Common Issues and Solutions

!!! warning "Tracking Challenges"
**🔄 SPA Navigation**
- Implement manual pageview tracking
- Use router hooks for automatic tracking
- Ensure virtual pageviews for dynamic content

    **📱 App State Management**
    - Track screen backgrounds/foregrounds
    - Handle app suspension/resume events
    - Consider offline/online state changes
    
    **⚡ Performance Impact**
    - Minimize tracking code overhead
    - Use asynchronous tracking methods
    - Implement error handling for failed requests

---

**Related:** [User & Session](user-session.md) • [Event & Event Parameter](event-parameter.md) • [Real-Time Analytics](real-time-analytics.md)