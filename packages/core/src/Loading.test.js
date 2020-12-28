import React from 'react'
import { render } from 'enzyme'
import Loading from './Loading'

describe('Loading component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Loading />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('svg').length).toBe(1)
  })
})
