# Guia do Calouro — Bacharelado em IA Univesp

Site estático, simples e profissional, com perguntas e respostas para calouros do Bacharelado em Inteligência Artificial da Univesp.

**Importante:** visitantes do site publicado não têm acesso de edição. Alterações só são feitas por quem possui permissão no repositório do GitHub.

## Arquivos

- `index.html`: estrutura da página.
- `styles.css`: aparência visual.
- `script.js`: busca, filtro e abertura das perguntas.
- `data.js`: base de perguntas e respostas do FAQ.
- `MANUAL_PUBLICACAO_GITHUB.md`: passo a passo para publicar no GitHub Pages.

## Como manter perguntas

Para manter o conteúdo, uma pessoa com permissão no repositório pode abrir `data.js` e alterar os campos:

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
