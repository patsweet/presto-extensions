$("div.controlButtons :first")
    .before(function() {
        return $("<a id='clearfrontcontent' class='RadButton RadButton_PrestoRadSkin rbSkinnedButton button' href='#'>Clear Front</a>")
            .click(function(e) {
                e.preventDefault();
                $("a[title='Remove']").each(function(){
                    this.click();
                });
            });
    });
