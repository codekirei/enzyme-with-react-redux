import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Root from '../../src/components/root.jsx'

const output = shallow(<Root />)

exports['<Root />'] = {
  'is a <div>': () => expect(output).to.have.tagName('div'),
}
