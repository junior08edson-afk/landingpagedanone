# Landing page — Elison Danone

Landing page estática do personal trainer Elison Danone, pronta para publicação gratuita no GitHub Pages.

## Conteúdo do pacote

- `index.html`: página principal;
- `404.html`: fallback para links acessados diretamente;
- `styles.css`: identidade visual e responsividade;
- `script.js`: menu mobile, animações e interações;
- `images/`: imagens usadas pela página;
- `favicon.svg`: ícone do site;
- `.nojekyll`: garante a publicação dos arquivos estáticos sem processamento do Jekyll.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, a pasta `/ (root)` e salve.
6. Aguarde o GitHub informar o endereço publicado.

O endereço normalmente terá o formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Todos os caminhos internos são relativos, então o site funciona tanto na raiz de um domínio quanto dentro do caminho de um repositório do GitHub Pages.

## Visualização local

Abra um terminal nesta pasta e execute:

```bash
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Contato configurado

Todos os botões principais usam o WhatsApp informado e exibem o texto **Converse Comigo!**.
