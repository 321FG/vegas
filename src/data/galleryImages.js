// Import every JPG from /assets so Vite hashes and bundles them.
const modules = import.meta.glob('../assets/IMG-*.jpg', {
  eager: true,
  import: 'default',
})

export const galleryImages = Object.entries(modules)
  .map(([path, src]) => {
    const file = path.split('/').pop() || ''
    return { src, file, alt: `FVJD — ${file.replace(/\.[^.]+$/, '')}` }
  })
  .sort((a, b) => a.file.localeCompare(b.file))
