import CategoryCard from '@/components/CategoryCard'
import { getCategorias } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Categorias — VSAstudio',
  description: 'Navegue pelas categorias de produtos digitais.',
}

export default async function CategoriasPage() {
  const categorias = await getCategorias()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Categorias</h1>
        <p className="text-gray-500 mt-2">
          Encontre o tipo de produto que você procura.
        </p>
      </header>

      {categorias.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <CategoryCard key={categoria.id} categoria={categoria} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Nenhuma categoria disponível no momento.</p>
      )}
    </div>
  )
}