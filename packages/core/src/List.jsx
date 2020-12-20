import React from 'react'
import PropTypes from 'prop-types'
import Core from './Core'
import ListItem from './ListItem'

const List = props => {
  const { items, itemRenderer, onItemClick } = props

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

  return (
    <Core {...props}>
      {items.map(renderItem)}
    </Core>
  )
}

List.propTypes = {
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
  onBottomReached: PropTypes.func,
  onItemClick: PropTypes.func,
  onLoadMore: PropTypes.func,
  onTopReached: PropTypes.func
}

export default List
