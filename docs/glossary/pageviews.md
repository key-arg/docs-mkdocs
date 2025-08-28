# Pageviews

**Pageviews** are a fundamental metric in web analytics that tracks the number of times website pages have been loaded or reloaded by visitors. This metric helps understand how actively users interact with website content and is often used to assess the popularity of individual pages or the entire resource as a whole.

## Definition

In the context of analytics systems, such as our analytics counter, *pageviews* are recorded every time a user's browser requests and loads a page. This includes:

- Navigating through links within the site.
- Page reloads (e.g., pressing F5).
- Returning to a page from browser history.

It's important to note that pageviews **do not** account for visitor uniqueness: the same user can generate multiple views of the same page if they reload it or return to it multiple times.

!!! tip "Tip for beginners"
    If you're just starting with analytics, remember: pageviews are a "raw" metric. They show traffic volume but not interaction quality. For deeper analysis, combine them with other indicators such as *unique pageviews* or *bounce rate*.

## Difference from other metrics

To better understand pageviews, let's compare them with similar terms:

- **[Sessions](sessions.md)**: A group of user interactions with a site within a limited time frame (usually 30 minutes). One session can include multiple pageviews.
- **Unique pageviews**: Counts page views only once per session, even if the user reloaded it several times.
- **Hits**: A lower-level metric that records any request to the server (e.g., loading an image or script), not just pages.

| Metric | What it measures | Example usage |
|------------------|---------------------------------------|---------------------------------------|
| **Pageviews** | Total number of page loads | Assessing article popularity |
| **Sessions** | Number of user "visits" | Analyzing site visit frequency |
| **Unique Pageviews** | Unique views within a session | Measuring actual content reach |

## How pageviews work in practice

For a beginning webmaster, it's important to understand how this metric affects site analysis. Imagine you have a blog with articles. If an article page gets many pageviews, this could indicate:

1. High interest in content (users are sharing the link).
2. Navigation problems (users frequently reload the page due to errors).
3. Bots or spam traffic (artificially inflated views).

To track pageviews, install our analytics counter code on every page of your site. Our system automatically registers views when pages load.

!!! info "Example"
    Suppose a user visits your site's homepage (1 pageview), then goes to the "About us" page (2 pageviews) and returns to the homepage (3 pageviews). Total: 3 pageviews in one session. If another user simply visits the homepage and leaves, that's 1 pageview.

!!! info "Example"
    On an online store website, a product page got 1,000 pageviews in a day. Of these, 600 were unique. This means approximately 40% of views were repeat loads (e.g., users refreshing the page to check product availability).

## Advantages and limitations

**Advantages:**

- Easy to interpret: more pageviews generally mean higher engagement.
- Useful for A/B testing: compare views of different page versions.

**Limitations:**

- Doesn't account for time on page or viewing depth.
- Can be inflated due to technical factors (automatic refreshes).

For more accurate analysis, use filters in our analytics to exclude bots or internal traffic. Our tool allows you to monitor this statistic and understand it, as well as cross-reference it with other metrics for deep analysis.