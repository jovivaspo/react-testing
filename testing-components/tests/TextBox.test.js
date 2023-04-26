import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextBox } from '../src/components/TextBox'

describe('Testing TextBox component', () => {
  let textBox
  let button
  beforeAll(() => {
    render(<TextBox/>)
    textBox = screen.getByRole('textbox')
    button = screen.getByRole('button', { name: 'change' })
  })
  test('should be a textbox in the document', () => {
    expect(textBox).toBeInTheDocument()
  })
  test('should have a color', () => {
    expect(textBox).toHaveStyle({
      backgroundColor: 'blue'
    })
  })
  test('should change color to click the button', () => {
    fireEvent.click(button)
    expect(textBox).toHaveStyle({ backgroundColor: 'blue' })
  })
})
