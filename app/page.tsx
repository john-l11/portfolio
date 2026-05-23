'use client'

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useState, useEffect } from "react"
import IntroAnimation from "./components/Intro"
import PortfolioContentComponent from "./components/portfolio"
import NavBarComponent from "./components/navbar"
import MobilePortfolioContentComponent from "./components/mobileportfolio"

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

/**
 * This is the about page where it displays all of my information
 * @returns The about page
 */
export default function AboutMePage() {
  const [showIntro, setShowIntro] = useState(true)
  const width = useWindowSize()

  return (
    <>
      {showIntro ? <IntroAnimation onComplete={() => {
        setShowIntro(false)
        ScrollTrigger.refresh()
      }} /> : (
        <>
          <NavBarComponent />
          {width > 768 ? <PortfolioContentComponent /> : <MobilePortfolioContentComponent />}
        </>
      )}
    </>
  )
}