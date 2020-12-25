import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ item, renderer, onClick }) => {
  const handleClick = item => e => {
    e.preventDefault()
    onClick && onClick(item)
  }

  const ItemComponent = renderer
  let props = { ...item }

  if (typeof item === 'string') {
    props = { item: item }
  }

  return (
    <li>
      <ItemComponent onClick={handleClick(item)} {...props} />
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  renderer: PropTypes.func,
  onClick: PropTypes.func
}

export default ListItem
