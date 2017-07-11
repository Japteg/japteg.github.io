
$("#menuOpenBtn").click(function(){
  $("#menu").css({
    "opacity" : "1",
    "z-index" : "2"
  });
  $("#menu .menu-content").animate({opacity:1}).css({
    "z-index" : "3",
    "height" : ""
  });
});


$("#closebtn").click(function(){
  $("#menu").css({
    "opacity" : "0",
    "z-index" : "-1"
  });
  $("#menu .menu-content").animate({opacity:0}).css({
    "z-index" : "-1",
    "height" : "0%"
  });
});
