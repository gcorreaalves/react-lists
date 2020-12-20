import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Loading from './Loading'
import { PACKAGE_NAME } from './constants'

const Core = ({
  children,
  displayLoading,
  listHeight,
  loadingRenderer,
  reversed,
  onBottomReached,
  onLoadMore,
  onTopReached
}) => {
  const listRef = React.useRef(null)

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
  displayLoading: PropTypes.bool,
  listHeight: PropTypes.number.isRequired,
  loadingRenderer: PropTypes.func,
  reversed: PropTypes.bool,
  onBottomReached: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default Core
