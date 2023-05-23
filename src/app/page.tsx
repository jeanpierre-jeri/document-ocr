import { Main } from '@/components/Main'

export default async function Home () {
  return (
    <main className='bg-[#1f1f20] flex items-center justify-center min-h-screen font-medium'>
      <section className='bg-[#121212] py-9 px-8 rounded-xl shadow-md shadow-white/10 w-full max-w-lg m-4'>
        <Main />
      </section>

    </main>
  )
}
