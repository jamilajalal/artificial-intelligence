import React from 'react'
import './Apply.css'
import applylogo from '../assets/images/applylogo.svg'
import Button from './Button'
const Apply = () => {
  return (
  
<div className="apply row">

<div className="apply-left-side col-12 col-md-6 ">

    <img src={applylogo} alt=""className='w-100'/>
</div>



<div className="apply-right-side col-12 col-md-6 ">
<h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>



<Button buttonunIcindekiDeyer = 'Learn More' />
</div>

</div>

  )
}

export default Apply