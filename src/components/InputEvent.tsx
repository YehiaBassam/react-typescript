import React, { useState } from "react"
import Input from "./Input"

const InputEvent = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value)
  }
  
  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue}/>
      <h6>{inputValue}</h6>
    </div>
  )
}

export default InputEvent