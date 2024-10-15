import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=' mx-auto my-auto p-10 flex flex-row max-[400px]:flex-col gap-4 max-sm:px-8 max-[400px]:px-4 max-w-[1600px] relative '>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App