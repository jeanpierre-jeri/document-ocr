import { create } from 'zustand'

interface OcrStore {
  status: string
  progress: number
  result: string
  filename: string
  language: 'eng' | 'spa' | ''
  setLanguage: (language: 'eng' | 'spa' | '') => void
  setStatus: (status: string) => void
  setProgress: (progress: number) => void
  setResult: (result: string) => void
  setFilename: (filename: string) => void
}

export const useOcrStore = create<OcrStore>()((set) => ({
  status: '',
  progress: 0,
  result: '',
  filename: '',
  language: '',
  setLanguage: (language) => set({ language }),
  setStatus: (status) => set({ status }),
  setProgress: (progress) => set({ progress }),
  setResult: (result) => set({ result }),
  setFilename: (filename) => set({ filename })
}))
