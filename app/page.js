import Image from 'next/image'
import { Approach, Footer, Hero, Innovators, Invest, Nav, Testimonials} from "./sections"

export default function Home() {
  return (
    <>

      <Hero />
      <Innovators />
      <Approach />
      <Invest />
      <Testimonials />
      <Footer />
    </>
  )
}
