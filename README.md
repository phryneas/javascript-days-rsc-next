Wiederkehrende Frage:

- Wo kommt das Feature her?
  - React Stable?
  - React Canary?
  - Next.js?
- Gibt es ein Pendant im alten Next.js?
- wo findet der Render statt? (Build, Server, Browser)

# Workshop

grober Ablauf:

## Server Components

### Die ersten RSC

- Projekt klonen
- /layout.tsx, /page.tsx anschauen
- im Browser oeffnen
- JavaScript deaktivieren
- Theorie: Shell
- Theorie: Serverlose Server Components - `nextConfig.output: 'export'`

### Data Fetching - async components

- /products/page.tsx
- `async` Komponente
- datafetching via simplen fetch-call
- `yarn build`
- Parallele zu SSG

### Suspense Boundaries

- /loading.tsx
- api verlangsamen
- Theorie: implizite Suspense-Komponente
- im Browser:

  - JavaScript deaktivieren
  - Theorie: streaming SSR
    - wiederholen: deshalb die shell
    - https://react.dev/reference/react-dom/server/renderToPipeableStream#usage
  - Theorie: JSON payload, out-of-order stream
    - RSC parser: https://rsc-parser.vercel.app/

### Error Boundaries

- /error.tsx
- Fehler in Komponente werfen
- Theorie: implizite Error Boundary

### "spontaner" SSR

- /products/[id]/page.tsx
- Parallele zu SSR

### Nested Layouts

- /products/layout.tsx
- Next App Router feature: nested Layouts
- Link: SSR -> SSG

### SSG ohne Links

- `generateStaticParams`

### Server Actions

- /admin/edit/[id]/page.tsx
- Theory: `"use server"` pragma in functions
- Theory: `action` in `form`
- Implementation Detail: `action.$$FORM_ACTION` - https://github.com/facebook/react/blob/a20eea25197df0da80104917df414747eeab1ac9/packages/react-dom/src/__tests__/ReactDOMFizzForm-test.js#L481-L492

### Der Next `fetch` Cache

- `revalidateTag` & `{ next: { tags: ["tag"] } }`
- Theorie: wie koennte man so etwas wie den cache selbst implementieren, aber "pro request"? -> `React.cache`

## Client Components

### Basics

- /products/[id]/Reviews.tsx mit `useQuery`
- Theorie: "use client"
- Provider in extra Komponente benoetigt

### Client Komponenten sind "ansteckend"

- Theorie: alle Imports einer "use client" file sind auch Client-Side

### Nesting: RSC in CC

- /Providers.tsx


# andere Links: 
https://www.youtube.com/watch?v=pj5N-Khihgc
https://jser.dev/react/2023/04/20/how-do-react-server-components-work-internally-in-react/
