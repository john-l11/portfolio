'use client'
import { useRef, useState } from 'react'
import { Tabs, Tab, Box, useMediaQuery, useTheme } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSpyTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef('')
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const tabOrientation = isDesktop ? 'vertical' : 'horizontal'

  useGSAP(() => {
    // Select sections
    const sections = gsap.utils.toArray('.section')

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section as gsap.DOMTarget,
        start: 'top 50%', // Active when top of section hits 50% of viewport
        end: 'bottom 50%',
        onEnter: () => setActiveTab(i),
        onEnterBack: () => setActiveTab(i),
      })
    })
  }, { scope: containerRef })

  return (
    <Box ref={containerRef} sx={{ display: 'flex' }}>
      <Tabs
        orientation={tabOrientation}
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        sx={{ borderRight: 1, borderColor: 'divider', position: 'fixed', zIndex: 3000 }}
        className='bg-[#8374748b] lg:h-screen w-3'
        variant='scrollable'
      >
        <Tab label="John Lazaro" href='#about' />
        <Tab label="Experience" href='#experience' />
        <Tab label="Tools and Technology" href='#tech' />
        <Tab label="Contact Me" href='#contact' />
        <Tab label="Projects" href='#projects' />
      </Tabs>

      <Box sx={{ ml: '150px' }} className="hidden md:block">
        <div id='about' className="section" style={{ height: '150vh' }}></div>
        <div id='experience' className="section" style={{ height: '150vh' }}></div>
        <div id='tech' className="section" style={{ height: '150vh' }}></div>
        <div id='contact' className="section" style={{ height: '150vh' }}></div>
        <div id='projects' className="section" style={{ height: '100vh' }}></div>
      </Box>
    </Box>
  )
}