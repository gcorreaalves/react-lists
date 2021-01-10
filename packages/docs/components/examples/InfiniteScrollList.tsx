import React from 'react'
import faker from 'faker'
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from '@material-ui/icons'
import { red } from '@material-ui/core/colors'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { List } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    width: '80%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const DEFAULT_QUANTITY = 20

const fakeData = (quantity = DEFAULT_QUANTITY) => {
  return Array(quantity)
    .fill({})
    .map((item, index) => ({
      id: faker.random.uuid(),
      user: {
        name: faker.name.findName()
      },
      content: faker.lorem.sentence(),
      imageUrl: `${faker.image.animals()}?v=${index}`,
      date: new Intl.DateTimeFormat('en', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(faker.date.past())
    }))
}

const initialNews = fakeData()

const NewsRenderer: React.FunctionComponent<{
  content: string
  date: string
  user: { name: string }
  imageUrl: string
}> = ({ content, date, user, imageUrl }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={imageUrl} />}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={date}
      />
      <CardMedia className={classes.media} image={imageUrl} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

const codeString = `import React from 'react'
import faker from 'faker'
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from '@material-ui/icons'
import { red } from '@material-ui/core/colors'
import { List } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    width: '80%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const DEFAULT_QUANTITY = 20

const fakeData = (quantity = DEFAULT_QUANTITY) => {
  return Array(quantity).fill({}).map((item, index) => ({
    id: faker.random.uuid(),
    user: {
      name: faker.name.findName()
    },
    content: faker.lorem.sentence,
    imageUrl: \`\${faker.image.animals()}?v=\${index}\`,
    date: new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(faker.date.past())
  }))
}

const initialNews = fakeData()

const NewsRenderer = ({
  content,
  date,
  user,
  imageUrl
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={imageUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

NewsRenderer.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default function InfiniteScrollList() {
  const [news, setNewsFeed] = React.useState(initialNews)
  const [hasMoreItems, setHasMoreItems] = React.useState(true)
  const [displayLoading, setDisplayLoading] = React.useState(false)

  const loadMore = () => {
    if (!hasMoreItems) {
      return
    }

    setDisplayLoading(true)

    setTimeout(() => {
      const newNews = fakeData()

      setNewsFeed(oldNews => {
        const newssUpdated = [...oldNews, ...newNews]

        setHasMoreItems(newssUpdated.length < DEFAULT_QUANTITY * 4)
        setDisplayLoading(false)

        return newssUpdated
      })
    }, 2000)
  }

  return (
    <List
      displayLoading={displayLoading}
      items={news}
      itemRenderer={NewsRenderer}
      listHeight={600}
      onLoadMore={loadMore}
    />
  )
}`

const InfiniteScrollList: React.FunctionComponent = () => {
  const [news, setNewsFeed] = React.useState(initialNews)
  const [hasMoreItems, setHasMoreItems] = React.useState(true)
  const [displayLoading, setDisplayLoading] = React.useState(false)

  const loadMore = () => {
    if (!hasMoreItems) {
      return
    }

    setDisplayLoading(true)

    setTimeout(() => {
      const newNews = fakeData()

      setNewsFeed(oldNews => {
        const newssUpdated = [...oldNews, ...newNews]

        setHasMoreItems(newssUpdated.length < DEFAULT_QUANTITY * 4)
        setDisplayLoading(false)

        return newssUpdated
      })
    }, 2000)
  }

  return (
    <>
      <Box mb={2}>
        <List
          displayLoading={displayLoading}
          items={news}
          itemRenderer={NewsRenderer}
          listHeight={600}
          onLoadMore={loadMore}
        />
      </Box>
      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}

export default InfiniteScrollList
