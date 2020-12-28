import React from 'react'
import { mount, render } from 'enzyme'
import GroupList from './GroupList'
import { PACKAGE_NAME } from './constants'

describe('GroupList component', () => {
  let mockMenu = {}

  beforeEach(() => {
    mockMenu = {
      clothing: {
        header: 'Clothing',
        data: ['Man', 'Woman', 'Boy', 'Girl', 'Baby', 'Shoes', 'Hats']
      },
      eletronics: {
        header: 'Eletronics',
        data: ['Computer', 'Smartphone', 'Tablet', 'TV', 'Games']
      },
      sports: {
        header: 'Sports',
        data: ['Fishing', 'Football', 'Golf', 'Tennis']
      }
    }
  })

  it('should render correctly', () => {
    const wrapper = mount(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 3 grouped items', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper.find(`.${PACKAGE_NAME}-subheader`).length).toBe(3)
  })

  it('should sub headers', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper.find(`#${PACKAGE_NAME}-index-clothing`).length).toBe(1)
    expect(wrapper.find(`#${PACKAGE_NAME}-index-eletronics`).length).toBe(1)
    expect(wrapper.find(`#${PACKAGE_NAME}-index-sports`).length).toBe(1)
  })

  it('should throw an Error if there is no header', () => {
    delete mockMenu.clothing.header

    expect(() => {
      render(
        <GroupList
          listHeight={400}
          items={mockMenu}
          itemRenderer={({ item }) => item}
        />
      )
    }).toThrowError(
      new Error('The object should have a attribute called "header"')
    )
  })

  it('should display index menu', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
        showGroupIndex
      />
    )

    expect(wrapper.find('nav').length).toBe(1)
    expect(wrapper.find('nav').find('li').length).toBe(3)
    expect(wrapper.find('nav').find('li:first').text()).toBe('Clothing')
  })
})
