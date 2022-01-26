import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import { FilterBlock } from './components/FilterBlock/FilterBlock'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Menu />
        <div className='app__header'>
          <Header />
          <FilterBlock />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
