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

  const changePushedButton = (val:string) => {
    console.log(pushedButton === ('sortByReitUp' || 'sortByReitDown'))
    setPushedButton(val)
  }

  useEffect(()=>{console.log(pushedButton)},[pushedButton])

  return (
    <div className={styles.main}>
      <p className={styles.header}>Избранное</p>
      <div className='w-full h-7 '>
        <div className={styles.sort_buttons_container + (pushedButton === 'sortByReitUp' || pushedButton ==='sortByReitDown' ? ' border-[#41522E]' : ' border-[#E5E5E5]')}>
          <p className={'text-[14px]'+(pushedButton === 'sortByReitUp' || pushedButton ==='sortByReitDown'  ? ' text-[#41522E]' : ' text-[#E5E5E5]')}>Рейтинг</p>
          <div>
            <UpButton onClick={sortByReitUp} change={changePushedButton} value='sortByReitUp' hookVal={pushedButton}/>
            <DownButton onClick={sortByReitDown} change={changePushedButton} value='sortByReitDown' hookVal={pushedButton}/>
          </div>
        </div>
        <div className={styles.sort_buttons_container + (pushedButton === 'sortByPriceUp' || pushedButton ==='sortByPriceDown' ? ' border-[#41522E]' : ' border-[#E5E5E5]')}>
          <p className={'text-[14px]'+(pushedButton === 'sortByPriceUp' || pushedButton ==='sortByPriceDown' ? ' text-[#41522E]' : ' text-[#E5E5E5]')}>Цена</p>
          <div>
            <UpButton onClick={sortByPriceUp} change={changePushedButton} value='sortByPriceUp' hookVal={pushedButton}/>
            <DownButton onClick={sortByPriceDown} change={changePushedButton} value='sortByPriceDown' hookVal={pushedButton}/>
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