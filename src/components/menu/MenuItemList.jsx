import React from 'react'

const MenuItemList = ({ items }) => {
  return (
    <ul className="space-y-2 ms-3">
      {items.map((item, index) => (
        <div className="as-menu-bg p-3 rounded-md" key={index}>
          <li
            className="flex flex-col lg:flex-row items-center lg:items-start space-x-3 cursor-pointer hover:text-blue-400"
            onClick={item.action} // Add onClick handler
          >
            {item.icon}
            <span className="hidden lg:inline as-font-size">{item.label}</span>
          </li>
        </div>
      ))}
    </ul>
  )
}

export default MenuItemList
