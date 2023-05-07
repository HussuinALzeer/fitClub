import React, { useRef } from 'react'
import './join.scss'

import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d0he96h', 'template_8wmacua', form.current, 'VsqzyxVDJ2xbiudTQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Join' id='Join'>
        <div className="left-j">
            <hr />
            <div className="">
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div className="">
                <span >YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>

        <div className="right-j">
            <form ref={form} className="emailContainer" onSubmit={sendEmail}>
                <input type="email"  name='user_email' placeholder='Enter your email address'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join