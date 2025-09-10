// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SubSubCategory API',
  description: 'API for managing subsubcategories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}