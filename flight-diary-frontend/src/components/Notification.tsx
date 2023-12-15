import React, { useState } from 'react'

interface NotificationProps{
    color:string, 
    message:string
}


const Notification: React.FC<NotificationProps> = ({message, color = ""}) => {
    const [visibility, setVisibility] = useState<string>(color)    

    setTimeout(()=>{
        setVisibility("")
      }, 3000)

  return (
    <p style={{color:visibility}}>{message}</p>
  )
}

export default Notification