$("div.controlButtons :first")
    .before(function() {
        return $("<a id='clearfrontcontent' class='RadButton RadButton_PrestoRadSkin rbSkinnedButton button' href='#' title='Click this to clear the current front. Nothing is permanent, though, until you click Publish.'>Clear Front</a>")
            .click(function(e) {
                e.preventDefault();
                $("ul.rdCommands span.rdClose").each(function(){
                    this.click();
                });
                return false;
            });
    });
