import Image from 'next/image'
import { Placeholder } from './Placeholder'

export function DocumentImage ({ image }: { image: string }) {
  if (image === '') {
    return (
      <div>
        <Placeholder className='mx-auto' />
        <p className='text-[#bdbdbd] text-xs tracking-tight text-center mt-9'>Drag & Drop your image here</p>
      </div>
    )
  }
  return (
    <div className='relative h-full w-full'>
      <Image src={image} fill alt='Document Image' className='object-contain' />
    </div>
  )
}
