import React from 'react'
import styles from './BackButton.module.scss'
import { useNavigate } from 'react-router-dom';



const BackButton = () => {

  const navigate = useNavigate()

  return (
    <button onClick={()=>{navigate('/')}}>
      <div className={styles.main} >
        <p className={styles.text}>Выйти</p>
        <svg className={styles.svg}  viewBox="0 0 24 24">  
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  
          <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" />
        </svg>
      </div>
    </button>
  )
}

export default BackButton