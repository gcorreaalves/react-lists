import React from 'react'
import faker from 'faker'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  message: {
    background: '#f1f1f1',
    borderRadius: 7.5,
    color: '#4a4a4a',
    maxWidth: 'max-content',
    minWidth: '40%',
    margin: '10px',
    padding: '10px 15px',
    width: '80%'
  },
  messageSender: {
    background: '#dcf8c6',
    marginLeft: 'auto'
  },
  header: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(14),
    marginBottom: theme.spacing(2),
    textAlign: 'left'
  },
  body: {
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(14),
    marginBottom: theme.spacing(2)
  },
  footer: {
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(12),
    textAlign: 'right'
  },
  listSubHeader: {
    paddingTop: 10
  },
  listSubHeaderContent: {
    background: 'rgba(225, 245, 254, 0.92)',
    borderRadius: 7.5,
    fontWeight: 'bold',
    margin: '5px auto',
    padding: '10px 15px',
    width: 'max-content'
  }
}))

let date = faker.date.past()
const DEFAULT_QUANTITY = 100

const mapMessages = (item, index) => {
  if (index % 10 === 0) {
    date = faker.date.past()
  } else {
    const newDate = date.getTime() + 1 * 60 * 60 * 1000
    date.setTime(newDate)
  }

  return {
    id: faker.random.uuid(),
    text: faker.lorem.text(),
    sender: {
      id: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
      name: faker.name.findName()
    },
    date: new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date),
    datetime: new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date),
    timestemp: date.getTime()
  }
}

const sortMessages = (a, b) => b.timestemp - a.timestemp

const groupMessagesByDate = (groupByDate, message) => {
  if (!groupByDate[message.date]) {
    groupByDate[message.date] = {
      header: message.date,
      data: []
    }
  }

  groupByDate[message.date].data.push(message)

  return groupByDate
}

const fakeMessages = () => Array(DEFAULT_QUANTITY).fill({}).map(mapMessages)

const MessageRenderer = ({ text, sender, datetime }) => {
  const classes = useStyles()
  let messageStyles = classes.message

  if (sender.id === 1) {
    messageStyles += ` ${classes.messageSender}`
  }

  return (
    <div className={messageStyles}>
      <div className={classes.header}>{sender.name}</div>
      <div className={classes.body}>{text}</div>
      <div className={classes.footer}>{datetime}</div>
    </div>
  )
}

MessageRenderer.propTypes = {
  datetime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

const SubHeaderRenderer = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.listSubHeader}>
      <div className={classes.listSubHeaderContent}>{text}</div>
    </div>
  )
}

SubHeaderRenderer.propTypes = {
  text: PropTypes.string.isRequired
}

const initialMessages = fakeMessages()

export default function ChatMessagesReversedList() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [hasMoreItems, setHasMoreItems] = React.useState(true)
  const [displayLoading, setDisplayLoading] = React.useState(false)

  const loadMore = () => {
    if (!hasMoreItems) {
      return
    }

    setDisplayLoading(true)

    setTimeout(() => {
      const newMessages = fakeMessages()

      setMessages(oldMessages => {
        const messagesUpdated = [...oldMessages, ...newMessages]

        setHasMoreItems(messagesUpdated.length < DEFAULT_QUANTITY * 2)
        setDisplayLoading(false)

        return messagesUpdated
      })
    }, 2000)
  }

  const codeString = `import React from 'react'
import faker from 'faker'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  message: {
    background: '#f1f1f1',
    borderRadius: 7.5,
    color: '#4a4a4a',
    maxWidth: 'max-content',
    minWidth: '40%',
    margin: '10px',
    padding: '10px 15px',
    width: '80%'
  },
  messageSender: {
    background: '#dcf8c6',
    marginLeft: 'auto'
  },
  header: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(14),
    marginBottom: theme.spacing(2),
    textAlign: 'left'
  },
  body: {
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(14),
    marginBottom: theme.spacing(2)
  },
  footer: {
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(12),
    textAlign: 'right'
  },
  listSubHeader: {
    paddingTop: 10
  },
  listSubHeaderContent: {
    background: 'rgba(225, 245, 254, 0.92)',
    borderRadius: 7.5,
    fontWeight: 'bold',
    margin: '5px auto',
    padding: '10px 15px',
    width: 'max-content'
  }
}))

let date = faker.date.past()
const DEFAULT_QUANTITY = 100

const mapMessages = (item, index) => {
  if (index % 10 === 0) {
    date = faker.date.past()
  } else {
    const newDate = date.getTime() + 1 * 60 * 60 * 1000
    date.setTime(newDate)
  }

  return {
    id: faker.random.uuid(),
    text: faker.lorem.text(),
    sender: {
      id: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
      name: faker.name.findName()
    },
    date: new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date),
    datetime: new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date),
    timestemp: date.getTime()
  }
}

const sortMessages = (a, b) => b.timestemp - a.timestemp

const groupMessagesByDate = (groupByDate, message) => {
  if (!groupByDate[message.date]) {
    groupByDate[message.date] = {
      header: message.date,
      data: []
    }
  }

  groupByDate[message.date].data.push(message)

  return groupByDate
}

const fakeMessages = () => Array(DEFAULT_QUANTITY).fill({}).map(mapMessages)

const MessageRenderer = ({ text, sender, datetime }) => {
  const classes = useStyles()
  let messageStyles = classes.message

  if (sender.id === 1) {
    messageStyles += \` \${classes.messageSender}\`
  }

  return (
    <div className={messageStyles}>
      <div className={classes.header}>{sender.name}</div>
      <div className={classes.body}>{text}</div>
      <div className={classes.footer}>{datetime}</div>
    </div>
  )
}

MessageRenderer.propTypes = {
  datetime: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

const SubHeaderRenderer = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.listSubHeader}>
      <div className={classes.listSubHeaderContent}>
        {text}
      </div>
    </div>
  )
}

SubHeaderRenderer.propTypes = {
  text: PropTypes.string.isRequired
}

const initialMessages = fakeMessages()

export default function ChatMessagesReversedList() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [hasMoreItems, setHasMoreItems] = React.useState(true)
  const [displayLoading, setDisplayLoading] = React.useState(false)

  const loadMore = () => {
    if (!hasMoreItems) {
      return
    }

    setDisplayLoading(true)

    setTimeout(() => {
      const newMessages = fakeMessages()

      setMessages(oldMessages => {
        const messagesUpdated = [...oldMessages, ...newMessages]

        setHasMoreItems(messagesUpdated.length < DEFAULT_QUANTITY * 2)
        setDisplayLoading(false)

        return messagesUpdated
      })
    }, 2000)
  }

return (
  <GroupList
    displayLoading={displayLoading}
    items={messages.sort(sortMessages).reduce(groupMessagesByDate, {})}
    itemRenderer={MessageRenderer}
    listHeight={400}
    reversed
    subHeaderRenderer={SubHeaderRenderer}
    onLoadMore={loadMore}
  />
)`

  return (
    <>
      <Box mb={2}>
        <GroupList
          displayLoading={displayLoading}
          items={messages.sort(sortMessages).reduce(groupMessagesByDate, {})}
          itemRenderer={MessageRenderer}
          listHeight={400}
          reversed
          subHeaderRenderer={SubHeaderRenderer}
          onLoadMore={loadMore}
        />
      </Box>
      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}
