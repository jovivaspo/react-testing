import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ParentComponent from '../../src/components/ParentComponent'

describe('Testing ParentComponent', () => {
  test('update the parent component text when the child component button is clicked', () => {
    render(<ParentComponent/>)
    const input = screen.getByRole('textbox')
    const submit = screen.getByRole('button', { name: /Submit/i })

    fireEvent.change(input, { target: { value: 'Hello world' } })
    fireEvent.click(submit)

    const updateText = screen.getByText(/Hello world/i)

    expect(updateText).toBeInTheDocument()
  })
})
