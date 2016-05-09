import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Root from '../../src/components/root.jsx'

// this fails with:
//   Invariant Violation: Could not find "store" in either the context or props of
//   "Connect(Counter)". Either wrap the root component in a <Provider>, or
//   explicitly pass "store" as a prop to "Connect(Counter)".

const output = shallow(<Root />)

// FWIW, this also fails with the same error:

// import { Provider } from 'react-redux'
// import makeStore from '../../src/store'
// const store = makeStore()
// const output = shallow(
//   <Provider store={store} >
//     <Root />
//   </Provider>
// )

exports['<Root />'] = {
  'is a <div>': () => expect(output).to.have.tagName('div'),
}
