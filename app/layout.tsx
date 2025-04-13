import "./globals.css"
import { Providers } from "./provider"

export const metadata = {
  title: "Your App",
  description: "Awesome app description",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
