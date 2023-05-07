import React from 'react'
import Header from '../header/Header'
import './hero.scss'

import Hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import { motion } from 'framer-motion'

import { useSpring ,animate } from 'framer-motion'
import Programs from '../programs/Programs'
import Reason from '../reasons/Reason'
import Plans from '../plans/Plans'
import Testa from '../testa/Testa'
import Join from '../Join/Join'
import Footer from '../footer/Footer'


// function Number ({n}) {
//     const {number} = useSpring({
//       from:{number:0},
//       number:n,
//       delay:200,
//       config:{mass:1, tension:20, fraction:10}
//     });
//     return <animated>{number.to((n) =>n.toFixed(0))}</animated>
  
//   }


const Hero = () => {

    const transition = {type:'tween',duration:3}

    const mobile =window.innerWidth <= 768 ? true : false;

    return ( 
        <>
    <div className='hero' id='Hero'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
             
            <div className="the-best-ad">
                <motion.div 
                initial={{left: mobile ? "138px" : '238px'}}
                whileInView= {{left:'9px'}}
                // animate={{left:'9px'}}
                transition={transition}
                ></motion.div>
                <span>the best Fitness club in the area</span>
            </div>

            <div className="hero-text">
                <div className="">
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>

                <div className="">
                    <span>Ideal body</span>
                </div>

                <div>
                    <span>In here we will help you to shape and build your ideal body and live up to your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div className="">
                    <span>
                        +140
                    </span>
                    <span>expert coaches</span>
                </div>

                <div className="">
                    <span>+978</span>
                    <span>members joined</span>
                </div>
            
                <div className="">
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>

        </div>
        <div className="right-h">
            <button className='btn'> Join now</button>

            <motion.div
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                 className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={Hero_image} alt="" className='Hero_image' />
            <motion.img 
                initial={{opacity:0}}
                animate={{opacity:[0,1]}}
                transition={transition}
            src={Hero_image_back} alt="" className='Hero_image_back' />

            <motion.div
                initial={{right:'37rem'}}
                whileInView={{right:'32rem'}}
                transition={transition}
            className="calories">
              
                <img src={Calories} alt="" />
                <div className="">
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
                
            </motion.div>
        </div>
    </div>

    <Programs/>
      <Reason/>
      <Plans/>
      <Testa/>
      <Join/> 
      <Footer/>

    </>
  )
}

export default Hero