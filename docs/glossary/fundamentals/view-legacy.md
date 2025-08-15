# View (legacy)

**Definition:** A deprecated feature from Universal Analytics that created filtered subsets of property data, now replaced by more flexible filtering and audience tools in modern analytics platforms.

## What Were Views in Universal Analytics?

### Purpose of Views:
Views allowed you to create different "perspectives" of the same data by applying filters, goals, and settings without affecting the raw data collection.

### View Structure:
```
Account
└── Property
    ├── View 1: All Website Data (Master/Raw)
    ├── View 2: Internal Traffic Excluded  
    ├── View 3: Mobile Traffic Only
    └── View 4: E-commerce Transactions Only
```

### Common View Types:

#### **Master/Raw Data View:**
- No filters applied
- Complete unfiltered dataset
- Backup for data recovery
- Used for comprehensive analysis

#### **Filtered Business View:**
- Internal traffic excluded
- Bot traffic filtered out
- Test transactions removed
- Clean data for reporting

#### **Segment-Specific Views:**
- Mobile-only traffic
- Specific geographic regions
- Particular user segments
- Campaign-specific data

## Why Views Were Deprecated

### Limitations of Views:

#### **Data Fragmentation:**
- **Siloed reporting** - Each view showed different data
- **Limited cross-view analysis** - Couldn't compare easily
- **Management overhead** - Multiple views to maintain
- **Historical data issues** - Filter changes affected historical data

#### **Technical Constraints:**
- **Processing limitations** - Views applied at processing time
- **Irreversible filtering** - Data permanently filtered out
- **Limited flexibility** - Couldn't change filters retroactively
- **Sampling issues** - Complex views increased sampling

#### **User Confusion:**
- **Multiple truth sources** - Different views showed different numbers
- **Filter conflicts** - Views could contradict each other
- **Access management** - Complex permission structures
- **Reporting inconsistency** - Teams using different views

## Migration to Modern Equivalents

### GA4 Replacements:

#### **Explorations and Reports:**
```javascript
// Modern filtering in GA4
// No need for separate views - filter in reports
{
  "dimension_filter": {
    "filter_name": "exclude_internal_traffic",
    "dimension_name": "traffic_type",
    "expressions": [{
      "filter": {
        "field_name": "traffic_type",
        "string_filter": {
          "match_type": "EXACT",
          "value": "internal",
          "case_sensitive": false
        },
        "not_expression": true
      }
    }]
  }
}
```

#### **Audiences for Segmentation:**
```javascript
// Create audiences instead of views
gtag('config', 'GA_MEASUREMENT_ID', {
  'custom_map': {
    'dimension1': 'user_type'
  }
});

// Tag users for audience creation
gtag('event', 'page_view', {
  'user_type': 'premium_customer'
});
```

#### **Data Streams for Data Separation:**
```javascript
// Use separate data streams instead of views
// Production stream
gtag('config', 'G-PRODUCTION-ID');

// Development stream  
gtag('config', 'G-DEVELOPMENT-ID');
```

## Migration Strategy

### From Universal Analytics Views to GA4:

#### **Step 1: Audit Existing Views**
```
View Assessment:
├── Master View: Migrate to main GA4 property
├── Filtered View: Recreate as GA4 filters
├── Mobile View: Use device category filtering
└── Goal View: Set up GA4 conversions
```

#### **Step 2: Recreate Filtering Logic**
```javascript
// Internal traffic exclusion (was view filter)
// Now handled at data collection level
gtag('config', 'GA_MEASUREMENT_ID', {
  'transport_type': 'beacon',
  'anonymize_ip': true
});

// Or use Google Tag Manager for conditional firing
```

#### **Step 3: Set Up New Reporting Structure**
- **Explorations** for complex analysis
- **Custom reports** for specific metrics
- **Audiences** for user segmentation
- **Comparisons** for A/B analysis

### Data Continuity Planning:

#### **Historical Data:**
- **Export UA data** before sunset deadline
- **Document view configurations** for recreation
- **Map UA goals to GA4 conversions**
- **Create data bridges** for trend analysis

#### **Reporting Migration:**
```javascript
// Create comparable segments in GA4
// Instead of mobile-only view, use device filter
const mobileSegment = {
  "segmentFilterClauses": [{
    "dimensionFilter": {
      "dimensionName": "ga:deviceCategory",
      "operator": "EXACT",
      "expressions": ["mobile"]
    }
  }]
};
```

## Modern Best Practices

### Instead of Views, Use:

#### **1. Report-Level Filtering:**
```javascript
// Apply filters at report level, not data level
// More flexible and reversible
const reportRequest = {
  'reportRequests': [{
    'viewId': 'ga:XXXXXX',
    'dimensionFilterClauses': [{
      'filters': [{
        'dimensionName': 'ga:medium',
        'operator': 'EXACT',
        'expressions': ['organic']
      }]
    }]
  }]
};
```

#### **2. Audience-Based Analysis:**
```javascript
// Create audiences for persistent segments
gtag('event', 'page_view', {
  'user_properties': {
    'customer_tier': 'premium',
    'signup_method': 'organic'
  }
});
```

#### **3. Comparison Features:**
```javascript
// Use GA4 comparisons instead of separate views
// Compare different segments in same report
const comparison = {
  'name': 'Mobile vs Desktop',
  'segments': [
    {'deviceCategory': 'mobile'},
    {'deviceCategory': 'desktop'}
  ]
};
```

## Lessons Learned

### What Views Taught Us:

#### **Data Governance:**
- **Single source of truth** is more valuable than multiple perspectives
- **Flexible filtering** beats permanent data exclusion
- **Report-time decisions** are better than collection-time filtering

#### **User Experience:**
- **Simplified access** reduces confusion
- **Consistent reporting** improves team alignment
- **Dynamic segmentation** serves more use cases

#### **Technical Architecture:**
- **Processing flexibility** enables better analysis
- **Reversible operations** preserve data value
- **Real-time filtering** meets changing business needs

## Modern Equivalents Comparison

| Universal Analytics Views | GA4 Modern Approach |
|--------------------------|---------------------|
| **Permanent filters** | Dynamic report filters |
| **Multiple view management** | Single property with segments |
| **Processing-time filtering** | Query-time filtering |
| **Limited historical changes** | Flexible historical analysis |
| **View-specific goals** | Property-wide conversions |
| **Access-based data limitation** | Role-based report access |

## When You Might Encounter Views

### Legacy Situations:
- **Historical reports** - Old Universal Analytics data
- **Migration projects** - Moving from UA to GA4
- **Documentation** - Understanding old analytics setups
- **Consulting** - Working with clients who have legacy systems

### Educational Value:
- **Understanding filtering evolution** - How analytics has improved
- **Data governance lessons** - Why centralized data is better
- **Migration planning** - How to modernize analytics implementations

!!! warning "Important Notice"
**Universal Analytics (including Views) stopped processing data on July 1, 2023.** All UA properties are now read-only, and Views are no longer functional. If you still have UA Views, focus on data export and GA4 migration rather than View management.

---

**Related:** [Property & Data Stream](property-data-stream.md) • [Analytics](analytics.md) • [User & Session](user-session.md)