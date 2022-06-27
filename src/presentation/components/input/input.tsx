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
    <div className={Styles.inputWrap}>
      <input
        {...rest}
        placeholder=" "
        data-testid={name}
        name={name}
        autoComplete={autoComplete || 'off'}
        onChange={handleChange}
        ref={inputRef}
      />
      <label onClick={() => inputRef.current.focus()}>
        {placeholder}
        </label>
      <span
        data-testid={`${name}-status`}
        title={error || 'Tudo certo!'}
        className={Styles.status}
      >
         {error ? '🔴' : '🟢'}
      </span>
    </div>
  )
}

export default memo(Input)
