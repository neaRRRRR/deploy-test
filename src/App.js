import React from 'react'

import './App.css'
import Header from './components/header.component'
import Home from './components/sections/home.component'
import History from './components/sections/history.component'
import Quality from './components/sections/quality.component'
import Solutions from './components/sections/solutions.component'
import Support from './components/sections/support.component'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <History />
      <Quality />
      <Solutions />
      <Support />
    </div>
  )
}

export default App
