import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ScrollToTopButton from "../components/topButton";
import QAlist from "../components/qalist";
import {motion} from "framer-motion";
import Image from "next/image";
import PersonThing from "../components/PersonThing";

const inter = Inter({ subsets: ['latin'] })
const expandVars = {
  visible: {
    opacity: 1,
    width: "auto",
  },
  hidden: {
    opacity: 0,
    width: "200px",
  }
}

const textExpandVars = {
  visible: {
    opacity: 1,
    marginLeft: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    }
  },
  hidden: {
    opacity: 0,
    marginLeft: 50,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    }
  }
}

const headerVars = {
  visible: {
    opacity: 1,
    marginTop: 0,
  },
  hidden: {
    opacity: 0,
    marginTop: -50,
  }
}

const slideTransitionVars = [
  {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 30,
    }
  },
  {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -30
    }
  },
  {
    visible: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: 20
    }
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Forsyth County Hacks</title>
        <meta name="description" content="something" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/listArrow.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.header}>
        <div className={styles.description}>
          <motion.img
                src="/hacks.png"
                className={styles.hackLogo}
                width={200}
                height={200}
                priority
                layout
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.9, margin: "20px"}}
                variants={headerVars}
          />
          <motion.p
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.9, margin: "20px"}}
            variants={headerVars}>
            forsyth county hacks
          </motion.p>
        </div>
        <div className={styles.when}>
          <h1>April Something, 2023<hr/>Some Library somewhere... </h1>
        </div>
      </div>
      <main className={styles.main}>
        <div className={[styles.what, styles.section].join(" ")}>
          <motion.img
            src="/hacker.jpg"
            height={500}
            width={700}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5, margin: "20px"}}
            variants={expandVars}
          />
          <motion.span
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.3, margin: "20px"}}
            variants={textExpandVars}>
            <motion.h1 variants={textExpandVars}>What is a Hackathon?</motion.h1>
            <motion.p variants={textExpandVars}> Forsyth Hacks is a full-day high school hackathon for building projects, making new friends, and having fun. </motion.p>
            <motion.p variants={textExpandVars}>This event is an opportunity for students to explore the realm of computer science and bring their creative ideas to life through a collaborative and competitive experience. Students can form groups and work together on a coding project based on the theme and then present them at the end!</motion.p>
            <motion.p variants={textExpandVars}>It doesn't matter if you've never written a piece of code in your life or have already created an AI robot that writes essays for you. Everyone of every skill level is invited to join us in workshops, engage in countless activities, and meet other like-minded students!</motion.p>
            <motion.p variants={textExpandVars}>Create projects, memories, and guide the story of your STEM journey at Forsyth Hacks!</motion.p>
          </motion.span>
        </div>
        <QAlist/>
        <Spacer/>
        <div className={styles.sponsor}>
          <motion.div className={styles.sponsortit}>
            <motion.h1
              layout
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.9, margin: "20px"}}
              variants={slideTransitionVars[2]}>Our Sponsors:</motion.h1>
          </motion.div>
          <motion.div
            className={styles.s1}
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.9, margin: "20px"}}
            variants={slideTransitionVars[0]}>
            <Image
              src="/hackclub-flag.png"
              width={525}
              height={184}
            />
          </motion.div>
          <motion.div className={styles.s2}
               layout
               initial="hidden"
               whileInView="visible"
               viewport={{once: false, amount: 0.9, margin: "20px"}}
               variants={slideTransitionVars[1]}>
            <Image
              src="/mlh-logo-black.png"
              width={384}
              height={162}
            />
          </motion.div>
          {/*motion.div className={styles.s3}
              layout
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.9, margin: "20px"}}
              variants={slideTransitionVars[0]}>
            <Image
              src="/vercel.svg"
              width={300}
              height={200}
            />
          </motion.div>
          <motion.div className={styles.s4}
              layout
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.9, margin: "20px"}}
              variants={slideTransitionVars[1]}>
            <Image
              src="/vercel.svg"
              width={300}
              height={200}
            />
          </motion.div>*/}
          <motion.div className={styles.sponsortxt}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: false, amount: 0.9, margin: "0px"}}>
            <h2>We are very grateful to all our sponsors who help makes events like these possible!</h2>
          </motion.div>
        </div>
        <motion.h1
          className={styles.donate}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.9, margin: "20px"}}
          variants={slideTransitionVars[1]}
        >
          If you would like to donate, you can do so <a href="https://bank.hackclub.com/donations/start/forsyth-county-hacks" target="_blank">
             <u>here</u>.
          </a>
        </motion.h1>
        <Spacer/>
        <div className={styles.team}>
          <h1 style={{gridArea: 't'}}>Our Team:</h1>
          <PersonThing image={'/christianpic.png'} text={"Christian Dutton"} descriptor={'Co-Founder'} pronoun={'he/him'} style={{gridArea: '1'}}/>
          <PersonThing image={'/sahitipic.jpg'} text={"Sahiti Dasari"} descriptor={'Co-Founder'} pronoun={'she/her'} style={{gridArea: '2'}}/>
        </div>
      </main>
      <div className={styles.contact}>
        <h2>Contact Us</h2>
        <hr/>
        <p>
          Email: something@email.ratio<br/>
          Phone: 420-420-6969
        </p>
        <br/>
        <br/>
        <br/>
        <p>
          Forsyth County Hacks  is fiscally sponsored by Hack Club Bank, a project by The Hack
          Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
        </p>
      </div>
      <ScrollToTopButton/>
    </>
  )
}

function Spacer() {
  return (
    <div className={styles.spacer}></div>
  )
}
