import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

const CustomButton = ({type, title, handleClick, customStyles}) => {
  
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: '#D44D5C',
        color:'#fff'
      }
    }
  }
  return (
    <button 
    className={`w-44 px-2 py-3 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}>
      {title}
    </button>
  )
}

export default CustomButton