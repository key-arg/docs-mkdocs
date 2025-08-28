# UTM Parameters

## Overview
UTM parameters are tags added to URLs to track the effectiveness of marketing campaigns across traffic sources. They help identify which campaigns, mediums, and sources drive the most traffic and conversions.

## UTM Parameter Structure

```mermaid
graph LR
    A[Base URL] --> B[?]
    B --> C[utm_source]
    C --> D[&]
    D --> E[utm_medium]
    E --> F[&]
    F --> G[utm_campaign]
    G --> H[&]
    H --> I[utm_term]
    I --> J[&]
    J --> K[utm_content]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
    style G fill:#bbf,stroke:#333,stroke-width:2px
    style I fill:#fbb,stroke:#333,stroke-width:2px
    style K fill:#fbb,stroke:#333,stroke-width:2px
```

## UTM Parameter Flow

```plantuml
@startuml
!theme plain

participant "Marketing Team" as MT
participant "URL Builder" as UB
participant "Campaign URL" as CU
participant "User" as U
participant "Website" as W
participant "Analytics" as A

MT -> UB: Create campaign URL
note right of UB
  Base: example.com/product
  Source: facebook
  Medium: social
  Campaign: summer_sale
  Content: banner_v1
end note

UB -> CU: Generate tagged URL
note over CU: example.com/product?\nutm_source=facebook&\nutm_medium=social&\nutm_campaign=summer_sale&\nutm_content=banner_v1

CU -> U: Share on Facebook
U -> W: Click link with UTM
W -> A: Track visit with parameters

A -> A: Parse UTM parameters
A -> A: Attribute to campaign
A -> MT: Campaign performance report

@enduml
```

## UTM Parameter Types

```mermaid
mindmap
  root((UTM Parameters))
    Required
      utm_source
        Google
        Facebook
        Newsletter
        Partner_site
      utm_medium
        cpc
        social
        email
        referral
        organic
      utm_campaign
        summer_sale_2024
        black_friday
        product_launch
    Optional
      utm_term
        running_shoes
        best_laptops
        keyword_phrase
      utm_content
        banner_v1
        text_link
        logo
        cta_button
```

## Campaign Performance Dashboard

```mermaid
graph TB
    subgraph "Source Performance"
        S1[Google: 45%]
        S2[Facebook: 30%]
        S3[Email: 15%]
        S4[LinkedIn: 10%]
    end
    
    subgraph "Medium Performance"
        M1[CPC: 40%]
        M2[Social: 25%]
        M3[Email: 20%]
        M4[Organic: 15%]
    end
    
    subgraph "Campaign ROI"
        C1[Summer Sale: $45K]
        C2[Black Friday: $120K]
        C3[Product Launch: $67K]
        C4[Brand Awareness: $23K]
    end
    
    S1 --> M1
    S2 --> M2
    S3 --> M3
    S4 --> M2
    
    M1 --> C1
    M1 --> C2
    M2 --> C3
    M3 --> C4
```

## UTM Builder Example

```nomnoml
[URL Builder|
  [Input Fields|
    Website URL: example.com/product
    Campaign Source: facebook
    Campaign Medium: social  
    Campaign Name: summer_sale
    Campaign Term: (optional)
    Campaign Content: banner_ad
  ]
  [Generated URL|
    example.com/product?
    utm_source=facebook&
    utm_medium=social&
    utm_campaign=summer_sale&
    utm_content=banner_ad
  ]
]

[Input Fields] -> [Generated URL]: Build

[Generated URL] -> [Copy to Clipboard]: Copy
[Generated URL] -> [QR Code]: Generate QR
[Generated URL] -> [Shorten URL]: Create Short Link
```

## Campaign Attribution Model

```graphviz
digraph G {
    rankdir=TB;
    node [shape=rectangle, style="rounded,filled"];
    
    subgraph cluster_0 {
        label="User Journey";
        style=filled;
        color=lightgrey;
        
        "Facebook Ad\n(utm_source=facebook)" [fillcolor=lightblue];
        "Google Search\n(utm_source=google)" [fillcolor=lightgreen];
        "Email Campaign\n(utm_source=newsletter)" [fillcolor=lightyellow];
        "Direct Visit\n(no UTM)" [fillcolor=lightcoral];
        "Purchase" [fillcolor=gold, shape=ellipse];
        
        "Facebook Ad\n(utm_source=facebook)" -> "Google Search\n(utm_source=google)" [label="2 days"];
        "Google Search\n(utm_source=google)" -> "Email Campaign\n(utm_source=newsletter)" [label="5 days"];
        "Email Campaign\n(utm_source=newsletter)" -> "Direct Visit\n(no UTM)" [label="1 day"];
        "Direct Visit\n(no UTM)" -> "Purchase" [label="Same day"];
    }
    
    subgraph cluster_1 {
        label="Attribution Credit";
        style=filled;
        color=lightyellow;
        
        "First Touch: 100% Facebook" [fillcolor=lightblue];
        "Last Touch: 100% Direct" [fillcolor=lightcoral];
        "Linear: 25% each" [fillcolor=lightgrey];
        "Time Decay: Weighted" [fillcolor=lightgreen];
    }
}
```

## UTM Best Practices Checklist

```mermaid
graph TD
    A[UTM Strategy] --> B{Consistent Naming}
    B -->|Yes| C[Use lowercase]
    B -->|Yes| D[No spaces - use underscores]
    B -->|Yes| E[Standardized abbreviations]
    
    A --> F{Documentation}
    F -->|Create| G[Campaign naming guide]
    F -->|Maintain| H[UTM parameter dictionary]
    F -->|Share| I[Team training docs]
    
    A --> J{Testing}
    J -->|Before Launch| K[Test all URLs]
    J -->|Verify| L[Check in analytics]
    J -->|Monitor| M[Track performance]
    
    A --> N{Analysis}
    N -->|Regular| O[Weekly reports]
    N -->|Compare| P[A/B test results]
    N -->|Optimize| Q[Adjust campaigns]
```

## Common UTM Examples

| Platform | Source | Medium | Campaign Example | Full URL |
|----------|---------|---------|-----------------|----------|
| Google Ads | google | cpc | summer_sale_2024 | `example.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale_2024` |
| Facebook | facebook | social | product_launch | `example.com?utm_source=facebook&utm_medium=social&utm_campaign=product_launch` |
| Newsletter | mailchimp | email | weekly_digest | `example.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weekly_digest` |
| Partner | partner_xyz | referral | co_marketing | `example.com?utm_source=partner_xyz&utm_medium=referral&utm_campaign=co_marketing` |

## Related Topics
- [Traffic Sources](traffic-sources.md)
- [Campaign Tracking](campaign.md)
- [Source/Medium](source-medium.md)
- [Channel Grouping](channel.md)