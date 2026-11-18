import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
          <a href="/">
          <h1 className="text-2xl font-bold text-orange-600">
            RamayanaVerse
          </h1>
          </a>
          <div className="flex gap-6">
            <a href="/">Home</a>
            <a href="/timeline">Timeline</a>
            <a href="/characters">Characters</a>
            <a href="/kandas">Kandas</a>
            <a href="/gallery">Gallery</a>
          </div>
        </nav>

        {children}

        <footer className="bg-orange-600 text-white text-center py-6 mt-20">
          <p>
            © 2026 RamayanaVerse | Built with ❤️
          </p>
        </footer>

      </body>
    </html>
  );
}
