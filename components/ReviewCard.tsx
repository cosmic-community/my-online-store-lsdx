import type { Avaliacao } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

interface ReviewCardProps {
  avaliacao: Avaliacao
  showProduct?: boolean
}

export default function ReviewCard({ avaliacao, showProduct = false }: ReviewCardProps) {
  const cliente = getMetafieldValue(avaliacao.metadata?.nome_cliente) || 'Cliente'
  const comentario = getMetafieldValue(avaliacao.metadata?.comentario)
  const notaRaw = avaliacao.metadata?.nota
  const nota = typeof notaRaw === 'number' ? notaRaw : Number(getMetafieldValue(notaRaw)) || 0
  const produtoNome = avaliacao.metadata?.produto
    ? getMetafieldValue(avaliacao.metadata.produto.metadata?.nome) ||
      avaliacao.metadata.produto.title
    : ''

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-ink">{cliente}</span>
        <StarRating rating={nota} />
      </div>
      {comentario && (
        <p className="text-gray-600 text-sm leading-relaxed">{comentario}</p>
      )}
      {showProduct && produtoNome && (
        <p className="mt-3 text-xs text-gray-400">
          Sobre: <span className="font-medium text-gray-600">{produtoNome}</span>
        </p>
      )}
    </div>
  )
}