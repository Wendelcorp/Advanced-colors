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

  // Prevent color name code from triggering event
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

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }



});
