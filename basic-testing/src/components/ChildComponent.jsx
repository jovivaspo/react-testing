import { useState } from 'react'
// eslint-disable-next-line react/prop-types
const ChildComponent = ({ onTextChange }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = () => {
    onTextChange(inputValue)
  }

  return (
    <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ChildComponent
