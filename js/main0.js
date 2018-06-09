var staticGifSuffix = ".png";
var gifSuffix = ".gif";

$(document).ready(function() {

  $(".img-animate").each(function () {

     $(this).hover(
        function()
        {
            var originalSrc = $(this).attr("src");
            $(this).attr("src", originalSrc.replace(staticGifSuffix, gifSuffix));
        },
        function()
        {
            var originalSrc = $(this).attr("src");
            $(this).attr("src", originalSrc.replace(gifSuffix, staticGifSuffix));
        }
     );

  });

});
