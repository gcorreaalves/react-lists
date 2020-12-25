import React from 'react'
import faker from 'faker'
import { Box, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'
import { List } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  animal: {
    marginBottom: theme.spacing(2),
    width: '100%'
  }
}))

const animals = Array(20)
  .fill({})
  .map((item, index) => ({
    id: faker.random.uuid(),
    url: `${faker.image.animals()}?v=${index}`
  }))

const AnimalRenderer = ({ url }) => {
  const classes = useStyles()

  return <img className={classes.animal} src={url} />
}

const codeString = `import React from 'react'
import faker from 'faker'
import { makeStyles } from '@material-ui/core'
import { List } from '@react-lists/core'

const useStyles = makeStyles(theme => ({
  animal: {
    marginBottom: theme.spacing(2),
    width: '100%'
  }
}))

const animals = Array(20).fill({}).map((item, index) => ({
  id: faker.random.uuid(),
  url: \`\${faker.image.animals()}?v=\${index}\`
}))

const AnimalRenderer = ({ url }) => {
  const classes = useStyles()

  return <img className={classes.animal} src={url} />
}

export default function SimpleList() {
  return (
    <List
      listHeight={400}
      items={animals}
      itemRenderer={AnimalRenderer}
    />
  )
}`

export default function SimpleList() {
  return (
    <>
      <Box mb={2}>
        <List listHeight={400} items={animals} itemRenderer={AnimalRenderer} />
      </Box>
      <SyntaxHighlighter showLineNumbers language='tsx' style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}
