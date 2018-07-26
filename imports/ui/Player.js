import React from 'react';
import {Players} from "../api/Players";
import PropTypes from "prop-types";

export default class Player extends React.Component {
    render(){
        return (
            <p>
                {this.props.name} has {this.props.score} point(s)
                <button onClick={() => {Players.update({_id : player._id}, {$inc : {score: 1}});}}>+1</button>
                <button onClick={() => {Players.update({_id : player._id}, {$inc : {score: -1}});}}>-1</button>
                <button onClick={() => {Players.remove({_id : player._id});}}>X</button>
            </p>
        );
    }
}
Player.propTypes = {
    name  : PropTypes.string.isRequired,
    score : PropTypes.number.isRequired,
};