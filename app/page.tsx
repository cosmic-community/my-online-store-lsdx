import Link from 'next/link'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import { getProdutos, getCategorias, getAvaliacoes } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [produtos, categorias, avaliacoes] = await Promise.all([
    getProdutos(),
    getCategorias(),
    getAvaliacoes(),
  ])

  const featuredProdutos = produtos.slice(0, 4)
  const featuredCategorias = categorias.slice(0, 3)
  const featuredAvaliacoes = avaliacoes.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Produtos em destaque */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Em Destaque</h2>
            <p className="text-gray-500 mt-1">Os produtos mais quentes do estúdio</p>
          </div>
          <Link
            href="/produtos"
            className="text-sm font-medium text-accent hover:underline whitespace-nowrap"
          >
            Ver todos →
          </Link>
        </div>
        {featuredProdutos.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProdutos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Nenhum produto disponível no momento.</p>
        )}
      </section>

      {/* Categorias */}
      {featuredCategorias.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-extrabold text-ink">Categorias</h2>
              <Link
                href="/categorias"
                className="text-sm font-medium text-accent hover:underline whitespace-nowrap"
              >
                Ver todas →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCategorias.map((categoria) => (
                <CategoryCard key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Avaliacoes */}
      {featuredAvaliacoes.length > 0 && (
        <section className="container-page py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-ink">
              O que dizem os produtores
            </h2>
            <Link
              href="/avaliacoes"
              className="text-sm font-medium text-accent hover:underline whitespace-nowrap"
            >
              Ver todas →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAvaliacoes.map((avaliacao) => (
              <ReviewCard key={avaliacao.id} avaliacao={avaliacao} showProduct />
            ))}
          </div>
        </section>
      )}
    </>
  )
}