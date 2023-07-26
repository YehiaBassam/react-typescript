import React from "react"

type InputProps = {
  handleChange: (e: React.ChangeEvent) => void,
  inputValue: string,
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input value={props.inputValue} onChange={e => props.handleChange(e)} />
    </div>
  )
}

export default Input