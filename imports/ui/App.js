import React from "react";
import {Players} from "../api/Players";
import TitleBar  from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayersList from "./PlayersList";
import { withTracker } from 'meteor/react-meteor-data';


class App extends React.Component {
    render(){
        let title = "score keeper";
        return (
            <div>
                <TitleBar title={title} subtitle={"made by Magho"}/>
                <PlayersList players={this.props.players}/>
                <AddPlayer/>
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