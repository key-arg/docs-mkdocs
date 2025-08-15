# Event & Event Parameter

**Definition:** Events are specific user interactions tracked on websites or apps, while event parameters are additional attributes that provide detailed context about those interactions.

## Understanding Events

### What are Events?
Events represent measurable user actions that occur on your website or application. They capture specific moments of user engagement beyond basic pageviews.

### Event Structure:
- **Event Name** - The action being tracked (e.g., "purchase", "video_play", "form_submit")
- **Event Parameters** - Additional details about the event (e.g., product_id, video_title, form_name)

## Common Event Types

### Engagement Events:
- **page_view** - Page or screen viewed
- **scroll** - User scrolled 90% of page
- **file_download** - File downloaded
- **video_play** - Video started playing
- **search** - Site search performed

### Conversion Events:
- **purchase** - E-commerce transaction completed
- **sign_up** - User registration
- **lead** - Lead form submission
- **subscribe** - Newsletter subscription
- **add_to_cart** - Product added to shopping cart

### Custom Business Events:
- **contact_form_submit** - Contact form completed
- **product_demo_request** - Demo request submitted
- **free_trial_start** - Trial period initiated
- **support_ticket_create** - Help request submitted

## Event Parameters Explained

### Purpose of Parameters:
- **Context** - Provide additional details about the event
- **Segmentation** - Enable detailed analysis and filtering
- **Attribution** - Track source and campaign information
- **Value** - Assign monetary or engagement value

### Standard E-commerce Parameters:
```javascript
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 25.42,
  'currency': 'USD',
  'items': [{
    'item_id': 'SKU123',
    'item_name': 'Analytics Book',
    'category': 'Books',
    'quantity': 1,
    'price': 25.42
  }]
});
```

### Custom Event Parameters:
```javascript
gtag('event', 'video_play', {
  'video_title': 'Analytics Tutorial Part 1',
  'video_duration': 300,
  'video_position': 'homepage_hero',
  'user_type': 'premium_member'
});
```

## Tracking Methods

### Google Analytics 4 Implementation:

#### Basic Event Tracking:
```javascript
// Simple event
gtag('event', 'sign_up', {
  'method': 'Google'
});

// Event with custom parameters
gtag('event', 'search', {
  'search_term': 'web analytics guide',
  'search_results': 23
});
```

#### Enhanced E-commerce Events:
```javascript
// Add to cart
gtag('event', 'add_to_cart', {
  'currency': 'USD',
  'value': 15.25,
  'items': [{
    'item_id': 'ABC123',
    'item_name': 'Analytics Course',
    'category': 'Education',
    'quantity': 1,
    'price': 15.25
  }]
});
```

### Alternative Tracking Methods:

#### Data Layer (Google Tag Manager):
```javascript
dataLayer.push({
  'event': 'custom_signup',
  'user_type': 'premium',
  'signup_method': 'email',
  'campaign_source': 'newsletter'
});
```

#### Server-Side Tracking:
```python
# Python example using GA4 Measurement Protocol
event_data = {
    'client_id': user_id,
    'events': [{
        'name': 'purchase',
        'parameters': {
            'transaction_id': 'T12345',
            'value': 99.99,
            'currency': 'USD'
        }
    }]
}
```

## Privacy Considerations

### Data Collection Guidelines:
- **Consent Management** - Respect user privacy preferences
- **Data Minimization** - Collect only necessary information
- **Anonymization** - Avoid personally identifiable information
- **Retention Policies** - Set appropriate data retention periods

### GDPR and CCPA Compliance:
```javascript
// Conditional tracking based on consent
if (userConsent.analytics) {
  gtag('event', 'page_view', {
    'page_title': document.title,
    'page_location': window.location.href
  });
}
```

### Privacy-First Approaches:
- **First-party data focus** - Rely on owned data sources
- **Cookie-less tracking** - Use server-side and consent-based methods
- **Data aggregation** - Focus on trends rather than individual behavior
- **Transparent communication** - Clear privacy policies and opt-out options

## Best Practices

!!! tip "Event Tracking Excellence"
**📊 Strategic Planning**
- Map events to business objectives
- Create event taxonomy and naming conventions
- Document all custom events and parameters

    **🎯 Implementation Quality**
    - Test events thoroughly before deployment
    - Use consistent parameter naming
    - Validate data accuracy regularly
    
    **📈 Analysis Optimization**
    - Create meaningful event segments
    - Set up custom reports for key events
    - Monitor event performance trends

### Event Naming Conventions:
- **Use lowercase** - "sign_up" not "Sign_Up"
- **Use underscores** - "add_to_cart" not "add-to-cart"
- **Be descriptive** - "newsletter_signup" not "signup"
- **Stay consistent** - Follow established patterns

### Parameter Guidelines:
- **Meaningful names** - "product_category" not "cat"
- **Consistent types** - String, number, boolean
- **Reasonable limits** - Max 25 parameters per event
- **Value consistency** - Standardize parameter values

## Common Use Cases

### Content Performance:
```javascript
gtag('event', 'article_read', {
  'article_title': 'Web Analytics Guide',
  'article_category': 'Tutorial',
  'reading_time': 480,
  'scroll_depth': 100
});
```

### Lead Generation:
```javascript
gtag('event', 'generate_lead', {
  'form_name': 'contact_form',
  'lead_source': 'blog_post',
  'lead_value': 50,
  'user_segment': 'enterprise'
});
```

### User Engagement:
```javascript
gtag('event', 'engagement', {
  'engagement_time_msec': 30000,
  'session_duration': 180,
  'pages_viewed': 3
});
```

---

**Related:** [User & Session](user-session.md) • [Metric vs Dimension](metric-vs-dimension.md) • [Real-Time Analytics](real-time-analytics.md)