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

  // Palette reset
  function resetSwatches(color) {
    $("#" + i).css('background-color', color);
    $("#" + i).find("#color-" + i + "-hex").html(color);
    var rgb = hexToRgb(color);
    $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
  }

  // Gives a random palette on load
  for(var i=1; i<6; i++){
    var color = randomColor();
    resetSwatches(color)
  }

  // Provides the on click functionality for each swatch
  $('.swatch').on("click", function(){
  var color = randomColor();
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
          var color = randomColor();
          $("#" + i).css('background-color', color);
          $("#" + i).find("#color-" + i + "-hex").html(color);
          var rgb = hexToRgb(color);
          $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
          }
        }
    });

  // Convert to rgb on r-key push, hex on h- key push

  window.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 82) { //r key
        $(".color-name-hex").css('visibility', 'hidden');
        $(".color-name-rgb").css('visibility', "visible");
        console.log("r pressed")
    }
    else if (code === 72) { //h key
        $(".color-name-hex").css('visibility', 'visible');
        $(".color-name-rgb").css('visibility', "hidden");
    }
    else if (code === 80) { //p key for pastel
      for(var i=1; i<6; i++){
          var color = randomColor({luminosity: 'light'});
          $("#" + i).css('background-color', color);
          $("#" + i).find("#color-" + i + "-hex").html(color);
          var rgb = hexToRgb(color);
          $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
          }
        }
    else if (code === 77) { //m key for monochrome
      for(var i=1; i<6; i++){
          var color = randomColor({hue: 'monochrome'});
          $("#" + i).css('background-color', color);
          $("#" + i).find("#color-" + i + "-hex").html(color);
          var rgb = hexToRgb(color);
          $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
          }
        }
    else if (code === 84) { //t key for themed colors
      var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink',];
      var rand = colorArray[Math.floor(Math.random() * colorArray.length)];
      for(var i=1; i<6; i++){
          var color = randomColor({hue: rand});
          $("#" + i).css('background-color', color);
          $("#" + i).find("#color-" + i + "-hex").html(color);
          var rgb = hexToRgb(color);
          $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
          }
        }
    else if (code === 65) { //a key for anything
      for(var i=1; i<6; i++){
          var color = randomColor({hue: 'random',luminosity: 'random'});
          $("#" + i).css('background-color', color);
          $("#" + i).find("#color-" + i + "-hex").html(color);
          var rgb = hexToRgb(color);
          $("#" + i).find("#color-" + i + "-rgb" ).html(rgb);
          }
        }
  };

//
});
