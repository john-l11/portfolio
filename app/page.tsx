'use client'

import AboutComponent from "./components/about"
import ContactForm from "./components/contactform"

/**
 * This is the about page where it displays all of my information
 * @returns The about page
 */
export default function AboutMePage() {
  return (
    <>
      <section id="about" className="persona-section">
        <div className="persona-kicker">The wild card / full-stack developer</div>
        <h1 className="persona-display text-amber-100">Turn curiosity into reality.</h1>
        <p className="persona-lede">Every project begins as a question. I move between interface, infrastructure, and the strange middle ground where a useful idea becomes a real thing.</p>
        <div className="mt-10 persona-card"><AboutComponent /></div>
      </section>
      <section id="contact" className="persona-section border-b-0">
        <div className="persona-rule"><span className="persona-kicker">Send a calling card.</span></div>
        <p className="persona-lede mb-6">Have a project, a role, or a thoughtful problem to untangle? The line is open.</p>
        <div className="persona-card max-w-2xl"><ContactForm /></div>
      </section>
    </>

  )
}