import { useState } from 'react'

export const TextBox = () => {
  const [bgColor, setBgColor] = useState(false)
  return (
    <>
    <input type="text" style={{ backgroundColor: !bgColor ? 'blue' : 'red' }}/>
    <button onClick={() => setBgColor(!bgColor)}>change</button>
    </>

  )
}
