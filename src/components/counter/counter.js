import React, {useState } from 'react'

import {
  Typography,
  Button,
  TextField,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import styles from './styles'

const useStyles = makeStyles(styles)

const Counter = () => {
const classes = useStyles()
const [counterValue, setCounterValue] = useState(0)
const [inputValue, setInputValue] = useState(1)

const addToCounter = () => {
  setCounterValue(counterValue + inputValue)
}

const subtractFromCounter = () => {
  setCounterValue(counterValue - inputValue)
}

  return (
    <>
    <Typography
      data-testid="header"
      variant="h3"
    >
      My Counter
    </Typography>
    <Typography
    data-testid="counter"
    variant="h1"
  >
    {counterValue}
  </Typography>
  <Button
  data-testid="subtractBtn"
  color="error"
  variant="contained"
  onClick={subtractFromCounter}
  className={classes.button}
  >
    -
  </Button>
  <TextField
  variant="outlined"
  type="number"
  value={inputValue}
  inputProps={{ "data-testid": "input" }}
  className={classes.input}
  onChange={(e) => {
    setInputValue(parseInt(e.target.value))
  }}
  />
  <Button
  data-testid="addBtn"
  color="primary"
  variant="contained"
  onClick={addToCounter}
  className={classes.button}
  >
    +
  </Button>
  </>
  )
}

export default Counter
