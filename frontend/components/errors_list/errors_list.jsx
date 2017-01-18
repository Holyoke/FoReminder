import React from 'react'
import Alert from 'react-bootstrap/lib/Alert'

export const ErrorsList = ({clearErrors, errors}) => {
  const errorItems = errors.map((error, idx) =>
    <li style={{color: 'red', width: '50%'}} key={idx}>
      <Alert bsStyle="warning">
        {error}
      </Alert>
    </li>)

  return (
    <ul onClick={() => clearErrors()} className="error-list">
      {errorItems}
    </ul>
  )
}

export default ErrorsList
