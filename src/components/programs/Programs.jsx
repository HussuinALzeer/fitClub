import React from 'react'
import './program.scss'

import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Programs = () => {

    const navigate = useNavigate()

  return (
    <div className='Programs' id='Programs'>
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>


        <div className="program-category">
            {programsData.map((data) => (
                <div className="form" key={data.heading}>
                    <div className="category" >
                    {data.image}
                    <span>{data.heading}</span>
                    <span>{data.details}</span>
                    
                        <div className="join-now" onClick={ () => {navigate(`${data.Link}`)}} >
                            <span onClick={()=>{
                                window.scrollTo({ top:0 }); // here it goes
                            }} >Explore</span>
                            <img src={RightArrow} alt="" />
                        </div>
                   
                   
                </div>
                </div>
                
            ))}
        </div>

    </div>
  )
}

export default Programs