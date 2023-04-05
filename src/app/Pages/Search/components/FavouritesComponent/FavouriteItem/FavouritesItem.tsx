import React from 'react'
import Star from '../../Star/Star'
import styles from './FavouriteItem.module.scss'
import { GetHotel } from '../../../../../interfaces'
import { useAppDispatch } from '../../../../../hooks'
import { remove } from '../../../../../store/fav.slice'
import RedHeart from '../../Heart/RedHeart'

const FavouritesItem = ({ hotelName, priceAvg, stars, hotelId }: GetHotel) => {

  const starsArr = []

  for (let i = 1; i < 6; i++) {
    starsArr.push(<Star color={(i<=stars?'  ':' opacity-60 ')}/>)
  }

  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(remove(hotelId))
  }


  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className='w-4/5'>
          <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{hotelName}</p>
        </div>
        <p>07 июдя 2020 - 1 день</p>
        <div className={styles.footer}>
          <div className={styles.stars_container}>
            {starsArr}
          </div>
          <div className={styles.price_container}>
            <label className={styles.price}>Price: </label>
            <label className={styles.price_number}>{priceAvg + ' ₽'}</label>
          </div>
        </div>
      </div>
      <div className={styles.heart_container}>
        <RedHeart onClick={onClick}/> 
      </div>
    </div>
  )
}

export default FavouritesItem