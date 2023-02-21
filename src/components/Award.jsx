import React from 'react'
import './Award.css'

const Award = ({kartinBasligi,kartinMetni,kartinShekli}) => {
  return (
<div class="card col-12 col-md-4 col-lg-2" >
  <img src={kartinShekli} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5   class="card-title">{kartinBasligi}</h5>
    <p  class="card-text">{kartinMetni}</p>
    
  </div>
</div>
  )
}

export default Award