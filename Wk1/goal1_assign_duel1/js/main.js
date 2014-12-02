/*
 Name: Melodie Brewster
 Date: 11/30/2014
 Class & Section:  PWA1-01
 Assignment: Goal1: Assignment: Duel1
 */

//self-executing function
(function(){

    console.log("FIGHT!");                      //console logged FIGHT! to make sure javascript file was working

    //player name
    var playerOneName = "Spiderman";            //created variable for player one's name which is Spiderman
    var playerTwoName = "Batman";               //created variable for player two's name which is Batman

    //player damage
    var player1Damage = 20;                     //created variable for player one's max damage which is 20
    var player2Damage = 20;                     //created variable for player two's max damage which is 20

    //player health
    var playerOneHealth = 100;                  //created variable for player one's max health which is 100
    var playerTwoHealth = 100;                  //created variable for player two's max health which is 100

    var round = 0;                              //created variable for the rounds

    function fight(){                           //set up fight function
        console.log('in the fight function');   //troubleshoot to make sure fight function is working

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth); //create an alert box to show the user the player names and their health

        for (var i=0; i < 10; i++){             //create for loop to fight for 10 rounds

            //random formula is - Math.floor(Math.random() * (max - min) + min)

            var minDamage1 = player1Damage * .5;    //create variable for player one's minimum damage
            var minDamage2 = player2Damage * .5;    //create variable for player two's minimum damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);   //generate random number for player one's damage
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);   //generate random number for player two's damage

            //inflict damage
            playerOneHealth-=f1;    //subtract the random number generated from player one's health
            playerTwoHealth-=f2;    //subtract the random number generated from player two's health

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);//console log to make sure code is working correctly

            var results = winnerCheck();      //create a results variable which calls the winnerCheck function
            console.log(results);             //console logs results to make sure code is working properly

            if (results === "no winner"){    //if round results in no winner, the next round starts
                round++;                    //adds one to the round
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth); //if no winner, user is shown that the round is over and shows the health of each player after that round
            }else{                          //used if there is a winner
                alert(results);             //shows user who the winner is or if both players die
                break;                      //breaks out of the loop and exits
            }

        }       //end for loop

    }       //end fight function

    function winnerCheck(){                     //set up winner check function
        console.log("in winnerCheck FN");
        var result = "no winner";                 //create variable for the result if there isn't a winner

        if (playerOneHealth < 1 && playerTwoHealth < 1){    //if both player's health are less than 1
            result = "You Both Die";                        //message that both players die is shown
        }else if(playerOneHealth < 1){                      //if player one's health is less than one
            result = playerTwoName + " WINS!!!"             //message that player two wins is shown
        }else if(playerTwoHealth < 1){                      //if player two's health is less than one
            result = playerOneName + " WINS!!!"             //message that player one wins is shown
        }                                                   //end if else statement

        return result;                                      //return the value of result from the function

    }                                                       //end winnerCheck function

    //The program gets started below
    console.log('program starts');              //troubleshoot to make sure program starts
    fight();                                    //set up a call for the fight function

})();                                           //end self-executing function
