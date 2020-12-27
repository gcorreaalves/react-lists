import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Loading from './Loading'
import { PACKAGE_NAME } from './constants'

const Core = ({
  children,
  displayLoading,
  listHeight,
  listRef,
  loadingRenderer,
  reversed,
  onBottomReached,
  onLoadMore,
  onTopReached
}) => {
  const goBackToScrollPosition = React.useCallback(
    position => {
      const { current: listElement } = listRef

      if (listElement) {
        listElement.scrollTop = position
      }
    },
    [listRef]
  )

  const handleLoadMore = React.useCallback(
    hasLoadMore => {
      if (hasLoadMore && onLoadMore) {
        onLoadMore()

        goBackToScrollPosition(listRef.current.scrollTop)
      }
    },
    [goBackToScrollPosition, listRef, onLoadMore]
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
  }, [handleEdgesReached, listRef])

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
        {children}
        {renderLoading()}
      </ul>
    </div>
  )
}

Core.propTypes = {
  children: PropTypes.node.isRequired,
  displayLoading: PropTypes.bool,
  listHeight: PropTypes.number.isRequired,
  listRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  loadingRenderer: PropTypes.func,
  reversed: PropTypes.bool,
  onBottomReached: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default Core
