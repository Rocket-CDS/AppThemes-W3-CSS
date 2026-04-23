# AppTheme - rocketblogapi.Blog

This AppTheme provides public blog display and admin management templates for **RocketBlogAPI** using **Razor** and **W3.CSS**.

Repository:
[https://github.com/Rocket-CDS/AppThemes-W3-CSS](https://github.com/Rocket-CDS/AppThemes-W3-CSS)

## Purpose

- Keep the RocketCDS blog display flow and SEO-friendly URLs.
- Support list/detail rendering via standard AppTheme template injection.
- Provide category, month, tag, and property-filter navigation.
- Style the public-facing blog with W3.CSS components (cards, spacing, typography, responsive layout).

## Display Templates

### View.cshtml
Main public wrapper with content + sidebar layout.
Decides whether to render list or detail templates.

### ListView.cshtml
Alternate wrapper for list/detail rendering without sidebar blocks.

### ArticleList.cshtml
Renders article list cards and includes:
- search/banner injection
- ordering/page size/paging support
- image left/right layout settings

### LayoutText.cshtml
Renders per-article text excerpt block used by the list template.

### ArticleDetail.cshtml
Renders article detail with:
- title, date, summary, rich text
- image gallery + main image
- tags, links, documents
- social share section
- reviews/comments flow

### Categories.cshtml
Category tree navigation with selected-state highlighting.

### Months.cshtml
Archive-by-month list with count badges.

### Tags.cshtml
Single-select style tag filtering.

### Filters.cshtml
Property group filters using checkboxes.

### ArticleSat.cshtml
Satellite article display (vertical/horizontal modes) for featured/compact placements.

## Admin Templates

Admin/settings templates are separate from the public display templates and can be maintained independently.

## Theme Settings (Display-Relevant)

Configured in `ThemeSettings.cshtml` and used by display templates:
- layout mode
- page size
- alignment
- image width/height
- title/text/content size
- opacity/background/padding
- show/hide image
- comments on/off
- show/hide sidebar blocks (months/categories/filters/tags)
- top/bottom padding and extra CSS class

## Notes for Customization

- Keep existing IDs/classes used by API callbacks and JavaScript behaviors (`#rocket-blog`, `#rocketblogdisplay`, filter/tag/month classes).
- Keep list/detail URL behavior for SEO (detail page links are full navigable URLs).
- Use W3.CSS utility and component classes for visual adjustments.
- Preserve existing token helpers and template injection points.

## Dependencies

- RocketBlogAPI / RocketDirectoryAPI token helpers
- DNNrocket rendering pipeline
- W3.CSS (theme styling)
