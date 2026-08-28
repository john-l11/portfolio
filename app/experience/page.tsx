import { Typography } from "@mui/material";
import ExperienceComponent from "../components/experience";
import LanguageComponent from "../components/language";

export default function ExperiencePage() {
  const frontend = ['Vue.js', 'React', 'Next.js', 'Ionic']
  const backend = ['Laravel', 'Fastify', 'FastAPI', 'Prisma', 'RabbitMQ', 'TypeORM', 'PostgreSQL', 'MongoDB', 'SQLite3']
  const languages = ['C', 'C#', 'Python', 'Java', 'Bash', 'VBA', 'Swift', 'HTML', 'Javascript', 'Typescript']
  const technologies = ['Linux', 'Cypress', 'Jest', 'Docker', 'Git', 'Apache']

  return (
    <>
      <section id="experience" className="persona-section">
        <div className="persona-rule"><span className="persona-kicker">02 / Journey</span></div>
        <Typography className="text-white" variant="h4" sx={{ fontWeight: 800, mb: 4 }}>Pre awakening</Typography>
        <ExperienceComponent />
      </section>
      <section id="tech" className="persona-section">
        <div className="persona-rule"><span className="persona-kicker">Arcana / Capabilities</span></div>
        <Typography className="text-white" variant="h4" sx={{ fontWeight: 800, mb: 4 }}>The tools behind the mask.</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LanguageComponent languages={languages} header="Languages" />
          <LanguageComponent languages={frontend} header="Front end" />
          <LanguageComponent languages={backend} header="Back end" />
          <LanguageComponent languages={technologies} header="Tools" />
        </div>
      </section>
    </>
  )
}