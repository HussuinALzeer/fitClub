import React, { useEffect, useRef } from 'react'
import './header.scss'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { useState } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'



const Header = () => {

  const ref = useRef(null);



  useEffect(() => {
    
    var prevScrollpos = window.pageYOffset;
    const span = ref.current

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // document.getElementById("navbar").style.top = "0";
        span.className="header"
        
      } else {
        // document.getElementById("navbar").style.top = "-50px";
        span.className="hidden"
      }

      if(currentScrollPos < 5){
        span.className="normal"
        span.id=""
        console.log('log');

      }
      prevScrollpos = currentScrollPos;
    }

  }, [])
  

  const [dot, setDot] = useState(false)
  const link = [
    {name:'Home'},
    {name:'Programs'},
    {name:'Why us'},
    {name:'Plans'},
    {name:'Testimonials'},
  ]
  return (
    <>
    <div className='header'  ref ={ref} id="header">
        <img className='logo' src={logo} alt="" />

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us </li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
    
    <div className="header-phone">
    
        <img className='logo' src={logo} alt="" />
        <button onClick={() => setDot(!dot)}>
          <img src={menu} alt="" />
        </button>
        
        <div className={`bg-menu ${dot ? 'active' : ''}`}>
          {dot &&  
          <motion.ul className='header-menu'> 
             
              <motion.li 
                initial={{x:50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1.5}}
                >
                  <Link
                  onClick={() => setDot(false)}
                  to='Hero' span={true} smooth={true}

                  >Home</Link>
              </ motion.li>


            <motion.li 
                    initial={{x:50,opacity:0}}
                    whileInView={{x:0,opacity:1}}
                    transition={{duration:1.5,delay:.3}}
                    onClick={() => setDot(!dot)}
                    ><Link
                    onClick={() => setDot(false)}
                    to='Programs' span={true} smooth={true}

                    >Programs</Link>
            </ motion.li>

            <motion.li 
               initial={{x:50,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{duration:1.5,delay:.6}}
               onClick={() => setDot(!dot)}
               ><Link
               onClick={() => setDot(false)}
               to='Reason' span={true} smooth={true}

               >Why us</Link>
            </ motion.li>

            <motion.li 
               initial={{x:50,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{duration:1.5,delay:.9}}
               onClick={() => setDot(!dot)}
               >
                <Link
                onClick={() => setDot(false)}
                to='Plans' span={true} smooth={true}

                >Plans</Link>
            </ motion.li>

            <motion.li 
               initial={{x:50,opacity:0}}
               whileInView={{x:0,opacity:1}}
               transition={{duration:1.5,delay:1.2}}
              
              >
                <Link
                 onClick={() => setDot(false)}
                  to='testa' span={true} smooth={true}
                >Testimonials</Link>
              </ motion.li>
            </motion.ul>
          }
            
        </div>
    
    </div>

    
    </>
    
  )
}

export default Header