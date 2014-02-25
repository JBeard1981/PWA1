/* Created by Jonathan Beard on 2/20/14. Goal4: Assignment: The Duel - Part III*/


// self-executing function
(function(){

    //sets var roundNumber query selector and fightNow query selector to prepare for the button action
    //and updating the input form field set with round numbers and winner information.
    var roundNumb = document.querySelector("#round_number input");
    var fightNow = document.querySelector("#fight_btn a");
   
    
    // calls out the fightNow variable as an on click action which allows
    //you to click the button and check if the fighters are alive if they
    //are both alive then it will allow the fight function to run and the
    //fight to continue. If not. then it will print out to the console
    // "Somebody dun got ded!" and disable the button.
    fightNow.onclick = function(e) { 

        e.preventDefault();
        
        if(playerOne.health>0 && playerTwo.health>0){
        fight();
        }else{ console.log("Somebody dun got ded!") }
        
        
        
    }

    console.log("FIGHT!!!");

    //player name, damage, health stored in an objects playerOne and playerTwo
    var playerOne = {name:"Kabal", damage:20, health:100};
    var playerTwo = {name:"Kratos", damage:20, health:100};

    var player1 = document.querySelector("#kabal p");
    player1.innerHTML=playerOne.name + " " + playerOne.health;
    var player2 = document.querySelector("#kratos p");
    player2.innerHTML=playerTwo.name + " " +playerTwo.health;
    
    //initiate round
    var round=1;
    function fight(){
        
        

        
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5;
            var minDamage2 = playerTwo.damage * .5;
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

            //inflict damage
            playerOne.health-=f1;
            playerTwo.health-=f2;
            player1.innerHTML=playerOne.name + " " + playerOne.health;
            player2.innerHTML=playerTwo.name + " " +playerTwo.health;
            roundNumb.setAttribute("value","Round: "+round)
            console.log(playerOne.name+": "+playerOne.health + " round: "+ round + " " +playerTwo.name+":"+playerTwo.health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (round>10){
                roundNumb.setAttribute("value",result)
           
            } else{
                round++;
};

    };

    function winnerCheck(){
        var result="no winner";
        if (playerOne.health<1 && playerTwo.health<1)
        {
            result = "You Both Die";
            roundNumb.setAttribute("value",result)
        } else if(playerOne.health<1){
            result = playerTwo.name+" WINS!!!"
            roundNumb.setAttribute("value",result)
        } else if (playerTwo.health<1)
        {
            result = playerOne.name+" WINS!!!"
            roundNumb.setAttribute("value",result)
        };
        return result;
    };

    /*******  The program gets started below *******/
   

})();