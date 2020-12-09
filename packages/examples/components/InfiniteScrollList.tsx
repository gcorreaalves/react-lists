import React from 'react'
import faker from 'faker'
import List from '@react-chat/core/src/List'
import styles from '../styles/Home.module.css'

const DEFAULT_QUANTITY = 20

const fakeAnimals = (quantity = DEFAULT_QUANTITY) => {
  return Array(quantity).fill()
    .map((item, index) => ({
      id: faker.random.uuid(),
      url: `${faker.image.animals()}?v=${index}`
    }))
}

const initialAnimals = fakeAnimals()

const AnimalRenderer = ({ url }) => <img className={styles.animal} src={url} />

export default function InfiniteScrollList() {
  const [animals, setAnimals] = React.useState(initialAnimals)
  const [hasMoreItems, setHasMoreItems] = React.useState(true)
  const [displayLoading, setDisplayLoading] = React.useState(false)

  const loadMoreAnimals = () => {
    if (!hasMoreItems) {
      return
    }

    setDisplayLoading(true)

    setTimeout(() => {
      const newAnimals = fakeAnimals()

      setAnimals(oldAnimals => {
        const animalsUpdated = [...oldAnimals, ...newAnimals]

        setHasMoreItems(animalsUpdated.length < DEFAULT_QUANTITY * 2)
        setDisplayLoading(false)

        return animalsUpdated
      })
    }, 2000)
  }

  return (
    <List
      displayLoading={displayLoading}
      items={animals}
      itemRenderer={AnimalRenderer}
      listHeight={400}
      onLoadMore={loadMoreAnimals}
    />
  )
}
