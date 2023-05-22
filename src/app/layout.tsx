import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  weight: ['500'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Document OCR',
  description: 'Generate a word document from an image'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
