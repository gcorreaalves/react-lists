import React from 'react'
import faker from 'faker'
import List from '@react-lists/core/src/List'
import styles from '../styles/Home.module.css'

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

const ContactRenderer = ({ email, name, phone }) => (
  <div className={styles.contact}>
    <div className={styles.contactName}>{name}</div>
    <div className={styles.contactPhone}>{phone}</div>
    <div className={styles.contactEmail}>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  </div>
)

export default function ContactGroupedList() {
  return (
    <List
      listHeight={400}
      items={contacts}
      itemRenderer={ContactRenderer}
      grouped
      showGroupIndex
    />
  )
}
