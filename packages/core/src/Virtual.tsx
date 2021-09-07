import React from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  root: {
    position: 'relative'
  },
  list: {
    margin: 0,
    overflowY: 'scroll',
    padding: 0,
    position: 'relative',
    width: '100%'
  },
  reverseList: {
    display: 'flex',
    flexDirection: 'column-reverse'
  }
}

interface IProps {
  defaultItemHeight?: number
  items: Array<string | unknown>
  listHeight: number
  overScanCount?: number
  renderItem: React.FunctionComponent
  reverse?: boolean
}

const Virtual: React.FunctionComponent<IProps> = props => {
  const {
    defaultItemHeight = 64,
    items,
    listHeight,
    overScanCount = 5,
    renderItem,
    reverse
  } = props

  const containerRef = React.useRef(null)
  const listRef = React.useRef(null)
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const totalItems = items.length
  const height = totalItems * defaultItemHeight

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollTop)
    }
  }

  const isVisible = (elemPosition: number) =>
    elemPosition > scrollPosition - overScanCount * defaultItemHeight &&
    elemPosition <
      scrollPosition + listHeight + overScanCount * defaultItemHeight

  const renderItems = () => {
    const Item = renderItem
    let topPosition = 0

    return items.map((_, index) => {
      topPosition += defaultItemHeight * index

      return (
        isVisible(topPosition) && (
          <Item
            index={index}
            style={{
              minHeight: defaultItemHeight * index,
              position: 'absolute',
              top: topPosition,
              width: '100%'
            }}
          />
        )
      )
    })
  }

  const getListStyles = (): React.CSSProperties => {
    let listStyles = { ...styles.list }

    if (reverse) {
      listStyles = { ...listStyles, ...styles.reverseList }
    }

    if (!listHeight || listHeight <= 0) {
      throw new Error(
        'The attribute listHeight is required and must be greater than 0.'
      )
    }

    return {
      ...listStyles,
      height: listHeight
    }
  }

  return (
    <div style={styles.root}>
      <div ref={containerRef} onScroll={handleScroll} style={getListStyles()}>
        <div ref={listRef} style={{ height }}>
          {renderItems()}
        </div>
      </div>
    </div>
  )
}

export default Virtual
