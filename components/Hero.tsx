import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-ink-light opacity-90" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0px, #fff 8px, transparent 8px, transparent 24px)',
        }}
      />
      <div className="container-page relative py-24 sm:py-32 text-center animate-fade-up">
        <svg
          width="80"
          height="54"
          viewBox="0 0 60 40"
          className="mx-auto mb-8 text-white"
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
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          VSA<span className="font-light">studio</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-300 tracking-[0.4em] uppercase">
          Visão • Som • Atitude
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-300">
          Produtos digitais premium para produtores de trap. Drum kits, sample
          packs, aulas e tudo que você precisa para elevar seu som.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/produtos"
            className="px-8 py-3 rounded-lg bg-white text-ink font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Produtos
          </Link>
          <Link
            href="/categorias"
            className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Categorias
          </Link>
        </div>
      </div>
    </section>
  )
}