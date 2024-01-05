'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ToasterProvider from './providers/ToasterProvider';
import ClientOnly from './components/ClientsOnly';
import {AuthProvider} from '../context/AuthContext'
import {JobProvider} from '../context/JobContext'
import { CookiesProvider } from "react-cookie";
import {ThemeProvider} from '../context/ThemeProvider'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-x-hidden'>
      <body className={inter.className}>
      <ThemeProvider theme="light">
        <AuthProvider>
          <JobProvider>
            <CookiesProvider>
              <ToasterProvider />
              <Header />
               {children}
              <Footer />
            </CookiesProvider>
          </JobProvider>
        </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}

