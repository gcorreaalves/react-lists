import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-scroll'
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List as MaterialList,
  ListItem,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { List } from '@react-lists/core'
import SimpleList from '../components/examples/SimpleList'
import InfiniteScrollList from '../components/examples/InfiniteScrollList'
import ContactGroupedList from '../components/examples/ContactGroupedList'
import ChatMessagesReversedList from '../components/examples/ChatMessagesReversedList'
import styles from '../styles/Home.module.css'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    background: 'none',
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
  },
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
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
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MaterialList
          subheader={
            <ListSubheader component='div'>Documentation</ListSubheader>
          }
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
                <ListItemText
                  primary={link.text}
                  secondary={link.description}
                />
              </ListItem>
            </Link>
          ))}
        </MaterialList>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.container} id='documentation'>
          <Typography variant='h4' component='h2' gutterBottom>
            Documentation
          </Typography>
          <section className={classes.section} id='get-started'>
            <Typography variant='h5' component='h2' gutterBottom>
              Get Started
            </Typography>

            <Typography paragraph>
              React List is a simple, easy to use React component to create
              different kind of lists. It supports:
            </Typography>

            <ul>
              <li>
                <Typography>virtual list</Typography>
              </li>
              <li>
                <Typography>infinite scroll</Typography>
              </li>
              <li>
                <Typography>index to browse the list easily</Typography>
              </li>
              <li>
                <Typography>grouping with sticky headers</Typography>
              </li>
              <li>
                <Typography>reverse list</Typography>
              </li>
            </ul>

            <Typography paragraph>
              To start, install react-lists in your React project.
            </Typography>

            <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
              {'npm install react-lists'}
            </SyntaxHighlighter>

            <Box mb={2} mt={2}>
              <Typography paragraph>If you are using yarn.</Typography>
              <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
                {'yarn add react-lists'}
              </SyntaxHighlighter>
            </Box>
            <Box mb={2} mt={2}>
              <Typography paragraph>Simple usage example.</Typography>

              <List
                listHeight={400}
                items={[
                  'Afghanistan',
                  'Albania',
                  'Algeria',
                  'Andorra',
                  'Angola',
                  'Anguilla',
                  'Antigua &amp; Barbuda',
                  'Argentina',
                  'Armenia',
                  'Aruba',
                  'Australia',
                  'Austria',
                  'Azerbaijan',
                  'Bahamas',
                  'Bahrain',
                  'Bangladesh',
                  'Barbados',
                  'Belarus',
                  'Belgium',
                  'Belize',
                  'Benin',
                  'Bermuda',
                  'Bhutan',
                  'Bolivia',
                  'Bosnia &amp; Herzegovina',
                  'Botswana',
                  'Brazil',
                  'British Virgin Islands',
                  'Brunei',
                  'Bulgaria',
                  'Burkina Faso',
                  'Burundi',
                  'Cambodia',
                  'Cameroon',
                  'Cape Verde',
                  'Cayman Islands',
                  'Chad',
                  'Chile',
                  'China',
                  'Colombia',
                  'Congo',
                  'Cook Islands',
                  'Costa Rica',
                  'Cote D Ivoire',
                  'Croatia',
                  'Cruise Ship',
                  'Cuba',
                  'Cyprus',
                  'Czech Republic',
                  'Denmark',
                  'Djibouti',
                  'Dominica',
                  'Dominican Republic',
                  'Ecuador',
                  'Egypt',
                  'El Salvador',
                  'Equatorial Guinea',
                  'Estonia',
                  'Ethiopia',
                  'Falkland Islands',
                  'Faroe Islands',
                  'Fiji',
                  'Finland',
                  'France',
                  'French Polynesia',
                  'French West Indies',
                  'Gabon',
                  'Gambia',
                  'Georgia',
                  'Germany',
                  'Ghana',
                  'Gibraltar',
                  'Greece',
                  'Greenland',
                  'Grenada',
                  'Guam',
                  'Guatemala',
                  'Guernsey',
                  'Guinea',
                  'Guinea Bissau',
                  'Guyana',
                  'Haiti',
                  'Honduras',
                  'Hong Kong',
                  'Hungary',
                  'Iceland',
                  'India',
                  'Indonesia',
                  'Iran',
                  'Iraq',
                  'Ireland',
                  'Isle of Man',
                  'Israel',
                  'Italy',
                  'Jamaica',
                  'Japan',
                  'Jersey',
                  'Jordan',
                  'Kazakhstan',
                  'Kenya',
                  'Kuwait',
                  'Kyrgyz Republic',
                  'Laos',
                  'Latvia',
                  'Lebanon',
                  'Lesotho',
                  'Liberia',
                  'Libya',
                  'Liechtenstein',
                  'Lithuania',
                  'Luxembourg',
                  'Macau',
                  'Macedonia',
                  'Madagascar',
                  'Malawi',
                  'Malaysia',
                  'Maldives',
                  'Mali',
                  'Malta',
                  'Mauritania',
                  'Mauritius',
                  'Mexico',
                  'Moldova',
                  'Monaco',
                  'Mongolia',
                  'Montenegro',
                  'Montserrat',
                  'Morocco',
                  'Mozambique',
                  'Namibia',
                  'Nepal',
                  'Netherlands',
                  'Netherlands Antilles',
                  'New Caledonia',
                  'New Zealand',
                  'Nicaragua',
                  'Niger',
                  'Nigeria',
                  'Norway',
                  'Oman',
                  'Pakistan',
                  'Palestine',
                  'Panama',
                  'Papua New Guinea',
                  'Paraguay',
                  'Peru',
                  'Philippines',
                  'Poland',
                  'Portugal',
                  'Puerto Rico',
                  'Qatar',
                  'Reunion',
                  'Romania',
                  'Russia',
                  'Rwanda',
                  'Saint Pierre &amp; Miquelon',
                  'Samoa',
                  'San Marino',
                  'Satellite',
                  'Saudi Arabia',
                  'Senegal',
                  'Serbia',
                  'Seychelles',
                  'Sierra Leone',
                  'Singapore',
                  'Slovakia',
                  'Slovenia',
                  'South Africa',
                  'South Korea',
                  'Spain',
                  'Sri Lanka',
                  'St Kitts &amp; Nevis',
                  'St Lucia',
                  'St Vincent',
                  'St. Lucia',
                  'Sudan',
                  'Suriname',
                  'Swaziland',
                  'Sweden',
                  'Switzerland',
                  'Syria',
                  'Taiwan',
                  'Tajikistan',
                  'Tanzania',
                  'Thailand',
                  "Timor L'Este",
                  'Togo',
                  'Tonga',
                  'Trinidad &amp; Tobago',
                  'Tunisia',
                  'Turkey',
                  'Turkmenistan',
                  'Turks &amp; Caicos',
                  'Uganda',
                  'Ukraine',
                  'United Arab Emirates',
                  'United Kingdom',
                  'Uruguay',
                  'Uzbekistan',
                  'Venezuela',
                  'Vietnam',
                  'Virgin Islands (US)',
                  'Yemen',
                  'Zambia',
                  'Zimbabwe'
                ]}
                itemRenderer={({ item }) => {
                  return item
                }}
              />
            </Box>

            <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
              {`import React from 'react'
  import { List } from '@react-lists/core'

  export default function SampleList() {
    return (
      <List
        listHeight={400}
        items={["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]}
        itemRenderer={({ item }) => {
          return item
        }}
      />
    )
  }`}
            </SyntaxHighlighter>
          </section>
          <section className={classes.section} id='api-reference'>
            <Typography variant='h5' component='h2' gutterBottom>
              API Reference
            </Typography>
            <Typography gutterBottom>
              The package exports two components that you can use to create your
              lists.
            </Typography>
            <Typography gutterBottom>
              <strong>List</strong>
            </Typography>
            <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
              {`//...
import { List } from '@react-lists/core'
//...`}
            </SyntaxHighlighter>
            <Typography gutterBottom>Attributes:</Typography>
            <ul>
              <li>
                <Typography>
                  <b>items</b>: object|string[]
                </Typography>
                Items to be rendered.
              </li>
              <li>
                <Typography>
                  <b>itemRenderer</b>: (item) =&gt; ReactNode
                </Typography>
                Function to determine how the item will be rendered.
              </li>
              <li>
                <Typography>
                  <b>listHeight</b>: number
                </Typography>
                The height of the list in pixels. Try to use the height of the
                parent element or the window to have it dynamically.
              </li>
              <li>
                <Typography>
                  <b>loadingRenderer</b>: () =&gt; ReactNode
                </Typography>
                Function to determine how the loading will be rendered.
              </li>
              <li>
                <Typography>
                  <b>reversed</b>: boolean
                </Typography>
                Render the list in reverse.
              </li>
              <li>
                <Typography>
                  <b>displayLoading</b>: boolean
                </Typography>
                Display a loading component when onLoadMore function is
                executed.
              </li>
              <li>
                <Typography>
                  <b>onBottomReached</b>: () =&gt; void
                </Typography>
                Callback function executed whenever the list reaches the end.
              </li>
              <li>
                <Typography>
                  <b>onItemClick</b>: (item: object) =&gt; void
                </Typography>
                Callback function executed whenever the user click on an item.
              </li>
              <li>
                <Typography>
                  <b>onLoadMore</b>: () =&gt; void
                </Typography>
                Callback function executed whenever the list reaches the bottom,
                or the top if it is a reverse list.
              </li>
              <li>
                <Typography>
                  <b>onTopReached</b>: () =&gt; void
                </Typography>
                Callback function executed whenever the list reaches the
                beginning.
              </li>
            </ul>
            <Typography gutterBottom>
              <strong>GroupList</strong>
            </Typography>
            <Typography gutterBottom>Attributes:</Typography>
            The GroupList component has the same attributes as the List
            Component, plus the following:
            <ul>
              <li>
                <Typography>
                  <b>displayIndexMenu</b>: boolean
                </Typography>
                Display a index menu to navigate bettween the grouped list.
              </li>
              <li>
                <Typography>
                  <b>displaySubHeaders</b>: boolean
                </Typography>
                Display sub headers for the groups.
              </li>
              <li>
                <Typography>
                  <b>stickySubHeaders</b>: boolean
                </Typography>
                Make the sub headers sticky.
              </li>
              <li>
                <Typography>
                  <b>subHeaderRenderer</b>: (text: string) =&gt; ReactNode
                </Typography>
                Function to determine how the sub header will be rendered.
              </li>
            </ul>
            <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
              {`//...
import { GroupList } from '@react-lists/core'
//...`}
            </SyntaxHighlighter>
          </section>
          <section className={classes.section} id='styles'>
            <Typography variant='h5' component='h2' gutterBottom>
              Styles
            </Typography>
          </section>
        </div>
        <Divider />
        <div className={classes.container} id='examples'>
          <Typography variant='h4' component='h2' gutterBottom>
            Examples
          </Typography>
          <section className={classes.section} id='example-simple-list'>
            <Typography variant='h5' component='h2' gutterBottom>
              Simple List
            </Typography>
            <SimpleList />
          </section>
          <section className={classes.section} id='example-100000-items'>
            <Typography variant='h5' component='h2' gutterBottom>
              100.000 Items
            </Typography>
            <Box mb={3}>
              <Typography>
                Render thousands of items without affecting the performance of
                your application using virtual lists.
              </Typography>
            </Box>
          </section>
          <section className={classes.section} id='example-combo-box'>
            <Typography variant='h5' component='h2' gutterBottom>
              Combo Box
            </Typography>
            <Box mb={3}>
              <Typography>
                Easy customization whether using your own components or
                overwriting CSS styles.
              </Typography>
            </Box>
          </section>
          <section className={classes.section} id='example-news-feed'>
            <Typography variant='h5' component='h2' gutterBottom>
              News Feed
            </Typography>
            <Box mb={3}>
              <Typography>
                It also supports infinite scroll. You can load your data
                asynchronously and be free to implement all the logic of how,
                what and when load more and more data.
              </Typography>
            </Box>
            <InfiniteScrollList />
          </section>
          <section className={classes.section} id='example-contacts'>
            <Typography variant='h5' component='h2' gutterBottom>
              Contacts
            </Typography>
            <Box mb={3}>
              <Typography>
                Create grouped lists, make the headers sticky and show the index
                menu.
              </Typography>
            </Box>
            <ContactGroupedList />
          </section>
          <section className={classes.section} id='example-chat-messages'>
            <Typography variant='h5' component='h2' gutterBottom>
              Chat Messages
            </Typography>
            <Box mb={3}>
              <Typography>
                Reverse your all list passing just one simple parameter.
              </Typography>
            </Box>
            <ChatMessagesReversedList />
          </section>
        </div>
      </main>
    </div>
  )
}
