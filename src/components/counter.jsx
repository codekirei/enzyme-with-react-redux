import React, { PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement }) => (
  <p>
    clicked {value} times{' '}
    <button onClick={onIncrement}>+</button>{' '}
    <button onClick={onDecrement}>-</button>
  </p>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter
