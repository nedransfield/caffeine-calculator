import { SpeedInsights } from '@vercel/speed-insights/next'

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default MainLayout
