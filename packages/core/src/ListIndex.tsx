import React from 'react'
import { PACKAGE_NAME } from './constants'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    position: 'absolute',
    right: 20,
    top: 0,
    zIndex: 2
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%'
  },
  listItem: {
    lineHeight: 1,
    textAlign: 'center'
  },
  listItemLink: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none'
  }
}

interface IProps {
  height: number
  items: Array<string>
  onItemClick: (selector: string) => (event: React.MouseEvent) => void
}

const ListIndex: React.FunctionComponent<IProps> = ({
  height,
  items,
  onItemClick
}) => {
  const padding = (height / items.length - 14) / 2
  const itemStyles = {
    ...styles.listItem,
    padding
  }

  const renderItem = key => (
    <li key={key} style={itemStyles}>
      <a
        onClick={onItemClick(`#${PACKAGE_NAME}-index-${key.toLowerCase()}`)}
        style={styles.listItemLink}
      >
        {key}
      </a>
    </li>
  )

  if (items.length) {
    return (
      <nav style={styles.root}>
        <ul style={styles.list}>{items.map(renderItem)}</ul>
      </nav>
    )
  }

  return null
}

export default ListIndex
