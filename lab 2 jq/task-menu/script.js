$("#li1").toggle();
$("#li2").toggle();



$("#main").hover(function(){
    $("#main").animate({"width": '250px'});
    $("ul").toggleClass("displaydiv");
    
  },function(){
    $("#main").animate({"width": '50px'});
    $("ul").toggleClass("displaydiv");
    
    // $("li").addClass("displaydiv");
    
  }); 
  


 
$("#ul1").click(function(){
    $("#li1").slideToggle();
  });

  $("#ul2").click(function(){
    $("#li2").slideToggle();
  });