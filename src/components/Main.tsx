'use client'

import { useOcrStore } from '@/store/ocrStore'
import { Dropzone } from './Dropzone'
import { Loading } from './Loading'
import { Result } from './Result'

export function Main () {
  const status = useOcrStore(state => state.status)
  const result = useOcrStore(state => state.result)

  if (status !== '' && result === '') {
    return (
      <Loading />
    )
  }

  if (status === '' && result === '') {
    return (
      <>
        <h1 className='text-center text-[#bcbcbc] text-lg tracking-tight'>Upload your image</h1>
        <p className='text-[#858585] text-xs tracking-tight mt-4 text-center'>File should be Jpeg, Png or Webp.</p>

        <Dropzone />
      </>
    )
  }
  return (
    <Result />
  )
}
