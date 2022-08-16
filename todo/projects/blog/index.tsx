import { Link, LoaderFunction, useLoaderData } from 'remix';
import * as firstPost from './this-site.mdx';

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return [
    postFromModule(firstPost),
  ];
};

export default function BlogIndex() {
  const posts = useLoaderData();
  return (
    <div className='h-screen'>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description ? (
              <p className="m-0 lg:m-0">{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
