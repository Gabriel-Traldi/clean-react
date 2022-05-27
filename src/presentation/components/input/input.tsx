import React, { memo, useContext } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './input-styles.scss'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const Input: React.FC<Props> = ({ autoComplete, ...rest }) => {
  const { errorState } = useContext(Context)
  const error = errorState[rest.name]

  const getStatus = (): string => {
    return 'X'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...rest} autoComplete={autoComplete || 'off'} />
      <span data-testid={`${rest.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default memo(Input)
