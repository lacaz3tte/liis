import { useEffect, useState } from 'react'
import styles from './InputComponent.module.scss'
import { useLazyGetProductsQuery } from '../../../../store/store.api'
import { useAppDispatch } from '../../../../hooks'
import { rewrite } from '../../../../store/hotels.slice'
import { rewriteData } from '../../../../store/data.slice'

interface IData {
  city: string,
  date: string,
  numberOfDays: number
}

const InputComponent = () => {

  const [fetchHotels, { data }] = useLazyGetProductsQuery()

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(rewrite(data))
  },[data])

  const [info, setInfo] = useState<IData>({
    city: 'Москва',
    date: new Date().toISOString().substring(0, 10),
    numberOfDays: 1
  })

  const evictionDate = () => {
    let newDate = new Date(info.date)
    newDate.setDate(newDate.getDate() + info.numberOfDays)
    return newDate.toISOString().substring(0, 10)
  }

  useEffect(() => {
    fetchHotels({ city: info.city, date: info.date, evictionDate: evictionDate() })
  }, [])

  return (
    <div>
      <div className={styles.main}>
        <div>
          <label className={styles.label}>Локация</label>
          <input type='text' className={styles.input}
            value={info.city}
            onChange={(e) => {
              setInfo((prevState) => ({
                ...prevState,
                city: e.target.value,
              }))
            }}
          ></input>
        </div>
        <div>
          <label className={styles.label}>Дата заселения</label>
          <input type='date' className={styles.input}
            value={info.date}
            onChange={(e) => {
              setInfo((prevState) => ({
                ...prevState,
                date: e.target.value,
              }))
            }}
          ></input>
        </div>
        <div>
          <label className={styles.label}>Количество дней</label>
          <input type='number' className={styles.input}
            value={info.numberOfDays}
            onChange={(e) => {
              setInfo((prevState) => ({
                ...prevState,
                numberOfDays: Number(e.target.value),
              }))
            }}
          ></input>
        </div>
        <button className={styles.button}
          onClick={() => {
            fetchHotels({ city: info.city, date: info.date, evictionDate: evictionDate() })
            dispatch(rewriteData({city:info.city,date:info.date,number:info.numberOfDays}))
          }}
        >Найти</button>
      </div>
    </div>
  )
}

export default InputComponent