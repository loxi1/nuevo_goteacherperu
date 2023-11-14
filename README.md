# 🚀 Adler confecciones

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Most *starred* & *forked* Astro theme in 2022_. 🌟

### Estructura del proyecto

Carpetas y archivso que componen el sistema:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── bordados/
│   │   │   └── index.astro
│   │   ├── contactanos/
│   │   │   └── index.astro
│   │   ├── corteyconfeccion/
│   │   │   └── index.astro
│   │   ├── quienessomos/
│   │   │   └── index.astro
│   │   ├── trabajos/
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro tiene la extención `.astro` los archivos esta dentro la carpeta `src/pages/`. La ruta de la carpeta define la url.

`src/components/` no tiene nada de especial, pero ahí es donde nos gusta poner cualquier componente Astro/React/Vue/Svelte/Preact.


Cualquier activo estático, como las imágenes, se puede colocar en el directorio `public/` si no requiere ninguna transformación o en el directorio `assets/` si se importan directamente.

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Update `config.mjs` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuración

Archivos basicos para la configuración: `./src/config.yaml`

```yaml
site:
  name: 'Beta confeccioneadlert'
  site: 'https://beta.confeccionesadler.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Confecciones Adler'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.jpg'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true
    postsPerPage: 6

    bordados:
      isEnabled: true
      pathname: 'bordados' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    contactanos:
      isEnabled: true
      pathname: 'contactanos' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    corteyconfeccion:
      isEnabled: true
      pathname: 'corteyconfeccion' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    quienessomos:
      isEnabled: true
      pathname: 'quienessomos' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true
    
    trabajos:
      isEnabled: true
      pathname: 'trabajos' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

### Deploy

#### Deploy to production (manual)

Puede crear una compilación de producción optimizada con:

```shell
npm run build
```

Ahora, su sitio web está listo para ser implementado. Todos los archivos generados se encuentran en
carpeta `dist`, que puede implementar la carpeta en cualquier servicio de alojamiento que
preferir.
