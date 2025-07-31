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
