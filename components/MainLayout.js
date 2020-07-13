import Link from 'next/link'
import Head from 'next/head'

export default function MainLayout ({children, title = 'Next App'}) {
  return (
    <>
      <Head>
        <title>{title} | Next JS</title>
        <meta charSet="utf-8" />
        <meta description="Test application to learn next js basics" />
        <meta keywords="js,javascript,react,next" />
      </Head>
      <nav className="main-nav">
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
