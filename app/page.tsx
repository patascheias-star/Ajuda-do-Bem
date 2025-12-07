import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VideoSection } from "@/components/video-section"
import { DonationOptions } from "@/components/donation-options"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <DonationOptions />
      </main>
      <Footer />
    </div>
  )
}
