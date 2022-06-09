import React from 'react'
import { useState,useEffect } from 'react'
import '../ItemCount.css'


const ItemCount= ({precio,itemName,stock,initial})=>{

    const [number,setNumber]= useState(initial)
    
    const num0 = number == 0
    const numMax = number == stock

    const increase=()=>{
        if(number < stock){
         return setNumber(number+1)
        }
    }
    const decrease= ()=>{
        if(number >0){
            setNumber(number-1)
        }
    }

    return <>
        <div className='itemcount'>
            <h3>{itemName}</h3>
             <div  className='contador'>
             {num0 
             ? <button disabled className='disabled' onClick={()=>{decrease()}}>-</button>
             : <button className='button' onClick={()=>{decrease()}}>-</button>}
             <h5>{number}</h5>
             {numMax
              ? <button disabled className='disabled' onClick={()=>{increase()}}>+</button>
              : <button className='button' onClick={()=>{increase()}}>+</button>}
             </div>
             {num0 
             ? <button disabled className='disabled' >Agregar al carrito</button>
             : <button className='button'>Agregar al carrito</button>}
        </div>
    </>
}

export default ItemCount