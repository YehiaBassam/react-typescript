// pass event oncange from input
import React, { useState } from "react"
import Input from "./Input"

const InputEvent = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [meal, setMeal] = useState<string>('');

  const handleChange = (e: React.ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value)
  }
  
  return (
    <div>
      {/* internal input */}
      <input value={meal} onChange={(e) => setMeal(e.target.value)} />
      <h6>{meal}</h6>
      

      {/* outer input */}
      <Input handleChange={handleChange} inputValue={inputValue}/>
      <h6>{inputValue}</h6>
    </div>
  )
}

export default InputEvent