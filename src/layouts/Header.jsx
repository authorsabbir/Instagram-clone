export function Header() {
  return (
    <>
      {/* Main Header Section */}
      <div className="text-center bg-gradient-to-r from-gray-800 to-black text-white py-12 px-4 mx-14">
        <img
          src="https://i.ibb.co/JRBTcR3/ckecked.png"
          alt="Checked"
          className="w-28 h-28 mx-auto mb-6 rounded-full shadow-lg"
        />
        <h2 className="text-2xl font-bold mb-2">You're all caught up!</h2>
        <p className="text-lg text-gray-300">
          You've seen all new posts from the past 3 days.
        </p>
      </div>

      {/* Divider and Suggested Posts Section */}
      <div className="mt-6 mx-14 px-6 as-border-top">
        <h1 className=" mt-6 text-xl font-semibold text-gray-800">Suggested Posts</h1>
      </div>
    </>
  )
}
