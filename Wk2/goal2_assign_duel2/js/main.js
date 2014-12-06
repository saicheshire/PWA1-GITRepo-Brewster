/*
 Name: Melodie Brewster
 Date: 12/05/2014
 Class & Section:  PWA1-01
 Assignment: Goal2: Assignment: Duel2
 */

    //self-executing function
    (function(){

        var fighter1 = ["Boba Fett", 20, 100];      //Define Array for Fighter #1
        var fighter2 = ["Iron Man", 20, 100];       //Define Array for Fighter #2

        var round = 1;                              //Define global variable for fighter rounds

    //Fighting Function
    function fight(){

        console.log("FIGHT!!!");                    //Console Log "FIGHT!!!"

        //Main pop-up for Fighting Game
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i=0; i<10; i++)                    //Loop through 10 rounds
        {

        //Define variables for Damage using Array Indexes
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //Inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            console.log(fighter1[2]+" "+fighter2[2]);

            //Check for winner: Invoke "winnerCheck function
            var result = winnerCheck();

            console.log(result);                    // Console log out result of "winnerCheck"

            //Display result of "winnerCheck"
            if (result === "no winner")
            {
                round++;
                alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER"+"* "+fighter2[0]+":"+fighter2[2]);
            }else{
                alert(result);
                break;
            }
        }
    }

    function winnerCheck(){
        var result="no winner";

        if (fighter1[2]<1 && fighter2[2]<1)     //Check if both fighters damage is <1 (both lose)
        {
            result = "You Both Die";
        }else if (fighter1[2]<1){                //If only Fighter #1 damage is <1; Fighter #2 wins
            result = fighter2[0] + " WINS!!!";
        }else if (fighter2[2]<1)
        {
            result = fighter1[0] + " WINS!!!";
        }
        return result;
    }

        //The program gets started below//
        fight();


})();                                           //end self-executing function
