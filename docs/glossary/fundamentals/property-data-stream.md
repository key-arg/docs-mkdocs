# Property & Data Stream

**Definition:** Properties are organizational containers for collecting analytics data, while data streams are the specific sources (websites, apps) that send data to those properties.

## Understanding Properties

### What is a Property?
A property in analytics platforms like Google Analytics represents a digital asset (website, mobile app, or combination) that you want to track and analyze.

### Property Characteristics:
- **Unique identifier** - Each property has a distinct tracking ID
- **Data container** - Stores all analytics data for that asset
- **Configuration hub** - Settings, goals, and audiences defined at property level
- **Reporting scope** - All reports are generated from property data

### Property Types:
- **GA4 Property** - Modern event-based analytics (recommended)
- **Universal Analytics Property** - Legacy pageview-based (deprecated July 2023)
- **Firebase Project** - Mobile app analytics with GA4 integration

## Understanding Data Streams

### What is a Data Stream?
A data stream is a specific source of data flowing into an analytics property, representing individual platforms or implementations.

### Stream Types:

#### **Web Stream**
- Websites and web applications
- Single-page applications (SPAs)
- Progressive web apps (PWAs)

#### **iOS App Stream**
- Native iOS applications
- iOS games and utilities
- App Store distributed apps

#### **Android App Stream**
- Native Android applications
- Google Play Store apps
- Alternative Android app stores

## Hierarchy and Organization

### Account → Property → Data Stream Structure:
```
Analytics Account
├── Property 1: E-commerce Website
│   ├── Web Stream: www.shop.com
│   ├── iOS Stream: Shopping App iOS
│   └── Android Stream: Shopping App Android
│
└── Property 2: Corporate Website  
    └── Web Stream: www.company.com
```

### Multi-Property Strategies:

#### **Brand-Based Organization:**
```
Account: Global Company
├── Property: North America Brand
├── Property: European Brand  
└── Property: Asian Brand
```

#### **Platform-Based Organization:**
```
Account: Tech Startup
├── Property: Web Platform
├── Property: Mobile Apps
└── Property: Marketing Sites
```

## Setup Guides

### Creating a GA4 Property:
1. **Navigate to Admin** → Create Property
2. **Property Details:**
    - Property name: "My Website"
    - Reporting time zone: Your local timezone
    - Currency: Your business currency
3. **Business Information:**
    - Industry category
    - Business size
    - Usage intentions

### Adding Web Data Stream:
```javascript
// Installation code provided by GA4
gtag('config', 'G-XXXXXXXXXX', {
  // Optional configuration
  'custom_map': {
    'dimension1': 'user_type'
  }
});
```

### Adding Mobile App Stream:
```swift
// iOS implementation
import FirebaseCore
import FirebaseAnalytics

// Configure Firebase
FirebaseApp.configure()

// Track screen views
Analytics.logEvent(AnalyticsEventScreenView, parameters: [
  AnalyticsParameterScreenName: "Home Screen"
])
```

### Cross-Platform Implementation:
```javascript
// Web tracking
gtag('config', 'G-XXXXXXXXXX');

// Connect with app data using User ID
gtag('config', 'G-XXXXXXXXXX', {
  'user_id': 'USER_12345'
});
```

## Multi-Property Strategies

### When to Use Multiple Properties:

#### ✅ **Separate Properties For:**
- **Different brands** - Distinct business entities
- **Different regions** - Regulatory or business requirements
- **Different business units** - Separate reporting needs
- **Staging vs production** - Development environment separation

#### ❌ **Single Property For:**
- **Multiple subdomains** - blog.site.com, shop.site.com
- **Different sections** - Same website different areas
- **Multiple languages** - Same content, different translations
- **Development phases** - Beta, alpha versions of same product

### Multi-Property Benefits:
- **Isolated data** - Separate reporting and analysis
- **Different access levels** - Team-specific permissions
- **Separate configurations** - Different goals, audiences, settings
- **Compliance requirements** - Region-specific data handling

### Multi-Property Challenges:
- **Data fragmentation** - Harder to get unified view
- **Increased complexity** - More properties to manage
- **Limited cross-property insights** - No native cross-property reporting
- **Additional setup overhead** - Multiple implementations required

## Advanced Configuration

### Enhanced Measurement (Automatic Events):
```javascript
// Configure enhanced measurement per stream
gtag('config', 'G-XXXXXXXXXX', {
  'enhanced_measurement': {
    'scrolls': true,
    'outbound_clicks': true,
    'site_search': true,
    'video_engagement': true,
    'file_downloads': true
  }
});
```

### Custom Configuration per Stream:
```javascript
// Different settings for different streams
if (platform === 'mobile_web') {
  gtag('config', 'G-XXXXXXXXXX', {
    'cookie_expires': 86400, // 1 day for mobile
    'send_page_view': true
  });
} else {
  gtag('config', 'G-XXXXXXXXXX', {
    'cookie_expires': 63072000, // 2 years for desktop
    'send_page_view': true
  });
}
```

### Data Retention Settings:
- **User data retention:** 2 months (default) or 14 months
- **Event data retention:** 2 months (free) or 14 months (paid)
- **Conversion data:** Different retention rules
- **Raw data export:** BigQuery integration for longer retention

## Cross-Platform User Journey

### User ID Implementation:
```javascript
// Web implementation
gtag('config', 'G-XXXXXXXXXX', {
  'user_id': user.id,
  'custom_map': {
    'dimension1': 'platform'
  }
});

// Set platform dimension
gtag('event', 'page_view', {
  'platform': 'web'
});
```

```swift
// iOS implementation
Analytics.setUserID(userID)
Analytics.setUserProperty("ios", forName: "platform")
```

### Enhanced Conversions:
```javascript
// Link web and app conversions
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 99.99,
  'currency': 'USD',
  'enhanced_conversion_data': {
    'email': user.email,
    'phone_number': user.phone
  }
});
```

## Best Practices

!!! tip "Property Organization"
**🏗️ Structure Planning**
- Plan property structure before implementation
- Consider future growth and expansion needs
- Document property purposes and ownership

    **📊 Data Strategy**
    - Align properties with business reporting needs
    - Ensure consistent measurement across streams
    - Plan for cross-platform user identification
    
    **🔧 Technical Implementation**
    - Test all data streams thoroughly
    - Implement consistent naming conventions
    - Set up proper data retention policies

### Naming Conventions:
```
Properties:
- "Brand Name - Production"
- "Brand Name - Staging"
- "Brand Name - Mobile Apps"

Data Streams:
- "Website - www.example.com"
- "iOS App - v2.1"
- "Android App - v2.1"
```

## Common Configurations

### E-commerce Setup:
```javascript
// Enhanced e-commerce across all streams
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 99.99,
  'currency': 'USD',
  'items': [{
    'item_id': 'SKU123',
    'item_name': 'Product Name',
    'category': 'Electronics',
    'quantity': 1,
    'price': 99.99
  }]
});
```

### Lead Generation Setup:
```javascript
// Lead tracking configuration
gtag('event', 'generate_lead', {
  'currency': 'USD',
  'value': 50.00,
  'lead_source': 'contact_form'
});
```

### Content Site Setup:
```javascript
// Content engagement tracking
gtag('event', 'engagement', {
  'engagement_time_msec': 30000,
  'content_group1': 'Blog',
  'content_group2': 'Analytics Guides'
});
```

---

**Related:** [Analytics](analytics.md) • [User & Session](user-session.md) • [Event & Event Parameter](event-parameter.md)