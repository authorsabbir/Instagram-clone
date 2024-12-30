// This is the main App component that structures the layout of the Instagram clone
// It includes a sidebar, main content area with posts, and a right sidebar
import React from 'react'
import Sidebar from './layouts/Sidebar'
import RightSidebar from './layouts/RightSidebar'
import { SuggestedPosts } from './components/SuggestedPosts/SuggestedPosts'
import './App.css'

const samplePosts = [
  {
    user: {
      name: 'Sabbir Hussain',
      profilePic: 'https://i.ibb.co/N7tHrSg/download.jpg',
    },
    mediaSrc: 'https://i.ibb.co/fQkwCs1/ai.jpg',
    mediaType: 'image',
    caption: 'Have you ever seen barbecue fish like this?! 🐟🔥',
    likes: 489409,
    comments: 2159,
    timestamp: '5 hours ago',
  },
  {
    user: {
      name: 'Sabbir Hussain',
      profilePic: 'https://i.ibb.co/N7tHrSg/download.jpg',
    },
    mediaSrc: 'https://youtu.be/pISYzyTv1mM?si=sHaBHHvUWVHf_tsg',
    mediaType: 'video',
    caption: 'Have you ever seen barbecue fish like this?! 🐟🔥',
    likes: 489409,
    comments: 2159,
    timestamp: '2 hours ago',
  },
  {
    user: {
      name: 'Sabbir Hussain',
      profilePic: 'https://i.ibb.co/N7tHrSg/download.jpg',
    },
    mediaSrc: 'https://i.ibb.co/0MMp8ys/project-list-img-3.png',
    mediaType: 'image',
    caption: 'Have you ever seen barbecue fish like this?! 🐟🔥',
    likes: 489409,
    comments: 2159,
    timestamp: '5 hours ago',
  },
]

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:basis-1/4  p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:basis-1/2 p-4">
        <SuggestedPosts posts={samplePosts} />
      </div>

      {/* Right Sidebar */}
      <div className="lg:basis-1/4  p-4">
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
