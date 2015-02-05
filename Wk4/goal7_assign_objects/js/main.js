//Name: Melodie Brewster
//Date: 12-18-2014
//Class: PWA1 - Section 01
//Assignment: ADDIO Challenge: Analyze Objects MAIN Code


(function(){        //self-executing function

    //Define variables
    var numOfPeople = 3;        //number of people to be shown on the page
    var people = [];            //empty array
    var names = ["Steve", "Michelle", "Todd", "Randy", "Alexa"];    //array of possible names to show on page
    var interval;       //sets how fast the interval is

    //create a loop that instantiates three (3) Person objects
    for (var i = 0; i < numOfPeople; i++) {

        //generate a number up to the names.length which is 5
        var personIndex = Math.floor(Math.random()*names.length);

        //use keyword to setup new person object
        var person = new Person(names[personIndex], i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }

    //makes sure only one interval is running at a time and clears out the old before running the new
    clearInterval(interval);

    //set interval to 30 FPS
    //the setInterval() method will continue calling the function until clearInterval() is called, or window closes
    //the id value returned by setInterval() is used as the parameter for the clearInterval() method

    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }

    function runUpdate(){
        people.forEach(function(element){
            //console.log(element);
            //element = the items in the people array
            //.update = the prototype method in the person_blueprint.js file
            element.update();
        });
    }
})();