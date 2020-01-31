$(document).ready(() => {
  console.log('work?');
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
      $(document).scroll(function() { 
          scroll_start = $(document).scrollTop();
          if(scroll_start > offset.top) {
              $(".navigation").css('background-color', '#f0f0f0');
          } else {
              $('.navigation').css('background-color', '#000');
          }
      });
  }
});
