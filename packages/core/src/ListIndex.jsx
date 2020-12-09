import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { PACKAGE_NAME } from './constants'

const ListIndex = ({ height, items }) => {
  const padding = (height / items.length - 14) / 2
  const itemStyles = {
    ...styles.groupIndexListItem,
    padding
  }

  const renderItem = key => (
    <li key={key} style={itemStyles}>
      <a href={`#${PACKAGE_NAME}-index-${key}`}>{key}</a>
    </li>
  )

  if (items.length) {
    return (
      <nav style={styles.groupIndex}>
        <ul style={styles.groupIndexList}>{items.map(renderItem)}</ul>
      </nav>
    )
  }

  return null
}

ListIndex.propTypes = {
  height: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ListIndex
