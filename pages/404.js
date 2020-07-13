import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1>Page not found</h1>
      <p>Click <Link href={'/'}><a>here</a></Link> to go back</p>
    </MainLayout>
  )
}
