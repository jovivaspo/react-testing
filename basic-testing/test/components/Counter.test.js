import Counter from '../../src/components/Counter'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Test component Counter', () => {
  test('render component', async () => {
    render(<Counter/>)
    const countElement = screen.getByText(/Count:/i)
    const buttonElement = screen.getByText(/Increment/i)
    expect(countElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  test('increment the count when the button is clicked', () => {
    render(<Counter/>)
    const buttonElement = screen.getByText(/Increment/i)
    fireEvent.click(buttonElement)
    const countElement = screen.getByText(/Count: 1/i)

    expect(countElement).toBeInTheDocument()
  })
})
