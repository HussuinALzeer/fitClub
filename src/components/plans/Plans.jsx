import React from 'react'
import './plans.scss'

import whiteTick from '../../assets/whiteTick.png'

import { plansData } from '../../data/plansData'


const Plans = () => {
  return (
    <div className='Plans-container' id='Plans'>
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>
        
        <div className="program-title">
            <span className='stroke-text'>READY TO START</span>
            <span className=''>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>


        <div className="plans">

            {plansData.map((plan,index) =>(
                <div className="plan" key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    
                    <div className="features">
                        {plan.features.map((feature,index) =>(
                            <div className="feature" key={index}>
                                <img src={whiteTick} alt="" />
                                <span > {feature} </span>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <span>See more benefits -</span>
                    </div>        
                    
                    
                    <button className='btn'>Join Now</button>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Plans