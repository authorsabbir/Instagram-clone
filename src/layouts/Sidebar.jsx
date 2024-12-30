import React from 'react'
import InstagramLogo from '../components/logo/logo'
import MenuItemList from '../components/menu/MenuItemList'
import BottomItemList from '../components/menu/BottomItemList'
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineAppstoreAdd,
  AiOutlineMenu,
} from 'react-icons/ai'

const Sidebar = () => {
  // Main menu items
  const menuItems = [
    {
      icon: <AiOutlineHome className="w-7 h-7" />,
      label: 'Home',
      action: () => console.log('Home clicked'),
    },
    {
      icon: <AiOutlineSearch className="w-7 h-7" />,
      label: 'Search',
      action: () => console.log('Search clicked'),
    },
    {
      icon: <AiOutlineCompass className="w-7 h-7" />,
      label: 'Explore',
      action: () => console.log('Explore clicked'),
    },
    {
      icon: <AiOutlinePlus className="w-7 h-7" />,
      label: 'Create',
      action: () => console.log('Create clicked'),
    },
    {
      icon: <AiOutlineMessage className="w-7 h-7" />,
      label: 'Messages',
      action: () => console.log('Messages clicked'),
    },
    {
      icon: <AiOutlineBell className="w-7 h-7" />,
      label: 'Notifications',
      action: () => console.log('Notifications clicked'),
    },
    {
      icon: <AiOutlineUser className="w-7 h-7" />,
      label: 'Profile',
      action: () => console.log('Profile clicked'),
    },
  ]

  // Bottom menu items
  const bottomItems = [
    {
      icon: <AiOutlineAppstoreAdd className="w-7 h-7" />,
      label: 'Threads',
      action: () => console.log('Threads clicked'),
    },
    {
      icon: <AiOutlineMenu className="w-7 h-7" />,
      label: 'More',
      action: () => console.log('More clicked'),
    },
  ]

  return (
    <aside className="bg-black text-white border-r border-gray-700 h-screen w-20 lg:w-64 flex flex-col items-center lg:items-start p-4 fixed">
      {/* Logo Section */}
      <div className="mb-6">
        <InstagramLogo />
      </div>

      {/* Main Menu Items */}
      <nav className="w-full flex-grow">
        <MenuItemList items={menuItems} />
      </nav>

      {/* Bottom Menu Items */}
      <nav className="w-full mt-auto">
        <BottomItemList items={bottomItems} />
      </nav>
    </aside>
  )
}

export default Sidebar
