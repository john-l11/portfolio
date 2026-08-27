'use client'
import { useRef, useState } from 'react'
import { Tabs, Tab, Box, useMediaQuery, useTheme } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSpyTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Tabs
      orientation={'horizontal'}
      value={activeTab}
      onChange={(e, newValue) => setActiveTab(newValue)}
      sx={{ borderRight: 1, borderColor: 'divider', position: 'fixed', zIndex: 3000 }}
      className='bg-[#8374748b] w-4/5 rounded-3xl mx-auto my-5 block'
      variant='scrollable'
    >
      <Tab label="John Lazaro" href='/' />
      <Tab label="Experience" href='#experience' />
      <Tab label="Tools and Technology" href='#tech' />
      <Tab label="Contact Me" href='#contact' />
      <Tab label="Projects" href='#projects' />
    </Tabs>
  )
}