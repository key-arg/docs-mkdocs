# Stickiness (DAU/MAU): Measuring Product Habit Formation

**Stickiness** is the ratio of Daily Active Users (DAU) to Monthly Active Users (MAU) that indicates how frequently users return to a product within a month. This metric measures product stickiness — that is, how often people engage with your product. The ratio is expressed as a percentage and demonstrates the proportion of monthly users who use the product daily.

## Calculation Formula

The stickiness ratio calculation is simple and straightforward:

```
Stickiness = (DAU / MAU) × 100%
```

Where:
- **DAU (Daily Active Users)** — the number of unique users engaging with the product within a single day
- **MAU (Monthly Active Users)** — the number of unique users engaging with the product within 30 days

!!! info "Calculation Example"
    
    If an app has 15,000 daily active users and 60,000 monthly active users:
    
    Stickiness = (15,000 / 60,000) × 100% = 25%
    
    This means that a quarter of monthly users use the product daily

### Alternative Measurement Approaches

Modified metrics are used for products with different usage cycles:

| Metric | Application | Usage Cycle |
|--------|-------------|-------------|
| DAU/WAU | Products with weekly cycles | Weekly tasks |
| WAU/MAU | B2B tools | Work processes |
| MAU/QAU | Seasonal services | Quarterly reports |

If your product is used infrequently, consider using a different stickiness ratio, such as WAU/MAU.

## Industry Benchmarks

### General Industry Metrics

Benchmarks vary by industry. According to research, social and gaming apps tend to have the highest stickiness, while commerce and finance have lower stickiness.

| App Category | Average DAU/MAU | Market Leaders |
|--------------|-----------------|----------------|
| Social Networks | 20-50% | >50% |
| Games | 10-30% | 40-50% |
| E-commerce | 10% | 15-20% |
| Finance | 10.5% | 20-25% |
| B2B SaaS | 13% | 40% |
| Productivity | 20-30% | 50-60% |

!!! note "Facebook as the Gold Standard"
    
    Facebook is known for having a DAU/MAU ratio above 50%. This is an exceptional metric achieved only by leaders in the social networking and messaging categories.

### Benchmark Evolution

Stickiness metrics show positive dynamics:

- **2014**: Sequoia Capital indicated that standard DAU/MAU was 10-20%
- **2017**: Average stickiness for SaaS was 13%
- **2024**: According to Mixpanel's 2024 Benchmarks Report, average stickiness across all industries was 37% in 2023

## Defining "Active User"

The key factor for accurate calculation is clearly defining what "active" means for your product.

### Definition Examples by Product Type

=== "E-commerce"
    
    - Browsing products
    - Adding to cart
    - Making purchases
    - Leaving reviews

=== "B2B SaaS"
    
    - Logging in
    - Creating/editing documents
    - Using key features
    - Exporting data

=== "Media/Content"
    
    - Viewing pages/videos
    - Commenting
    - Reading time >30 seconds
    - Social actions

=== "Mobile Games"
    
    - Launching the app
    - Completing levels
    - Participating in events
    - In-app purchases

!!! warning "Context Importance"
    
    The key to calculating DAU/MAU ratio is defining what "active" means for your product. Incorrect definitions can lead to skewed metrics and poor decisions.

## Factors Affecting Stickiness

### Product Characteristics

Products with high stickiness typically have the following qualities:

**Solving Recurring Needs**: Products that solve users' daily problems naturally have higher stickiness.

**Habit Formation**: Stickiness is just one part of the broader retention picture. Products embedded in users' daily routines demonstrate significantly higher metrics.

**Network Effects**: Social platforms and communication tools benefit from product value growing with the number of users.

### Usage Patterns

Some product types are naturally less likely to have high DAU/MAU ratios due to their usage patterns:

| Product Type | Usage Pattern | Typical DAU/MAU |
|--------------|---------------|-----------------|
| Work Tools | Weekdays | 30-40% |
| On-Demand Services | Episodic | 5-15% |
| Seasonal Tools | Activity Periods | 2-10% |
| Daily Habits | Every Day | 40-60% |

## Interpreting the Metric

### What Different Stickiness Levels Mean

**10-20% (Low Stickiness)**:
- Users return 3-6 days per month
- Typical for e-commerce, marketplaces
- Requires focus on activation and onboarding

**20-40% (Medium Stickiness)**:
- Users active 6-12 days per month
- Common for B2B SaaS, productivity tools
- Opportunities for improvement through personalization

**40-60% (High Stickiness)**:
- Users use product 12-18 days per month
- Typical for work communication, social networks
- Product has become part of daily routine

**>60% (Exceptional Stickiness)**:
- Daily use by most users
- Achieved only by market leaders
- Product is indispensable to users

!!! tip "Context Matters More Than Absolute Values"
    
    A 10% DAU/MAU ratio for an e-commerce app might be average, while for gaming or social apps the DAU/MAU ratio varies between 20% and 50%.

## Metric Limitations

### Technical Limitations

**Masking Inactivity**: High DAU/MAU can hide engagement quality issues. Users might open the app but not derive value from it.

