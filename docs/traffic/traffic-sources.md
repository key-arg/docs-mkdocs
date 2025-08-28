# Traffic Sources

## Overview
Traffic sources are the origin points from which visitors arrive at your website. Understanding traffic sources helps you identify which marketing channels drive the most valuable traffic and optimize your marketing spend accordingly.

## Types of Traffic Sources

### Visual Overview

```mermaid
graph TD
    A[Website Traffic] --> B[Direct]
    A --> C[Organic Search]
    A --> D[Paid Search]
    A --> E[Social Media]
    A --> F[Referral]
    A --> G[Email]
    
    B --> B1[Bookmarks]
    B --> B2[Typed URL]
    
    C --> C1[Google]
    C --> C2[Bing]
    C --> C3[Other Search Engines]
    
    D --> D1[Google Ads]
    D --> D2[Bing Ads]
    D --> D3[Shopping Ads]
    
    E --> E1[Facebook]
    E --> E2[Twitter/X]
    E --> E3[LinkedIn]
    E --> E4[Instagram]
    
    F --> F1[Partner Sites]
    F --> F2[Blogs]
    F --> F3[News Sites]
    
    G --> G1[Newsletters]
    G --> G2[Promotional]
    G --> G3[Transactional]
```

## Traffic Source Distribution Example

```mermaid
pie title Traffic Source Distribution
    "Organic Search" : 40
    "Direct" : 25
    "Paid Search" : 15
    "Social Media" : 10
    "Referral" : 7
    "Email" : 3
```

## Traffic Flow Analysis

```plantuml
@startuml
!theme plain

actor User
participant "Search Engine" as SE
participant "Social Media" as SM
participant "Email Campaign" as EC
participant "Your Website" as WS
database "Analytics" as AN

User -> SE: Search Query
SE -> WS: Organic Traffic
WS -> AN: Log Visit (source=organic)

User -> SM: Click Ad/Post
SM -> WS: Social Traffic  
WS -> AN: Log Visit (source=social)

User -> EC: Open Email
EC -> User: Click Link
User -> WS: Email Traffic
WS -> AN: Log Visit (source=email)

note over AN: Track conversions\nby traffic source
@enduml
```

## Customer Journey Map

```mermaid
journey
    title Customer Journey by Traffic Source
    section Awareness
      Search Engine: 5: User
      Social Media Ad: 4: User
      Blog Reference: 3: User
    section Consideration
      Website Visit: 5: User
      Content Reading: 4: User
      Product Browse: 4: User
    section Decision
      Add to Cart: 3: User
      Checkout: 2: User
      Purchase: 5: User
    section Retention
      Email Follow-up: 4: User
      Return Visit: 5: User
```

## Traffic Source Performance Matrix

```mermaid
quadrantChart
    title Traffic Source Performance Matrix
    x-axis Low Traffic Volume --> High Traffic Volume
    y-axis Low Conversion Rate --> High Conversion Rate
    quadrant-1 High Volume, High Conversion
    quadrant-2 Low Volume, High Conversion  
    quadrant-3 Low Volume, Low Conversion
    quadrant-4 High Volume, Low Conversion
    Organic Search: [0.7, 0.8]
    Paid Search: [0.5, 0.7]
    Direct: [0.6, 0.9]
    Social Media: [0.4, 0.3]
    Email: [0.3, 0.85]
    Referral: [0.35, 0.6]
```

## Attribution Model Comparison

```graphviz
digraph G {
    rankdir=LR;
    node [shape=box, style="rounded,filled", fillcolor=lightblue];
    
    subgraph cluster_0 {
        label="First Touch Attribution";
        style=filled;
        color=lightgrey;
        "Facebook Ad" -> "100% Credit" [label="First Touch"];
    }
    
    subgraph cluster_1 {
        label="Last Touch Attribution";
        style=filled;
        color=lightgrey;
        "Email Campaign" -> "100% Credit " [label="Last Touch"];
    }
    
    subgraph cluster_2 {
        label="Linear Attribution";
        style=filled;
        color=lightgrey;
        "Facebook Ad " -> "33.3%" [label="Equal"];
        "Organic Search" -> "33.3%" [label="Equal"];
        "Email Campaign " -> "33.3%" [label="Equal"];
    }
}
```

## Key Metrics by Source

| Traffic Source | Avg. Session Duration | Bounce Rate | Conversion Rate |
|---------------|----------------------|-------------|-----------------|
| Direct | 3:45 | 35% | 4.2% |
| Organic Search | 2:30 | 45% | 3.8% |
| Paid Search | 2:15 | 50% | 3.5% |
| Social Media | 1:45 | 60% | 2.1% |
| Email | 4:20 | 25% | 5.6% |
| Referral | 2:50 | 40% | 3.2% |

## Best Practices

1. **Diversify Traffic Sources**: Don't rely on a single channel
2. **Track UTM Parameters**: Use consistent tagging for campaigns
3. **Monitor Quality Metrics**: Focus on engagement, not just volume
4. **Optimize by Source**: Tailor landing pages for different sources
5. **Regular Analysis**: Review source performance weekly

## Related Topics
- [UTM Parameters](utm-parameter.md)
- [Channel Grouping](channel.md)
- [Source/Medium](source-medium.md)
- [Campaign Tracking](campaign.md)