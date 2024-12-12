# AppTheme - rocketblogapi.Blog 

The is a Blog AppTheme to give functionality to create and search blog entries.  

[https://github.com/Rocket-CDS/AppThemes-W3-CSS](https://github.com/Rocket-CDS/AppThemes-W3-CSS)

## Razor Templates

### AdminList.cshtml

### AdminDetail.cshtml

### AdminExtra.cshtml

### AdminHeader.cshtml

### View.cshtml
This is the view wrapper template and decides to display the list or detail.

### ArticleList.cshtml
This template will display the list.  The text search, list ordering and paging size is injected into this template.

The JS to remove the search and filters when navigated to another page is added to this template.  

Paging is dealt with in this template the categories, search and filters must persist paging reload.

### ArticleDetail.cshtml
This displays the article detail, this has little affect on the search and filters but it is important to note that the "ArticleList.cshtml" template uses a link to load this as a new page.  This is important for SEO.  

If using an API call to display the detail, the SEO can be achieved by using JS to change the navigator URL.  This AppTheme uses the easy and trusted method to allow search engines to navigate the website in a traditional way.  

Because the detail page is a reload and has it's own URL for SEO requirements we cannot add the filter clear functionality to the detail template. If we do the search and filter will be lost when the user goes back to the list page.

### Categories.cshtml
The categories are listed using a natural html link, this changes the URL and allows for SEO requirements.

### Tags.cshtml
The tags template displays the property tags that can be selected, these are filters.  The difference with the "Filter.cshtml" is that only 1 tag can be selected at a time.  

### Filter.cshtml
This displays a list of properties that are used as filters for the list.

### Months.cshtml

### ArticleSat.cshtml

### LayoutText.cshtml

## CSS

## JS

## Resx

## Dependency
