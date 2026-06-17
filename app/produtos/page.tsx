import ProductCard from '@/components/ProductCard'
import { getProdutos } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Produtos — VSAstudio',
  description: 'Drum kits, sample packs, aulas e mais para produtores de trap.',
}

export default async function ProdutosPage() {
  const produtos = await getProdutos()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Produtos</h1>
        <p className="text-gray-500 mt-2">
          Explore todo o catálogo de produtos digitais.
        </p>
      </header>

      {produtos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Nenhum produto disponível no momento.</p>
      )}
    </div>
  )
}