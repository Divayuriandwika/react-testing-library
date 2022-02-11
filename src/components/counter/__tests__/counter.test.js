import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from '../counter'

test('header renders with correct text', () => {
  render(<Counter />)
  const headerEl = screen.getByTestId('header')

  expect(headerEl.textContent).toBe('My Counter')
})

test('counter initial start with text of 0', () => {
  render(<Counter />)
  const counterEl = screen.getByTestId('counter')

  expect(counterEl.textContent).toBe('0')
})

test('subtract button renders with -', () => {
  render(<Counter />)
  const subtractBtnEl = screen.getByTestId('subtractBtn')

  expect(subtractBtnEl.textContent).toBe('-')
})

test('input contains initial value of 1', () => {
  render(<Counter />)
  const inputEl = screen.getByTestId('input')

  expect(inputEl.value).toBe('1')
})

test('add button renders with +', () => {
  render(<Counter />)
  const addBtnEl = screen.getByTestId('addBtn')

  expect(addBtnEl.textContent).toBe('+')
})

test('change value of input works correctly', () => {
  render(<Counter />)
  const inputEl = screen.getByTestId('input')

  expect(inputEl.value).toBe('1')

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  expect(inputEl.value).toBe('5')
})

test('click on add button adds 1 to counter', () => {
  render(<Counter />)
  const addBtnEl = screen.getByTestId('addBtn')
  const counterEl = screen.getByTestId('counter')

  expect(counterEl.textContent).toBe('0')

  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe('1')
})

test('click on subtract button subtract 1 from counter', () => {
  render(<Counter />)
  const subtractBtnEl = screen.getByTestId('subtractBtn')
  const counterEl = screen.getByTestId('counter')

  expect(counterEl.textContent).toBe('0')

  fireEvent.click(subtractBtnEl)

  expect(counterEl.textContent).toBe('-1')
})

test('changing input value then clicking on add button works correctly', () => {
  render(<Counter />)
  const addBtnEl = screen.getByTestId('addBtn')
  const counterEl = screen.getByTestId('counter')
  const inputEl = screen.getByTestId('input')

  expect(counterEl.textContent).toBe('0')

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe('5')
})

test('changing input value then clicking on substract button works correctly', () => {
  render(<Counter />)
  const subtractBtnEl = screen.getByTestId('subtractBtn')
  const counterEl = screen.getByTestId('counter')
  const inputEl = screen.getByTestId('input')

  expect(counterEl.textContent).toBe('0')

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  fireEvent.click(subtractBtnEl)

  expect(counterEl.textContent).toBe('-5')
})

test('adding and then substracting leads to the correct counter number', () => {
  render(<Counter />)
  const subtractBtnEl = screen.getByTestId('subtractBtn')
  const addBtnEl = screen.getByTestId('addBtn')
  const counterEl = screen.getByTestId('counter')
  const inputEl = screen.getByTestId('input')

  expect(counterEl.textContent).toBe('0')

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe('10')

  fireEvent.click(subtractBtnEl) //5
  fireEvent.click(subtractBtnEl) //0
  fireEvent.click(subtractBtnEl) //-5

  expect(counterEl.textContent).toBe('-5')

  fireEvent.change(inputEl, {
    target: {
      value: '10'
    }
  })

  fireEvent.click(addBtnEl) //5
  fireEvent.click(addBtnEl) //15
  fireEvent.click(addBtnEl) //25
  fireEvent.click(subtractBtnEl) //15

  expect(counterEl.textContent).toBe('15')
})

// test('counter contains correct className', () => {
//   render(<Counter />)
//   const counterEl = screen.getByTestId('counter')
//   const inputEl = screen.getByTestId('input')
//   const subtractBtnEl = screen.getByTestId('subtractBtn')
//   const addBtnEl = screen.getByTestId('addBtn')
//   const style = window.getComputedStyle(counterEl)

//   expect(style.color).toBe('blue')

//   fireEvent.change(inputEl, {
//     target: {
//       value: '50'
//     }
//   })

//   fireEvent.click(addBtnEl) //50

//   expect(style.color).toBe('blue')

//   fireEvent.click(addBtnEl) //100

//   expect(style.color).toBe('green')

//   fireEvent.click(addBtnEl) //150

//   expect(style.color).toBe('green')

//   fireEvent.click(subtractBtnEl) //100
//   fireEvent.click(subtractBtnEl) //50

//   expect(style.color).toBe('')

//   fireEvent.click(subtractBtnEl) //0
//   fireEvent.click(subtractBtnEl) //-50
//   fireEvent.click(subtractBtnEl) //-100

//   expect(style.color).toBe('red')

//   fireEvent.click(subtractBtnEl) //-150

//   expect(style.color).toBe('red')
// })



