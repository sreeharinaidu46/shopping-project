import { useState } from 'react'
import Products from './components/Products'
import products from '../src/data/products.json'
import './app.css'

function App() {

  return (
    <>
    <Products data={products}/>
      
    </>
  )
}

export default App
