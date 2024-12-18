import Image from 'next/image'

// Instead of
<img src="/image.jpg" />

// Use
<Image 
  src="/ahmed.jpg"
  width={500}
  height={300}
  priority={isAboveFold}
  loading="lazy"
/> 