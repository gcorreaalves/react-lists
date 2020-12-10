import React from 'react'
import faker from 'faker'
import List from '@react-lists/core/src/List'
import styles from '../styles/Home.module.css'

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
  let messageStyles = styles.message

  if (sender.id === 1) {
    messageStyles += ` ${styles.messageSender}`
  }

  return (
    <div className={messageStyles}>
      <div className={styles.messageHeader}>{sender.name}</div>
      <div className={styles.messageBody}>{text}</div>
      <div className={styles.messageFooter}>{datetime}</div>
    </div>
  )
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
    <List
      displayLoading={displayLoading}
      grouped
      listHeight={400}
      items={messages.sort(sortMessages).reduce(groupMessagesByDate, {})}
      itemRenderer={MessageRenderer}
      onLoadMore={loadMore}
      reversed
    />
  )
}
