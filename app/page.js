import ClientsSection from '@/components/ClientsSection'
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#FFFFFF]">
      <NavBar />
      <Slider />
      <ClientsSection />
    </main>
  )
}
