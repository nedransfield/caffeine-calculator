import Slider from '@mui/material/Slider'

const HalfLifeSlider = ({ halfLife, handleChange }) => {
  const changeHalfLife = (e, newValue) => {
    handleChange(newValue)
  }

  return (
    <div className='flex flex-row items-center my-2'>
      <p>Half-life:</p>
      <Slider
        value={halfLife}
        min={1.5}
        max={9.5}
        step={0.5}
        marks
        valueLabelDisplay='auto'
        sx={{ width: '30%', marginLeft: '20px' }}
        onChange={changeHalfLife}
        size='medium'
      />
    </div>
  )
}

export default HalfLifeSlider
