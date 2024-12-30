/**
 * Renders the interaction buttons for a post.
 * @param {Object} props - The component props.
 * @param {number} props.likes - The number of likes for the post.
 * @param {number} props.comments - The number of comments on the post.
 * @returns {JSX.Element} A div containing like, comment, share, and bookmark buttons.
 */
export function PostInteractions({ likes, comments }) {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex space-x-4">
        <button className="text-xl">❤️</button>
        <button className="text-xl">💬</button>
        <button className="text-xl">🔄</button>
      </div>
      <button className="text-xl">🔖</button>
    </div>
  )
}
