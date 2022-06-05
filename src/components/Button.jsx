import React from 'react'

const Button = ({type = "button", kind="button-primary", onClick, children }) => {
  return (
    <button 
        type={type} 
        className={`button ${kind}`} 
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button