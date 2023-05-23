import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImagePlaceholder } from './ImagePlaceholder'
import { createWorker } from 'tesseract.js'
import { useOcrStore } from '@/store/ocrStore'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export function Dropzone () {
  const [image, setImage] = useState('')

  const [setStatus, setProgress, setResult, setFilename, setLanguage] = useOcrStore(state => [state.setStatus, state.setProgress, state.setResult, state.setFilename, state.setLanguage])
  const language = useOcrStore(state => state.language)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const url = URL.createObjectURL(acceptedFiles[0])
    const filename = acceptedFiles[0].name.replace(/\.\w+/gm, '')
    setImage(url)
    setFilename(filename)
  }, [setFilename])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxFiles: 1
  })

  const handleClick = async () => {
    if (image === '') {
      open()
      return
    }

    if (language === '') {
      toast.error('Please select a language')
      return
    }

    const worker = await createWorker({
      logger: m => {
        setStatus('Loading...')
        setProgress(m.progress)
      }
    })

    await Promise.all([
      await worker.loadLanguage(language),
      await worker.initialize(language)
    ])

    const data = await worker.recognize(image)

    setResult(data.data.text)
    toast.success('Done!')
    void confetti()
    void worker.terminate()
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.currentTarget.value as 'eng' | 'spa'
    setLanguage(lang)
  }

  return (
    <>
      <div
        className={`
          w-full aspect-square md:aspect-video 2xl:aspect-square rounded-xl bg-[#1f2123] mt-8 flex items-center justify-center  overflow-hidden
          ${image === '' ? 'p-9 border-dashed border border-[#637ca0]' : ''}
        `}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <ImagePlaceholder image={image} isDragActive={isDragActive} />
      </div>

      <div className='flex items-center flex-col mt-5'>
        <label htmlFor='language' className='block text-sm font-medium text-gray-900 dark:text-white'>Select document language</label>
        <select onChange={handleSelectChange} id='counlanguagetries' className='bg-[#1f2123] text-white text-sm rounded-lg block p-2.5 w-fit mt-2 mb-5' defaultValue=''>
          <option value='' disabled>Choose a language</option>
          <option value='eng'>English</option>
          <option value='spa'>Spanish</option>
        </select>

        <button onClick={handleClick} type='button' className='bg-[#2F80ED] hover:bg-[#146DE1] transition-colors rounded-lg px-4 py-3 text-white text-xs tracking-tight mx-auto block text-center '>
          {image === '' ? 'Choose a file' : 'Start'}
        </button>
      </div>

    </>
  )
}
