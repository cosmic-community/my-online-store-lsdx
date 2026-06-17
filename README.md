# VSAstudio

![App Preview](https://imgix.cosmicjs.com/f7685ec0-6aa0-11f1-8dfe-457508ece1b8-autopilot-photo-1454922915609-78549ad709bb-1781737500322.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, monochrome storefront for selling digital products to trap producers — drum kits, sample packs, lessons and more. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🛍️ Product catalog with cover images, galleries, pricing, and availability badges
- 🏷️ Category browsing with icons and descriptions
- ⭐ Customer reviews with star ratings linked to products
- 🔎 Individual product detail pages with related reviews
- 📱 Fully responsive, mobile-first design
- ⚡ Server-side rendering for fast, SEO-friendly pages
- 🎨 Minimalist VSAstudio brand identity (Visão • Som • Atitude)

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3327b99f5d95ad19961dc6&clone_repository=6a3328c99f5d95ad19961e36)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: estou pensandoe vender produtos digitais para produtores de trap como drum kits sample pecks aulas e etc"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Online Store". The content is managed in Cosmic CMS with the following object types: categorias, produtos, avaliacoes. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: estou pensandoe vender produtos digitais para produtores de trap como drum kits sample pecks aulas e etc

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `categorias`, `produtos`, and `avaliacoes` object types

### Installation

```bash
# Install dependencies
bun install

# Run the development server
bun run dev
```

Set the following environment variables (provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with their categories included
const { objects: produtos } = await cosmic.objects
  .find({ type: 'produtos' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single product by slug
const { object: produto } = await cosmic.objects
  .findOne({ type: 'produtos', slug })
  .depth(1)

// Fetch reviews for a product
const { objects: avaliacoes } = await cosmic.objects
  .find({ type: 'avaliacoes', 'metadata.produto': produtoId })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types:

- **produtos**: `nome`, `descricao`, `preco`, `imagem_capa`, `galeria`, `tipo_produto`, `status_disponibilidade`, `quantidade_arquivos`, `formato`, `categoria`
- **categorias**: `nome`, `descricao`, `icone`
- **avaliacoes**: `nome_cliente`, `nota`, `comentario`, `produto`

All data is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs). Read more in the [Cosmic documentation](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel
1. Push your code to a Git repository
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables in project settings
4. Deploy

### Netlify
1. Connect your repository to [Netlify](https://netlify.com)
2. Add the environment variables
3. Deploy

<!-- README_END -->