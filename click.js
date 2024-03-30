
  function hover() {
    var audio = new Audio('sfx/Wii U - Hover.mp3');
audio.play();
  }





  function back() {
    var audio = new Audio('sfx/Wii U - Back.wav');
audio.play();
  }



  function click() {
    var audio = new Audio('sfx/Wii U - Long Click.mp3');
audio.play();
  }


  
  


    
    var ImageId = document.getElementById("image");
        if (ImageId.addEventListener) {
            ImageId.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            }, false);
        } else {
            ImageId.attachEvent('oncontextmenu', function() {
                window.event.returnValue = false;
            });
        }
