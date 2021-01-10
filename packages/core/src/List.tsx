import React from 'react'
import Core, { CoreTypes } from './Core'
import ListItem from './ListItem'

interface ListTypes extends CoreTypes {
  items: Array<unknown>
  itemRenderer: React.FunctionComponent
  onItemClick?: (event: React.MouseEvent) => void
}

const List: React.FunctionComponent<ListTypes> = props => {
  const listRef = React.useRef(null)
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
    <Core listRef={listRef} {...props}>
      {items.map(renderItem)}
    </Core>
  )
}

export default List
