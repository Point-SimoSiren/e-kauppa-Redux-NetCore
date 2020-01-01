import React from 'react'
import { connect } from 'react-redux'

/* Component to show welcome message and notifications decided in other components user events through application level redux store state */

const Notification = (props) => {
  const notifyingStyle = {
    color: 'white',
    fontSize: 20,
    padding: 20,
    paddingLeft: 120,
    paddingRight: 120,
    marginRight: 40,
    background: 'darkGreen',
    borderStyle: 'solid',
    borderColor: 'white'
  }

  const message = props.notification

  if (message) {
    return (
      <div style={notifyingStyle}>
        {props.notification}
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}
const connectedNotification = connect(mapStateToProps)(Notification)
export default connectedNotification