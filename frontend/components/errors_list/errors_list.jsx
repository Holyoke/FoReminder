import React from 'react'

export const ErrorsList = ({clearErrors, errors}) => {
  const errorItems = errors.map((error, idx) => <li style={{color: 'red'}} key={idx}>{error}</li>)
  
  return (
    <ul onClick={() => clearErrors()} className="error-list">
      {errorItems}
    </ul>
  )
}

export default ErrorsList
