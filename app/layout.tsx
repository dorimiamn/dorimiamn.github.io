import type { Metadata } from 'next';

import './global.css'

export const metadata: Metadata = {
  title: "dorimiamn's Portfolio",
  description: "dorimiamn's Portfolio Site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className='min-w-96 max-w-3xl mx-auto my-10'>{children}</body>
    </html>
  )
}