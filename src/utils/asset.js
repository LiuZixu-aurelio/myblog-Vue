export function asset(path) {
  const normalized = String(path).replace(/^\//, '')

  if (normalized.startsWith('src/')) {
    return new URL(`../${normalized.slice(4)}`, import.meta.url).href
  }

  if (normalized.startsWith('public/')) {
    return `/${normalized.slice(7)}`
  }

  return new URL(`../${normalized}`, import.meta.url).href
}
