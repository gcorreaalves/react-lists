const styles = {
  root: {
    position: 'relative'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    position: 'relative',
    margin: 0,
    width: '100%'
  },
  reverseList: {
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
  subHeader: {
    marginBottom: '10px',
    paddingBottom: '5px',
    top: 0,
    width: '100%',
    zIndex: 1
  },
  subHeaderSticky: {
    position: 'sticky'
  },
  indexMenu: {
    position: 'absolute',
    right: 20,
    top: 0,
    zIndex: 2
  },
  indexMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%'
  },
  indexMenuListItem: {
    lineHeight: 1,
    textAlign: 'center'
  },
  indexMenuListItemLink: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none'
  }
}

export default styles
