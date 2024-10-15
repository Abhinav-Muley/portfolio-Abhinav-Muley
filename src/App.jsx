import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=' p-5 md:p-10 flex flex-col lg:flex-row gap-4 max-w-[1600px] relative '>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App