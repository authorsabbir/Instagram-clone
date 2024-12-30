import { PostInteractions } from '../PostInteractions/PostInteractions'
import { PostMedia } from '../PostMedia/PostMedia'

/**
 * Renders a post card component for displaying user posts.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.user - The user object containing user information.
 * @param {string} props.user.profilePic - The URL of the user's profile picture.
 * @param {string} props.user.name - The name of the user.
 * @param {string} props.timestamp - The timestamp when the post was created.
 * @param {string} props.mediaSrc - The source URL of the media (image or video) in the post.
 * @param {string} props.mediaType - The type of media (e.g., 'image' or 'video').
 * @param {string} props.caption - The caption text for the post.
 * @param {number} props.likes - The number of likes for the post.
 * @param {number} props.comments - The number of comments on the post.
 * @returns {JSX.Element} A JSX element representing the post card.
 */
export function PostCard({
  user,
  timestamp,
  mediaSrc,
  mediaType,
  caption,
  likes,
  comments,
}) {
  return (
    <div className="as-border-top bg-black text-white rounded-lg overflow-hidden shadow-lg my-4 mx-14">
      {/* User Info Section */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center my-3">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-blue-400 font-semibold hover:underline">
            Follow
          </button>
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Media Section */}
      <PostMedia src={mediaSrc} type={mediaType} />

      {/* Post Interactions Section */}
      <PostInteractions likes={likes} comments={comments} />

      {/* Post Likes, Caption, and Comments Section */}
      <div className="px-4 py-2">
        <p className="text-sm font-semibold">{likes.toLocaleString()} likes</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">{user.name}</span> {caption}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          View all {comments} comments
        </p>
      </div>
    </div>
  )
}
