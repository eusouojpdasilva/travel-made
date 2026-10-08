# Travel Made | Landing page de captação

Landing page responsiva da Denise Paiva para captação de famílias interessadas em planejar uma grande viagem. A página apresenta o método de planejamento, destinos, a especialista, depoimento, dúvidas frequentes e chamadas para conversa pelo WhatsApp.

## Estrutura

- `dist/index.html`: conteúdo da página e metadados.
- `dist/styles.css`: identidade visual, layout responsivo e animações.
- `dist/script.js`: menu mobile, slideshow da hero, animações e interações.
- `dist/assets/`: logo Travel Made, retrato da Denise e marca do site.

As fotografias da hero e dos destinos são carregadas de fontes externas (Pexels). O slideshow da hero alterna a cada três segundos com transição fade.

## Desenvolvimento local

Abra `dist/index.html` diretamente no navegador ou sirva `dist` com qualquer servidor HTTP estático. A página não exige etapa de build.

## Publicação no Cloudflare Pages

O projeto continua configurado para publicar a pasta `dist`:

- Framework preset: `None`
- Build command: deixe em branco
- Build output directory: `dist`
- Root directory: deixe em branco
- Production branch: `main`

O `wrangler.toml` aponta para `./dist` para publicação pela CLI do Wrangler.
