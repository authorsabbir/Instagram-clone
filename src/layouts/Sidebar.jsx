import React from 'react'
import InstagramLogo from '../components/logo'
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineCompass, // For Explore
  AiOutlineMessage, // For Messages
  AiOutlinePlus, // For Create
  AiOutlineAppstoreAdd, // For Threads
  AiOutlineMenu, // For More (Hamburger menu)
} from 'react-icons/ai'

const Sidebar = () => {
  // Define menu items with appropriate icons and labels
  const menuItems = [
    { icon: <AiOutlineHome className="w-7 h-7 font-bold" />, label: 'Home' },
    { icon: <AiOutlineSearch className="w-7 h-7" />, label: 'Search' },
    { icon: <AiOutlineCompass className="w-7 h-7" />, label: 'Explore' },
    { icon: <AiOutlinePlus className="w-7 h-7" />, label: 'Create' },
    { icon: <AiOutlineMessage className="w-7 h-7" />, label: 'Messages' },
    { icon: <AiOutlineBell className="w-7 h-7" />, label: 'Notifications' },
    { icon: <AiOutlineUser className="w-7 h-7" />, label: 'Profile' },
  ]

  // Add two more items for Threads and More (Hamburger menu)
  const bottomItems = [
    { icon: <AiOutlineAppstoreAdd className="w-7 h-7" />, label: 'Threads' },
    { icon: <AiOutlineMenu className="w-7 h-7" />, label: 'More' }, // Hamburger menu icon
  ]

  return (
    <aside className="text-white border-r border-gray-700 h-screen  lg:w-64 flex flex-col items-center lg:items-start p-4">
      {/* Logo Section */}
      <div className="mb-6">
        <InstagramLogo />
      </div>

      {/* Main Menu Items */}
      <nav className="w-full flex-grow">
        <ul className="space-y-2 ms-3">
          {menuItems.map((item, index) => (
            <div className="as-menu-bg p-3 rounded-md" key={index}>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-x-3 cursor-pointer hover:text-blue-400">
                {item.icon}
                <span className="hidden lg:inline as-font-size">
                  {item.label}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </nav>

      {/* Bottom Menu Items */}
      <nav className="w-full mt-auto">
        <ul className="space-y-2 ms-3">
          {bottomItems.map((item, index) => (
            <div className="as-menu-bg p-3 rounded-md" key={index}>
              <li className="flex flex-col lg:flex-row items-center lg:items-start space-x-3 cursor-pointer hover:text-blue-400">
                {item.icon}
                <span className="hidden lg:inline as-font-size">
                  {item.label}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
