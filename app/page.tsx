import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import GetBooks from '@/components/getBooks/GetBooks'

export default function Home() {
  return (
    <>
    <div className="mx-8 md:mx-20">
      <Hero />
      <GetBooks />
  <Footer/>
    </div>

    </>
  )
}
