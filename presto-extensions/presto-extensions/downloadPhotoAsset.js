var asset_url_regex = /\/media.+\.jpg/i;
function parseUrl(asset_url) {
    var matches = asset_url.match(asset_url_regex);
    if (matches) {
        return matches[0];
    } else {
        throw new Error("Can't parse url of image asset.");
    }
}

$("#assetsPane ul.rlbList li span.paneIcon.image").each(function() {
    var $li = $(this).closest("li");
    var asset_url = $li.find(".assetsImage img").attr('src');
    if (asset_url) {
        var $download_btn = $("<div class='assetsInformation'><a href='http://www.gannett-cdn.com"+ parseUrl(asset_url) +"' target='_blank'>Download</a></div>")
            .css('text-align', 'center');
        $li.find(".assetsBlurb").after($download_btn);
    } else {
        throw new Error("Mismatch occured. Image url not available.");
    }
});