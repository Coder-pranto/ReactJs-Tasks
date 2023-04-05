import React,{ memo }  from 'react'

const Message = () => {
  return (
    <div>
        {console.log("message render")}
    </div>
  )
}

export default memo(Message)