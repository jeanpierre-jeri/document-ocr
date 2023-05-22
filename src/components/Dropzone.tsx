'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImagePlaceholder } from './ImagePlaceholder'
import Tesseract from 'tesseract.js'
import { useOcrStore } from '@/store/ocrStore'

export function Dropzone () {
  const [image, setImage] = useState('')

  const [setStatus, setProgress, setResult] = useOcrStore(state => [state.setStatus, state.setProgress, state.setResult])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const url = URL.createObjectURL(acceptedFiles[0])
    setImage(url)
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  })

  const handleClick = async () => {
    if (image === '') {
      open()
      return
    }
    const data = await Tesseract.recognize(
      image,
      'eng',
      {
        logger: m => {
          setStatus(m.status)
          setProgress(m.progress)
        }
      }
    )

    setResult(data.data.text)
  }

  return (
    <>
      <div
        className={`
          w-full h-56 rounded-xl bg-[#1f2123]  mt-8 flex items-center justify-center  overflow-hidden
          ${image === '' ? 'p-9 border-dashed border border-[#637ca0]' : ''}
        `}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <ImagePlaceholder image={image} isDragActive={isDragActive} />
      </div>

      <p className='text-xs text-[#BDBDBD] tracking-tight text-center mt-4'>Or</p>

      <button onClick={handleClick} type='button' className='bg-[#2F80ED] hover:bg-[#146DE1] transition-colors rounded-lg px-4 py-3 text-white text-xs tracking-tight mx-auto block text-center mt-5'>
        {image === '' ? 'Choose a file' : 'Upload'}
      </button>

    </>
  )
}
