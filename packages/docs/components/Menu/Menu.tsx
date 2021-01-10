import React from 'react'
import { Link } from 'react-scroll'
import {
  Divider,
  Drawer,
  IconButton,
  List as MaterialList,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  useTheme
} from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons'
import { MENU_CLOSE, useDispatchMenuOpen, useMenuOpen } from './Context'
import styles from '../../styles/Home.module.css'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}))

const Menu: React.FunctionComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const open = useMenuOpen()
  const dispatch = useDispatchMenuOpen()

  const handleClose = () => dispatch({ type: MENU_CLOSE })

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <MaterialList
        subheader={<ListSubheader component='div'>Documentation</ListSubheader>}
      >
        {[
          {
            anchor: 'get-started',
            text: 'Get Started'
          },
          {
            anchor: 'api-reference',
            text: 'API Reference'
          },
          {
            anchor: 'styles',
            text: 'Styles'
          }
        ].map(link => (
          <Link
            activeClass={styles.active}
            duration={500}
            key={link.anchor}
            offset={-50}
            smooth={true}
            spy={true}
            to={link.anchor}
          >
            <ListItem button>
              <ListItemText primary={link.text} />
            </ListItem>
          </Link>
        ))}
      </MaterialList>
      <Divider />
      <MaterialList
        subheader={<ListSubheader component='div'>Examples</ListSubheader>}
      >
        {[
          {
            anchor: 'example-simple-list',
            text: 'Simple List',
            description: ''
          },
          {
            anchor: 'example-100000-items',
            text: '100.000 items',
            description: 'Virtualized List'
          },
          {
            anchor: 'example-combo-box',
            text: 'Combo Box',
            description: 'Customized List'
          },
          {
            anchor: 'example-news-feed',
            text: 'News Feed',
            description: 'Infinite Scroll'
          },
          {
            anchor: 'example-contacts',
            text: 'Contacts',
            description: 'Grouped List'
          },
          {
            anchor: 'example-chat-messages',
            text: 'Chat Messages',
            description: 'Reverse List'
          }
        ].map(link => (
          <Link
            activeClass={styles.active}
            duration={500}
            key={link.anchor}
            offset={-50}
            smooth={true}
            spy={true}
            to={link.anchor}
          >
            <ListItem button>
              <ListItemText primary={link.text} secondary={link.description} />
            </ListItem>
          </Link>
        ))}
      </MaterialList>
    </Drawer>
  )
}

export default Menu
