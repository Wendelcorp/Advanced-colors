$(function() {
  $('.swatch').on("click", function(){
  var color ='#'+Math.random().toString(16).substr(2,6);
  $(this).css('background-color', color);
  $(this).find(".color-name").html(color);
  });

  //not working, trying to prevent color code from triggering event
  $('.color-name').on("click", function(event){
    event.preventDefault();
  });

  //not working, trying to load an initial set of colors
  for(var i=0; i<5; i++){
    var color ='#'+Math.random().toString(16).substr(2,6);
    $(".swatch").css('background-color', color[i]);
  }
});
