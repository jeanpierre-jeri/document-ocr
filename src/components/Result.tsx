import { useOcrStore } from '@/store/ocrStore'
import { useMemo, useState } from 'react'
import { DoneIcon, RestartIcon } from './Icons'

export function Result () {
  const result = useOcrStore(state => state.result)
  const filename = useOcrStore(state => state.filename)
  const [setStatus, setProgress, setResult, setFilename, setLanguage] = useOcrStore(state => [state.setStatus, state.setProgress, state.setResult, state.setFilename, state.setLanguage])
  const [name, setName] = useState('')

  const textFile = useMemo(() => {
    if (result === '') return ''
    const data = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

    return URL.createObjectURL(data)
  }, [result])

  if (result === '') return null

  const handleClick = () => {
    setStatus('')
    setProgress(0)
    setResult('')
    setFilename('')
    setLanguage('')
    setName('')
  }

  return (
    <div>
      <div className='w-9 aspect-square rounded-full bg-[#219653] flex justify-center items-center relative mx-auto'>
        <DoneIcon className='text-white absolute w-6' />
      </div>

      <h2 className='text-center text-[#bcbcbc] text-lg tracking-tight mb-6 mt-3'>Done.</h2>
      <textarea className='text-white text-base w-full aspect-[1/1.2] bg-[#1f1f20] resize-none scrollbar-track-[#3f3f3f] scrollbar-thumb-[#2f80ed] scrollbar-thin scrollbar-thumb-rounded-lg p-2' defaultValue={result} />

      <div className='grid grid-cols-12 mt-5 rounded-lg overflow-hidden w-full'>
        <input type='text' placeholder='Your document name' className='block col-span-9 h-fit items-center px-4 py-3 outline-none w-full bg-[#3b3b3b] text-white' value={name} onInput={(e) => setName(e.currentTarget.value)} />
        <a download={name !== '' ? name : filename} href={textFile} className='bg-[#2F80ED] hover:bg-[#146DE1] transition-colors px-4 py-3 text-white text-sm tracking-tight mx-auto flex items-center justify-center text-center col-span-3 w-full outline-none'>
          Download
        </a>
      </div>

      <button onClick={handleClick} type='button' className='text-black bg-yellow-400 hover:bg-yellow-500 transition-colors mx-auto mt-4 flex items-center rounded-lg px-4 py-3 gap-2 h-fit'>
        Restart
        <i className='w-6 aspect-square relative flex items-center justify-center'>
          <RestartIcon className='w-6 absolute' />
        </i>
      </button>

    </div>
  )
};
