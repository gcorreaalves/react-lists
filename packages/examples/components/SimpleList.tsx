import React from 'react'
import faker from 'faker'
import List from '@react-chat/core/src/List'
import styles from '../styles/Home.module.css'

const animals = Array(20)
  .fill()
  .map((item, index) => ({
    id: faker.random.uuid(),
    url: `${faker.image.animals()}?v=${index}`
  }))

const AnimalRenderer = ({ url }) => <img className={styles.animal} src={url} />

export default function SimpleList() {
  return <List listHeight={400} items={animals} itemRenderer={AnimalRenderer} />
}
