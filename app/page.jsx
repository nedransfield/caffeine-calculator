'use client'

import { useState } from 'react'
import './globals.css'
import React from 'react'
import Graph from '@/components/Graph'
import DrinksDisplay from '@/components/DrinksDisplay'

const MainPage = () => {
  const [drinks, setDrinks] = useState([])

  const addDrink = (newDrink) => {
    newDrink.id = drinks.length + 1
    setDrinks([...drinks, newDrink])
  }

  const deleteDrink = (drinkId) => {
    const drinkToDelete = drinks.find((drink) => drink.id == drinkId)
    setDrinks(drinks.filter((drink) => drink.id !== drinkId))
  }

  return (
    <>
      <h2>Welcome to the Caf Graph</h2>
      <p className='wrap'>
        Enter your actual or planned caffeine intake for the day to see where
        your caffeine levels are at
      </p>
      <Graph drinks={drinks} />
      <DrinksDisplay
        drinks={drinks}
        handleAdd={addDrink}
        handleDelete={deleteDrink}
      />
    </>
  )
}

export default MainPage
