// import from npm just, type the module name
import React from 'react';
import ReactDOM from 'react-dom';

// import from  meteor modules, type meteor then module name
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// import from the imports folder, type the path
import {Players} from "../imports/api/Players";

let players;
const render_players = () => {
    // each element of an array must have a key to able react to distinguish them
    return players.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s)
                <button onClick={() => {Players.update({_id : player._id}, {$inc : {score: 1}});}}>+1</button>
                <button onClick={() => {Players.update({_id : player._id}, {$inc : {score: -1}});}}>-1</button>
                <button onClick={() => {Players.remove({_id : player._id});}}>X</button>
            </p>
        )
    });
};

const handleSubmit = (e) => {
    // prevent full page refresh done with form submitting
    e.preventDefault();
    let playerName = e.target.playerName.value;
    let playerScore = parseInt(e.target.playerScore.value);
    if (playerName) {
        e.target.playerName.value = ''; // clear input value
        e.target.playerScore.value = ''; // clear input value
        Players.insert({
            name  :  playerName  ,
            score :  playerScore ,
        });
    }

};
// all it do is waiting for dom to be rendered and then execute what is in it
Meteor.startup( () => {

    let title = "Score keeper app";
    let name = "Magho";

    // this track changes from the server side and update when a available
    Tracker.autorun( () => {
        players = Players.find().fetch();
        let jsx = (
            <div>
                <h1> {title} </h1>
                <p> Hello my name is : {name}  </p>
                <p> this is my second p. </p>
                {render_players()}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="player name"/>
                    <input type="number" name="playerScore" placeholder="player score"/>
                    <button> Add player </button>
                </form>
            </div>

        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});





