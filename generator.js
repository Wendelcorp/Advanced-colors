$(function() {

  // Gives a random palette on load
  for(var i=1; i<6; i++){
    var color ='#'+Math.random().toString(16).substr(2,6);
    $("#" + i).css('background-color', color);
    $("#" + i).find(".color-name").html(color);
  }

  // Provides the on click functionality for each swatch
  $('.swatch').on("click", function(){
  var color ='#'+Math.random().toString(16).substr(2,6);
  $(this).css('background-color', color);
  $(this).find(".color-name").html(color);
  });

  // not working, trying to prevent color code from triggering event
  $('h2.color-name').click(function( event ) {
  event.stopPropagation();
  });


  // Reset all colours on spacebar push

  $(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    for(var i=1; i<6; i++){
      var color ='#'+Math.random().toString(16).substr(2,6);
      $("#" + i).css('background-color', color);
      $("#" + i).find(".color-name").html(color);
    }
  }
})

  // Copy hex code to clipboard

  // $(".color").each(function(){
  // 	var color = $(this).data('color');
  // 	$(this)
  // 		.css('background', color)
  // 		.find('span').text(color);
  // });
  //
  // var clipboard = new Clipboard('.color');
  //
  // clipboard.on('success', function(e) {
  // 	$('.copied')
  // 		.fadeIn(200)
  // 		.delay(300)
  // 		.fadeOut(200);
  // 	// alert(e.text);
  // 	e.clearSelection();
  // });



});
