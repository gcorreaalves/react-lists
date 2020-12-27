import React from 'react'
import faker from 'faker'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
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

AnimalRenderer.propTypes = {
  url: PropTypes.string.isRequired
}

const codeString = `import React from 'react'
import faker from 'faker'
import PropTypes from 'prop-types'
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

AnimalRenderer.propTypes = {
  url: PropTypes.string.isRequired
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

export default function VirtualList() {
  return (
    <>
      <List listHeight={400} items={animals} itemRenderer={AnimalRenderer} />
      <SyntaxHighlighter showLineNumbers language='tsx' style={darcula}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}
