import { render, screen, fireEvent } from '@testing-library/react'
import { CheckBox } from '../src/components/CheckBox'
import '@testing-library/jest-dom'

describe('Testing CheckBox', () => {
  let checkBox
  beforeAll(() => {
    render(<CheckBox/>)
    checkBox = screen.getByRole('checkbox')
  })
  test('should be on the document', () => {
    expect(checkBox).toBeInTheDocument()
  })
  test('should be not checked', () => {
    expect(checkBox).not.toBeChecked()
  })
  test('should be checked after click', () => {
    fireEvent.click(checkBox)
    expect(checkBox).toBeChecked()
  })
})
