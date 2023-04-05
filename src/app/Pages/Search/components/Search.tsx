import React from 'react'
import FavouritesHotels from './FavouritesComponent/FavouriteItem/FavouritesItem'
import SearchedHotels from './ChooseComponent/ChooseItem/ChooseItem'
import SearchComponent from './InputComponent/InputComponent'
import FavouritesComponent from './FavouritesComponent/FavouritesComponent'
import ChooseComponent from './ChooseComponent/ChooseComponent'
import styles from './Search.module.scss'
import BackButton from './ChooseComponent/BackButton/BackButton'

const Search = () => {
  return (
    <>
      <div className={styles.header}>
        <label className={styles.project_name}>Simple Hotel Check</label>
        <BackButton />
      </div>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.left_side}>
            <SearchComponent />
            <FavouritesComponent />
          </div>
          <ChooseComponent />
        </div>
      </div>
    </>


  )
}

export default Search