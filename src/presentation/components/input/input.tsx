import React, { memo, useContext, useRef } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './input-styles.scss'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const Input: React.FC<Props> = ({ autoComplete, name, placeholder, ...rest }) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div
      data-testid={`${name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        {...rest}
        placeholder=" "
        data-testid={name}
        name={name}
        autoComplete={autoComplete || 'off'}
        onChange={handleChange}
        ref={inputRef}
        title={error}
      />
      <label
        data-testid={`${name}-label`}
        onClick={() => inputRef.current.focus()}
        title={error}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default memo(Input)
