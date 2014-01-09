function getObjects(obj, key, val) {
    // http://stackoverflow.com/a/4992429/1309020
    // Used to snag items from json by a given value.
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
$("#assetsPane ul.rlbList li span.paneIcon.image").each(function() {
    var $li = $(this).closest("li");
    var json_url = window.location.origin + $li.find(".assetsInformation a:contains(json)").attr('href');
    $.getJSON(json_url, function(data) {
        var baseurl = getObjects(data['attributes'], 'name', 'publishurl')[0]['value'];
        var xsl = baseurl + getObjects(data['ratios'], 'name', 'x-superlarge')[0]['path'];
        var xxl = baseurl + getObjects(data['ratios'], 'name', 'x-extralarge')[0]['path'];
        var xl = baseurl + getObjects(data['ratios'], 'name', 'x-large')[0]['path'];
        var norm = baseurl + getObjects(data['ratios'], 'name', 'x')[0]['path'];
        var $download_btn = $("<div class='assetsInformation'>Download: <a href='"+ xsl +"' target='_blank' title='x-superlarge'>xsl</a> | <a href='"+ xxl +"' target='_blank' title='x-extralarge'>xxl</a> | <a href='"+ xl +"' target='_blank' title='x-large'>xl</a> | <a href='"+ norm +"' target='_blank' title='normal'>l</a></div>");
        $li.find(".assetsBlurb").after($download_btn);
    });
});