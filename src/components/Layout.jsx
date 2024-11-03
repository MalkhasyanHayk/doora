import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import "../styles/global.css"

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
