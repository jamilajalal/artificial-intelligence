import React from 'react'

const Button = ({buttonunIcindekiDeyer  , iconShekli}) => {
   
   
  return (
    <button className="btn btn-primary">{iconShekli  && <img src={iconShekli}  /> }{buttonunIcindekiDeyer}</button>

  )
}

export default Button