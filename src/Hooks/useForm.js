import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha com email válido',
  },
  password: {
    regex: /^[0-9a-zA-Z]{3,}$/,
    message: 'A senha precisar ter no mínimo 3 caracteres.',
  },
  number: {
    regex:/^\d+$/,
    message:'Utilize apenas números.',
  }
}

const useForm = (type) => {
  const [value,setValue] = React.useState('')
  const [error,setError] = React.useState(null)

  function onChange({target}) {
    if(error) validate(target.value)
    setValue(target.value)
  }
  function validate(value) {
    if(type === false) return true
    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  }
}

export default useForm
