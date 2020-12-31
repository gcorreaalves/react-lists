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
  reverse,
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
    shouldLoadMore => {
      if (shouldLoadMore && onLoadMore) {
        onLoadMore()

        goBackToScrollPosition(listRef.current.scrollTop)
      }
    },
    [goBackToScrollPosition, listRef, onLoadMore]
  )

  const handleBottomReached = React.useCallback(() => {
    handleLoadMore(!reverse)

    onBottomReached && onBottomReached()
  }, [handleLoadMore, onBottomReached, reverse])

  const handleTopReached = React.useCallback(() => {
    handleLoadMore(reverse)

    onTopReached && onTopReached()
  }, [handleLoadMore, onTopReached, reverse])

  const handleEdgesReached = React.useCallback(
    (offsetHeight, scrollHeight, scrollTop) => {
      const calc = scrollHeight - offsetHeight - Math.abs(scrollTop)

      if (reverse) {
        if (scrollTop === 0) {
          return handleBottomReached()
        }

        if (calc === 0) {
          return handleTopReached()
        }
      }

      if (scrollTop === 0) {
        return handleTopReached()
      }

      if (calc === 0) {
        return handleBottomReached()
      }
    },
    [handleBottomReached, handleTopReached, reverse]
  )

  const handleScroll = React.useCallback(
    e => {
      const { offsetHeight, scrollHeight, scrollTop } = e.target
      handleEdgesReached(offsetHeight, scrollHeight, scrollTop)
    },
    [handleEdgesReached]
  )

  let listStyles = { ...styles.list }

  if (reverse) {
    listStyles = { ...listStyles, ...styles.reverseList }
  }

  if (!listHeight || listHeight <= 0) {
    throw new Error(
      'The attribute listHeight is required and must be greater than 0.'
    )
  }

  listStyles = {
    ...listStyles,
    height: listHeight,
    overflowY: 'scroll'
  }

  const renderLoading = () => {
    const LoadingComponent = loadingRenderer || Loading

    if (displayLoading && onLoadMore) {
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

Core.defaultProps = {
  displayLoading: false
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
  reverse: PropTypes.bool,
  onBottomReached: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default Core
