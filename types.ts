// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Categoria
export interface Categoria extends CosmicObject {
  type: 'categorias';
  metadata: {
    nome?: string;
    descricao?: string;
    icone?: string;
  };
}

// Produto
export interface Produto extends CosmicObject {
  type: 'produtos';
  metadata: {
    nome?: string;
    descricao?: string;
    preco?: number;
    imagem_capa?: CosmicImage;
    galeria?: CosmicImage[];
    tipo_produto?: string;
    status_disponibilidade?: string;
    quantidade_arquivos?: number;
    formato?: string;
    categoria?: Categoria;
  };
}

// Avaliacao
export interface Avaliacao extends CosmicObject {
  type: 'avaliacoes';
  metadata: {
    nome_cliente?: string;
    nota?: number;
    comentario?: string;
    produto?: Produto;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}