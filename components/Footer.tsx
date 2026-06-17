export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="container-page py-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-2xl font-extrabold tracking-tight">
            VSA<span className="font-light">studio</span>
          </span>
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">
            Visão • Som • Atitude
          </p>
          <p className="text-gray-500 text-sm max-w-md">
            Produtos digitais para produtores de trap — drum kits, sample
            packs, aulas e muito mais.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            © {new Date().getFullYear()} VSAstudio. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}