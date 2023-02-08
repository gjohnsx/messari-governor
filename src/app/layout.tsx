import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-messari-600">
      <head />
      <body
        className="selection:bg-indigo-500/30"
      >
        {children}
      </body>
    </html>
  )
};
