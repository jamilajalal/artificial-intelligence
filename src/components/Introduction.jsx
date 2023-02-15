import React from 'react'
import './Introduction.css'
import playIcon from '../assets/images/playIcon.svg'
import Button from './Button'
import rightSideImg from '../assets/images/profil.svg'
import Typed from 'react-typed';
const Introduction = () => {
  return (




    
<div className="introduction row">

<div className="intro-left-side  col-12 col-md-6 ">

<h6>Next genaretion platform</h6>

<Typed
className='yazieffekti'
                strings={[
                    'Artificial intelligence', 
                    '& Syber security'
                  ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
               
                </Typed>

<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

<Button buttonunIcindekiDeyer = 'Get started' />
<Button  buttonunIcindekiDeyer = 'Watch video'  iconShekli={playIcon}  />

</div>



<div className="intro-right-side col-12 col-md-6">

<img src={rightSideImg} alt="" className='w-100' />

</div>
</div>







  )
}

export default Introduction