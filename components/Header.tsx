import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            width="36"
            height="24"
            viewBox="0 0 60 40"
            className="text-ink"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="56"
              height="36"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <rect x="10" y="6" width="6" height="22" fill="currentColor" />
            <rect x="22" y="6" width="6" height="22" fill="currentColor" />
            <rect x="34" y="6" width="6" height="22" fill="currentColor" />
            <rect x="46" y="6" width="6" height="22" fill="currentColor" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight">
            VSA<span className="font-light">studio</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/produtos"
            className="text-gray-700 hover:text-ink transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/categorias"
            className="text-gray-700 hover:text-ink transition-colors"
          >
            Categorias
          </Link>
          <Link
            href="/avaliacoes"
            className="text-gray-700 hover:text-ink transition-colors"
          >
            Avaliações
          </Link>
        </nav>
      </div>
    </header>
  )
}