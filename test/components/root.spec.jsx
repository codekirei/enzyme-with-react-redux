import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Root from '../../src/components/root.jsx'
import makeStore from '../../src/store'

const store = makeStore()
let output

exports['<Root />'] = {

  before: () => {
    output = shallow(<Root />, { context: { store } })
  },

  'is a <div>': () => expect(output).to.have.tagName('div'),
}
