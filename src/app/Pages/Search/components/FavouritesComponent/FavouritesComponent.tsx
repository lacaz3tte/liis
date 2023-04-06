import React, { useEffect, useState } from 'react'
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

  const [pushedButton,setPushedButton] = useState('')

  useEffect(()=>{console.log(pushedButton)},[pushedButton])

  return (
    <div className={styles.main}>
      <p className={styles.header}>Избранное</p>
      <div className='w-full h-7 '>
        <div className={styles.sort_buttons_container + (pushedButton === 'rait' ? ' border-[#41522E]' : ' border-[#E5E5E5]')}
          onClick={()=>{setPushedButton('rait')}}
        >
          <p className={'text-[14px]'+(pushedButton === 'rait' ? ' text-[#41522E]' : ' text-[#E5E5E5]')}>Рейтинг</p>
          <div>
            <UpButton onClick={sortByReitUp} />
            <DownButton onClick={sortByReitDown} />
          </div>
        </div>
        <div className={styles.sort_buttons_container + (pushedButton === 'price' ? ' border-[#41522E]' : ' border-[#E5E5E5]')}
          onClick={()=>{setPushedButton('price')}}
        >
          <p className={'text-[14px]'+(pushedButton === 'price' ? ' text-[#41522E]' : ' text-[#E5E5E5]')}>Цена</p>
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