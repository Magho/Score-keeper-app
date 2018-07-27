import React from "react";
import PropTypes from "prop-types";
import Player from "./Player";


export default class PlayersList extends React.Component {

    render_players = () => {
        if (this.props.players.length !== 0) {
            // each element of an array must have a key to able react to distinguish them
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>
            });
        }
        else {
            return <p> -- please insert player to start -- </p>;
        }
    };

    render(){
        return (
            <div> {this.render_players()} </div>
        );
    }
}

PlayersList.propTypes = {
    players  : PropTypes.array.isRequired,
};