import { Header } from "../../layouts/Header";
import { PostCard } from "../PostCard/PostCard";

/**
 * Renders a list of suggested posts.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.posts - An array of post objects to be displayed.
 * @returns {JSX.Element} A div containing a header and a list of PostCard components.
 */
export function SuggestedPosts({ posts }) {
  return (
    <div className="min-h-screen text-white static">
      <Header />
      <div className="px-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  )
}
