import { Typography, Container, useTheme, Paper, styled } from "@mui/material"
import AboutComponent from "./about"
import Artifact from "./artifact"
import ContactForm from "./contactform"
import ExperienceComponent from "./experience"
import LanguageComponent from "./language"
import { useGSAP } from "@gsap/react"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioContentComponent() {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"

  const frontend = ['Vue.js', 'React', 'Next.js', 'Ionic']
  const backend = ['Laravel', 'Fastify', 'FastAPI', 'Prisma', 'RabbitMQ', 'TypeORM', 'PostgreSQL', 'MongoDB', 'SQLite3']
  const languages = ['C', 'C#', 'Python', 'Java', 'Bash', 'VBA', 'Swift', 'HTML', 'Javascript', 'Typescript']
  const technologies = ['Linux', 'Cypress', 'Jest', 'Docker', 'Git', 'Apache']

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
    p: 10,
    borderRadius: 20,
    boxShadow: isDarkMode ? "0px 4px 10px rgba(255,255,255,0.2)" : "0px 4px 10px rgba(0,0,0,0.2)",
    position: 'relative',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }))

  const about1 = "radial-gradient(circle at 10% 10%, #ff0, #f00)"
  const about2 = "radial-gradient(circle at 90% 90%, #f0f, #00f)"
  const exp1 = "radial-gradient(circle at 10% 10%, #ff0, #f00)"
  const exp2 = "radial-gradient(circle at 90% 90%, #ff5, #0f0)"
  const tech1 = "radial-gradient(circle at 10% 10%, #0ff, #0f0)"
  const tech2 = "radial-gradient(circle at 90% 90%, #3ff, #00f)"
  const contact1 = "radial-gradient(circle at 10% 10%, #f0f, #f00)"
  const contact2 = "radial-gradient(circle at 90% 90%, #f6f, #00f)"

  useGSAP(() => {
    gsap.to('.about', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: '+=100%',
        scrub: true
      },
      yPercent: -100,
    })

    gsap.to('.experience', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top top',
        end: '+=100%',
        scrub: true
      },
      xPercent: 80,
      rotate: 90
    })

    gsap.to('.tech', {
      scrollTrigger: {
        trigger: '#tech',
        start: 'top top',
        end: '+=100%',
        scrub: true
      },
      scale: 150,
      opacity: 0
    })

    gsap.to('.contact', {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      scale: 0
    })

    gsap.to('.projects', {
      scrollTrigger: {
        trigger: '#projects',
        start: 'top top',
        end: '+=100%',
        scrub: true
      },
      yPercent: -100
    })

    gsap.to('.scrollbar', {
      scrollTrigger: {
        trigger: '#about',
        endTrigger: '#projects',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      xPercent: 100
    })

    gsap.from(".fade-in", {
      duration: 1,
      autoAlpha: 0,
      ease: "power1.out"
    })

    gsap.timeline({ repeat: -1, yoyo: true })
      .set(".about-bg", { backgroundImage: about1 })
      .to(".about-bg", {
        backgroundImage: about2,
        duration: 4,
        ease: "power1.inOut"
      })

    gsap.timeline({ repeat: -1, yoyo: true })
      .set(".exp-bg", { backgroundImage: exp1 })
      .to(".exp-bg", {
        backgroundImage: exp2,
        duration: 4,
        ease: "power1.inOut"
      })

    gsap.timeline({ repeat: -1, yoyo: true })
      .set(".tech-bg", { backgroundImage: tech1 })
      .to(".tech-bg", {
        backgroundImage: tech2,
        duration: 4,
        ease: "power1.inOut"
      })

    gsap.timeline({ repeat: -1, yoyo: true })
      .set(".contact-bg", { backgroundImage: contact1 })
      .to(".contact-bg", {
        backgroundImage: contact2,
        duration: 4,
        ease: "power1.inOut"
      })
  })

  return (
    <div className='fade-in max-w-screen sm:p-20 font-(family-name:--font-geist-sans) overflow-x-clip'>
      <span className='fixed bg-gray-500 min-w-screen h-1 left-0 top-0 z-5000'></span>
      <span className='scrollbar fixed bg-purple-500 min-w-screen h-1 -left-full top-0 z-5000'></span>
      {/* <div className='about radial-bg fixed top-0 left-0 md:pl-70 h-screen min-w-screen bg-radial-[at_25%_25%] from-gray-500 via-gray-700 to-gray-950  bg-gray-700 md:p-10 z-500 sm:p-0 sm:pl-0'> */}
      <div className='about about-bg fixed top-0 left-0 h-screen min-w-screen md:pl-70 md:p-10 z-500 sm:p-0 sm:pl-0'>
        <Item>
          <AboutComponent />
        </Item>
        <ArrowDownwardIcon className='right-1/2 bottom-0 fixed animate-bounce' />
      </div>
      <div className='experience exp-bg fixed top-0 left-0 pl-70 h-screen min-w-screen bg-radial-[at_75%_75%] from-red-500 via-red-700 to-red-950 p-10 z-400'>
        <Item>
          <ExperienceComponent />
        </Item>
      </div>
      <div className='tech tech-bg fixed top-0 left-0 pl-70 h-screen min-w-screen bg-radial-[at_75%_25%] from-blue-500 via-blue-700 to-blue-950 p-5 z-300'>
        <Typography variant='h4' component="h4" margin={5}>
          Technology and Languages
        </Typography>
        <div className='flex flex-row h-full min-w-full items-stretch'>
          <LanguageComponent languages={languages} header='Languages' />
          <LanguageComponent languages={frontend} header='Front End' />
          <LanguageComponent languages={backend} header='Back End' />
          <LanguageComponent languages={technologies} header='Tools and Technologies' />
        </div>
      </div>
      {/* <Image src={'/foxy.png'} alt='lol' className='fixed top-1/2 left-1/2 foxy hidden z-300' width={200} height={200} /> */}
      <div className='contact contact-bg block my-auto h-screen min-w-screen fixed top-0 left-0 pl-70 bg-radial-[at_50%_50%] from-indigo-500 via-indigo-700 to-indigo-950  z-200'>
        <Typography variant="h4" margin={5}>Contact Me</Typography>
        <Container
          sx={{ backgroundColor: theme.palette.background.paper, width: 900 }}
          className='p-10 text-center rounded-xl'
        >
          <ContactForm />
        </Container>
      </div>
      <div className='projects fixed top-0 left-0 pl-55'>
        <Typography variant='h4' component='h4' margin={5}>Projects</Typography>
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
      </div>
    </div>
  )
}