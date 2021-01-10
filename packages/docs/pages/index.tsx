import React from 'react'
import {
  CssBaseline,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles
} from '@material-ui/core'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header'
import {
  MENU_CLOSE,
  MENU_OPEN,
  useDispatchMenuOpen,
  useMenuOpen
} from '../components/Menu/Context'
import ExamplesSection from '../components/ExamplesSection'
import GetStartedSection from '../components/GetStartedSection'
import ApiReferenceSection from '../components/ApiReferenceSection'

const drawerWidth = 240

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex'
    },
    content: props => {
      return {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: props.menuOpen ? 0 : -drawerWidth,
        width: '100%'
      }
    },
    contentShift: {
      marginLeft: 0
    },
    container: {
      maxWidth: '680px',
      margin: '30px auto',
      width: '100%'
    },
    section: {
      marginTop: 50
    }
  }
})

const Index: React.FunctionComponent = () => {
  const menuOpen = useMenuOpen()
  const dispatchMenuOpen = useDispatchMenuOpen()
  const classes = useStyles({ menuOpen })
  const theme = useTheme()
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'))

  React.useEffect(() => {
    const actionType = isMobileOrTablet ? MENU_CLOSE : MENU_OPEN
    dispatchMenuOpen({ type: actionType })
  }, [dispatchMenuOpen, isMobileOrTablet])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Menu />
      <main className={classes.content}>
        <div className={classes.container} id='documentation'>
          <Typography variant='h4' component='h2' gutterBottom>
            Documentation
          </Typography>
          <GetStartedSection />
          <ApiReferenceSection />
          <section className={classes.section} id='styles'>
            <Typography variant='h5' component='h2' gutterBottom>
              Styles
            </Typography>
          </section>
        </div>
        <Divider />
        <ExamplesSection />
      </main>
    </div>
  )
}

export default Index
