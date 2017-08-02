import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { bindActionCreators } from 'redux';
import friend from '../components/friend';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getAmigos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.amigo.map((friend, i) => {
            return (
              // replace all this with friend component.
              <li key={i}>
                <p>{`Friend ${i + 1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amigo: state.friends // << this friends comes from redux state
    /* ^^^ this friends aka amigo will become props on map function */
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAmigos: getFriends }, dispatch);
  // REACT side: REDUX side
  // getFriends is imported from actions
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
// FriendsList is the component that is passed to f(x) that returns from connect. 

// connect turns dumb into smart component 