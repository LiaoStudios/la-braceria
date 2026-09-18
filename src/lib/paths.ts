// Prefixes a root-relative asset path (e.g. '/logo.webp') with Vite's BASE_URL
// ('/' in dev, '/la-braceria/' in the GitHub Pages build) so public/ assets
// resolve correctly once the site is served from a repo subpath.
export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
