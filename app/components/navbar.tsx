'use client'
import { useState } from 'react'
import { Typography } from '@mui/material'
import MetaphorMenu from './menu'

export default function Nav() {
  const [menuOpen, setMenu] = useState<boolean>(false)

  return (
    <>
      <MetaphorMenu isOpen={menuOpen} onClose={() => setMenu(false)} />
      <div className="persona-rail">
        <div>
          <Typography variant="overline" sx={{ letterSpacing: ".18em", color: "#e9b45d" }}>METAPHOR / PROFILE 01</Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 2 }}>John<br />Lazaro<span style={{ color: "#d94332" }}>.</span></Typography>
          <Typography sx={{ mt: 3, color: "#b9c4d2", lineHeight: 1.6 }}>A developer charting a path through systems, interfaces, and impossible little ideas.</Typography>
          <div className="mt-8 border-t border-[#38516b] pt-4 text-xs uppercase tracking-[.16em] text-[#e9b45d]">Current archetype: developer</div>
        </div>
        <nav aria-label="Primary navigation" className="flex flex-col gap-3">
          <button className="bg-amber-100 text-blue-950 p-3 font-bold hover:bg-red-500" onClick={() => setMenu(true)}>[MENU]</button>
        </nav>
      </div>
      <nav aria-label="Primary navigation" className="mobile-menu hidden gap-3 fixed right-10 z-10">
        <button className="bg-amber-100 text-blue-950 p-3 font-bold hover:bg-red-500" onClick={() => setMenu(true)}>[MENU]</button>
      </nav>
    </>
  )
}