import React from 'react'
import FavouritesHotels from './FavouriteItem/FavouritesItem'
import styles from './FavouritesComponent.module.scss'
import { useAppSelector } from '../../../../hooks';
import { favHotels } from '../../../../store/fav.slice';
import { GetHotel } from '../../../../interfaces';
import UpButton from './UpDownButton/UpButton';
import DownButton from './UpDownButton/DownButton';
import { sortByPriceDown, sortByPriceUp, sortByReitDown, sortByReitUp } from './sort';

const FavouritesComponent = () => {

  const hotelsFavs = useAppSelector(favHotels)

  return (
    <div className={styles.main}>
      <p className={styles.header}>Избранное</p>
      <div className='w-full h-7 '>
        <div className='h-[28px] w-[71px] inline-flex mr-2 border-[#41522E] border-[1px] rounded items-center justify-around'>
          <p className='text-[14px]'>Рейтинг</p>
          <div>
            <UpButton onClick={sortByReitUp} />
            <DownButton onClick={sortByReitDown} />
          </div>
        </div>
        <div className='h-[28px] w-[71px] inline-flex mx-2 border-[#41522E] border-[1px] rounded items-center justify-around'>
          <p className='text-[14px]'>Цена</p>
          <div>
            <UpButton onClick={sortByPriceUp} />
            <DownButton onClick={sortByPriceDown} />
          </div>
        </div>
      </div>
      <div className={styles.fav_container}>
        {
          hotelsFavs.fav && hotelsFavs.fav.map((e: GetHotel) => {
            return <FavouritesHotels hotelId={e.hotelId} hotelName={e.hotelName} priceAvg={e.priceAvg} stars={e.stars} />
          })
        }
      </div>
    </div>
  )
}

export default FavouritesComponent