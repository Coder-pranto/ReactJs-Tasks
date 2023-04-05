import React from 'react'

const MessageCounter = (props) => {
  return (
    <div>
        {console.log("messageCountter render")}
        <p>{props.counter}</p>
    </div>
  )
}

export default MessageCounter