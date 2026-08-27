import { ContactMail, Phone } from "@mui/icons-material"
import { Avatar, Typography, Link, Stack } from "@mui/material"
import Image from "next/image"

export default function AboutComponent() {
  return (
    <Stack spacing={2}>
      <Avatar src="/john.png" sx={{ width: 88, height: 88, bgcolor: '#e55b3f' }} />
      <Typography variant="h5" sx={{ fontWeight: 800 }}>A little context.</Typography>
      <Typography variant="body1" component="p" sx={{ color: 'var(--muted)', lineHeight: 1.75 }}>
        I started off as a student in electronics engineering with the interest of developing
        robotics. However, as time went on I found myself more interested in the software
        section of the program and eventually developed interest in software development. That was
        when I decided to do some research into a computer science related program in Saskatchewan
        Polytechnic and found Computer Systems Technology. I decided to register for the program and learned
        more than I had expected such as networking, database administration, cloud/on-premises infrastructures
        and cybersecurity. I had also learned about software development and the workflow of a project team when
        it comes to developing a full stack application.
      </Typography>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ContactMail />Email: <Link href="mailto:john.e.lazaro@gmail.com">john.e.lazaro@gmail.com</Link>
      </Typography>
      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Phone /> Phone Number: (306) 850-8737
      </Typography>
      <Link href={process.env.NEXT_PUBLIC_GITHUB || 'https://github.com'} target="_blank" rel="noreferrer" underline="hover">
        <Image height={24} width={24} alt='GitHub' src='/github.png' /> View GitHub profile
      </Link>
    </Stack>
  )
}