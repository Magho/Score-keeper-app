import {Meteor} from 'meteor/meteor'
import {Players} from "../imports/api/Players";

// this function runs when server is ready
Meteor.startup(function () {
    // we don't have to create _id in our document as meteor do this for us
    // the id generated is not (0,1,2,...) it is a random collection of characters and numbers
    Players.insert({
        name  :  "Ali" ,
        score :  100     ,
    });

    console.log(Players.find().fetch());
});

