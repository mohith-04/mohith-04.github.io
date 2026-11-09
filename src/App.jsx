import { Navbar, Hero } from './components/Hero'
import { NameMarquee, About, Work, Experience, Education, Stack } from './components/Sections'
import { Contact } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NameMarquee />
        <About />
        <Work />
        <Experience />
        <Education />
        <Stack />
      </main>
      <Contact />
    </>
  )
}
