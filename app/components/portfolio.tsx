"use client"

import { Typography } from "@mui/material"
import AboutComponent from "./about"
import Artifact from "./artifact"
import ContactForm from "./contactform"
import ExperienceComponent from "./experience"
import LanguageComponent from "./language"

export default function PortfolioContentComponent() {
  const frontend = ['Vue.js', 'React', 'Next.js', 'Ionic']
  const backend = ['Laravel', 'Fastify', 'FastAPI', 'Prisma', 'RabbitMQ', 'TypeORM', 'PostgreSQL', 'MongoDB', 'SQLite3']
  const languages = ['C', 'C#', 'Python', 'Java', 'Bash', 'VBA', 'Swift', 'HTML', 'Javascript', 'Typescript']
  const technologies = ['Linux', 'Cypress', 'Jest', 'Docker', 'Git', 'Apache']

  return (
    <div className="persona-shell">
      <div className="persona-grid">
        <aside className="persona-rail">
          <div>
            <Typography variant="overline" sx={{ letterSpacing: ".18em", color: "#e9b45d" }}>METAPHOR / PROFILE 01</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mt: 2 }}>John<br />Lazaro<span style={{ color: "#d94332" }}>.</span></Typography>
            <Typography sx={{ mt: 3, color: "#b9c4d2", lineHeight: 1.6 }}>A developer charting a path through systems, interfaces, and impossible little ideas.</Typography>
            <div className="mt-8 border-t border-[#38516b] pt-4 text-xs uppercase tracking-[.16em] text-[#e9b45d]">Current class: developer</div>
          </div>
          <nav aria-label="Primary navigation" className="flex flex-col gap-3">
            <a href="#about">01 / Awakening</a>
            <a href="#experience">02 / Journey</a>
            <a href="#projects">03 / Quests</a>
            <a href="#contact">04 / Summon</a>
          </nav>
        </aside>
        <main className="persona-main">
          <section id="about" className="persona-section">
            <div className="persona-kicker">The wild card / full-stack developer</div>
            <h1 className="persona-display">Turn curiosity into reality.</h1>
            <p className="persona-lede">Every project begins as a question. I move between interface, infrastructure, and the strange middle ground where a useful idea becomes a real thing.</p>
            <div className="mt-10 persona-card"><AboutComponent /></div>
          </section>
          <section id="experience" className="persona-section">
            <div className="persona-rule"><span className="persona-kicker">02 / Journey</span></div>
            <ExperienceComponent />
          </section>
          <section id="tech" className="persona-section">
            <div className="persona-rule"><span className="persona-kicker">Arcana / Capabilities</span></div>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>The tools behind the mask.</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LanguageComponent languages={languages} header="Languages" />
              <LanguageComponent languages={frontend} header="Front end" />
              <LanguageComponent languages={backend} header="Back end" />
              <LanguageComponent languages={technologies} header="Tools" />
            </div>
          </section>
          <section id="projects" className="persona-section">
            <div className="persona-rule"><span className="persona-kicker">03 / Quests</span></div>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Records from the journey.</Typography>
            <Artifact stack='Vue Express TypeORM SQLite3' title='Scheduling Application' image='/scheduler.png'>
              A barebones employee scheduling app that has many tables in a
              database that can be used to store employees, shifts, and departments. There
              will be authentication for employees who have credentials stored in the database.
              As of right now the two main login roles are managers and employees. The managers
              have are able to assign/edit shifts, edit and create employees.
            </Artifact>
            <Artifact stack='Next.js Node RabbitMQ Prisma Postgres' title='Flyer Scanner' image='/prj5.png'>
              This application will take a flyer that a user inputs and then use gemini
              to scan the raw text in the flyer. Afterwards, the raw text will be sent to
              OpenAI where it will be mapped to an object that will check if the product is
              in the clients Airtable and if it is it will place it into our database. From
              there the client can update his inventory with the products that were placed
              into our database.
            </Artifact>
          </section>
          <section id="contact" className="persona-section border-b-0">
            <div className="persona-rule"><span className="persona-kicker">04 / Summon</span></div>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Send a calling card.</Typography>
            <p className="persona-lede mb-6">Have a project, a role, or a thoughtful problem to untangle? The line is open.</p>
            <div className="persona-card max-w-2xl"><ContactForm /></div>
          </section>
        </main>
      </div>
    </div>
  )
}