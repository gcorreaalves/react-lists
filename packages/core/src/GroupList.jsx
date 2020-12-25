import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Core from './Core'
import ListItem from './ListItem'
import ListIndex from './ListIndex'
import { PACKAGE_NAME } from './constants'

const Group = props => {
  const { items, itemRenderer, listHeight, showGroupIndex, onItemClick } = props
  const listRef = React.useRef(null)

  const handleIndexItemClick = id => e => {
    e.preventDefault()

    if (listRef.current) {
      listRef.current.scrollTop = document.querySelector(id).offsetTop
    }
  }

  const renderItem = (item, index) => {
    const key = item.id || index

    return (
      <ListItem
        key={key}
        item={item}
        renderer={itemRenderer}
        onClick={onItemClick}
      />
    )
  }

  const renderItems = () => {
    const groupKey = 'header'

    return Object.keys(items).map(key => {
      const header = items[key][groupKey]

      if (header) {
        return (
          <li id={`${PACKAGE_NAME}-index-${key.toLowerCase()}`} key={key}>
            <p style={styles.groupedListHeader}>{header}</p>
            <ul style={styles.groupedList}>
              {items[key].data.map(renderItem)}
            </ul>
          </li>
        )
      } else {
        throw new Error(
          `The object should have a attribute called "${groupKey}"`
        )
      }
    })
  }

  return (
    <div style={styles.root}>
      <Core listRef={listRef} {...props}>
        {renderItems()}
      </Core>
      {showGroupIndex && (
        <ListIndex
          height={listHeight}
          items={Object.keys(items)}
          onItemClick={handleIndexItemClick}
        />
      )}
    </div>
  )
}

Group.propTypes = {
  displayLoading: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
      header: PropTypes.string
    })
  ]).isRequired,
  itemRenderer: PropTypes.func.isRequired,
  listHeight: PropTypes.number.isRequired,
  loadingRenderer: PropTypes.func,
  reversed: PropTypes.bool,
  showGroupIndex: PropTypes.bool,
  onBottomReached: PropTypes.func,
  onItemClick: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default Group
