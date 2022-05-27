import React, { memo, useContext } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './input-styles.scss'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const Input: React.FC<Props> = ({ autoComplete, name, ...rest }) => {
  const { state, setState } = useContext(Context)
  const error = state[`${name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  const getStatus = (): string => {
    return 'X'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...rest} data-testid={name} name={name} autoComplete={autoComplete || 'off'} onChange={handleChange} />
      <span data-testid={`${name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default memo(Input)
