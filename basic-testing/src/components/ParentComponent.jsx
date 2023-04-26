import { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const [text, setText] = useState('')

  const handlerTextChange = (newText) => setText(newText)

  return (
    <div>
        <p>{text}</p>
        <ChildComponent onTextChange={handlerTextChange}/>
    </div>
  )
}

export default ParentComponent
