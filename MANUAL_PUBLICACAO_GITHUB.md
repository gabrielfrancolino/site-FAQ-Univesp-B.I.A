# Manual de publicação do site no GitHub Pages

Este manual ensina a colocar o site no ar sem contratar domínio. O endereço final ficará parecido com:

`https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## Parte 1 — Criar uma conta no GitHub

1. Acesse `https://github.com/`.
2. Clique em **Sign up**.
3. Crie sua conta e confirme o e-mail.

## Parte 2 — Criar o repositório

1. Após entrar no GitHub, clique no botão **+** no canto superior direito.
2. Clique em **New repository**.
3. Em **Repository name**, coloque um nome simples, por exemplo:
   - `guia-calouro-ia-univesp`
   - `faq-calouro-univesp-ia`
4. Marque **Public**.
5. Clique em **Create repository**.

## Parte 3 — Enviar os arquivos do site

Você pode fazer tudo pelo navegador, sem instalar nada.

1. Dentro do repositório criado, clique em **uploading an existing file**.
2. Arraste para a página estes arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `data.js`
   - `README.md`
   - `MANUAL_PUBLICACAO_GITHUB.md`
3. No fim da página, em **Commit changes**, escreva:
   - `Publica primeira versão do guia`
4. Clique em **Commit changes**.

## Parte 4 — Ativar o GitHub Pages

1. No repositório, clique em **Settings**.
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment**, localize **Source**.
4. Escolha **Deploy from a branch**.
5. Em **Branch**, selecione:
   - `main`
   - pasta `/root`
6. Clique em **Save**.
7. Aguarde de 1 a 5 minutos.
8. Volte em **Settings > Pages**. O GitHub mostrará o link público do site.

## Parte 5 — Compartilhar o link

Copie o link que aparecerá em **Settings > Pages**. Ele deve ficar neste formato:

`https://SEU-USUARIO.github.io/guia-calouro-ia-univesp/`

Você pode compartilhar esse link em grupos de ingressantes, redes sociais, e-mail ou documento de recepção dos calouros.

## Parte 6 — Como editar depois de publicado

Para alterar perguntas, respostas ou fontes:

1. Entre no repositório no GitHub.
2. Clique no arquivo `data.js`.
3. Clique no ícone de lápis (**Edit this file**).
4. Edite o texto desejado.
5. Clique em **Commit changes**.
6. Aguarde o GitHub Pages atualizar.

Na maioria dos casos, você só precisará editar `data.js`.

## Parte 7 — Como adicionar uma nova pergunta

Dentro do arquivo `data.js`, copie um bloco existente e cole antes do fechamento final da lista. Mantenha este formato:

```js
{
  "axis": "Nome do eixo",
  "q": "Pergunta nova?",
  "a": "Resposta em linguagem simples, baseada no PPC ou Manual.",
  "source": "PPC ou Manual — seção usada",
  "url": "https://apps.univesp.br/manual-do-aluno/",
  "tags": ["palavra1", "palavra2"]
}
```

Importante: se a pergunta usa uma regra oficial, revise no PPC ou no Manual antes de publicar.

## Parte 8 — Como corrigir visual ou cores

- Cores e espaçamentos ficam em `styles.css`.
- Estrutura da página fica em `index.html`.
- Busca, filtro e abre-fecha das perguntas ficam em `script.js`.

Para manutenção simples, evite mexer em `script.js`.

## Parte 9 — Boas práticas para manter o site confiável

1. Não publique regra sem conferir no PPC ou Manual do Aluno.
2. Coloque a seção da fonte no campo `source`.
3. Prefira respostas curtas e diretas.
4. Revise o site no celular.
5. Atualize quando a Univesp publicar novo manual, calendário ou PPC.
6. Quando houver dúvida, escreva que o aluno deve confirmar no AVA, no Manual ou no calendário oficial.
