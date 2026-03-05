import Header from "../components/landing/Header"
import HeroSection from "../components/landing/HeroSection"
import UniverseSection from "../components/landing/UniverseSection"
import ProblemSection from "../components/landing/ProblemSection"
import SolutionSection from "../components/landing/SolutionSection"
import HowItWorks from "../components/landing/HowItWorks"
import FutureSkills from "../components/landing/FutureSkills"
import FamilySchoolSection from "../components/landing/FamilySchoolSection"
import CTASection from "../components/landing/CTASection"
import Footer from "../components/landing/Footer"
import StarField from "../components/landing/StarField"

export default function Home() {
  return (
    <>
      <StarField />
      <Header />
      <HeroSection />
      <UniverseSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FutureSkills />
      <FamilySchoolSection />
      <CTASection />
      <Footer />
    </>
  )
}