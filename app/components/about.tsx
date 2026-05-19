import { ContactMail, Phone } from "@mui/icons-material"
import { Avatar, Typography, Link } from "@mui/material"
import Image from "next/image"

export default function AboutComponent() {
  return (
    <>
      <Avatar src="john.png" sx={{ width: { sm: 100, md: 200 }, height: { sm: 100, md: 200 }, float: 'left', margin: 4 }} />
      <Typography variant="h4">John Lazaro</Typography>
      <Typography variant="body1" component="p" textAlign="justify" className='p-2'>
        I started off as a student in electronics engineering with the interest of developing
        robotics. However, as time went on I found myself more interested in the software
        section of the program and eventually developed interest in software development. That was
        when I decided to do some research into a computer science related program in Saskatchewan
        Polytechnic and found Computer Systems Technology. I decided to register for the program and learned
        more than I had expected such as networking, database administration, cloud/on-premises infrastructures
        and cybersecurity. I had also learned about software development and the workflow of a project team when
        it comes to developing a full stack application.
      </Typography>
      <Typography variant="body1">
        <ContactMail />Email: <Link href="mailto:john.e.lazaro@gmail.com">john.e.lazaro@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        <Phone /> Phone Number: (306) 850-8737
      </Typography>
      <Link href={process.env.NEXT_PUBLIC_GITHUB as string} target="_blank">
        <Image height={30} width={30} alt='github logo' src='/github-mark-white.png' className='m-4' />
      </Link>
    </>
  )
}