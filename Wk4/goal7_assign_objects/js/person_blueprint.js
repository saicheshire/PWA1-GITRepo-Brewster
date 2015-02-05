//Name: Melodie Brewster
//Date: 12-18-2014
//Assignment: Goal 7: Advanced Objects Person Blueprint

(function(){

    //Add the person object to the global window object - main.js needs it
    window.Person=Person;       //stores person names

    //define all possible job choices and actions for all the Person instances
    Person.jobs = ["teacher","actor","student","pilot"];        //storing jobs that will be picked at random for each person on page
    Person.actions = ["sleeping","eating","working"];       //storing actions each person is doing

    function Person(name,row){
        console.log("Person Created: ", name);      //prints the person's name created to the console log

        this.name = name;       //sets the person's name

        //sets initial action for each person randomly
        this.action = Person.jobs[Math.floor(Math.random()*Person.actions.length)];

        //sets job per person randomly
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines row so JS knows what row in the HTML to update the text in
        this.row = row;

        //displays initial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    //Person's update method.  This function occurs 30 times a second and
    //randomly determines if the action changes for each person

    Person.prototype.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }
})();
