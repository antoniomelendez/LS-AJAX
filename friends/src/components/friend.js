import React from 'react';

const Friend = () => {
  return (
    <div>

      <p>{`Friend ${this.props.i + 1}`}</p>
      <p>{`Name: ${this.props.friend.name}`}</p>
      <p>{`Age: ${this.props.friend.age}`}</p>
      <p>{`Email: ${this.props.friend.email}`}</p>

    </div>
  )
}
export default Friend;