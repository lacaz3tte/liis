import { useAppDispatch } from '../../../../../hooks'
import { GetHotel } from '../../../../../interfaces'
import { sort } from '../../../../../store/fav.slice'
import styles from './UpDownButton.module.scss'

interface IData{
  onClick:(a:GetHotel,b:GetHotel)=>number
  change:(val:string)=>void,
  value:string,
  hookVal:string
}

const UpButton = ({onClick,change,value,hookVal}:IData) => {

  const dispatch = useAppDispatch()

  const push = () => {
    dispatch(sort(onClick))
    change(value)
  }

  return (
    <div onClick={()=>{push()}}> 
      <svg className={styles.button + (hookVal===value ? ' text-[#41522E] opacity-[100%]' : ' opacity-[42%]')}  viewBox="0 0 24 24" strokeLinecap="round"  strokeLinejoin="round" >  
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
  )
}

export default UpButton