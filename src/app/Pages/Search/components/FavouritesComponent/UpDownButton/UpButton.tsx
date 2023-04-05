import { useAppDispatch } from '../../../../../hooks'
import { GetHotel } from '../../../../../interfaces'
import { sort } from '../../../../../store/fav.slice'
import styles from './UpDownButton.module.scss'

interface IData{
  onClick:(a:GetHotel,b:GetHotel)=>number
}

const UpButton = ({onClick}:IData) => {

  const dispatch = useAppDispatch()

  const push = () => {
    dispatch(sort(onClick))
  }

  return (
    <div onClick={()=>{push()}}>
      <svg className={styles.button}  viewBox="0 0 24 24" strokeLinecap="round"  strokeLinejoin="round" >  
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
  )
}

export default UpButton