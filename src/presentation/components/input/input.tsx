import React, { memo } from 'react'

import Styles from './input-styles.scss'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

const Input: React.FC<Props> = ({ ...rest }) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...rest} />
      <span className={Styles.status}>X</span>
    </div>
  )
}

export default memo(Input)
