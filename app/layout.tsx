import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {

  title: {

    template: '%s · Campus Bookings',

    default: 'Campus Bookings',

  },

}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <nav aria-label="Main">

          <Link href="/">Home</Link>

          <Link href="/resources">Resources</Link>

        </nav>

        <main>{children}</main> // the page goes here

      </body>

    </html>

  )

}   ​