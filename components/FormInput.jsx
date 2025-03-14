'use client'

import drinks from '@/public/drinks'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const FormInput = ({ handleAdd }) => {
  const [newDrink, setNewDrink] = useState('')
  const [newCaffeine, setNewCaffeine] = useState()
  const [newTime, setNewTime] = useState('')

  const defaultProps = {
    options: drinks,
    getOptionLabel: (drink) => drink.name,
  }

  const handleDrinkChange = (e, newValue) => {
    setNewDrink(newValue.name)
    setNewCaffeine(newValue.caffeine)
  }

  const handleTimeChange = (e) => {
    setNewTime(`${e.$H}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const addedDrink = {
      drink: newDrink,
      caffeine: newCaffeine,
      time: newTime,
    }

    handleAdd(addedDrink)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Tell me what you drank today</h4>

      <div className='field'>
        <Autocomplete
          {...defaultProps}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='Drink' />}
          onChange={handleDrinkChange}
        />
      </div>
      <div className='field'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            views={['hours']}
            sx={{ width: 300 }}
            label='Time of Day'
            onChange={handleTimeChange}
          />
        </LocalizationProvider>
      </div>
      <div className='field'>
        <Button variant='contained' onClick={handleSubmit}>
          Add to Graph
        </Button>
      </div>
    </form>
  )
}

export default FormInput
