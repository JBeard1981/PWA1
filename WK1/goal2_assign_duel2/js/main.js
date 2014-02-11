/* Created by Jonathan Beard on 2/11/14. Goal1: Assignment: The Duel - Part II*/


// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name, damage, health
    var playerOne = new Array ("Kabal", 20, 100);
    var playerTwo = new Array ("Kratos",20, 100);

    //initiate round
    var round=0;
    function fight(){
        alert(playerOne[0]+": "+playerOne[2]+"  *START*  "+playerTwo[0]+": "+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+": "+playerTwo[2]);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+": "+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+": "+playerTwo[2]);

            } else if (round<10){
                alert(result);
                break;
            }else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result = playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
        return result;
    };

    /*******  The program gets started below *******/
    fight();

})();