import { connect } from 'react-redux'
import Counter from '../components/counter.jsx'
import {
  increment,
  decrement,
} from '../actions'

export default connect(
  state => ({
    value: state,
  }),
  dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  })
)(Counter)
