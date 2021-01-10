import React from 'react'

type Item = string | unknown

interface PropTypes {
  item: Item
  renderer: React.FunctionComponent
  onClick?: (item: Item) => void
}

const ListItem: React.FunctionComponent<PropTypes> = ({
  item,
  renderer,
  onClick
}) => {
  const handleClick = (item: Item) => (event: React.MouseEvent) => {
    event.preventDefault()
    onClick && onClick(item)
  }

  const ItemComponent = renderer
  let props

  if (typeof item === 'string') {
    props = { item: item }
  } else {
    props = { ...item }
  }

  return (
    <li onClick={handleClick(item)}>
      <ItemComponent {...props} />
    </li>
  )
}

export default ListItem
