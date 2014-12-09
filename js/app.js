    function updateClock(){
    
        var currentTime = new Date ( );
        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        var currentSeconds = currentTime.getSeconds ( );
        var currentMilliseconds = currentTime.getMilliseconds();
 
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
        currentMilliseconds = (currentMilliseconds < 10 ? "0" : "") + currentMilliseconds;
        
        var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
 
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;
 
          var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + currentMilliseconds + " " + timeOfDay;
     
        $("#clock").html(currentTimeString);
        isEven(currentSeconds);
         
        function isEven(currentSeconds) {
            if (currentSeconds%2 == 0) {
                $(".clockContainer").css("background-color","blue")
            } else {
		$(".clockContainer").css("background-color","black")
            };
        };
    };
 
$(document).ready(function(){
  setInterval('updateClock()', 60);
  
  $( ".fade p" ).hide();
  $( ".fade p" ).fadeIn(5000);
  $( ".fade p" ).fadeOut(5000);
  $( ".fade p" ).fadeToggle(5000);
  
  var count=0;
  $(".vader").hide();
  $(".explode").hide();
  
  $(".animate .inner img").click(function(){
    $("img").animate({
      right:'250px',
      height:'+=150px',
      width:'+=150px'
      })
    count = count+1;
    console.log(count);
    
    if (count===4) {
        $(".vader").fadeIn(3000);
        $(".animate .inner img").fadeOut(2000);
    }
    
    $(".vader").mousedown(function() {
        $(".vader").slideUp(5000);
        $(".explode").fadeIn(3000);
        playExplode();
        console.log("played explode");
        $(".explode").animate({width:800},"slow");
    });
    
    $(".explode").mousedown(function() {
        playYahoo();
        console.log("playedYahoo!");
        $(".explode").fadeOut(5000);
    });
    
   });
    
    function playExplode() {
        $("#explode-sound")[0].volume = 0.5;
        $("#explode-sound")[0].load();
        $("#explode-sound")[0].play();
    };
    
    function playYahoo() {
        $("#yahoo-sound")[0].volume = 1.0;
        $("#yahoo-sound")[0].load();
        $("#yahoo-sound")[0].play();
    };  
  
});

