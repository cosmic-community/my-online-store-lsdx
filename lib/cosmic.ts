import { createBucketClient } from '@cosmicjs/sdk'
import type { Produto, Categoria, Avaliacao } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render metadata values that may be objects
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getProdutos(): Promise<Produto[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'produtos' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Produto[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch produtos')
  }
}

export async function getProdutoBySlug(slug: string): Promise<Produto | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'produtos', slug })
      .depth(1)
    return response.object as Produto
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch produto')
  }
}

export async function getCategorias(): Promise<Categoria[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categorias' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Categoria[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categorias')
  }
}

export async function getCategoriaBySlug(slug: string): Promise<Categoria | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categorias', slug })
      .depth(1)
    return response.object as Categoria
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch categoria')
  }
}

export async function getProdutosByCategoria(categoriaId: string): Promise<Produto[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'produtos', 'metadata.categoria': categoriaId })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Produto[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch produtos by categoria')
  }
}

export async function getAvaliacoes(): Promise<Avaliacao[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'avaliacoes' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Avaliacao[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch avaliacoes')
  }
}

export async function getAvaliacoesByProduto(produtoId: string): Promise<Avaliacao[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'avaliacoes', 'metadata.produto': produtoId })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Avaliacao[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch avaliacoes by produto')
  }
}