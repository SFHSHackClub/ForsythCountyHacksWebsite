import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ScrollToTopButton from "../components/topButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="something" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>
      <ScrollToTopButton/>
      <div className={styles.header}>
        <div className={styles.description}>
          <Image
                src="/hacks.png"
                className={styles.hackLogo}
                width={200}
                height={200}
                priority
          />
          <p>
            forsyth county
            <br></br>
            hacks
          </p>
        </div>
      </div>
      <main className={styles.main}>
        <Spacer/>
        <div className={[styles.what, styles.section].join(" ")}>
          <Image
            src="/hacker.jpg"
            width={500}
            height={500}
          />
          <span>
            <h1>What is a it?</h1>
            <p> Forsyth Hacks is a full-day high school hackathon for building projects, making new friends, and having fun. </p>
            <p>This event is an opportunity for students to explore the realm of computer science and bring their creative ideas to life through a collaborative and competitive experience. Students can form groups and work together on a coding project based on the theme and then present them at the end!</p>
            <p>It doesn't matter if you've never written a piece of code in your life, or have already created an AI robot that writes essays for you. Everyone of every skill level is invited to join us in workshops, engage in countless activities, and meet other like-minded students!</p>
            <p>Create projects, memories and guide the story of your STEM journey at Forsyth Hacks!</p>
          </span>
        </div>
        <Spacer/>
        <div className={styles.section}>
          <div className={styles.faq}>
            <h1>FAQ</h1>
          </div>
          <div className={styles.faq}>
            <ul>
              <li>
                Is there a registration fee?
                <br/>
                nope! forsyth county hacks is free to participate in!
              </li>
              <li>
                Who's eligible to participate?
                <br/>
              any student who identifies as a high schooler can attend and participate. coding experience does not matter!
              </li>
              <li>
                I'm only a beginner at coding?
                <br/>
                even if you're just a coding beginner, there will be plenty of workshops and opportunities for you to learn throughout the day
              </li>
              <li>
                What is a hackathon?
                <br/>
                a hackathon is an event for like-minded programmers to come together, collaborate, win prizes, compete, learn, and more!
              </li>
              <li>
                How long is Forsyth Hacks?
                <br/>
                the event will be a full day long (from 10:15 AM to 5:30 PM)
              </li>
              <li>
                Will there be prizes?
                <br/>
                yes! there will be many fun prizes for everyone. no one will go home empty handed.
              </li>
              <li>
                How big should teams be?
                <br/>
                teams can be anywhere around 1-4 people. don't worry if you don't have a team by the time you register! you can meet new people and create a team the day of the hackathon!
              </li>
              <li>
                What should I bring?
                <br/>
                we recommend you bring the following:
                <p>      - snack</p>
                <p>      - laptop</p>
                <p>      - chargers</p>
              </li>
            </ul>
            <hr/>
            <p>food & drink will be provided, but we cannot guarantee access to a computer for everyone.</p>
          </div>
        </div>
      </main>
    </>
  )
}

function Spacer() {
  return (
    <div className={styles.spacer}></div>
  )
}


