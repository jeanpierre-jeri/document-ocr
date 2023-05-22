import { DocumentImage } from './DocumentImage'

export function ImagePlaceholder ({ isDragActive, image }: { isDragActive: boolean, image: string }) {
  if (isDragActive) {
    return (
      <p className='text-[#BDBDBD] text-base tracking-tight text-center'>Drop your image here</p>
    )
  }

  return (
    <DocumentImage image={image} />
  )
}
