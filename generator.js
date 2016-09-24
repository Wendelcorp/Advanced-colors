$(function() {

  // Convert hex to rgb
  function hexToRgb(hex) {
    hex = hex.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

  // Gives a random palette on load
  for(var i=1; i<6; i++){
    var color ='#'+Math.random().toString(16).substr(2,6);
    $("#" + i).css('background-color', color);
    $("#" + i).find("#color-" + i + "-hex").html(color);
    var rgb = hexToRgb(color);
    $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
  }

  // Provides the on click functionality for each swatch
  $('.swatch').on("click", function(){
  var color ='#'+Math.random().toString(16).substr(2,6);
  $(this).css('background-color', color);
  $(this).find(".color-name-hex").html(color);
  var rgb = hexToRgb(color);
  $(this).find(".color-name-rgb" ).html(rgb);
  });

  // Prevent color name code from triggering event
  $('.color-name-hex').click(function( event ) {
  event.stopPropagation();
  });

  $('.color-name-rgb').click(function( event ) {
  event.stopPropagation();
  });

  // Reset all colours on spacebar push

  $(window).keypress(function (e) {
  if (e.keyCode === 32) {
    for(var i=1; i<6; i++){
      var color ='#'+Math.random().toString(16).substr(2,6);
      $("#" + i).css('background-color', color);
      $("#" + i).find("#color-" + i + "-hex").html(color);
      var rgb = hexToRgb(color);
      $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
      }
    }
  });

  // Convert to rgb on r-key push
  $(window).keypress(function (e) {
  if (e.keyCode === 82) {
    $(".color-name-hex").css('visibility', 'hidden');
    // $(".color-name-rgb").css('visibility', "visible");
    }
  });





});
