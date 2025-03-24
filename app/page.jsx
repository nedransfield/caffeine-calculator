'use client'

import { useState } from 'react'
import './globals.css'
import React from 'react'
import Graph from '@/components/Graph'
import HalfLifeSlider from '@/components/HalfLifeSlider'
import DrinksDisplay from '@/components/DrinksDisplay'

const MainPage = () => {
  const [drinks, setDrinks] = useState([])
  const [halfLife, setHalfLife] = useState(6)

  const addDrink = (newDrink) => {
    newDrink.id = drinks.length + 1
    setDrinks([...drinks, newDrink])
  }

  const deleteDrink = (drinkId) => {
    setDrinks(drinks.filter((drink) => drink.id !== drinkId))
  }

  const adjustHalfLife = (newValue) => {
    setHalfLife(newValue)
  }

  return (
    <>
      <h2 className='text-2xl font-bold my-4'>Welcome to the Caf Graph</h2>
      <p className='wrap'>
        Enter your actual or planned caffeine intake for the day to see where
        your caffeine levels are at
      </p>
      <Graph drinks={drinks} halfLife={halfLife} />
      <HalfLifeSlider halfLife={halfLife} handleChange={adjustHalfLife} />
      <DrinksDisplay
        drinks={drinks}
        handleAdd={addDrink}
        handleDelete={deleteDrink}
      />
    </>
  )
}

export default MainPage
