import React from 'react'

import menimCV from '../assets/myCV.pdf'
import profilImg from "../assets/svgs/profil.svg"


import Typed from 'react-typed';
import MovingComponent from "react-moving-text"


import './Introduction.css'
const Introduction = () => {
  return (
    <div className='introduction row'>
        <div className="col-12 col-md-6 col-lg-7 bg-warning">

        <Typed
        className='typing-effect'
                strings={[
                    'Hi',
                    "I'm John",
                    'Creative Programmer',
                    'Microsoft Certified Trainer'
                ]}
                    typeSpeed={40}
                    backSpeed={50}
                   
                    loop >
                  
                </Typed>

                <MovingComponent
  type="fadeInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
 <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

</MovingComponent>
         


<a href={menimCV} className="download-resume" download>Download Resume</a>
        </div>

        <div className="col-12 col-md-6 col-lg-5 bg-success d-flex justify-content-center" data-aos="fade-left">
            <img src={profilImg} alt="SEO cehetden onemli" />
        </div>
    </div>
  )
}

export default Introduction