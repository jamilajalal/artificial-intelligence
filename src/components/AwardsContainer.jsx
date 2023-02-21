import React from 'react'
import Award from './Award.jsx'
import mukafatMelumatlari from './awardsInfo.json'


const AwardsContainer = () => {
  return (
    <div className="row awards-container">
    {

mukafatMelumatlari.map(melumat =>(


  <Award kartinBasligi = {melumat.meqaleninBashligi} kartinMetni ={melumat.meqaleninMetni} kartinShekli ={melumat.shekil}/>
))


    }
    </div>
  )
}

export default AwardsContainer