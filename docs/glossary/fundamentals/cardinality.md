# Cardinality

**Definition:** The number of unique values within a dimension, which directly impacts analytics performance, reporting accuracy, and data processing costs.

## Understanding Cardinality

### What is Cardinality?
Cardinality measures how many distinct values exist within a dimension. It's a critical concept that affects how analytics platforms store, process, and report your data.

### Cardinality Examples:

#### **Low Cardinality (Good):**
- **Device Category:** 3 values (Mobile, Desktop, Tablet)
- **Traffic Source:** 5 values (Organic, Direct, Social, Email, Paid)
- **User Type:** 2 values (New, Returning)
- **Country:** ~200 values (Limited set of countries)

#### **High Cardinality (Problematic):**
- **User ID:** Millions of unique values (one per user)
- **Timestamp:** Unlimited unique values (every second different)
- **Page URL:** Thousands of unique values (every page/parameter combination)
- **Session ID:** Unlimited unique values (every session unique)

### Cardinality Scale:
```
Low:     < 50 unique values
Medium:  50 - 1,000 unique values  
High:    1,000 - 100,000 unique values
Very High: > 100,000 unique values
```

## Platform Limits and Issues

### Google Analytics 4 Limits:

#### **Custom Dimensions:**
- **Event-scoped:** 50 per property
- **User-scoped:** 25 per property
- **High-cardinality limit:** ~500,000 unique values per dimension

#### **Consequences of Exceeding Limits:**
```
Warning: "High-cardinality dimension detected"
Result: Data may be sampled or aggregated into "(other)"
```

### Other Platform Limits:

#### **Adobe Analytics:**
- **eVars:** 250 custom variables
- **Unique value limits:** Varies by report suite
- **Processing impact:** High cardinality affects real-time reporting

#### **Universal Analytics (Legacy):**
- **Custom dimensions:** 20 (free) / 200 (premium)
- **Unique values:** ~500,000 before aggregation
- **"(other)" threshold:** Data bucketed when limits exceeded

## High-Cardinality Problems

### Performance Issues:

#### **Query Performance:**
```sql
-- High cardinality query (slow)
SELECT user_id, COUNT(*) 
FROM analytics_data 
GROUP BY user_id;

-- Low cardinality query (fast)
SELECT device_category, COUNT(*)
FROM analytics_data 
GROUP BY device_category;
```

#### **Storage Costs:**
- **Index size** - More unique values = larger indexes
- **Memory usage** - High cardinality requires more RAM
- **Processing time** - Longer aggregation calculations
- **Query complexity** - Joins become expensive

### Reporting Problems:

#### **Data Aggregation:**
```
Original data: 50,000 unique page URLs
Reported data: Top 1,000 URLs + "(other)" bucket
Lost information: 49,000 specific URLs aggregated
```

#### **Statistical Reliability:**
- **Small segments** - Many dimensions have few data points
- **Sampling increases** - Complex queries more likely to sample
- **Threshold hiding** - Privacy thresholds hide sparse data

### Business Impact:
- **Lost insights** - Specific dimension values hidden in "(other)"
- **Reduced granularity** - Cannot analyze at detailed level
- **Delayed reporting** - Slower query processing
- **Increased costs** - Higher computational requirements

## Optimization Strategies

### 1. Dimension Design:

#### **Group Related Values:**
```javascript
// Instead of: Full page URL (high cardinality)
page_url: "/products/shoes/nike/air-max-270-black-size-9.5?ref=homepage&utm_source=google"

// Use: Page category (low cardinality)
page_category: "product_detail"
product_category: "shoes"
brand: "nike"
```

#### **Create Hierarchical Dimensions:**
```javascript
// Instead of: City (high cardinality - 10,000+ cities)
gtag('event', 'page_view', {
  'city': 'San Francisco'  // High cardinality
});

// Use: Country/Region hierarchy (lower cardinality)
gtag('event', 'page_view', {
  'country': 'United States',     // Low cardinality
  'region': 'California',         // Medium cardinality  
  'metro': 'San Francisco Bay'    // Medium cardinality
});
```

### 2. Value Bucketing:

#### **Numerical Bucketing:**
```javascript
// Instead of: Exact age (high cardinality)
user_age: 34

// Use: Age groups (low cardinality)
age_group: "30-39"
```

#### **URL Path Simplification:**
```javascript
// Instead of: Full URL with parameters
page_path: "/blog/2024/08/how-to-reduce-bounce-rate-ultimate-guide?utm_source=google&utm_medium=organic"

// Use: Simplified path structure
page_section: "blog"
content_type: "guide"
publish_year: "2024"
```

### 3. Data Processing:

#### **Pre-Processing Rules:**
```javascript
// Clean and standardize data before sending
function cleanDimension(value) {
  if (!value || value.length > 150) return 'undefined';
  
  // Remove query parameters
  if (value.includes('?')) {
    value = value.split('?')[0];
  }
  
  // Standardize case
  return value.toLowerCase().trim();
}

gtag('event', 'page_view', {
  'page_path': cleanDimension(window.location.pathname)
});
```

#### **Server-Side Processing:**
```python
# Process high-cardinality data server-side
def process_user_agent(user_agent):
    """Convert high-cardinality user agent to low-cardinality categories"""
    if 'Mobile' in user_agent:
        return 'Mobile'
    elif 'Chrome' in user_agent:
        return 'Desktop Chrome'
    elif 'Safari' in user_agent:
        return 'Desktop Safari'
    else:
        return 'Other'
```

## Advanced Solutions

### Custom Aggregation:

#### **BigQuery Processing:**
```sql
-- Create low-cardinality summaries from high-cardinality data
CREATE TABLE daily_page_performance AS
SELECT 
  event_date,
  CASE 
    WHEN page_path LIKE '/blog/%' THEN 'Blog'
    WHEN page_path LIKE '/products/%' THEN 'Products'  
    WHEN page_path LIKE '/support/%' THEN 'Support'
    ELSE 'Other'
  END as page_section,
  COUNT(*) as pageviews,
  COUNT(DISTINCT user_pseudo_id) as unique_users
FROM `project.dataset.events_*`
WHERE event_name = 'page_view'
GROUP BY event_date, page_