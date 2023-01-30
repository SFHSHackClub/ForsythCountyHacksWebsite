import styles from "../styles/Home.module.css";
import {motion} from "framer-motion";
import {useRef} from "react";



export default function QAlist() {
  const scrollRef = useRef(null);
  const variants = {
    visible: {
      opacity: 1,
      marginLeft: 0,
    },
    hidden: {
      opacity: 0,
      marginLeft: -50,
    }
  }

  return (
    <div className={styles.section} ref={scrollRef}>
        <motion.div
          className={styles.faq}
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.9, margin: "20px"}}
          variants={variants}>
          <motion.h1>FAQ</motion.h1>
        </motion.div>
        <div className={styles.faq}>
          <motion.ul>
          {appearli(
            <p><b>Is there a registration fee?</b>
            <br/><br/>
            nope! forsyth county hacks is free to participate in!
            </p>)}
          {appearli(
            <p><b>Who's eligible to participate?</b>
            <br/><br/>
            any student who identifies as a high schooler can attend and participate. coding experience does not matter!
            </p>)}
          {appearli(
            <p><b>I'm only a beginner at coding?</b>
            <br/><br/>
            even if you're just a coding beginner, there will be plenty of workshops and opportunities for you to learn throughout the day
            </p>)}
          {appearli(
            <p><b>What is a hackathon?</b>
            <br/><br/>
            a hackathon is an event for like-minded programmers to come together, collaborate, win prizes, compete, learn, and more!
            </p>)}
          {appearli(
            <p><b>How long is Forsyth Hacks?</b>
            <br/><br/>
            the event will be a full day long (from 10:15 AM to 5:30 PM)
            </p>)}
          {appearli(
            <p><b>Will there be prizes?</b>
            <br/><br/>
            yes! there will be many fun prizes for everyone. no one will go home empty handed.
            </p>)}
          {appearli(
            <p><b>How big should teams be?</b>
              <br/><br/>
              teams can be anywhere around 1-4 people. don't worry if you don't have a team by the time you register! you can meet new people and create a team the day of the hackathon!
              </p>)}
          {appearli(
              <p>
                <b>What should I bring?</b>
                <br/><br/>
                we recommend you bring the following:
                <br/>    - snack
                <br/>    - laptop
                <br/>    - chargers
                <br/>food & drink will be provided, but we cannot guarantee access to a computer for everyone.
              </p>)}
          </motion.ul>
          <br/>
          <p></p>
        </div>
    </div>
  );
}

function appearli(content) {
  const variants = {
    visible: {
      marginLeft: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginLeft: -60,
      opacity: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    }
  }
  return (
    <motion.li
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.9}}
      variants={variants}>
      {content}
    </motion.li>
  )
}