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

    const div = document.createElement('div')
    div.setAttribute('id', 'container')
    document.body.appendChild(div)
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

  it('should display sub headers', () => {
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

  it('should not display sub headers', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
        displaySubHeaders={false}
      />
    )

    expect(wrapper.find(`.${PACKAGE_NAME}-subheader`).length).toBe(0)
  })

  it('should render custom sub headers', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
        subHeaderRenderer={({ text }) => (
          <div className='custom-subheader'>{text}</div>
        )}
      />
    )

    expect(wrapper.find('.custom-subheader').length).toBe(3)
    expect(wrapper.find('.custom-subheader').first().text()).toBe('Clothing')
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
        displayIndexMenu
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper.find('nav').length).toBe(1)
    expect(wrapper.find('nav').find('li').length).toBe(3)
    expect(wrapper.find('nav').find('li:first').text()).toBe('Clothing')
  })

  it('should not display index menu', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper.find('nav').length).toBe(0)
  })

  it('should not make sub headers sticky', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
        stickySubHeaders={false}
      />
    )

    expect(
      wrapper.find(`.${PACKAGE_NAME}-subheader`).first().prop('style')
    ).not.toHaveProperty('position', 'sticky')
  })

  it('should make sub headers sticky', () => {
    const wrapper = render(
      <GroupList
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
        stickySubHeaders
      />
    )

    expect(
      wrapper.find(`.${PACKAGE_NAME}-subheader`).first().prop('style')
    ).toHaveProperty('position', 'sticky')
  })

  it('should scroll list when clicking on index menu', () => {
    const spy = jest.spyOn(document, 'querySelector')

    const wrapper = mount(
      <GroupList
        displayIndexMenu
        listHeight={400}
        items={mockMenu}
        itemRenderer={({ item }) => item}
      />,
      { attachTo: document.getElementById('container') }
    )

    wrapper.find('nav').find('li').first().find('a').simulate('click')

    expect(spy).toBeCalledWith(`#${PACKAGE_NAME}-index-clothing`)
  })

  afterEach(() => {
    const div = document.getElementById('container')

    if (div) {
      document.body.removeChild(div)
    }

    jest.clearAllMocks()
  })
})
