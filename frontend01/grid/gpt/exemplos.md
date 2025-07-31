# Exemplos: GRID

## 🧪 Exemplo 1: Painel de Cards Responsivo

### 🎯 Objetivo:

Criar uma grade de **cards** que se ajusta conforme a largura da tela.

#### 🧱 HTML

```html
<section class="card-grid">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
  <div class="card">5</div>
</section>
```

#### 🎨 CSS

```css
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
  padding: 2rem;
}
.card {
  background-color: #e2e8f0;
  padding: 2rem;
  text-align: center;
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

🔎 Explicação:

- `auto-fit + minmax(200px, 1fr)` faz com que o número de colunas se ajuste automaticamente, com no mínimo 200px cada.
- Layout se adapta a diferentes telas!

#### 📐 Resultado

<p align="center">
    <img src="./image/ex01-desktop.png">
</p>
<p>* Todos os resultados serão especificoas para telas com 1920px de largura.</p>

## Exemplo 2: Layout Completo com Header, SIdebar e Main

### 🎯 Objetivo:

Criar um layout tradicional de páginas com **cabeçalho, barra lateral,conteúdo principal e raodapé**, usando `grid-template-areas`.

#### 🧱 HTML

```html
<div class="layout">
  <header class="header">Cabeçalho</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main</main>
  <footer class="footer">Footer</footer>
</div>
```

#### 🎨 CSS

```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
  height: 100vh;

  .header {
    grid-area: header;
    background: #4f46e5;
    color: white;
    padding: 1rem;
  }

  .sidebar {
    grid-area: sidebar;
    background: #e0e7ff;
    padding: 1rem;
  }

  .main {
    grid-area: main;
    background: #f8fafc;
    padding: 1rem;
  }

  .footer {
    grid-area: footer;
    background: #4f46e5;
    color: white;
    padding: 1rem;
  }
}
```

🔎 Explicação:

- `grid-template-areas` define uma estrutura de layout visual clara.
- Fácil de reorganizar e ler, ideal para páginas completas.
