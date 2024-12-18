import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

const OptimizedImage = ({ src, alt, width, height, priority = false }: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      className="transition-opacity opacity-0 duration-[0.7s]"
      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    />
  )
}

export default OptimizedImage 