import { motion, type Variants } from 'framer-motion';
const bloodVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0, },
  hover: {
    scaleX: [0, 1.1, 1],
    opacity: [0, 1, 0.95],
    x: [0, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      x: {
        repeat: Infinity,
        duration: 0.15,
      }, y: {
        repeat: Infinity,
        duration: 0.12,
      },
    },
  },
};
export default function BloodSplatter({ isActive, }: { isActive: boolean; }) {
  return (
    <motion.svg className="absolute inset-0 w-full h-[180%] -top-[40%] pointer-events-none z-0" viewBox="0 0 300 100" preserveAspectRatio="none" variants={bloodVariants} initial="hidden" animate={isActive ? 'hover' : 'hidden'} style={{ transformOrigin: 'center', }} >
      <defs>
        <filter id="inkTexture" x="-30%" y="-30%" width="160%" height="160%" >
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="3" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </defs>
      {/* Main splash */}
      <g fill="#c90024" filter="url(#inkTexture)" transform="scale(0.25, 0.125)" >
        {/* Main body */}
        <path d=" M 105 410 C 155 370, 170 300, 255 325 C 315 270, 370 310, 415 265 C 470 300, 510 250, 565 300 C 625 255, 700 305, 735 350 C 805 345, 825 390, 790 425 C 835 475, 770 520, 710 500 C 680 565, 610 535, 565 570 C 505 610, 450 555, 405 585 C 350 550, 300 590, 255 535 C 190 550, 165 490, 105 410 Z " />

        {/* Left brush */}
        <path d=" M 95 375 C 185 345, 260 360, 355 390 L 335 425 C 235 410, 165 420, 70 450 Z " />

        {/* Upper brush */}
        <path d=" M 215 310 C 350 265, 470 300, 610 270 L 650 305 C 490 335, 355 330, 225 350 Z " />

        {/* Right brush */}
        <path d=" M 550 375 C 665 345, 755 360, 850 315 L 825 365 C 735 405, 665 410, 555 415 Z " />

        {/* Bottom brush */}
        <path d=" M 170 490 C 300 530, 450 520, 610 550 L 570 585 C 430 555, 285 570, 155 525 Z " />

        {/* Drips */}
        <path d=" M 245 520 C 250 570, 240 625, 252 680 C 260 700, 272 695, 275 670 C 280 610, 270 565, 275 520 Z " />
        <path d=" M 470 535 C 475 590, 465 640, 475 705 C 482 725, 493 720, 496 695 C 500 635, 490 580, 500 535 Z " />
        <path d=" M 650 490 C 655 530, 650 575, 660 610 C 668 625, 678 618, 680 595 C 685 550, 675 515, 680 485 Z " />
      </g>

      {/* Large splatter drops */}
      <g fill="#c90024" transform="scale(0.25, 0.125)">
        <circle cx="125" cy="300" r="15" />
        <circle cx="165" cy="250" r="7" />
        <circle cx="205" cy="205" r="11" />
        <circle cx="275" cy="180" r="5" />
        <circle cx="335" cy="245" r="9" />
        <circle cx="410" cy="180" r="7" />
        <circle cx="475" cy="215" r="13" />
        <circle cx="545" cy="170" r="6" />
        <circle cx="620" cy="230" r="10" />
        <circle cx="710" cy="260" r="6" />
        <circle cx="790" cy="290" r="13" />
        <circle cx="865" cy="340" r="7" />
        <circle cx="90" cy="470" r="8" />
        <circle cx="125" cy="535" r="13" />
        <circle cx="190" cy="610" r="6" />
        <circle cx="270" cy="650" r="12" />
        <circle cx="355" cy="625" r="6" />
        <circle cx="455" cy="670" r="10" />
        <circle cx="555" cy="625" r="7" />
        <circle cx="650" cy="600" r="14" />
        <circle cx="740" cy="545" r="7" />
        <circle cx="815" cy="500" r="12" />

        {/* Fine splatter */}
        <circle cx="145" cy="335" r="3" />
        <circle cx="180" cy="285" r="4" />
        <circle cx="230" cy="230" r="3" />
        <circle cx="300" cy="195" r="2" />
        <circle cx="370" cy="215" r="3" />
        <circle cx="430" cy="150" r="3" />
        <circle cx="510" cy="190" r="2" />
        <circle cx="580" cy="140" r="4" />
        <circle cx="665" cy="205" r="3" />
        <circle cx="745" cy="235" r="2" />
        <circle cx="830" cy="270" r="4" />
        <circle cx="100" cy="510" r="3" />
        <circle cx="155" cy="575" r="2" />
        <circle cx="225" cy="635" r="4" />
        <circle cx="320" cy="680" r="3" />
        <circle cx="400" cy="645" r="2" />
        <circle cx="500" cy="700" r="4" />
        <circle cx="590" cy="650" r="2" />
        <circle cx="690" cy="620" r="3" />
        <circle cx="770" cy="575" r="4" />
      </g>
    </motion.svg>

  );
}