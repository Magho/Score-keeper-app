// import from npm just, type the module name
import React from 'react';
import ReactDOM from 'react-dom';

// import from  meteor modules, type meteor then module name
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

// import from the imports folder, type the path
import App from "../imports/ui/App";
// all it do is waiting for dom to be rendered and then execute what is in it
Meteor.startup( () => {
        ReactDOM.render(<App/>, document.getElementById('app'));
});






