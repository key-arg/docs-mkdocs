# Pageview & Screenview

Pageviews and screenviews are fundamental metrics for tracking user navigation in websites and mobile applications respectively. While they serve similar purposes, understanding their differences is crucial for **accurate cross-platform analytics and user behavior analysis**.

## Understanding Pageviews

A pageview occurs when a user loads or reloads a web page in their browser. This metric has been the cornerstone of web analytics since the early days of the internet. Each pageview represents a distinct HTTP request to your server, capturing the user's journey through your website.

Pageviews track:

- Full page loads and refreshes
- Browser back/forward navigation
- Direct URL entries
- Link clicks leading to new pages

!!! info "Example: E-commerce Website Navigation"
    A user's shopping journey generates multiple pageviews:

    - Homepage load: 1 pageview
    - Category page: 1 pageview
    - Product detail page: 1 pageview
    - Cart page: 1 pageview
    - Checkout: 1 pageview
    
    Total session: 5 pageviews

## Understanding Screenviews

Screenviews are the mobile app equivalent of pageviews, tracking when users navigate between different screens or views within an application. Unlike web pages that require server requests, app screens often load instantly from local resources, making tracking more complex.

Screenviews capture:

- Screen transitions within the app
- Tab switches in multi-tab interfaces
- Modal or popup displays
- View changes in single-page app architectures

!!! tip "Best Practice: Consistent Naming"
    Use descriptive, consistent screen names across iOS and Android versions:

    - Instead of: MainActivity, ViewController2
    - Use: Home_Screen, Product_Details, Shopping_Cart
    - This ensures unified reporting across platforms

## Key Differences

The fundamental difference lies in their technical implementation and user experience. Pageviews involve complete document loads with URL changes, while screenviews track state changes within a persistent application environment. This creates unique challenges for measurement consistency.

!!! warning "Common Tracking Issues"
    Single Page Applications (SPAs) blur the line between pageviews and screenviews:

    - Traditional website: Each navigation = new pageview
    - SPA website: Navigation may not trigger pageviews
    - Mobile app: Each screen change = screenview
    - Result: Inconsistent metrics across platforms

## Unified Tracking Challenges

Many analytics platforms struggle with unified web and app tracking. GA4 attempts to merge these concepts into a single "page_view" event, but this oversimplification often loses important context about the user's environment and interaction patterns.

Our analytics platform maintains distinct pageview and screenview metrics while providing unified reporting dashboards. This preserves the granularity needed for platform-specific optimization while enabling holistic cross-platform analysis.

!!! info "Example: Cross-Platform User Journey"
    Track a user across devices with proper attribution:

    - Mobile app: 3 screenviews (browse products)
    - Mobile web: 2 pageviews (read reviews)
    - Desktop web: 4 pageviews (complete purchase)
    
    Total engagement: 9 interactions across 3 platforms
    Conversion path: App discovery → Web research → Desktop purchase

Understanding these distinctions ensures accurate measurement and better optimization decisions for each platform. Pageviews are a specialized type of [pageview metric](pageviews.md) that works alongside screenviews to provide comprehensive tracking.