# Desafio - Carrossel de Imagens Responsivo

Criar um componente carrosel (carousel) que permite a navegação entre slides de imagens com setas e indicadores, utilizando apenas **HTML, CSS e JavaScript puro**, focando em **acessibilidade, responsividade e transições suaves**.

## Funcionalidades obrigatórias

- Mostrar **1 imagem por vez** em viewport mobile, 2 em tablets, 3 ou mais em desktop
- **Setas esquerda/direita** para avegar entre s slides
- **Indicadores de posição** (bolinhas ou barras) que indicam o slide atual
- Navegação deve **voltar ao início após o último slide** (loop)
- Transição suave ao trocar slides
- Suporte a teclado (setas <- e ->)
- Acessível com `aria-hidden`, `aria-label`, e foco gerenciável
- Componentizado: estrutura HTML clara e reaproveitável

## Desafios Extras (nível entrevista)

- Pausar transição automática ao passar o mouse no carrossel
- Adicionar autoplay com delay de 5s
- Implementar swipe horizontal no mobile (touch events)
- Carregamento de imagens com `loadig="lazy"`
- Responsividade fluida com `clamp()` no CSS

## Requisitos Técnicos

- HTML semântico
- CSS com FLexbox u Grid + transições
- JS modular, com boas práticas
- Sem biblioteca/frameworks
- Código comentado e limpo
