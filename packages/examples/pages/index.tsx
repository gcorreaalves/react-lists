import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SimpleList from '../components/SimpleList'
import InfiniteScrollList from '../components/InfiniteScrollList'
import ContactGroupedList from '../components/ContactGroupedList'
import ChatMessagesReversedList from '../components/ChatMessagesReversedList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Examples</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Simple List</h2>
          <SimpleList />
        </section>
        <section className={styles.section}>
          <h2>Infinite Loading</h2>
          <InfiniteScrollList />
        </section>
        <section className={styles.section}>
          <h2>Grouped List: Contacts</h2>
          <ContactGroupedList />
        </section>
        <section className={styles.section}>
          <h2>Reversed List: Chat Messages</h2>
          <ChatMessagesReversedList />
        </section>
      </main>
    </div>
  )
}
