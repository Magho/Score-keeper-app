import React from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import FlipMove from "react-flip-move"

export default class PlayersList extends React.Component {

    render_players = () => {
        if (this.props.players.length !== 0) {
            // each element of an array must have a key to able react to distinguish them
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>
            });
        }
        else {
            return (
                <div className={"item"}>
                    <p className={"item__message item__message--empty"}>  please insert player to start  </p>
                </div>
            );
        }
    };

    render(){
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                {this.render_players()}
                </FlipMove>
            </div>
        );
    }
}

PlayersList.propTypes = {
    players  : PropTypes.array.isRequired,
};