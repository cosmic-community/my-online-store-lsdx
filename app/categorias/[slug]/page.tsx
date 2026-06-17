// app/categorias/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getCategoriaBySlug,
  getProdutosByCategoria,
  getMetafieldValue,
} from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoriaDetailPage({ params }: PageProps) {
  const { slug } = await params
  const categoria = await getCategoriaBySlug(slug)

  if (!categoria) {
    notFound()
  }

  const produtos = await getProdutosByCategoria(categoria.id)
  const nome = getMetafieldValue(categoria.metadata?.nome) || categoria.title
  const descricao = getMetafieldValue(categoria.metadata?.descricao)
  const icone = getMetafieldValue(categoria.metadata?.icone)

  return (
    <div className="container-page py-16">
      <Link
        href="/categorias"
        className="inline-flex items-center text-sm text-gray-500 hover:text-ink mb-8"
      >
        ← Voltar para categorias
      </Link>

      <header className="flex items-start gap-4 mb-10">
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-ink text-white flex items-center justify-center text-2xl">
          {icone || '🏷️'}
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-ink">{nome}</h1>
          {descricao && <p className="text-gray-500 mt-2">{descricao}</p>}
        </div>
      </header>

      {produtos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          Nenhum produto nesta categoria no momento.
        </p>
      )}
    </div>
  )
}