import React from 'react'
import styles from './Input.module.css'

const Input = ({label,type,name,value,onChange,onBlur,error,required}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
        <input 
          className={styles.input}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
