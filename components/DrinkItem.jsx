import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const DrinkItem = ({ drink, handleDelete }) => {
  const Item = styled(Paper)(() => ({
    backgroundColor: '#eee',
    padding: '10px',
    marginBlock: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }))

  const deleteDrink = () => {
    handleDelete(drink.id)
  }

  return (
    <div className=''>
      <Item elevation={2}>
        {drink.drink}
        <Button onClick={deleteDrink}>
          <DeleteIcon color='error' />
        </Button>
      </Item>
    </div>
  )
}

export default DrinkItem
