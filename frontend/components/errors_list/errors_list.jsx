import React from 'react'
import Alert from 'react-bootstrap/lib/Alert'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

export const ErrorsList = ({clearErrors, errors}) => {
  const errorItems = errors.map((error, idx) =>
    <li style={{color: 'red'}} key={idx}>
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
