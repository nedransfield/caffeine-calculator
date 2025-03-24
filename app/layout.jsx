import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
})

const MainLayout = ({ children }) => {
  return (
    <html lang='en' className={roboto.className}>
      <head>
        <title>Caf Graph</title>
      </head>
      <body className='flex flex-col justify-self-center w-auto max-w-2xl'>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default MainLayout
