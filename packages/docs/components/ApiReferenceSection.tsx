import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import darcula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula'

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 50
  }
}))

const ApiReferenceSection = () => {
  const classes = useStyles()

  return (
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
          The height of the list in pixels. Try to use the height of the parent
          element or the window to have it dynamically.
        </li>
        <li>
          <Typography>
            <b>loadingRenderer</b>: () =&gt; ReactNode
          </Typography>
          Function to determine how the loading will be rendered.
        </li>
        <li>
          <Typography>
            <b>reverse</b>: boolean
          </Typography>
          Render the list in reverse.
        </li>
        <li>
          <Typography>
            <b>displayLoading</b>: boolean
          </Typography>
          Display a loading component when onLoadMore function is executed.
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
          Callback function executed whenever the list reaches the bottom, or
          the top if it is a reverse list.
        </li>
        <li>
          <Typography>
            <b>onTopReached</b>: () =&gt; void
          </Typography>
          Callback function executed whenever the list reaches the beginning.
        </li>
      </ul>
      <Typography gutterBottom>
        <strong>GroupList</strong>
      </Typography>
      <Typography gutterBottom>Attributes:</Typography>
      The GroupList component has the same attributes as the List Component,
      plus the following:
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
  )
}

export default ApiReferenceSection
