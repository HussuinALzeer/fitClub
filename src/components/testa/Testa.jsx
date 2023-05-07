import React from 'react'
import './testa.scss'

import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


import { motion,AnimatePresence } from 'framer-motion'



const Testa = () => {

    const transition = {type:'spring',duration:1}


    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const left = () => {
   
        selected===0 ? setSelected(tLength - 1) :
        setSelected((prev) => prev - 1)
    }

    const right = () => {
   
        selected === tLength - 1 ? setSelected(0) :
        setSelected((prev) => prev + 1)
}

  return (
    <div className='Testa' id='testa'>
        <div className="left-t">
            <span>Testimonals</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <AnimatePresence exitBeforeEnter>
                <motion.span 
                key={selected}
                initial={{opacity:0,x:-100}}
                animate= {{opacity:1,x:0}}
                transition={{type:'tween'}}
                exit = {{opacity:0,x:-100}}
                >
                    {testimonialsData[selected].review}
                </motion.span>
            </AnimatePresence>

            <AnimatePresence exitBeforeEnter>
            <motion.span
                 key={selected}
                 initial={{opacity:0,x:-100}}
                 animate= {{opacity:1,x:0}}
                 transition={{type:'tween'}}
                 exit = {{opacity:0,x:-100}}
                // transition={{duration:1}}
            >   
                <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span> {" "}
                - {testimonialsData[selected].status}
            </motion.span>
            </AnimatePresence>

        </div>
        <div className="right-t">
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition ={transition}
            className="">

            </motion.div>
           
            <motion.div
                 initial={{opacity:0,x:100}}
                 whileInView={{opacity:1,x:0}}
                transition ={transition}
            className=""></motion.div>
            <AnimatePresence exitBeforeEnter>
                <motion.img
                    key={selected}
                    initial={{opacity:0,x:-100}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0,x:100}}
                    transition={{duration:0.5}}
                className='img' src={testimonialsData[selected].image} alt="" />
            </AnimatePresence>
            <div className="arrows">
                <img src={leftArrow} alt=""  onClick={left} />
                <img src={rightArrow} alt="" onClick={right} />
            </div>
        </div>
    </div>
  )
}

export default Testa