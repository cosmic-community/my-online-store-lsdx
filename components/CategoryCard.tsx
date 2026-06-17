import Link from 'next/link'
import type { Categoria } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  categoria: Categoria
}

export default function CategoryCard({ categoria }: CategoryCardProps) {
  const nome = getMetafieldValue(categoria.metadata?.nome) || categoria.title
  const descricao = getMetafieldValue(categoria.metadata?.descricao)
  const icone = getMetafieldValue(categoria.metadata?.icone)

  return (
    <Link
      href={`/categorias/${categoria.slug}`}
      className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 hover:border-ink hover:shadow-lg transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ink text-white flex items-center justify-center text-2xl">
        {icone || '🏷️'}
      </div>
      <div>
        <h3 className="font-semibold text-ink group-hover:text-accent transition-colors">
          {nome}
        </h3>
        {descricao && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{descricao}</p>
        )}
      </div>
    </Link>
  )
}