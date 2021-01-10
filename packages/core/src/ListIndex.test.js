import React from 'react'
import { mount, render } from 'enzyme'
import ListIndex from './ListIndex'
import { PACKAGE_NAME } from './constants'

describe('ListIndex component', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ListIndex
        height={100}
        items={['A', 'B', 'C']}
        onItemClick={() => {
          return null
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 3 items', () => {
    const wrapper = mount(
      <ListIndex
        height={100}
        items={['A', 'B', 'C']}
        onItemClick={() => {
          return null
        }}
      />
    )

    expect(wrapper.find('li').length).toBe(3)
  })

  it('should render empty', () => {
    const wrapper = mount(
      <ListIndex
        height={100}
        items={[]}
        onItemClick={() => {
          return null
        }}
      />
    )

    expect(wrapper.find('li').length).toBe(0)
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
