import React from 'react'
import Sidebar from './layouts/Sidebar'
import Timeline from './layouts/Timeline'
import RightSidebar from './layouts/RightSidebar'
import './App.css'

const App = () => {
  return (
    <div class="grid grid-cols-4 gap-4">
      <Sidebar />
      <Timeline />
      <RightSidebar />
    </div>
  )
}

export default App
