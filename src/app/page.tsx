import Destination from '@/components/sections/Destination'
import Hero from '@/components/sections/Hero'
import Offer from '@/components/sections/Offer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className='container'>
        <Offer />
      </section>
      <section className='container'>
        <Destination />
      </section>
    </main>
  )
}
