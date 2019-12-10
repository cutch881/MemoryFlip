window.addEventListener('load', function(){ 

//--------------------------------------DO NOT CHANGE----------------------------------------------------------------
        var round1 = new Array();
        var round2 = new Array();
        var card1 = null;
        var card2 = null;
        var selection = 0;
        document.getElementById("btn").disabled = true;
        document.getElementById("btn")
        var container = document.getElementById("cards");
       
        for (var i = 1; i <= 30; i++)
        {
                var div= document.createElement('div');
                var numberGen;

                if(i <=15)
                {
                    numberGen= Math.floor((Math.random() * 30) + 1);
                    var x=0;
                    while(x<=round1.length)
                      {
                          if(numberGen == round1[x])
                          {
                            numberGen= Math.floor((Math.random() * 30) + 1);
                            x=0;
                          }
                          else
                          {
                            x++;
                          }
                      }  
                    round1.push(numberGen);
                }
//------------------------------------------------------------------------------------------------------------------- 
                if(i>15)
                {
                      var y = 0;
                      var pick= Math.floor((Math.random() * 15));
                      while(y<=round2.length)
                      {
                          if(round2[y] == round1[pick])
                          {
                            pick= Math.floor((Math.random() * 15)); 
                            y=0;    
                          }
                          else
                          {
                            y++;
                          }
                      }  
                    numberGen=round1[pick];
                    round2.push(numberGen);
                }

                div.className= numberGen;
                div.innerHTML="<img src=img/question.jpg>";
//-------------------------------------------------------------------------------------------------------------------
                div.addEventListener('click', function(){
                      var num = this.className;
                      if(this.querySelector('img').src=="https://epic-quest-10--markcarvalho.repl.co/img/question.jpg")
                      {     
                            selection++;
                            if(card1 == card2 && card1 != null && card2 !=null)
                            {
                                var match1 =  container.getElementsByClassName(card1);
                                var match2 = container.getElementsByClassName(card2);
                                match1[0].style.border = "3px solid white";
                                match2[1].style.border = "3px solid white";
                                match1[0].innerHTML=""; //can use .remove
                                match2[1].innerHTML=""; //can use .remove
                                card2=null;
                                var checkOnCards = container.querySelectorAll('div');
                                var flipped = 0;
                                for (var u=0 ; u < checkOnCards.length; u++)
                                {
                                  var find = checkOnCards[u].innerHTML;
                                  console.log(find);
                                  if(find =='')
                                  {
                                    flipped++;
                                  }
                                }
                                console.log(flipped);
                                if(flipped == 28)
                                {
                                  document.getElementById("btn").disabled = false;
                                  document.getElementById("btn").style.backgroundColor = "#7CFC00";
                                }
                            }
                            else if(card1 != card2 && card2 != null)
                            {
                                var b = container.getElementsByClassName(card1);
                                var o =container.getElementsByClassName(card2);
                                
                                for (var t=0; t<b.length; t++) {
                                  b[t].innerHTML = "<img src=img/question.jpg>";
                                }
                                
                                for (var k=0; k<o.length; k++) {
                                  o[k].innerHTML = "<img src=img/question.jpg>";
                                }
                                
                                card2=null;
                            }
                            
                            var c = selection%2;
                            if(c == 0)
                            {
                               card2 = num;
                            }

                            else if (c != 0)
                            {
                               card1 = num;
                            }

                            this.innerHTML="<img src=img/images/"+num+".jpg>";
                            var sound = new Audio("sounds/cardFlip.mp3");
                            sound.play();
                            //this.querySelector('img').src ="https://epic-quest-10--markcarvalho.repl.co/img/images/"+num+".jpg"
                            console.log(card1 + " "+card2);
                      }
                });

                container.appendChild(div);
        }
//--------------------------------------------------------------------------------------------------------------------
        console.log(round1);
        console.log(round2);
//--------------------------------------------------------------------------------------------------------------------
}, false);


