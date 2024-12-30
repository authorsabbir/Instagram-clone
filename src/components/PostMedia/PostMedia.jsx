/**
 * Renders a media component for a post, supporting both images and videos.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL of the media (image or video).
 * @param {('video'|'image')} props.type - The type of media to render.
 * @returns {JSX.Element} A div containing either a video or an image element.
 */
export function PostMedia({ src, type }) {
  return (
    <div className="w-full h-[400px] bg-black flex items-center justify-center">
      {type === 'video' ? (
        <video src={src} controls className="w-full h-full object-cover" />
      ) : (
        <img
          src={src}
          alt="Post media"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}
