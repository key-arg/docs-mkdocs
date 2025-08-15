# Sampling & Thresholding

**Definition:** Data reduction techniques used by analytics platforms to manage large datasets - sampling analyzes a representative subset of data, while thresholding hides data below certain volume minimums.

## Understanding Sampling

### What is Sampling?
Sampling occurs when analytics platforms analyze only a portion of your data to provide faster report generation and reduce computational costs.

### When Sampling Occurs:
- **Large date ranges** - Reports spanning many months
- **Complex reports** - Multiple dimensions and metrics
- **High-traffic websites** - Sites with millions of sessions
- **Custom reports** - Advanced analysis and explorations
- **Real-time processing limitations** - System capacity constraints

### Sampling Indicators:
```
Report shows: "Based on 47.3% of sessions"
Or: "This report is based on 2.1M of 4.4M sessions"
```

## Types of Sampling

### **Automatic Sampling:**
- **Universal Analytics** - Applied when >500K sessions in date range
- **GA4** - More intelligent sampling based on statistical significance
- **Adobe Analytics** - Workspace projects with complex queries
- **Other platforms** - Varies by provider and plan level

### **Statistical Sampling Methods:**

#### **Random Sampling:**
```
Population: 1,000,000 sessions
Sample: 100,000 sessions (10%)
Selection: Every 10th session randomly
```

#### **Systematic Sampling:**
```
Population: 1,000,000 sessions  
Sample: 50,000 sessions (5%)
Selection: Every 20th session consistently
```

#### **Stratified Sampling:**
```
Population: Segmented by device type
Sample: Proportional representation from each segment
Mobile: 60% → 30,000 sessions
Desktop: 40% → 20,000 sessions
```

## Understanding Thresholding

### What is Thresholding?
Thresholding hides data in reports when the volume falls below a certain minimum, often for privacy protection or data quality reasons.

### Common Thresholds:

#### **Google Analytics 4:**
- **User privacy thresholds** - Automatically applied
- **Statistical significance** - Data hidden if not meaningful
- **Query complexity** - More complex queries = higher thresholds

#### **Other Platforms:**
- **Adobe Analytics** - Low-traffic threshold (usually <10 unique visitors)
- **Facebook Analytics** - Minimum 100 people for demographic data
- **Custom platforms** - Configurable minimum volumes

### Threshold Indicators:
```
Report shows: "(other)" instead of specific values
Or: "Data insufficient for display"
Or: Blank cells where data exists but below threshold
```

## Impact on Data Accuracy

### Sampling Effects:

#### **Accuracy Loss:**
```
Actual Conversion Rate: 2.34%
Sampled Report (50%): 2.28% ± 0.15%
Margin of Error: ±6.4%
```

#### **Trend Reliability:**
- **Large trends** - Generally accurate even with sampling
- **Small changes** - May be within margin of error
- **Segment analysis** - Less reliable for small segments
- **Rare events** - May not appear in sampled data

### Statistical Confidence:
```
Sample Size: 10,000 sessions
Confidence Level: 95%
Margin of Error: ±0.98%

Sample Size: 100,000 sessions  
Confidence Level: 95%
Margin of Error: ±0.31%
```

## Avoidance Strategies

### Reduce Sampling Likelihood:

#### **1. Optimize Date Ranges:**
```javascript
// Instead of: Last 12 months (high sampling risk)
// Use: Last 30 days, then extrapolate trends
const shortDateRange = {
  'startDate': '30daysAgo',
  'endDate': 'today'
};
```

#### **2. Simplify Reports:**
```javascript
// Avoid: 5 dimensions + 10 metrics
// Use: 2 dimensions + 3 key metrics
const simpleReport = {
  'dimensions': ['deviceCategory', 'trafficSource'],
  'metrics': ['sessions', 'bounceRate', 'conversions']
};
```

#### **3. Use Smaller Segments:**
```javascript
// Instead of: All traffic analysis
// Use: Specific channel analysis
const focusedSegment = {
  'dimensionFilter': {
    'dimensionName': 'medium',
    'operator': 'EXACT',
    'expressions': ['organic']
  }
};
```

### Advanced Techniques:

