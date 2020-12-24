const styles = {
  root: {
    position: 'relative'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%'
  },
  reversedList: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  groupedList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  groupedListHeader: {
    borderBottom: '1px solid #cccccc',
    marginBottom: '10px',
    paddingBottom: '5px'
  },
  groupIndex: {
    position: 'absolute',
    right: 20,
    top: 0
  },
  groupIndexList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%'
  },
  groupIndexListItem: {
    lineHeight: 1,
    textAlign: 'center'
  },
  groupIndexListItemLink: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none'
  }
}

export default styles
