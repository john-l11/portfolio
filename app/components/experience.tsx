import { Typography } from "@mui/material";

export default function ExperienceComponent() {
  const experience = [
    {
      position: 'Cashier/Customer Service',
      company: 'Canadian Tire',
      years: '2022 - 2023',
      description: []
    },
    {
      position: 'Team Member',
      company: 'The Fun Factory',
      years: '2023 - 2025',
      description: []
    },
    {
      position: 'Crew Member',
      company: 'McDonalds',
      years: '2026 - present',
      description: []
    },
    {
      position: 'Back house/Front Desk',
      company: 'Motel6',
      years: '2026 - Present',
      description: []
    }
  ]

  return <div className="grid gap-3">
    {experience.map((exp, index) => (
      <article className="persona-card grid grid-cols-[48px_1fr_auto] gap-4 items-start" key={exp.company}>
        <Typography sx={{ color: 'var(--accent)', fontWeight: 800 }}>0{index + 1}</Typography>
        <div>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{exp.position}</Typography>
          <Typography sx={{ color: 'var(--muted)' }}>{exp.company}</Typography>
        </div>
        <Typography variant="body2" sx={{ color: 'var(--muted)', textAlign: 'right' }}>{exp.years}</Typography>
      </article>
    ))}
  </div>
}