'use client'

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState } from "react"
import IntroAnimation from "./components/Intro"
import PortfolioContentComponent from "./components/portfolio"
import NavBarComponent from "./components/navbar"

/**
 * This is the about page where it displays all of my information
 * @returns The about page
 */
export default function AboutMePage() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro ? <IntroAnimation onComplete={() => {
        setShowIntro(false)
        ScrollTrigger.refresh()
      }} /> : (
        <>
          <NavBarComponent />
          <PortfolioContentComponent />
        </>
      )}
    </>
  )
}