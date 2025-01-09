import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

function Content({items,handleCheck,hanleDelete}) {


  return (
    <div >
      {(items.length)?(
      <div className="list">
      <ul>
        {items.map((item)=>(
          
            <li className='li' key={item.id}> 
            <div className='check'>
            <input 
                onChange= {()=> handleCheck(item.id)}
                type='checkbox'
                checked={item.checked}
                />
            </div>
            <div className='label'>
              <label onDoubleClick={()=>handleCheck(item.id)} htmlFor="">{item.action}</label>
            </div>    
            <div className='dlt-icn'>
              <FaRegTrashCan 
                role='button'
                tabIndex="0"
                onClick={()=>hanleDelete(item.id)}
                />
            </div>
                
                

            </li>
        ))}
      </ul>
      </div>):
      <p className='empty'>Your list is empty</p>}
    </div>
  )
}

export default Content
