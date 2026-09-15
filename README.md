# Travel Made - Club Med Neve

Landing page responsiva da campanha Club Med Neve da Travel Made.

## Publicar no Cloudflare Pages

O site é estático e os arquivos finais já estão em `dist`.

Ao conectar este repositório ao Cloudflare Pages, use:

- Framework preset: `None`
- Build command: deixe em branco
- Build output directory: `dist`
- Root directory: deixe em branco
- Production branch: `main`

O arquivo `wrangler.toml` também aponta o Cloudflare Pages para `./dist`, permitindo uma futura publicação pela CLI com Wrangler.

## Desenvolvimento local

Sirva a pasta `dist` com qualquer servidor HTTP estático. O ponto de entrada é `dist/index.html`.

## Imagens pendentes

A página já inclui a arte principal e uma imagem ilustrativa de família na neve. Os espaços da galeria e o retrato de Denise Paiva estão preparados para receber as imagens oficiais posteriormente.
