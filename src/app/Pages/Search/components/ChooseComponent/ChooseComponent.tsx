import React, { useEffect, useState } from 'react'
import styles from './ChooseComponent.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { selectedHotels } from '../../../../store/hotels.slice'
import ChooseItem from './ChooseItem/ChooseItem'
import { favHotels } from '../../../../store/fav.slice'
import { dataHotels } from '../../../../store/data.slice'
import Arrow from './ChooseItem/Arrow/Arrow'
import { changeDate } from './changeDate'
import { correctEnding } from './correctEnding'

const ChooseComponent = () => {

  const hotelsSearch = useAppSelector(selectedHotels)
  const hotelsFavs = useAppSelector(favHotels)
  const data = useAppSelector(dataHotels)

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className='flex items-center'>
          <label className={styles.hotels}>Отели</label>
          <Arrow />
          <label className={styles.hotels}>{ data.data.city}</label>
        </div>
        <label className={styles.date}>{changeDate(data.data.date)}</label>
      </div>
      <div className={styles.images_container}>
        <div className={styles.image + "  bg-[url('../public/m1.jpg')]"} />
        <div className={styles.image + "  bg-[url('../public/m2.jpg')]"} />
        <div className={styles.image + "  bg-[url('../public/m4.jpg')]"} />
        <div className={styles.image + "  bg-[url('../public/m5.jpg')]"} />
      </div>
      <label className={styles.number_of_fav}>{'Добавлено в Избранное: ' +  hotelsFavs.fav.length + correctEnding(hotelsFavs.fav.length)}</label>
      <div className={styles.hotels_container}>
        {
          hotelsSearch.hotels && hotelsSearch.hotels.map((e:any)=>{
            return <ChooseItem hotelId={e.hotelId} hotelName={e.hotelName} priceAvg={e.priceAvg} stars={e.stars} />
          })
        } 

      </div>
    </div>
  )
}

export default ChooseComponent