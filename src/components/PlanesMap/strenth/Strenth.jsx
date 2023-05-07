import React, { useState } from 'react'
import './strenth.scss'
import { strenthData } from '../../table/Data'
import { connect } from 'react-redux'
import { setCurrentExercis } from '../../../redux/exersices/exersices.action'
import Card from '../../card/Card'
import Tablee from '../../table/Tablee'
import logo from '../../../assets/logo.png'

import { motion,AnimatePresence } from 'framer-motion'

import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { MenuData } from './menu-info'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useEffect } from 'react'
import { useRef } from 'react'

function move_up() {
    document.getElementById('box').scrollTop += 300;
  }

  function move_down() {
    document.getElementById('box').scrollTop -= 300;
  }

const Strenth = ({currentExersice,setCurrentExercis}) => {

    const [first, setfirst] = useState(false)
    const [color, setColor] = useState(MenuData[2].color)
    const [image, setImage] = useState(MenuData[0].image)
    const [selected, setSelected] = useState(0);

    const [scroll, setscroll] = useState(true)

    const navigate = useNavigate()

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const lastScrollTop = useRef(0);

    useEffect(() => {
      window.addEventListener(
        "scroll",
        () => {
          var { pageYOffset } = window;
          if (pageYOffset > lastScrollTop.current) {
            // downward scroll
            setIsNavbarVisible(true);
          } else if (pageYOffset < lastScrollTop.current) {
            // upward scroll
            setIsNavbarVisible(false);

          } // else was horizontal scroll
          
          lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
        },
        { passive: true }
      );
    }, []);

    

  return (
    
    <div className='strenth-container'>

        <div className="headers">
            <div className="title" onClick={() => navigate('/')}>
                <img src={logo} alt="" />
            </div>
            <ul className="links">
                <li className="link">link1</li>
                <li className="link">link1</li>
                <li className="link">link1</li>
                <li className="link">link1</li>
            </ul>

            <div className="phone-menu" onClick={()=> setfirst(!first)}>
                <div className={`menu ${first ? 'active' : ''} `}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <div className={`drop-down-menu ${first ? 'active' : ''} `}>
            
            <ul style={{background:color}}>
                <li onMouseEnter={()=>{
                    setColor(MenuData[0].color);
                    setSelected(0)
                }}>Programs</li>

                <li onMouseEnter={()=>{
                    setColor(MenuData[1].color);
                    setSelected(1)
                    }}
            
                    >Why Us</li>
                <li onMouseEnter={()=>{
                    setColor(MenuData[2].color);
                    setSelected(2)
                    }}>Plans</li>

                <li onMouseEnter={()=>{
                    setColor(MenuData[3].color);
                    setSelected(3)
                    }}>Testimonials</li>
            </ul>
            <AnimatePresence exitBeforeEnter>
            <motion.img 
                     key={selected}
                     initial={{opacity:0}}
                     animate={{opacity:1}}
                     exit={{opacity:0}}
                     transition={{duration:1}}
                    src={`${MenuData[selected].image}`} alt="" >
                </motion.img>
            </AnimatePresence>
            
        </div>
        

        <div className={` left-s ${isNavbarVisible ? "visible" : ""}`} >
            <div className="arrow" onClick={() => move_down()}>
                <AiOutlineArrowUp/>
            </div>
         
         
            <div className="box" id='box'>
                {strenthData.map((data) => (
                    <Card  key={data.id} data={data} />
                ))}
            </div>
            
            

            <div className="arrow" onClick={() => move_up()}>
                <AiOutlineArrowDown/>
            </div>
        </div>

        <div className="right-s">
            
            <AnimatePresence>
                <motion.div className="right-div"
                initial={{opacity:0,x:-100}}
                animate= {{opacity:1,x:0}}
                transition={{type:'tween'}}
                exit = {{opacity:0,x:-100}}
                >
                
                        
                    <div className="image" >
                    {currentExersice.map((data) =>(
                        <img src={data.image} alt="" />
                    ))}
                            
                    </div>

                    <div className="title">{currentExersice.map((data) =>(
                        <h1>{currentExersice[0].title}</h1>
                    ))}</div>

                    <div className="goal">
                        
                        <div className="title"> Workout Summary </div>
                    
                        {currentExersice.map((data)=> (
                            <div className="" key={data.id} >{data.WORKOUTSUMMARY.map((data)=>(
                                <div className="">
                                    <div className="info" key={data.name}>
                                        <div className="">{data.name}</div>
                                        <div className=""><p>
                                        {data.value}
                                            </p></div>
                                        
                                    </div> 
                                    <hr className='hr' />     
                                </div>
                            ))}</div>
                        ))} 
                        
                    </div> 


                    {currentExersice.map((data)=>(
                        <div className="description">
                            <div className="title">Workout Description</div>
                            <div className="text" >{data.WorkoutDescription}</div> 
                            
                        </div>  
                    ))}
                    
                    {currentExersice.map((data) =>(
                        <div className="" key={data.id}>
                            {data.table.map((table) =>(
                                <Tablee key={table.Id} table={table} />
                            ))}
                        </div>
                    ))}

                        <Footer/>

                </motion.div>
            </AnimatePresence>
        </div>
        
    </div>
  )
}

const mapStateToProps= (state) =>({
    currentExersice :state.exersic.current_exersice
})

const mapDispatchToProps  = dispatch => ({
    setCurrentExercis : exercis => dispatch(setCurrentExercis(exercis))

})

export default connect(mapStateToProps,mapDispatchToProps)(Strenth)