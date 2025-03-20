import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Caf Graph</title>
      </head>
      <body>
        <div>{children}</div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default MainLayout
