'use client'

import { useState } from 'react'
import './globals.css'
import React from 'react'
import ReactDOM from 'react-dom'
import FormInput from '@/components/FormInput'
import Graph from '@/components/Graph'

const MainPage = () => {
  const [drinks, setDrinks] = useState([])

  const addDrink = (newDrink) => {
    newDrink.id = drinks.length !== 0 ? drinks[drinks.length - 1].id : 1
    setDrinks([...drinks, newDrink])
  }

  return (
    <>
      <h1>Welcome to the caffeine calculator!</h1>
      <p>Enter your caffeine intake for the day</p>
      <Graph drinks={drinks} />
      <FormInput handleAdd={addDrink} />
    </>
  )
}

export default MainPage
