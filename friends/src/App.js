import React, { Component } from 'react';
import './App.css';  // design the state object - w props; build reducers w/ dummy data; create actions 
import FriendsList from './containers/FriendsList';
import AddFriend from './containers/AddFriend';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
    	<AddFriend />
    	<FriendsList />
      </div>
    );
  }
}

export default App;