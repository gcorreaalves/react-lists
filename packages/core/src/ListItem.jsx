import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ text }) => {
  return <p>{text}</p>
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default ListItem
