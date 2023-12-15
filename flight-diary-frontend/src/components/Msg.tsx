import React from 'react'

interface ErrorProps{
  message: string
}

const ErrorMsg: React.FC<ErrorProps> = ({message}) => {

  const messageSplited = message.split(" ")

  const color = messageSplited.includes("Error:")? "red": "green" 


  return (
    <p style={{color:color}}>{message}</p>
  )
}

export default ErrorMsg