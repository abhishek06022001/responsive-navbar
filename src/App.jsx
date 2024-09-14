import React from 'react'
import Navbar from './Components/Navbar'
import Grid from './Components/Grid'

function App() {
  return (
    <div
      className=' flex  flex-col
        h-screen
      '
    >
      <Navbar />
      <div className='flex-grow'>
        <Grid />
      </div>
    </div>
  )
}

export default App