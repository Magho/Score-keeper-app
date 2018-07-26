import React from "react";
import {Players} from "../api/Players";

export default class AddPlayer extends React.Component {

    handleSubmit = (e) => {
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
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="playerName" placeholder="player name"/>
                    <input type="number" name="playerScore" placeholder="player score"/>
                    <button> Add player </button>
                </form>
            </div>
        );
    }
}