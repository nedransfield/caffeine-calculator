'use client'

import drinks from '@/public/drinks'
import { useState } from 'react'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Dialog } from '@mui/material'
import { DialogActions } from '@mui/material'
import { DialogContent } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const AddDrinkDialog = ({ open, setOpen, handleAdd }) => {
  //   const [open, setOpen] = useState(true)
  const [newDrink, setNewDrink] = useState('')
  const [newCaffeine, setNewCaffeine] = useState(0)
  const [newTime, setNewTime] = useState('')
  const [addingCustomDrink, setAddingCustomDrink] = useState(false)

  const defaultProps = {
    options: drinks.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      }
      return 0
    }),
    getOptionLabel: (drink) => drink.name || '',
  }

  const handleDrinkChange = (e, newValue) => {
    setAddingCustomDrink(false)
    if (newValue) {
      setNewDrink(newValue.name)
      setNewCaffeine(newValue.caffeine)
    }
  }

  const handleCaffeineChange = (e) => {
    setNewCaffeine(+e.target.value)
  }

  const handleTimeChange = (e) => {
    setNewTime(`${e.$H}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newDrink !== '' && newCaffeine > 0 && newTime !== '') {
      const addedDrink = {
        drink: newDrink,
        caffeine: newCaffeine,
        time: newTime,
      }

      handleAdd(addedDrink)
      handleClose()
    }
  }

  const handleBlur = (e) => {
    const customDrink = e.target.value
    if (
      drinks.filter((drink) => drink.name === customDrink).length == 0 &&
      e.target.value !== ''
    ) {
      setAddingCustomDrink(true)
      setNewDrink(e.target.value)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleSubmit,
        },
      }}
    >
      <DialogTitle>Add A Drink</DialogTitle>
      <DialogContent>
        <div className='my-2'>
          <Autocomplete
            {...defaultProps}
            sx={{ width: 'auto' }}
            renderInput={(params) => (
              <TextField {...params} label='Drink' required />
            )}
            onChange={handleDrinkChange}
            onBlur={handleBlur}
            freeSolo={true}
          />
        </div>
        <div className='my-2'>
          {addingCustomDrink && (
            <TextField
              label='Caffeine Amount (mg)'
              type='number'
              autoFocus={true}
              onChange={handleCaffeineChange}
            />
          )}
        </div>
        <div className='my-2'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              views={['hours']}
              sx={{ width: 'auto' }}
              label='Time of Day'
              onChange={handleTimeChange}
              required
            />
          </LocalizationProvider>
        </div>
      </DialogContent>
      <DialogActions>
        <Button type='submit'>Add Drink</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddDrinkDialog
