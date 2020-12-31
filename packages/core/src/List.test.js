import React from 'react'
import { mount, render } from 'enzyme'
import List from './List'

describe('List component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <List
        listHeight={400}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 3 items', () => {
    const wrapper = render(
      <List
        listHeight={400}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
      />
    )

    expect(wrapper.find('li').length).toBe(3)
  })

  it('should render object list', () => {
    const wrapper = render(
      <List
        listHeight={400}
        items={[
          {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@email.com'
          },
          {
            id: 1,
            name: 'Mary Doe',
            email: 'marydoe@email.com'
          }
        ]}
        itemRenderer={({ name, email }) => (
          <div className={'person'}>
            {name} (<i>{email}</i>)
          </div>
        )}
      />
    )

    expect(wrapper.find('.person').length).toBe(2)
  })

  it('should render an empty list', () => {
    const wrapper = render(
      <List listHeight={400} items={[]} itemRenderer={({ item }) => item} />
    )

    expect(wrapper.find('li').length).toBe(0)
  })

  it('should render reverse list', () => {
    const wrapper = mount(
      <List
        listHeight={400}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
      />
    )
    const wrapperReverse = mount(
      <List
        listHeight={400}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
        reverse
      />
    )

    expect(wrapper.find('ul').prop('style')).not.toHaveProperty(
      'flexDirection',
      'column-reverse'
    )
    expect(wrapperReverse.find('ul').prop('style')).toHaveProperty(
      'flexDirection',
      'column-reverse'
    )
  })

  it('should throw an Error if listHeader is eq or less than 0', () => {
    expect(() => {
      render(
        <List listHeight={0} items={[]} itemRenderer={({ item }) => item} />
      )
    }).toThrowError(
      new Error(
        'The attribute listHeight is required and must be greater than 0.'
      )
    )
  })

  it('should display loading component', () => {
    const wrapper = mount(
      <List
        displayLoading
        listHeight={400}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
        onLoadMore={() => {}}
      />
    )

    expect(wrapper.find('svg').length).toBe(1)
  })

  it('should display custom loading component', () => {
    const LoadingRenderer = () => <div className='loading'>loading...</div>
    const wrapper = mount(
      <List
        displayLoading
        listHeight={400}
        loadingRenderer={LoadingRenderer}
        items={['one', 'two', 'three']}
        itemRenderer={({ item }) => item}
        onLoadMore={() => {}}
      />
    )

    expect(wrapper.find(LoadingRenderer).length).toBe(1)
    expect(wrapper.find(LoadingRenderer).text()).toBe('loading...')
  })

  it('should call onItemClick', () => {
    const handleItemClick = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={['item 1', 'item 2', 'item 3']}
        itemRenderer={({ item }) => item}
        onItemClick={handleItemClick}
      />
    )

    wrapper.find('li').first().simulate('click')

    expect(handleItemClick).toHaveBeenCalledWith('item 1')
  })

  it('should call onLoadMore', () => {
    const handleLoadReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onLoadMore={handleLoadReached}
      />
    )

    const scrollEvent = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    wrapper.find('ul').first().simulate('scroll', scrollEvent)

    expect(handleLoadReached).toHaveBeenCalled()
  })

  it('should call onLoadMore on top when list is reverse', () => {
    const handleLoadReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onLoadMore={handleLoadReached}
        reverse
      />
    )

    const scrollEvent = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    wrapper.find('ul').first().simulate('scroll', scrollEvent)

    expect(handleLoadReached).toHaveBeenCalled()
  })

  it('should call onBottomReached', () => {
    const handleBottomReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onBottomReached={handleBottomReached}
      />
    )

    const scrollEvent = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    wrapper.find('ul').first().simulate('scroll', scrollEvent)

    expect(handleBottomReached).toHaveBeenCalled()
  })

  it('should call onTopReached', () => {
    const handleTopReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onTopReached={handleTopReached}
      />
    )

    const scrollEvent = {
      target: {
        offsetHeight: 400,
        scrollHeight: 1000,
        scrollTop: 0
      }
    }

    wrapper.find('ul').first().simulate('scroll', scrollEvent)

    expect(handleTopReached).toHaveBeenCalled()
  })

  it('should call onBottomReached and onTopReached twice each', () => {
    const handleBottomReached = jest.fn()
    const handleTopReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onBottomReached={handleBottomReached}
        onTopReached={handleTopReached}
      />
    )

    const listElement = wrapper.find('ul').first()

    const scrollEventToBottom = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    const scrollEventToTop = {
      target: {
        offsetHeight: 400,
        scrollHeight: 1000,
        scrollTop: 0
      }
    }

    listElement.simulate('scroll', scrollEventToBottom)
    listElement.simulate('scroll', scrollEventToTop)
    listElement.simulate('scroll', scrollEventToBottom)
    listElement.simulate('scroll', scrollEventToTop)

    expect(handleBottomReached).toHaveBeenCalledTimes(2)
    expect(handleTopReached).toHaveBeenCalledTimes(2)
  })

  it('should call onBottomReached reverse list', () => {
    const handleBottomReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        reverse
        onBottomReached={handleBottomReached}
      />
    )

    const listElement = wrapper.find('ul').first()

    const scrollEventToBottom = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 0
      }
    }

    listElement.simulate('scroll', scrollEventToBottom)

    expect(handleBottomReached).toHaveBeenCalledTimes(1)
  })

  it('should call onTopReached reverse list', () => {
    const handleTopReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        reverse
        onTopReached={handleTopReached}
      />
    )

    const listElement = wrapper.find('ul').first()

    const scrollEventToTop = {
      target: {
        offsetHeight: 600,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    listElement.simulate('scroll', scrollEventToTop)

    expect(handleTopReached).toHaveBeenCalledTimes(1)
  })

  it('should not call onBottomReached and onTopReached', () => {
    const handleBottomReached = jest.fn()
    const handleTopReached = jest.fn()
    const wrapper = mount(
      <List
        listHeight={400}
        items={[]}
        itemRenderer={({ item }) => item}
        onBottomReached={handleBottomReached}
        onTopReached={handleTopReached}
      />
    )

    const listElement = wrapper.find('ul').first()

    const scrollEvent = {
      target: {
        offsetHeight: 200,
        scrollHeight: 1000,
        scrollTop: 400
      }
    }

    listElement.simulate('scroll', scrollEvent)

    expect(handleBottomReached).not.toHaveBeenCalled()
    expect(handleTopReached).not.toHaveBeenCalled()
  })
})
