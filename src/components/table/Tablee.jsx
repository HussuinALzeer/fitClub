import React from 'react'
import './Table.scss'

import { connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import Row from './tableRow/Row'


const Tablee = ({table}) => {

  const {id,title ,data} = table

  const [tableState, setTableState] = useState([])
  
    useEffect(() => {
      setTableState(table.data)
    }, [tableState])
    
    // console.log(tableState);
  return (
    <div>
      <div className="container">
          <h2 className='title-table'>{title}</h2>
          
          <ul className="responsive-table">
            {data &&(
              <li className="table-header">
            <div className="col ">Exercise</div>
            <div className="col ">Sets</div>
            <div className="col ">Reps</div>
          </li>
            )}
          

      

        {data?.map((data) => (
          <li key={data.name} className="table-row">
            <div className="col col-3" >{data.name}</div>
            <div className="col col-1 " >{data.Sets}</div>
            <div className="col col-1" >{data.Reps}</div>
          </li>
        ))}
        
      </ul>
    </div>
  </div>
  )
}

export default Tablee