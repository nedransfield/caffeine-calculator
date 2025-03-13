'use client'

import { useState } from 'react'

const FormInput = ({ handleAdd }) => {
  const [drink, setDrink] = useState('Red Bull')
  const [caffeine, setCaffeine] = useState(114)
  const [time, setTime] = useState('9:00')

  const handleDrinkChange = (e) => {
    setDrink(e.target.value)
  }

  const handleCaffeineChange = (e) => {
    setCaffeine(+e.target.value)
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDrink = {
      drink,
      caffeine,
      time,
    }

    handleAdd(newDrink)

    setDrink('')
    setCaffeine('')
    setTime('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Tell me what you drank today</h4>

      <div className='field'>
        <label htmlFor=''>Drink: </label>
        <input onChange={handleDrinkChange} type='text' value={drink} />
      </div>
      <div className='field'>
        <label htmlFor=''>Caffeine Content: </label>
        <input onChange={handleCaffeineChange} type='text' value={caffeine} />
      </div>
      <div className='field'>
        <label htmlFor=''>Time: </label>
        <input onChange={handleTimeChange} type='text' value={time} />
      </div>
      <div>
        <button type='submit'>Add to Graph</button>
      </div>
    </form>
  )
}

export default FormInput
