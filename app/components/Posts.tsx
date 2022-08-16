import { Link, LoaderFunction, useLoaderData } from "remix"
import * as firstPost from "../../todo/projects/blog"
import * as secondPost from "../../app/routes/blog/tech.mdx"

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  }
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost), postFromModule(secondPost)]
}

const Posts = () => {
  const posts = useLoaderData()
  return (
    <div className='prose lg:prose-xl py-10'>
      <h2 className='text-2xl font-medium leading-10 font-mono '>
        Recent posts
      </h2>
      <p>
        <Link to={"/blog"}>All Posts</Link>
      </p>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={"/blog/" + post.slug}>{post.title}</Link>
            {post.description ? (
              <p className='m-0 lg:m-0'>{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Posts
