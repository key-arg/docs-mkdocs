# User & Session

**Definition:** Users are unique individuals who visit your website, while sessions represent individual periods of user activity and interaction with your site.

## Understanding Users

### What is a User?
A user represents a unique visitor to your website, identified through various methods and tracked across multiple sessions over time.

### User Types:
- **New Users** - First-time visitors to your website
- **Returning Users** - Previously identified visitors coming back
- **Active Users** - Users who had at least one session in a specified time period

### User Identification Methods:

#### Traditional Methods:
- **Cookies** - Browser-stored identifiers
- **Client ID** - Randomly generated unique identifier
- **IP Address + User Agent** - Combination for basic identification

#### Modern Approaches:
- **User ID** - Custom identifier for logged-in users
- **Google Signals** - Cross-device identification (with consent)
- **First-party data** - Email addresses, account IDs
- **Fingerprinting** - Device and browser characteristics

```javascript
// Setting custom User ID in GA4
gtag('config', 'GA_MEASUREMENT_ID', {
  'user_id': 'USER_12345'
});
```

## Understanding Sessions

### What is a Session?
A session is a group of user interactions that take place on your website within a given time frame.

### Session Triggers:
- **First page load** - Session begins
- **30-minute timeout** - Session ends after inactivity
- **Midnight boundary** - New session starts at midnight
- **Campaign change** - UTM parameter changes trigger new session

### Session Duration Calculation:
```
Session Duration = Last Interaction Time - First Interaction Time
```

**Important Note:** Single-page sessions show 0 duration because there's no "last interaction" timestamp.

## Cross-Device Challenges

### The Problem:
- **Multiple devices** - Same user on phone, tablet, laptop
- **Different browsers** - Chrome on mobile, Safari on desktop
- **Cookie limitations** - Third-party cookie restrictions
- **Privacy measures** - ITP, browser blocking, ad blockers

### Solutions:

#### User ID Implementation:
```javascript
// When user logs in
gtag('config', 'GA_MEASUREMENT_ID', {
  'user_id': user.email_hash,
  'custom_map': {
    'dimension1': 'membership_level'
  }
});
```

#### Cross-Domain Tracking:
```javascript
// Link multiple domains
gtag('config', 'GA_MEASUREMENT_ID', {
  'linker': {
    'domains': ['example.com', 'shop.example.com']
  }
});
```

#### Enhanced Conversions:
```javascript
// First-party data for better attribution
gtag('event', 'conversion', {
  'enhanced_conversion_data': {
    'email': user.email,
    'phone_number': user.phone
  }
});
```

## Practical Examples

### E-commerce Scenario:
```
User Journey:
Day 1: Mobile → Browse products → Add to cart → Leave
Day 3: Desktop → Return → Complete purchase

Analytics View:
- 1 User
- 2 Sessions  
- 1 Conversion (attributed to last session)
```

### Content Site Scenario:
```
User Journey:
Morning: Read Article A → Share on social → Leave
Afternoon: Click social link → Read Article B → Subscribe

Analytics View:
- 1 User
- 2 Sessions
- 1 Goal Conversion (newsletter signup)
```

## Key Metrics and Analysis

### User Metrics:
- **Total Users** - Unique visitors in time period
- **New vs Returning** - User acquisition vs retention
- **User Lifetime Value** - Revenue per user over time
- **User Retention** - Percentage returning after first visit

### Session Metrics:
- **Total Sessions** - All session count
- **Sessions per User** - Average visits per unique user
- **Average Session Duration** - Mean time spent per session
- **Pages per Session** - Content consumption depth

### Analysis Examples:

#### User Acquisition Analysis:
```
New Users: 2,500 (70%)
Returning Users: 1,071 (30%)
Sessions per User: 1.8
```

**Insight:** High new user acquisition but low return rate suggests need for retention optimization.

#### Session Quality Analysis:
```
Average Session Duration: 3:24
Pages per Session: 2.8
Bounce Rate: 42%
```

**Insight:** Good engagement depth but room for improvement in initial page experience.

## Technical Implementation

### Basic Setup:
```javascript
// Initialize GA4 tracking
gtag('config', 'GA_MEASUREMENT_ID', {
  'send_page_view': true,
  'cookie_expires': 63072000, // 2 years
  'cookie_update': true
});
```

### Enhanced User Tracking:
```javascript
// Custom user properties
gtag('config', 'GA_MEASUREMENT_ID', {
  'custom_map': {
    'dimension1': 'user_type',
    'dimension2': 'signup_method',
    'dimension3': 'subscription_status'
  }
});

// Set user properties
gtag('event', 'user_engagement', {
  'user_type': 'premium',
  'signup_method': 'social',
  'subscription_status': 'active'
});
```

### Session Control:
```javascript
// Manual session control (rare use case)
gtag('config', 'GA_MEASUREMENT_ID', {
  'session_timeout': 1800 // 30 minutes in seconds
});
```

## Privacy and Compliance

### Cookie-less Tracking:
- **Server-side tracking** - Process events on your server
- **First-party data** - Use logged-in user identifiers
- **Consent-based tracking** - Respect user preferences
- **Aggregated reporting** - Focus on trends vs individuals

### GDPR Compliance:
```javascript
// Conditional tracking based on consent
function initializeAnalytics(consent) {
  if (consent.analytics) {
    gtag('config', 'GA_MEASUREMENT_ID', {
      'anonymize_ip': true,
      'allow_google_signals': consent.advertising
    });
  }
}
```

## Best Practices

!!! tip "Optimization Strategies"
**👤 User Experience**
- Optimize for returning users with personalization
- Track user journey across multiple sessions
- Identify and fix drop-off points in user flow

    **📊 Session Quality**
    - Improve content to increase session duration
    - Add internal links to boost pages per session
    - Optimize page load speed to reduce bounce rate
    
    **🔄 Cross-Device Strategy**
    - Implement User ID for logged-in users
    - Use enhanced conversions for better attribution
    - Focus on first-party data collection

## Common Challenges

!!! warning "Technical Considerations"
**🍪 Cookie Limitations**
- Third-party cookie deprecation
- Browser privacy features (ITP, ETP)
- Ad blocker interference

    **📱 Cross-Device Tracking**
    - Multiple device usage patterns
    - App-to-web user journeys
    - Incomplete user identification
    
    **⚖️ Privacy Regulations**
    - GDPR and CCPA compliance requirements
    - Consent management complexity
    - Data retention and deletion policies

---

**Related:** [Analytics](analytics.md) • [Event & Event Parameter](event-parameter.md) • [Pageview & Screenview](pageview-screenview.md)