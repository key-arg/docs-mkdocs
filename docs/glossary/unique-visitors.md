# Unique Visitors

**Unique Visitors** is a key metric in web analytics that shows the number of individual users who visited a website during a specific time period. Unlike other metrics such as sessions or pageviews, unique visitors exclude repeat visits from the same user, providing a more accurate representation of the site's audience size.

## Definition

In the context of analytics systems like our analytics counter, *unique visitors* are determined using a combination of user identification technologies. The system tracks unique visitors using:

- Browser cookies.
- Browser fingerprinting (analysis of unique characteristics).
- IP address and User-Agent (as additional factors).

It's important to note that unique visitors are counted **within the selected time period**: one user will be considered a unique visitor within a day, week, or month, but may generate multiple sessions during that period.

!!! tip "Tip for beginners"
    If you're just starting with analytics, remember: unique visitors is an "audience reach" metric. It shows how many real people visited your site, but not the frequency of their visits. To understand user activity, combine it with metrics like *sessions* or *pageviews per visitor*.

## Difference from other metrics

To better understand unique visitors, let's compare it with similar terms:

- **[Sessions](sessions.md)**: Number of "visits" to the site. One unique visitor can generate multiple sessions.
- **Pageviews**: Total number of page loads. One unique visitor can view many pages.
- **Returning visitors**: A subset of unique visitors who have previously visited the site.

| Metric | What it measures | Example use case |
|------------------|---------------------------------------|---------------------------------------|
| **Unique Visitors** | Number of individual users | Measuring audience size |
| **Sessions** | Number of "visits" to the site | Analyzing activity and visit frequency |
| **Pageviews** | Total number of page views | Evaluating content popularity |

## How unique visitors work in practice

For a beginning webmaster, it's important to understand how this metric affects site analysis. Imagine you have an online store. If the number of unique visitors is growing, this may indicate:

1. Successful marketing campaigns (attracting new customers).
2. Improved SEO rankings (organic traffic growth).
3. Viral content effect (users sharing links).

To track unique visitors, install our analytics counter code on every page of your site. Our system automatically identifies and counts unique visitors, excluding duplicates.

!!! info "Example"
    Suppose a user visits your site in the morning (1 unique visitor, 1 session), returns in the afternoon (same 1 unique visitor, 2 sessions), and visits in the evening (still the same 1 unique visitor, 3 sessions). Result: 1 unique visitor per day with 3 sessions.

!!! info "Example"
    Over a week, a blog site had 1000 unique visitors who created 1500 sessions and viewed 4500 pageviews. This means that on average, each visitor came 1.5 times during the week and viewed 4.5 pages total.

## Advantages and limitations

**Advantages:**

- Accurate measurement of real audience size.
- Useful for planning advertising budgets and content strategy.
- Helps evaluate the effectiveness of attracting new users.

**Limitations:**

- Depends on cookies and may be inaccurate when they are disabled.
- Doesn't account for cross-device usage without special tracking.
- May be inflated due to cookie clearing or private browsing mode.

For more accurate analysis, use filters in our analytics to exclude bots or internal traffic. Our tool allows you to monitor this statistic and understand it, as well as cross-reference it with other metrics for deep customer base analysis.