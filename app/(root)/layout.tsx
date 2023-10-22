import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import Footer from '@/components/Footer'
import Leftbar from '@/components/Leftbar'
import Navbar from '@/components/Navbar'
import Rightbar from '@/components/Rightbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <Navbar/>

        <main>
          <Leftbar/>

          <section className='main-container'>
            <div className='w-full max-w-4xl'>
            {children}

            </div>
          </section>

          <Rightbar/>

        </main>
        <Footer/>
        
       
        </body>
    </html>
    </ClerkProvider>
  )
}