**Misleading Aggregated Data**: Viewing DAU/MAU in aggregate is a mistake I've seen in practice. The metric can look healthy even if only a small group of loyal users maintains the numbers.

**Not Applicable to All Business Models**: The primary limitation of DAU/MAU ratio is that the metric doesn't apply to all companies and industries.

### Interpretational Nuances

DAU/MAU metric should be analyzed alongside other metrics:

- **Engagement Depth**: Time in app, number of actions
- **Monetization**: LTV, ARPU, conversion to paying
- **Retention Quality**: Cohort analysis, churn rate
- **Satisfaction**: NPS, CSAT, user reviews

## Strategies to Improve Stickiness

### Activation Optimization

Focusing on activating users when they're new — the time when they first perceive your product's value — can improve new user retention and lead to the biggest gains in DAU/MAU ratio.

**Key Elements**:

1. **Personalized Onboarding**
   - Adapting to user goals
   - Progressive feature disclosure
   - Quick wins in first session

2. **Reducing Time to Value**
   - Minimizing steps to first value
   - Removing registration barriers
   - Demonstrating key benefits

3. **Contextual Hints**
   - Just-in-time learning
   - Interactive tutorials
   - Celebrating achievements

### Habit Formation

Creating habits requires a systematic approach:

=== "Triggers"
    
    **External Triggers**:
    - Push notifications at optimal times
    - Email reminders about unfinished actions
    - Calendar integrations
    
    **Internal Triggers**:
    - Emotional states
    - Problem solving
    - Social pressure

=== "Actions"
    
    **Simplifying Actions**:
    - Minimal clicks
    - Pre-filled forms
    - Smart recommendations
    - Quick access to frequently used features

=== "Rewards"
    
    **Variable Rewards**:
    - Game mechanics (points, achievements)
    - Social recognition
    - Content surprises
    - Personal progress

=== "Investment"
    
    **Value Accumulation**:
    - Personal data and settings
    - Social connections
    - History and achievements
    - Created content

### Experience Personalization

Adapting the product to individual needs significantly increases stickiness:

**User Segmentation**:
- By usage frequency
- By engagement depth
- By tasks performed
- By lifecycle stage

**Adaptive Interface**:
- Behavior-based recommendations
- Personalized content
- Workspace customization
- Smart notifications

**A/B Testing**:
- Testing notification timing
- Optimizing onboarding flow
- Gamification experiments
- Messaging personalization

## Relationship with Other Metrics

### Retention vs Stickiness

Product stickiness measures how often users return to your product over time, while retention tracks how many users continue using the product after a given period.

| Aspect | Retention | Stickiness |
|--------|-----------|------------|
| Focus | Long-term retention | Usage frequency |
| Period | Weeks/months | Days per month |
| Goal | Reduce churn | Form habits |
| Metric | % of remaining users | DAU/MAU ratio |

### Impact on Business Metrics

High stickiness directly correlates with key business metrics:

- **LTV (Lifetime Value)**: 25-40% increase with 10% stickiness growth
- **CAC Payback**: 30-50% reduction in payback period
- **Viral Coefficient**: 2-3x growth in organic acquisition
- **Churn Rate**: 20-35% churn reduction

## Application in Web Analytics

In web analytics context, the Stickiness metric helps understand traffic quality and content strategy effectiveness.

### Adaptation for Websites

For websites, "active user" definition might include:

- Viewing a certain number of pages
- Time on site exceeding X minutes
- Completing target actions
- Interacting with key content

### Measurement Specifics

**Sessions vs Users**: Unlike mobile apps, web analytics often operates with sessions, requiring adjustment to measurement approach.

**Cookie-based Tracking**: Browser technology limitations can affect unique user identification accuracy.

**Cross-device Behavior**: Users might interact with the site from different devices, complicating accurate DAU/MAU counting.

## Future of the Metric

The industry is moving toward a more comprehensive understanding of engagement, where DAU/MAU is just one component.

### Evolution of Approaches

**From Quantity to Quality**: Focus shifts from simple usage frequency to interaction depth and quality.

**Contextual Metrics**: Accounting for time of day, day of week, seasonality for more accurate interpretation.

**Predictive Analytics**: Using machine learning to predict future stickiness based on early signals.

**Composite Indices**: Creating comprehensive metrics combining frequency, depth, and interaction value.

Our web analytics platform is working on solutions that will enable more accurate stickiness measurement considering the specifics of various site and app types. We're focusing on creating adaptive algorithms that automatically determine optimal "activity" thresholds for each specific product.

We plan to implement cohort stickiness analysis functionality, allowing tracking of usage pattern changes across different user segments over time. This will enable identifying factors affecting habit formation and optimizing the product for increased engagement.

--8<-- "snippets/ai.md"

!!! success "Ready to Boost Your Product Stickiness?"
    
    Sign up for a free trial of our analytics platform and get detailed insights into your product usage patterns. Track DAU/MAU in real-time, analyze cohorts, and build user habits with a data-driven approach.