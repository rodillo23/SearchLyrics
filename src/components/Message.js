import React from 'react'

export const Message = ({msg, bgColor}) => {
  console.log(bgColor);
  
  let styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    backgroundColor: bgColor,
    color: '#fff',
    fontWeight: 'bold'
  }

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  )
}
