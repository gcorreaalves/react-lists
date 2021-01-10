import React from 'react'
import Core, { CoreTypes } from './Core'
import ListItem from './ListItem'
import ListIndex from './ListIndex'
import { PACKAGE_NAME } from './constants'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    position: 'relative'
  },
  groupedList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  subHeader: {
    marginBottom: '10px',
    paddingBottom: '5px',
    top: 0,
    width: '100%',
    zIndex: 1
  },
  subHeaderSticky: {
    position: 'sticky'
  }
}

interface GroupListTypes extends CoreTypes {
  displayIndexMenu?: boolean
  displaySubHeaders?: boolean
  items: {
    [key: string]: {
      header: string
      data: Array<unknown>
    }
  }
  itemRenderer: React.FunctionComponent
  stickySubHeaders: boolean
  subHeaderRenderer?: React.FunctionComponent<{ text: string }>
  onItemClick?: (event: React.MouseEvent) => void
}

const SubHeaderDefault: React.FunctionComponent<{ text: string }> = ({
  text
}) => <>{text}</>

const GroupList: React.FunctionComponent<GroupListTypes> = props => {
  const {
    displayIndexMenu,
    items,
    itemRenderer,
    listHeight,
    subHeaderRenderer,
    onItemClick,
    displaySubHeaders = true,
    stickySubHeaders = true
  } = props
  const groupKey = 'header'
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
    return Object.keys(items).map(key => {
      const header = items[key][groupKey]
      const SubHeaderRenderer = subHeaderRenderer || SubHeaderDefault
      let subHeaderStyles = styles.subHeader

      if (stickySubHeaders) {
        subHeaderStyles = { ...subHeaderStyles, ...styles.subHeaderSticky }
      }

      if (header) {
        return (
          <li id={`${PACKAGE_NAME}-index-${key.toLowerCase()}`} key={key}>
            {displaySubHeaders && (
              <header
                className={`${PACKAGE_NAME}-subheader`}
                style={subHeaderStyles}
              >
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

export default GroupList
