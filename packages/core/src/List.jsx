import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Loading from './Loading'
import ListIndex from './ListIndex'
import ListItemDefault from './ListItem'
import { PACKAGE_NAME } from './constants'

const List = ({
  displayLoading,
  items,
  itemRenderer,
  listHeight,
  loadingRenderer,
  grouped,
  reversed,
  showGroupIndex,
  onBottomReached,
  onItemClick,
  onLoadMore,
  onTopReached
}) => {
  const listRef = React.useRef(null)
  const ItemComponent = itemRenderer || ListItemDefault

  const goBackToScrollPosition = React.useCallback(position => {
    const { current: listElement } = listRef

    if (listElement) {
      listElement.scrollTop = position
    }
  }, [])

  const handleLoadMore = React.useCallback(
    hasLoadMore => {
      if (hasLoadMore && onLoadMore) {
        onLoadMore()

        goBackToScrollPosition(listRef.current.scrollTop)
      }
    },
    [goBackToScrollPosition, onLoadMore]
  )

  const handleBottomReached = React.useCallback(() => {
    handleLoadMore(!reversed)

    onBottomReached && onBottomReached()
  }, [handleLoadMore, onBottomReached, reversed])

  const handleTopReached = React.useCallback(() => {
    handleLoadMore(reversed)

    onTopReached && onTopReached()
  }, [handleLoadMore, onTopReached, reversed])

  const handleEdgesReached = React.useCallback(
    (offsetHeight, scrollHeight, scrollTop) => {
      if (reversed) {
        const calc = scrollHeight - (Math.abs(offsetHeight) + scrollTop)

        if (offsetHeight === 0) {
          return handleBottomReached()
        }

        if (calc === 0) {
          return handleTopReached()
        }
      }

      const calc = scrollHeight - offsetHeight - Math.abs(scrollTop)

      if (offsetHeight === 0) {
        return handleTopReached()
      }

      if (calc === 0) {
        return handleBottomReached()
      }
    },
    [handleBottomReached, handleTopReached, reversed]
  )

  const handleScroll = React.useCallback(() => {
    const { current: listElement } = listRef

    if (!listElement) {
      return
    }

    const { offsetHeight, scrollTop, scrollHeight } = listElement

    handleEdgesReached(scrollTop, scrollHeight, offsetHeight)
  }, [handleEdgesReached])

  const handleClick = item => e => {
    e.preventDefault()
    onItemClick && onItemClick(item)
  }

  const renderItem = item => (
    <li key={item.id}>
      <ItemComponent onClick={handleClick(item)} {...item} />
    </li>
  )

  const renderItems = () => {
    const groupKey = 'header'

    if (grouped) {
      return Object.keys(items).map(key => {
        const header = items[key][groupKey]

        return (
          <li id={`${PACKAGE_NAME}-index-${key}`} key={key}>
            <p style={styles.groupedListHeader}>{header}</p>
            <ul style={styles.groupedList}>
              {items[key].data.map(renderItem)}
            </ul>
          </li>
        )
      })
    }

    return items.map(renderItem)
  }

  let listStyles = { ...styles.list }

  if (reversed) {
    listStyles = { ...listStyles, ...styles.reversedList }
  }

  if (listHeight) {
    listStyles = {
      ...listStyles,
      height: listHeight,
      overflowY: 'scroll'
    }
  }

  const renderLoading = () => {
    const LoadingComponent = loadingRenderer || Loading

    if (displayLoading) {
      const key = `${PACKAGE_NAME}-key-loading`

      return (
        <li key={key}>
          <LoadingComponent />
        </li>
      )
    }
  }

  return (
    <div style={styles.root}>
      <ul ref={listRef} onScroll={handleScroll} style={listStyles}>
        {renderItems()}
        {renderLoading()}
      </ul>
      {grouped && showGroupIndex && (
        <ListIndex height={listHeight} items={Object.keys(items)} />
      )}
    </div>
  )
}

List.propTypes = {
  displayLoading: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      header: PropTypes.string
    })
  ]).isRequired,
  itemRenderer: PropTypes.func,
  listHeight: PropTypes.number.isRequired,
  loadingRenderer: PropTypes.element,
  grouped: PropTypes.bool,
  reversed: PropTypes.bool,
  showGroupIndex: PropTypes.bool,
  onBottomReached: PropTypes.func,
  onItemClick: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default List
