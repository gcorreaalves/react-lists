import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Core from './Core'
import ListItem from './ListItem'
import ListIndex from './ListIndex'
import { PACKAGE_NAME } from './constants'

const Group = props => {
  const {
    displayIndexMenu,
    displaySubHeaders,
    items,
    itemRenderer,
    listHeight,
    stickySubHeaders,
    subHeaderRenderer,
    onItemClick
  } = props
  const listRef = React.useRef(null)
  const groupKey = 'header'

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
    return Object.keys(items).map(key => {
      const header = items[key][groupKey]
      const SubHeaderRenderer = subHeaderRenderer || (({ text }) => text)
      let subHeaderStyles = styles.subHeader

      if (stickySubHeaders) {
        subHeaderStyles = { ...subHeaderStyles, ...styles.subHeaderSticky }
      }

      if (header) {
        return (
          <li
            className={`${PACKAGE_NAME}-subheader`}
            id={`${PACKAGE_NAME}-index-${key.toLowerCase()}`}
            key={key}
          >
            {displaySubHeaders && (
              <header style={subHeaderStyles}>
                <SubHeaderRenderer text={header} />
              </header>
            )}
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
      {displayIndexMenu && (
        <ListIndex
          height={listHeight}
          items={Object.keys(items).map(key => items[key][groupKey])}
          onItemClick={handleIndexItemClick}
        />
      )}
    </div>
  )
}

Group.defaultProps = {
  displayIndexMenu: false,
  displayLoading: false,
  displaySubHeaders: true,
  reversed: false,
  stickySubHeaders: true
}

Group.propTypes = {
  displayIndexMenu: PropTypes.bool,
  displayLoading: PropTypes.bool,
  displaySubHeaders: PropTypes.bool,
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
  stickySubHeaders: PropTypes.bool,
  subHeaderRenderer: PropTypes.func,
  onBottomReached: PropTypes.func,
  onItemClick: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default Group
