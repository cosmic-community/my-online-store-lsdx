import Link from 'next/link'
import type { Produto } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StatusBadge from '@/components/StatusBadge'

interface ProductCardProps {
  produto: Produto
}

export default function ProductCard({ produto }: ProductCardProps) {
  const nome = getMetafieldValue(produto.metadata?.nome) || produto.title
  const preco = produto.metadata?.preco
  const coverUrl = produto.metadata?.imagem_capa?.imgix_url
  const tipo = getMetafieldValue(produto.metadata?.tipo_produto)
  const formato = getMetafieldValue(produto.metadata?.formato)

  return (
    <Link
      href={`/produtos/${produto.slug}`}
      className="group block rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {coverUrl ? (
          <img
            src={`${coverUrl}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={nome}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">🎵</span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <StatusBadge status={produto.metadata?.status_disponibilidade} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {tipo && (
            <span className="text-xs font-medium text-accent uppercase tracking-wide">
              {tipo}
            </span>
          )}
          {formato && (
            <span className="text-xs text-gray-400">• {formato}</span>
          )}
        </div>
        <h3 className="font-semibold text-ink line-clamp-1 group-hover:text-accent transition-colors">
          {nome}
        </h3>
        {typeof preco === 'number' && (
          <p className="mt-2 text-lg font-bold text-ink">
            R$ {preco.toFixed(2).replace('.', ',')}
          </p>
        )}
      </div>
    </Link>
  )
}