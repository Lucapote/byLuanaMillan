import { HeroSection } from "./components/HeroSection/HeroSection"
import { AboutSection } from "./components/AboutSection/AboutSection"
import { ServicesSection } from "./components/ServicesSection/ServicesSection"
import { ToolsSection } from "./components/ToolsSection/ToolsSection"
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection"
import { ExperienceSection } from "./components/ExperienceSection/ExperienceSection"
import { ContactoSection } from "./components/ContactoSection/ContactoSection"
import "./index.css"
import { FooterSection } from "./components/FooterSection/FooterSection"
import { NavBarSection } from "./components/NavBarSection/NavBarSection"

function App() {

  return (
    <>
    <NavBarSection/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <ToolsSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <ContactoSection/>
    <FooterSection/>
    </>
  )
}

export default App