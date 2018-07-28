import React from "react";
import {Players, calculatePlayersPositions} from "../api/Players";
import TitleBar  from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayersList from "./PlayersList";
import { withTracker } from 'meteor/react-meteor-data';


class App extends React.Component {
    render(){
        let title = "score keeper";
        let positionPlayers = calculatePlayersPositions(this.props.players);
        return (
            <div>
                <TitleBar title={title} subtitle={"created by Magho"}/>
                <div className={"wrapper"}>
                    <PlayersList players={positionPlayers}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    // subscribing means having access to data from database so we find it and fetch it then save to our state players
    return {
        players: Players.find({}, {sort :{score : -1}}).fetch(),
    };
})(App);