import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
})

const MainLayout = ({ children }) => {
  return (
    <html lang='en' className={roboto.className}>
      <head>
        <title>Caf Graph</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default MainLayout
