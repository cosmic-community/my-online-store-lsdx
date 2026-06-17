import ReviewCard from '@/components/ReviewCard'
import { getAvaliacoes } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'Avaliações — VSAstudio',
  description: 'Veja o que os produtores estão dizendo sobre nossos produtos.',
}

export default async function AvaliacoesPage() {
  const avaliacoes = await getAvaliacoes()

  return (
    <div className="container-page py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-ink">Avaliações</h1>
        <p className="text-gray-500 mt-2">
          O que a comunidade de produtores está falando.
        </p>
      </header>

      {avaliacoes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliacoes.map((avaliacao) => (
            <ReviewCard key={avaliacao.id} avaliacao={avaliacao} showProduct />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Nenhuma avaliação disponível no momento.</p>
      )}
    </div>
  )
}