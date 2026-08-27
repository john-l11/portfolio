import { Typography, Container, List, ListItemText } from "@mui/material";

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

  return (
    <>
      <Typography variant="h6">Experience</Typography>
      <Container className='flex flex-row'>
        {experience.map((exp) => (
          <Container key={exp.company} sx={{ padding: 2 }}>
            <Typography variant="caption">{exp.position}</Typography>
            <Typography variant="subtitle1">{exp.company}</Typography>
            <Typography variant="subtitle1">{exp.years}</Typography>
            <List>
              {exp.description.map((desc) =>
                <ListItemText key={desc}>&bull; {desc}</ListItemText>
              )}
            </List>
          </Container>

        ))}
      </Container>
    </>

  )
}