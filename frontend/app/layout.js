import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ToasterProvider from './providers/ToasterProvider';
import ClientOnly from './components/ClientsOnly';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job Search App',
  description: 'Job Search App built with Next.js and Django',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={inter.className}>
        <ToasterProvider />
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  )
}
