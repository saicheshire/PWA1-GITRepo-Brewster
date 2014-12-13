/*
 Name: Melodie Brewster
 Date: 12/12/2014
 Class & Section:  PWA1-01
 Assignment: Goal4: Assignment: Duel3
 */

    //self-executing function
    (function(){

        console.log(" ** Fight **");            //Prints ** Fight ** to console.log

        //define the dom pieces
        var fighter1_txt = document.querySelector("#kabal").querySelector("p");     //pulls in fighter 1
        var fighter2_txt = document.querySelector("#kratos").querySelector("p");    //pulls in fighter 2
        var round_txt = document.querySelector("h5");   //pulls in h5 text
        var button = document.getElementById("fight_btn");  //pull in main button that starts the game

        console.log();

        //setup click event
        button.addEventListener("click", fight, false);

        //creat array of objects for 2 fighters
        var fighters  = [
            {
                name:"Kabal",   //index0.name
                damage:20,      //index0.damage
                health:100     //index0.health
            },
            {
                name:"Kratos",  //index1.name
                damage:20,      //index1.damage
                health:100     //index1.health
            }];
        var round = 1;

        //initialize DOM innerHTML text for top of HTML page
        round_txt.innerHTML ="Click FIGHT BUTTON to Start!";        //prints text to html page
        fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;     //prints fighter 1's name and health to html page
        fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;     //prints fighter 2's name and health to html page

        //Create "FIGHT" Function
        function fight(){

            fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

                //determine damage
                var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);   //determine fighter 1's damage
                var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);   //determine fighter 2's damage

                //inflict damage
                fighters[0].health -= f1;   //how much damage fighter 1 did
                fighters[1].health -= f2;   //how much damage fighter 2 did

                console.log(fighters[0].health, fighters[1].health);    //prints fighters' health to the console

                //check for winner
                var result = winnerCheck();
                console.log(result);

                round_txt.innerHTML = "ROUND #" + round + " Results:";  //prints the text for the round # and the results to html page
                round++;
                if (result === "no winner") //checks to see if there is a winner
                {
                    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health; //prints fighter 1's name and health to html page
                    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health; //prints fighter 2's name and health to html page

                }else{
                    fighter1_txt.innerHTML = result;
                    fighter2_txt.innerHTML = "";

                    //Disable the button - need the below if using addEventListener
                    button.removeEventListener("click", fight, false);
                    //button.disabled = true;

                    //button.onclick = "return false";

                    document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
                }
        }

        function winnerCheck(){
            var result = "no winner";
            if (fighters[0].health < 1 && fighters[1].health < 1)
            {
                result = "You Both Die - GAME OVER!";
            }else if(fighters[0].health < 1){
                result = fighters[1].name + " WINS!!!"
            }else if(fighters[1].health < 1)
            {
                result = fighters[0].name + " WINS!!!"
            }
            return result;
        }

})();                                           //end self-executing function
