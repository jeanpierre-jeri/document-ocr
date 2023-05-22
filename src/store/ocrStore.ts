import { create } from 'zustand'

interface OcrStore {
  status: string
  progress: number
  result: string
  setStatus: (status: string) => void
  setProgress: (progress: number) => void
  setResult: (result: string) => void
}

export const useOcrStore = create<OcrStore>()((set) => ({
  status: '',
  progress: 0,
  result: '',
  setStatus: (status) => set(({ status })),
  setProgress: (progress) => set(({ progress })),
  setResult: (result) => set(({ result }))
}))
