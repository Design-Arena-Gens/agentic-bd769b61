export const metadata = {
  title: 'Bangladesh Street Food Directory - Find Best Street Food Vendors',
  description: 'Complete directory of street food vendors across Bangladesh. Find the best fuchka, jhalmuri, chotpoti, and more near you.',
  keywords: 'bangladesh street food, dhaka food vendors, street food directory, fuchka, jhalmuri, chotpoti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"></script>
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
