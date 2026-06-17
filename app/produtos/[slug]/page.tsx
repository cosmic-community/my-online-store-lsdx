// app/produtos/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getProdutoBySlug,
  getAvaliacoesByProduto,
  getMetafieldValue,
} from '@/lib/cosmic'
import StatusBadge from '@/components/StatusBadge'
import ReviewCard from '@/components/ReviewCard'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProdutoDetailPage({ params }: PageProps) {
  const { slug } = await params
  const produto = await getProdutoBySlug(slug)

  if (!produto) {
    notFound()
  }

  const avaliacoes = await getAvaliacoesByProduto(produto.id)

  const nome = getMetafieldValue(produto.metadata?.nome) || produto.title
  const descricao = getMetafieldValue(produto.metadata?.descricao)
  const preco = produto.metadata?.preco
  const coverUrl = produto.metadata?.imagem_capa?.imgix_url
  const galeria = produto.metadata?.galeria || []
  const tipo = getMetafieldValue(produto.metadata?.tipo_produto)
  const formato = getMetafieldValue(produto.metadata?.formato)
  const quantidade = produto.metadata?.quantidade_arquivos
  const categoria = produto.metadata?.categoria

  return (
    <div className="container-page py-12">
      <Link
        href="/produtos"
        className="inline-flex items-center text-sm text-gray-500 hover:text-ink mb-8"
      >
        ← Voltar para produtos
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 aspect-square">
            {coverUrl ? (
              <img
                src={`${coverUrl}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={nome}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                🎵
              </div>
            )}
          </div>

          {galeria.length > 0 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galeria.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-gray-200 aspect-square bg-gray-100"
                >
                  <img
                    src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                    alt={`${nome} ${idx + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {tipo && (
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                {tipo}
              </span>
            )}
            <StatusBadge status={produto.metadata?.status_disponibilidade} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">
            {nome}
          </h1>

          {typeof preco === 'number' && (
            <p className="mt-4 text-3xl font-bold text-ink">
              R$ {preco.toFixed(2).replace('.', ',')}
            </p>
          )}

          {descricao && (
            <p className="mt-6 text-gray-600 leading-relaxed whitespace-pre-line">
              {descricao}
            </p>
          )}

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
            {formato && (
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  Formato
                </dt>
                <dd className="mt-1 font-medium text-ink">{formato}</dd>
              </div>
            )}
            {typeof quantidade === 'number' && (
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  Arquivos
                </dt>
                <dd className="mt-1 font-medium text-ink">{quantidade}</dd>
              </div>
            )}
            {categoria && (
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  Categoria
                </dt>
                <dd className="mt-1">
                  <Link
                    href={`/categorias/${categoria.slug}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {getMetafieldValue(categoria.metadata?.nome) ||
                      categoria.title}
                  </Link>
                </dd>
              </div>
            )}
          </dl>

          <button
            type="button"
            className="mt-8 w-full px-8 py-4 rounded-lg bg-ink text-white font-semibold hover:bg-ink-light transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-ink mb-6">
          Avaliações
        </h2>
        {avaliacoes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avaliacoes.map((avaliacao) => (
              <ReviewCard key={avaliacao.id} avaliacao={avaliacao} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Este produto ainda não possui avaliações.
          </p>
        )}
      </section>
    </div>
  )
}