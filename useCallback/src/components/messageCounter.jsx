import React, { memo } from 'react'

const MessageCounter = (props) => {
  return (
    <div>
        {console.log("messageCounter render")}
        <button className='btn btn-sm btn-secondary my-2' onClick={props.onHandleIncrement} >Increase counter message</button>
    </div>
  )
}

export default memo(MessageCounter);