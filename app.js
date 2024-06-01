var val = "Будь сама собо'й Ты не одна!"
var index = 0;

var display = setInterval(function(){
  $(".words").append(val.charAt(index));
  index++;
  
  if(index == val.length){
    $(".words").animate({
      top: '20px'
    }, function(){
      
      $(".words").append("<p>Алла, в твоих глазах я видел свет  и отражение души.</p><p>Твоя улыбка – моя самая красивая мелодия, звучащая в сердце.</p><p>Твоя нежность согревает меня, словно я прозрел и снова родился.</p><p>С тобой я ощущаю, что могу покорить мир, потому что ты – моя сила и вдохновение.</p><p>Алла, ты – моя незабвенная и любимая девочка!</p>").fadeIn(500);
    })
    
    clearInterval(display);
  }
}, 250);


$("#heart").mouseenter(function(){
 $("#heart2").fadeOut(100).fadeIn(300);
})

 setTimeout(function() {
      location.reload();
     }, 16000);
    


    

