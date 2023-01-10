import React, { FC } from 'react'

interface Props {
  label: string
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({ label, isChecked, onChange }) => {
  return (
    <label>
      {label}
      <input type="checkbox" checked={isChecked} onChange={onChange} />
    </label>
  )
}

export default Checkbox