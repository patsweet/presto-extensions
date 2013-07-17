$("div.controlButtons :first")
    .before(function() {
        return $("<a id='clearfrontcontent' class='RadButton RadButton_PrestoRadSkin rbSkinnedButton button' href='#'>Clear Front</a>")
            .click(function() {
                $("#dnn_ctr635_View_LMC_7870 a[title='Remove']").each(function(){
                    this.click();
                });
            });
    });