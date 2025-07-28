# 📘 CSS Grid Layout --- A Grade de Layout Bidemensional do CSS

## 🧱 1. Po que usar CSS Grid?

Antes do Grid, layouts eram feitos com:

- floats e `position` (difícil e manual)
- Flexbox (ótimo, mas unidimensional --- ou linha ou coluna)

## 🧩 2. O que é uma grade?

Imagine uma folha quadriculada. 0 **CSS Grid** transforma um container em uma **malha invisível de linhas e colunas**, como um tabuleiro de xadrez.

Essa malha é formada por:

| Conceito   | Explicação                                                               |
| ---------- | ------------------------------------------------------------------------ |
| Grid Line  | Linhas verticais ou horizontais que delimitam a grade                    |
| Grid Track | Faixa entre duas linhas (ou seja, uma **linha ou coluna** real)          |
| Grid Cell  | A menor unidade: a célula de uma grade (como uma célula de planilha)     |
| Grid Area  | Um bloco de células que você pode nomear e ocupar com um item específico |

## 🔧 3. Criando um container Grid

```css
.conatiner {
  display: grid;
}
```

## 📐 4. Definindo colunas e linhas

```css
.conatiner {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  grid-template-rows: auto auto;
}
```

### Explicando:

- `grid-template-columns`: cria **3 colunas**
  - primeira com `200px`
  - segunda com `1fr` -> espaço proporcional
  - terceira com `100px`
- `grid-template-rows`: cria **2 linhas**
  - altura automática conforme o conteúdo

## ✨ 6. Exemplo visual básico

### HTML

```html
<div class="grid">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

### CSS

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item {
  background: lightblue;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
}
```

### Resultado

<p align="center">
    <img src="./image/ex01.png">
</p>

## 🧠 7. Como o Grid posiciona os itens?
