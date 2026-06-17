import { getMetafieldValue } from '@/lib/cosmic'

interface StatusBadgeProps {
  status?: unknown
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const value = getMetafieldValue(status)
  if (!value) return null

  const isAvailable = /dispon|ativo|venda/i.test(value)

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
        isAvailable
          ? 'bg-green-100 text-green-700'
          : 'bg-gray-200 text-gray-600'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isAvailable ? 'bg-green-500' : 'bg-gray-400'
        }`}
      />
      {value}
    </span>
  )
}