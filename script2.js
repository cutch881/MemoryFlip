window.addEventListener('load', function(){ 

  createTimer(2.05);
},false);

function createTimer(min){
    var counter = 0;
    var totalTime = min * 60;
     
     var x = setInterval(function() { 
        counter++; 
        
        var t = totalTime - counter; 
        var minutes = Math.floor((t /60)); 
        var seconds = Math.floor((t % 60)); 

        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "; 
            if (t < 0) { 
                clearInterval(x); 
                var timer = document.getElementById("timer");
                timer.innerHTML = "EXPIRED"; 
                timer.style.fontSize = "2em";
                timer.style.color = "red";
                
            }

            document.getElementById("btn").addEventListener("click",function(){
              if (t > 0) {
                clearInterval(x);
              }
            })
        }, 1000); 
} 