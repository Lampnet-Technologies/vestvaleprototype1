export const imageConfig = {
  // Default image loading settings
  defaultImageProps: {
    loading: "lazy",
    quality: 75,
    priority: false,
  },

  // Hero and above-the-fold image settings
  heroImageProps: {
    loading: "eager",
    quality: 90,
    priority: true,
  },

  // Thumbnail and small image settings
  thumbnailImageProps: {
    loading: "lazy",
    quality: 60,
    priority: false,
  },

  // Common image sizes
  sizes: {
    hero: "100vw",
    full: "100vw",
    card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    thumbnail: "(max-width: 768px) 50vw, 25vw",
  },
};