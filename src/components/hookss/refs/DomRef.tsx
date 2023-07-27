// dealing ref with dom
import { useRef, useEffect } from 'react'
import { MutableRef } from './MutableRef'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input type='text' ref={inputRef} />

      <MutableRef />
    </div>
  )
}