#### **Pre-Aggregated Data:**
```sql
-- Create daily summaries to avoid sampling
SELECT 
  date,
  SUM(sessions) as daily_sessions,
  SUM(conversions) as daily_conversions
FROM analytics_data 
GROUP BY date
ORDER BY date;
```

#### **Strategic Reporting:**
```javascript
// Use Intelligence API for unsampled insights
const intelligenceQuery = {
  'metric': 'ga:sessions',
  'dimensions': ['ga:date'],
  'samplingLevel': 'HIGHER_PRECISION'
};
```

## Unsampled Reports

### When Available:

#### **Google Analytics:**
- **GA4 Explorations** - Often unsampled or lower sampling
- **GA360** - Premium version with higher unsampled limits
- **Data API** - Raw data exports for analysis
- **BigQuery Export** - Complete unsampled data (GA4)

#### **Implementation Example:**
```javascript
// GA4 Data API for unsampled data
const request = {
  'property': 'properties/123456789',
  'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
  'dimensions': [{'name': 'deviceCategory'}],
  'metrics': [{'name': 'sessions'}],
  'keepEmptyRows': true
};
```

### Cost Considerations:
- **Free GA4** - Limited unsampled queries
- **GA360** - Higher limits but subscription cost
- **BigQuery** - Pay-per-query model
- **Data Studio** - May trigger sampling based on data source

## Best Practices

!!! tip "Minimize Sampling Impact"
**📊 Report Design**
- Use shorter date ranges when possible
- Focus on key metrics rather than comprehensive views
- Create multiple simple reports vs one complex report

    **📈 Analysis Strategy**
    - Combine sampled data with unsampled validation
    - Focus on trends rather than precise values
    - Use confidence intervals for decision-making
    
    **🔧 Technical Solutions**
    - Implement BigQuery export for critical analysis
    - Use GA4 Explorations for detailed investigations
    - Consider GA360 for high-volume properties

### Data Quality Checks:
```javascript
// Validate sampling impact
function checkSamplingImpact(reportData) {
  const samplingRatio = reportData.samplingSpaceSizes[0] / reportData.samplingSpaceSizes[1];
  
  if (samplingRatio < 0.1) {
    console.warn('High sampling detected: ' + (samplingRatio * 100).toFixed(1) + '%');
    return 'low_confidence';
  } else if (samplingRatio < 0.5) {
    console.info('Moderate sampling: ' + (samplingRatio * 100).toFixed(1) + '%');
    return 'medium_confidence';
  } else {
    return 'high_confidence';
  }
}
```

## Working with Sampled Data

### Statistical Interpretation:
```javascript
// Calculate confidence intervals
function calculateConfidenceInterval(value, sampleSize, confidence = 0.95) {
  const zScore = confidence === 0.95 ? 1.96 : 2.58; // 95% or 99%
  const marginOfError = zScore * Math.sqrt((value * (1 - value)) / sampleSize);
  
  return {
    lower: value - marginOfError,
    upper: value + marginOfError,
    marginOfError: marginOfError
  };
}
```

### Reporting Guidelines:
```javascript
// Always note sampling in reports
const reportMetadata = {
  samplingRate: '47.3%',
  confidenceLevel: '95%',
  marginOfError: '±2.1%',
  recommendation: 'Trends are reliable, precise values need validation'
};
```

## Platform-Specific Considerations

### Google Analytics 4:
- **Intelligent sampling** - Based on statistical significance
- **Event-based model** - Less prone to sampling than UA
- **BigQuery integration** - Free export for unsampled analysis
- **Exploration reports** - Often unsampled or lightly sampled

### Adobe Analytics:
- **Workspace sampling** - Applied to complex projects
- **Data Warehouse** - Unsampled reports (additional cost)
- **Report Suite** - Configuration affects sampling thresholds

### Universal Analytics (Legacy):
- **High sampling rates** - Especially for large date ranges
- **Premium version** - Higher unsampled limits
- **Intelligence reports** - Often heavily sampled

!!! warning "Critical Decisions"
Never make critical business decisions based solely on heavily sampled data (>50% sampling rate). Always validate with unsampled data sources or multiple data points before major strategic changes.

---

**Related:** [Analytics](analytics.md) • [Property & Data Stream](property-data-stream.md) • [Cardinality](cardinality.md)