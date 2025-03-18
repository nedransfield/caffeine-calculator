'use client'

import { useState } from 'react'
import { Button } from '@mui/material'
import { Stack } from '@mui/material'
import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import AddDrinkDialog from './AddDrinkDialog'
import DrinkItem from './DrinkItem'

const DrinksDisplay = ({ drinks, handleAdd, handleDelete }) => {
  const [open, setOpen] = useState(false)

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const Item = styled(Paper)(() => ({
    backgroundColor: '#eee',
    padding: '5px',
  }))

  return (
    <>
      <h4>Today's drinks:</h4>
      <Stack marginBottom={2}>
        {drinks.map((drink, index) => (
          <DrinkItem key={index} drink={drink} handleDelete={handleDelete} />
        ))}
      </Stack>
      <Button
        variant='contained'
        onClick={handleOpenDialog}
        color='success'
        disableRipple={true}
        sx={{ borderRadius: 10 }}
      >
        <AddIcon />
      </Button>
      {open && (
        <AddDrinkDialog handleAdd={handleAdd} open={open} setOpen={setOpen} />
      )}
    </>
  )
}

export default DrinksDisplay
