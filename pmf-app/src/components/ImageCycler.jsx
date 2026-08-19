import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// Auto-cycles through a set of images with a crossfade — intentionally not a
// slider (no arrows/dots/drag), just a self-advancing photo rotation.
// `images` accepts strings or { src, position } objects, where `position`
// is a CSS object-position value for images that need reframing.
function ImageCycler({ images, alt, interval = 5000, className }) {
  const [index, setIndex] = useState(0)

  const slides = images.map((image) =>
    typeof image === 'string' ? { src: image, position: 'center' } : image
  )

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden rounded-xl shadow', className)}>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={alt}
          style={{ objectPosition: slide.position ?? 'center' }}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out',
            i === index ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}
    </div>
  )
}

export default ImageCycler
