import {useState, useEffect} from 'react'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'

export default function Posts ({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await response.json()
      setPosts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout title="Posts page">
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Posts page">
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return {posts: null}
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    posts
  }
}
