import { Toaster } from '@/components/Toaster'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  weight: ['500'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Document OCR',
  description: 'Generate a word document from an image',
  openGraph: {
    title: 'Document OCR',
    description: 'Generate a word document from an image',
    images: [{ url: 'https://document-ocr.vercel.app/og.jpg' }],
    type: 'website',
    url: 'https://document-ocr.vercel.app'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document OCR',
    description: 'Generate a word document from an image',
    images: [{ url: 'https://document-ocr.vercel.app/og.jpg' }]
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}
        <Toaster />
      </body>
    </html>
  )
}
