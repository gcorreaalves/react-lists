import React from 'react'
import { mount, render } from 'enzyme'
import ListItem from './ListItem'

describe('ListItem component', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ListItem item='Item' renderer={({ item }) => item} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render custom element', () => {
    const wrapper = render(
      <ListItem
        item='Item'
        renderer={({ item }) => <div className={'custom-item'}>{item}</div>}
      />
    )

    expect(wrapper.find('.custom-item').length).toBe(1)
  })

  it('should call onClick', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <ListItem
        item='Item'
        renderer={({ item }) => item}
        onClick={handleClick}
      />
    )

    wrapper.simulate('click')

    expect(handleClick).toHaveBeenCalledWith('Item')
  })
})
