import React from 'react'
import solutionsImg from '../assets/images/solutions.svg'
import './Solutions.css'
import Solution from './Solution'
const Solutions = () => {
  return (
    <div className="solutions row">
    <div className="solutions-left-side col-12 col-md-6">

<h1 style={{color:"#fff"}}>What our clients say about our awesome solutions</h1>
<Solution />




    </div>



    <div className="solutions-right-side col-12 col-md-6">
<img src={solutionsImg} alt="" className='w-100'/>


    </div>



    </div>
  )
}

export default Solutions