'use client'

import { useOcrStore } from '@/store/ocrStore'

export function Loading () {
  const progress = useOcrStore(state => state.progress)
  const status = useOcrStore(state => state.status)
  return (
    <>
      <h1 className='text-[#bcbcbc] text-lg tracking-tight capitalize'>{status}</h1>

      <div className='w-full h-2 rounded-lg bg-[#F2F2F2] overflow-hidden mt-8'>
        <div className='w-full h-2 bg-[#2F80ED] origin-left transition-transform' style={{ transform: `scaleX(${progress})` }} />
      </div>
    </>
  )
};
