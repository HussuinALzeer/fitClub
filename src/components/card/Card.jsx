import React from 'react'
import './card.scss'

import { connect } from 'react-redux'
import { setCurrentExercis } from '../../redux/exersices/exersices.action'
import { selectExersiceItem,currentexersice } from '../../redux/exersices/exersices.selector'

import { createStructuredSelector } from 'reselect'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Card = ({data,setCurrentExercis , selectExersiceItem ,currentexersice}) => {

  const handleMove = () => {
    window.scrollTo({ top:0, behavior: "smooth" }); // here it goes
    
  };  

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
    <div>
         <div className={`card ${isNavbarVisible ? "visible" : ""}`} onClick={() => {
          setCurrentExercis(data)
          handleMove()
          }}>
                <div className="image">
                    <img src={data.image} alt="" />
                </div>
                <div className="title">{data.title}</div>
                
            </div>
    </div>
  )
}
const mapDispatchToProps  = dispatch => ({
  setCurrentExercis : exercis => dispatch(setCurrentExercis(exercis))

})

const mapStateToProps = createStructuredSelector ({
  selectExersiceItem,
  currentexersice
})

export default connect(mapStateToProps,mapDispatchToProps) (Card);