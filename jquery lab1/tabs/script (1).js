$("#tabs").on("click","span", function(){
    $(".notselected").removeClass("selected");
    $(this).addClass("selected");
    $("#topic").text("Tab " + $(this).attr('id'));
});