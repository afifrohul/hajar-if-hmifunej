import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import './globals.css'
import { AosInit } from '@/lib/aos'

export const metadata = {
  title: 'Hajar IF',
  description: 'Hajar IF adalah sebuah platform digital yang berisi tentang refrensi pembelajaran untuk mahasiswa Informatika Universitas Jember.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-primary bg-secondary'>
        <Navbar />
        <AosInit>
          {children}
        </AosInit>
        <Footer />
      </body>
    </html>
  )
}
