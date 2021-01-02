import React from 'react'
import clsx from 'clsx'
import { AppBar, IconButton, Toolbar, makeStyles } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { MENU_OPEN, useDispatchMenuOpen, useMenuOpen } from './Menu/Context'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  appBar: {
    background: '#fafafa',
    boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  }
}))

const Header = () => {
  const classes = useStyles()
  const open = useMenuOpen()
  const dispatch = useDispatchMenuOpen()

  const handleOpen = () => dispatch({ type: MENU_OPEN })

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          aria-label='open drawer'
          onClick={handleOpen}
          edge='start'
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
