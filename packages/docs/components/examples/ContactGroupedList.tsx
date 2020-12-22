import React from 'react'
import faker from 'faker'
import { Box, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  contact: {
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  name: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingBottom: 5
  },
  phone: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'normal',
    paddingBottom: 5
  },
  email: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal'
  }
}))

const contacts = Array(100).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  email: faker.internet.email()
}))
.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))
.reduce((list, contact) => {
  const firstChar = contact.name[0].toUpperCase()

  if (!list.hasOwnProperty(firstChar)) {
    list[firstChar] = {
      data: [],
      header: firstChar
    }
  }

  list[firstChar].data.push(contact)

  return list
}, {})

const ContactRenderer = ({ email, name, phone }) => {
  const classes = useStyles()

  return (
  <div className={classes.contact}>
    <div className={classes.name}>{name}</div>
    <div className={classes.phone}>{phone}</div>
    <div className={classes.email}>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  </div>
  )
}

const codeString =
`import React from 'react'
import faker from 'faker'
import { makeStyles } from '@material-ui/core'
import { GroupList } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  contact: {
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  name: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
    paddingBottom: 5
  },
  phone: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'normal',
    paddingBottom: 5
  },
  email: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal'
  }
}))

const contacts = Array(100).fill({}).map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  phone: faker.phone.phoneNumberFormat(),
  email: faker.internet.email()
}))
.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))
.reduce((list, contact) => {
  const firstChar = contact.name[0].toUpperCase()

  if (!list.hasOwnProperty(firstChar)) {
    list[firstChar] = {
      data: [],
      header: firstChar
    }
  }

  list[firstChar].data.push(contact)

  return list
}, {})

const ContactRenderer = ({ email, name, phone }) => {
    const classes = useStyles()

    return (
    <div className={classes.contact}>
      <div className={classes.name}>{name}</div>
      <div className={classes.phone}>{phone}</div>
      <div className={classes.email}>
        <a href={\`mailto:\${email}\`}>{email}</a>
      </div>
    </div>
  )
}

export default function ContactGroupedList() {
  return (
    <GroupList
      items={contacts}
      itemRenderer={ContactRenderer}
      listHeight={400}
      showGroupIndex
    />
  )
}`

export default function ContactGroupedList() {
  return (
    <>
      <Box mb={2}>
        <GroupList
          items={contacts}
          itemRenderer={ContactRenderer}
          listHeight={400}
          showGroupIndex
        />
      </Box>
      <SyntaxHighlighter language='tsx' showLineNumbers style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}
