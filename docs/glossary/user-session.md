# Event & Event Parameter

Events and event parameters represent **specific user interactions and their contextual details** in web analytics. While pageviews track when pages load, events capture what users actually do on those pages - providing deeper insights into engagement patterns.

## Understanding Events

An event is any discrete user action that you want to measure separately from pageviews. Common events include button clicks, video plays, form submissions, file downloads, and scroll depth. These interactions reveal **actual user engagement beyond simple page visits**.

Events consist of two components:

- **Event name**: Identifies the action (e.g., "purchase", "video_play", "download")
- **Event parameters**: Provide context about the action

!!! info "Example: E-commerce Purchase Event"
    Event name: `purchase`
    
    Parameters:

    - `transaction_id`: ORDER123456
    - `value`: 99.99
    - `currency`: USD
    - `items`: 3 products purchased
    - `payment_method`: credit_card

## Event Parameters Explained

Parameters transform generic events into actionable data by adding specific details. They answer questions like: What was clicked? How much was spent? Which product was viewed? This granular information enables precise analysis and segmentation.

Common parameter types include:

- **Monetary values**: Purchase amounts, discount values
- **Identifiers**: Product IDs, user segments, content categories  
- **Descriptive text**: Button labels, search terms, error messages
- **Numeric metrics**: Percentages, counts, durations

!!! tip "Best Practice: Consistent Naming"
    Use lowercase with underscores for parameter names (e.g., `product_category` not `ProductCategory`). Maintain consistent naming across all events to simplify analysis and reporting.

## Privacy Considerations

Event tracking must balance analytical insights with user privacy. Never include personally identifiable information (PII) directly in event parameters. Instead of tracking email addresses, use hashed user IDs. Replace actual names with user segments or categories.

!!! warning "Privacy Checklist"
    Before implementing events, ensure:

    - No PII in parameter values
    - Consent obtained for tracking
    - Data retention policies defined
    - User opt-out mechanisms available

## Common Implementation Challenges

Many platforms like GA4 limit event parameters to 25 per event and restrict custom event names to 500 per property. These limitations often force compromises in tracking granularity. Additionally, inconsistent parameter naming across teams creates data fragmentation.

Our analytics platform removes these artificial restrictions, allowing unlimited parameters and events while maintaining performance. We also provide built-in parameter validation and naming conventions to ensure data consistency across your organization.

!!! info "Example: Content Engagement Tracking"
    Track article reading with meaningful parameters:
    
    Event: `article_read`

    - `article_category`: technology
    - `read_percentage`: 75
    - `time_spent`: 240 seconds
    - `author`: content_team
    - `publication_date`: 2024-01-15

Events with rich parameters enable powerful analysis - from understanding content performance to optimizing user journeys. The key is planning your event taxonomy thoughtfully before implementation.