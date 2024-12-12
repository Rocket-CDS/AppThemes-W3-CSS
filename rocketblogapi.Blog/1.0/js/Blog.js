function blog_showSelectedMonths(monthidx, date1, date2, reloadUrl, browserUrl) {
    $('.simplisity_loader').show();
    simplisity_setSessionField('page', '1');
    $('#viewsearchtext').val('');
    $('.rocket-monthdates').removeClass('w3-theme-l3');
    $('.rocket-monthdates' + monthidx).addClass('w3-theme-l3');
    simplisity_setSessionField('viewsearchtext', '');
    simplisity_setSessionField('monthidx', monthidx);
    simplisity_setSessionField('searchdate1', date1);
    simplisity_setSessionField('searchdate2', date2);
    $('.rocket-categorylink').removeClass('w3-theme-l3');
    if (browserUrl && browserUrl != '') {
        history.pushState('', "Title", browserUrl);
    }
    if (reloadUrl && reloadUrl != '') {
        simplisity_setSessionField('rocketpropertyidtag', '0');
        $('.rocket-filtercheckbox').each(function (i, obj) { simplisity_setSessionField(this.id, false); });
        location.replace(reloadUrl);
    }
    else {
        var element_to_scroll_to = document.getElementById('rocketblogdisplay');
        element_to_scroll_to.scrollIntoView();
        doDateSearchReload(date1, date2);
    }
}
function blog_clearFiltersCategories() {
    $('.simplisity_loader').show();
    // remove selecton class
    $('.rocket-monthdates').removeClass('w3-theme-l3');

    // Clear the search field
    $('#viewsearchtext').val('');
    simplisity_setSessionField('viewsearchtext', '');

    // Clear the date range selection (This is a search)
    simplisity_setSessionField('monthidx', '');
    simplisity_setSessionField('searchdate1', '');
    simplisity_setSessionField('searchdate2', '');

    // Clear tag selection
    simplisity_setSessionField('rocketpropertyidtag', '0');

    // Clear Filter checkboxes
    $('.rocket-filtercheckbox').each(function (i, obj) { simplisity_setSessionField(this.id, false); });
}
