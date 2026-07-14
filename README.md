# Guia do Calouro — Bacharelado em IA Univesp

Site estático, simples e editável, com perguntas e respostas para calouros do Bacharelado em Inteligência Artificial da Univesp.

## Arquivos

- `index.html`: estrutura da página.
- `styles.css`: aparência visual.
- `script.js`: busca, filtro e abertura das perguntas.
- `data.js`: conteúdo editável do FAQ.
- `MANUAL_PUBLICACAO_GITHUB.md`: passo a passo para publicar no GitHub Pages.

## Como editar perguntas

Abra `data.js` e edite os campos:

```js
{
  axis: "Nome do eixo",
  q: "Pergunta",
  a: "Resposta",
  source: "Fonte oficial usada",
  url: "Link oficial",
  tags: ["palavra-chave"]
}
```

Depois salve e publique/commite as alterações.

## Fontes de conteúdo

O conteúdo das respostas foi reescrito com base no PPC oficial do Bacharelado em Inteligência Artificial e no Manual do Aluno da Univesp. O FAQ anterior foi usado apenas como inspiração de organização e perguntas.
