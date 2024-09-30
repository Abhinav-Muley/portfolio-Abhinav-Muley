import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="bg-black">

    <div className=' px-16 py-16 flex flex-row max-[400px]:flex-col gap-4 max-sm:px-8 max-[400px]:px-4 max-w-[1600px] mx-auto '>
      <Sidebar/>
      <Home/>
    </div>
    </div>
  )
}

export default App