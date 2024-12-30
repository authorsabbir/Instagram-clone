import React from 'react'

const RightSidebar = () => {
  const suggestions = [
    {
      username: 'shakibhossain_0.2',
      info: 'Suggested for you',
      photo:
        'https://i.ibb.co/wcpCZtg/470279804-565691729650200-2108249077018810561-n.jpg', // Replace with the actual photo URL
    },
    {
      username: 'abrazzak09',
      info: 'Followed by wpbristy',
      photo: 'https://i.ibb.co/xhxTJWS/abdurrazzakbhai.jpg', // Replace with the actual photo URL
    },
    {
      username: 'naymawashik',
      info: 'Followed by ashr_af7305',
      photo: 'https://i.ibb.co/gJBBFwh/g.jpg', // Replace with the actual photo URL
    },
    {
      username: 'ad.iba7550',
      info: 'Followed by ashr_af7305',
      photo: 'https://i.ibb.co/wB11ZDh/shariya.jpg', // Replace with the actual photo URL
    },
    {
      username: 'mahadihasan_shagor',
      info: 'Followed by ashr_af7305',
      photo: 'https://i.ibb.co/PzRmDyC/boys.jpg', // Replace with the actual photo URL
    },
  ]


  return (
    <div className="w-full lg:w-80 h-screen p-4 pt-12  text-white fixed">
      {/* User Section */}
      <div className="flex items- justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/N7tHrSg/download.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">authorsabbir</p>
            <p className="text-gray-400 text-sm">Sabbir Hussain</p>
          </div>
        </div>
        <button className="text-blue-400 font-semibold">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-2 py-2">
        <p className="text-gray-400 text-sm">Suggested for you</p>
        <button className="text-white font-semibold text-sm">See All</button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={suggestion.photo} // Use the photo key
                alt={suggestion.username}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{suggestion.username}</p>
                <p className="text-gray-400 text-sm">{suggestion.info}</p>
              </div>
            </div>
            <button className="text-blue-400 font-semibold text-sm">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-9 text-gray-400 text-xs space-y-2">
        <div className="flex flex-wrap gap-2 pb-3">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Press
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Locations
          </a>
          <a href="#" className="hover:underline">
            Language
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <p>© 2024 INSTAGRAM FROM META</p>
      </div>
    </div>
  )
}

export default RightSidebar
