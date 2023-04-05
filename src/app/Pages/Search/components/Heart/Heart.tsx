import React from 'react'
import styles from './Heart.module.scss'

interface IData{
  onClick:()=>void
}

const Heart = ({onClick}:IData) => {
  return (
    <div onClick={()=>{onClick()}}>
      <svg className={styles.heart}  viewBox="0 0 24 24" stroke-linecap="round" >  
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  )
}

export default Heart