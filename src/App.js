import React from 'react'

import './App.css'
import Header from './components/header.component'
import Home from './components/sections/home.component'
import History from './components/sections/history.component'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <History />
    </div>
  )
}

export default App
