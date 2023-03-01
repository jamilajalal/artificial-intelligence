import React from 'react'
import './About.css'
import aboutPhoto from '../assets/images/ABB_Logo.png'
const About = () => {
  return (
    <div className='p-5 mt-5 bg-secondary text-center display-1 about row'>

<div className="about-left-side col-12 col-md-6">

    <img src={aboutPhoto} alt="" />
</div>

<div className="about-right-side col-12 col-md-6">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi doloremque aut mollitia quaerat sint vitae magni distinctio voluptatem ipsam? Autem dolores quam velit facilis. Totam facere fuga saepe quo soluta aspernatur assumenda suscipit incidunt itaque, consectetur et nihil consequatur accusamus reiciendis eius excepturi odit dicta debitis pariatur? Perferendis, magnam.</p>



</div>

    </div>
  )
}

export default About