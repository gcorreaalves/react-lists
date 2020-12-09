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
    color: 'blue',
    fontSize: '14px',
    lineHeight: 1
  },
  loading: {
    paddingBottom: '10px',
    textAlign: 'center'
  }
}

export default styles
