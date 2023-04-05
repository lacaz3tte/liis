import { useEffect, useState } from 'react'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)

  const validateEmail = (email: string) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email);
  }

  const validatePassword = (password: string) => {
    return password.length>7;
  }

  const navigate = useNavigate()


  const enter = () => {
    if(!validateEmail(email)){
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
    if(!validatePassword(password)){
      setValidPassword(false)
    } else {
      setValidPassword(true)
    }
    if(validEmail && validPassword){
      navigate('/search')
    }
  }

  return (
    <div className={styles.bg + " bg-[url('../public/bg.png')]"}>
      <div className={styles.bg_opacity}>
        <div className={styles.container}>
          <label className={styles.label}>Simple Hotel Check</label>
          <div>
            <label className={(validEmail ? 'text-[#424242] ': 'text-[#EB1717]' )}>Логин</label>
            <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} className={styles.input + (validEmail ? ' text-[#424242] ': ' text-[#EB1717]' )}></input>
            <p className={styles.error}>{(validEmail ? '': 'Неверная почта' )}</p>
          </div>
          <div>
            <label className={(validPassword ? 'text-[#424242] ': 'text-[#EB1717]' )}>Пароль</label>
            <input type='text' value={password} onChange={(e) => { setPassword(e.target.value) }} className={styles.input + (validPassword ? ' text-[#424242] ': ' text-[#EB1717]' )}></input>
            <p className={styles.error}>{(validPassword ? '': 'Неверный пароль' )}</p>
          </div>
          <button className={styles.button} onClick={()=>{enter()}}>Войти</button>
        </div>

      </div>
    </div>
  )
}

export default Login