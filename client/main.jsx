// import from npm just, type the module name
import React from 'react';
import ReactDOM from 'react-dom';

// import from  meteor modules, type meteor then module name
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// import from the imports folder, type the path
import {Players} from "../imports/api/Players";
import TitleBar  from "../imports/ui/TitleBar";
import Player from "../imports/ui/Player";
import AddPlayer from "../imports/ui/AddPlayer";

let players;
const render_players = () => {
    // each element of an array must have a key to able react to distinguish them
    return players.map((player) => {
        return <Player key={player._id} name={player.name} score={player.score}/>
    });
};


// all it do is waiting for dom to be rendered and then execute what is in it
Meteor.startup( () => {
    let title = "score keeper";
    // this track changes from the server side and update when a available
    Tracker.autorun( () => {
        players = Players.find().fetch();
        let jsx = (
            <div>
                <TitleBar title={title}/>
                {render_players()}
                <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});






