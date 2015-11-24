console.log("do you copy... yes yes i copy");

var currentMousePos = {x: 0, y: 0};

$(document).on('mousemove', function(e){
  currentMousePos.x = e.pageX;
  currentMousePos.y = e.pageY;

})

//cat movement with mouse cursor
$(document).mousemove(function(e){
  console.log(e.clientY, e.clientX);
  $('.doc').css({'top': e.clientY , 'left': e.clientX });
});




$(document).ready(function() {
  $('.image').mouseover(function(){
      $(this).css({
          left:(Math.random()*300)+"px",
          top:(Math.random()*300)+"px",

      });
  });
});
$(document).ready(function(){
    $("div").click(function(){
        $(".image").remove();
      })
    })
