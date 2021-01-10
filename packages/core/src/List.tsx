import React from 'react'
import Core, { ICoreTypes } from './Core'
import ListItem from './ListItem'

interface IProps extends ICoreTypes {
  items: Array<string | unknown>
  itemRenderer: React.FunctionComponent
  onItemClick?: (event: React.MouseEvent) => void
}

const List: React.FunctionComponent<IProps> = props => {
  const listRef = React.useRef(null)
  const { items, itemRenderer, onItemClick } = props

  const renderItem = (item, index: number) => {
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
