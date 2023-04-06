import React from 'react'
import Heart from '../../Heart/Heart'
import Star from '../../Star/Star'
import styles from './ChooseItem.module.scss'
import { GetHotel, } from '../../../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { add } from '../../../../../store/fav.slice'
import HousePicture from './HousePicture/HousePicture'
import { dataHotels } from '../../../../../store/data.slice'
import { changeDate } from '../changeDate'


const ChooseItem = ({ hotelName, priceAvg, stars, hotelId }: GetHotel) => {

  const dispatch = useAppDispatch()

  const data = useAppSelector(dataHotels)

  const onClick = () => {
    dispatch(add({hotelName:hotelName,priceAvg:priceAvg,stars:stars,hotelId:hotelId}))
  }

  let starsArr = []

  for (let i = 1; i < 6; i++) {
    starsArr.push(<Star color={(i<=stars?'  ':' opacity-60 ')}/>)
  }

  return (
    <div className={styles.main}>
      <div className={styles.right_part}>
        <div className='h-[80px] w-[80px] rounded-full bg-[#41522E] bg-opacity-5 flex items-center justify-center m-[10px] ml-0'>
          <HousePicture />
        </div>
        <div className={styles.header}>
          <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{hotelName}</p>
          <p>{`${changeDate(data.data.date)} - ${data.data.number} день`}</p>
          <div className={styles.stars_container}>
            {starsArr}
          </div>
        </div>
      </div>
      <div className={styles.left_part}>
        <Heart onClick={onClick}/>
        <div className={styles.price_container}>
          <label className={styles.price}>Price: </label>
          <label className={styles.price_number}>{priceAvg + ' ₽'}</label>
        </div>
      </div>
    </div>
  )
}

export default ChooseItem