import React from 'react'
import { mount, render } from 'enzyme'
import ListIndex from './ListIndex'
import { PACKAGE_NAME } from './constants'

describe('ListIndex component', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ListIndex height={100} items={['A', 'B', 'C']} onItemClick={() => {}} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 3 items', () => {
    const wrapper = mount(
      <ListIndex height={100} items={['A', 'B', 'C']} onItemClick={() => {}} />
    )

    expect(wrapper.find('li').length).toBe(3)
  })

  it('should call onItemClick', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <ListIndex
        height={100}
        items={['A', 'B', 'C']}
        onItemClick={handleClick}
      />
    )

    wrapper.find('li').first().find('a').simulate('click')

    expect(handleClick).toHaveBeenCalledWith(`#${PACKAGE_NAME}-index-a`)
  })
})
