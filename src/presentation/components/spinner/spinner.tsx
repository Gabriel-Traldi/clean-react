import React from 'react'

import Styles from './spinner-styles.scss'

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Spinner: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div data-testid="spinner" {...rest} className={[Styles.spinner, className].join(' ')}>
      <div /><div /><div /><div />
    </div>
  )
}

export default Spinner
