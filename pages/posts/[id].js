import {useRouter} from 'next/router'
import { useState, useEffect } from 'react'
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'

export default function Post ({ post: serverPost }) {
  const router = useRouter()
  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
      const json = await response.json()
      setPost(json)
    }

    if (!serverPost) {
      load()
    }
  }, []);

  if (!post) {
    return (
      <MainLayout title="Post">
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href={'/posts'}>
        <a>Back to posts list</a>
      </Link>
    </MainLayout>
  )
}

Post.getInitialProps = async ({req}) => {
  if (!req) {
    return { post: null }
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
  const post = await response.json()

  return {
    post
  }
}