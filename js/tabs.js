(function($){
    jQuery.fn.lightTabs = function(options){


        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children(".tabs__content").hide().css({opacity: "0"}).removeClass('active-tab');
                $(tabs).children("div").children("div").eq(i).show().css({opacity: "1"}).addClass('active-tab');
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);