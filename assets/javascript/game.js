$(document).ready(function(){
    //Picks random number the crystal needs to select between 19-120
    var ranNum = Math.floor(Math.random()*101+19);
    var crys1= Math.floor(Math.random()*12)
    var crys2= Math.floor(Math.random()*12)
    var crys3= Math.floor(Math.random()*12)
    var crys4= Math.floor(Math.random()*12)
    
    $('#compNum').text(ranNum);

    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function clearGame(){
        ranNum=Math.floor(Math.random()*101+19);
        $('#compNum').text(Random);
        crys1= Math.floor(Math.random()*12);
        crys2= Math.floor(Math.random()*12);
        crys3= Math.floor(Math.random()*12);
        crys4= Math.floor(Math.random()*12);
        userTotal= 0;
        $('#gameScore').text(score);
    } 
    
    //win or loss functions, both clear all variables and restart game
    function loss(){
        alert ("Boo hoo! You lose!");
        losses++;
        $('#losses').text(losses);
        clearGame()
    }
    function win(){
        alert ("You go, Glen Coco!");
        wins++;
        $('#wins').text(wins);
        clearGame()
    }
    $('#blue').on ('click', function(){
        playerTotal = playerTotal + crys1;
        $('#gameScore').text(playerTotal); 
            if (playerTotal == ranNum){
              win();
            }
            else if (playerTotal > ranNum) {
              loss();
            }   
            //i keep getting an error is i use just an "else" condition so I am not sure if I am doing something wrorg
      })  

    $('#green').on ('click', function(){
        playerTotal = playerTotal + crys2;
        $('#gameScore').text(playerTotal); 
            if (playerTotal == ranNum){
              win();
            }
            else if (playerTotal > ranNum){
              loss();
            } 
      })  

    $('#red').on ('click', function(){
        playerTotal = playerTotal + crys3;
        $('#gameScore').text(playerTotal); 
            if (playerTotal == ranNum){
              win();
            }
            else if (playerTotal > ranNum){
              loss();
            } 
      })  

    $('#yellow').on ('click', function(){
        playerTotal = playerTotal + crys4;
        $('#gameScore').text(playerTotal); 
            if (playerTotal == ranNum){
              win();
            }
            else if (playerTotal > ranNum){
              loss();
            } 
      });
    });

