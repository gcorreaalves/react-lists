import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import SimpleList from '../components/examples/SimpleList'
import InfiniteScrollList from '../components/examples/InfiniteScrollList'
import ContactGroupedList from '../components/examples/ContactGroupedList'
import ChatMessagesReverseList from '../components/examples/ChatMessagesReverseList'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '680px',
    margin: '30px auto',
    width: '100%'
  },
  section: {
    marginTop: 50
  }
}))

const ExamplesSection: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
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
            Render thousands of items without affecting the performance of your
            application using virtual lists.
          </Typography>
        </Box>
      </section>
      <section className={classes.section} id='example-combo-box'>
        <Typography variant='h5' component='h2' gutterBottom>
          Combo Box
        </Typography>
        <Box mb={3}>
          <Typography>
            Easy customization whether using your own components or overwriting
            CSS styles.
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
            asynchronously and be free to implement all the logic of how, what
            and when load more and more data.
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
        <ChatMessagesReverseList />
      </section>
    </div>
  )
}

export default ExamplesSection
