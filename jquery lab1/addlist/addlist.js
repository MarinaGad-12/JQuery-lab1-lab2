var inp = $("input[type='text']");
//add 
$("button").click(function () {
    console.log(inp.val());
    var s="dd";
    $("#myList").prepend("<div class='data'>"+inp.val()+"</div> <span class='delete'>Delete</span> <br>");
    inp.val("");
});
//delete
$("body").on("click","span",function(){
    console.log(this);
    $(this).prev().remove();
    $(this).next().remove();
    $(this).remove();
})