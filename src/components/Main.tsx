'use client'

import { useOcrStore } from '@/store/ocrStore'
import { Dropzone } from './Dropzone'
import { Loading } from './Loading'
import { useMemo } from 'react'

export function Main () {
  const status = useOcrStore(state => state.status)
  const result = useOcrStore(state => state.result)

  const textFile = useMemo(() => {
    if (result === '') return ''
    console.log(result)
    const data = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

    return URL.createObjectURL(data)
  }, [result])

  if (status !== '' && result === '') {
    return (
      <Loading />
    )
  }

  if (status === '' && result === '') {
    return (
      <>
        <h1 className='text-center text-[#bcbcbc] text-lg tracking-tight'>Upload your image</h1>
        <p className='text-[#858585] text-xs tracking-tight mt-4 text-center'>File should be Jpeg, Png.</p>

        <Dropzone />
      </>
    )
  }
  return (
    <>
      <p className='text-[#858585] text-base'>
        {result}
      </p>
      <a download href={textFile} className='bg-[#2F80ED] hover:bg-[#146DE1] transition-colors rounded-lg px-4 py-3 text-white text-xs tracking-tight mx-auto block text-center mt-5'>
        Download
      </a>
    </>
  )
}
