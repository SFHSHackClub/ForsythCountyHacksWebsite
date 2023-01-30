import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Person.module.css";

const Variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -50,
  }
}
export  default function PersonThing({ image, text, descriptor, pronoun }) {
  return(
    <motion.div
      className={styles.thing}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.5, margin: "20px"}}
      variants={Variants}>
      <Image
        src={image}
        height={200}
        width={200}
      />
      <p>{text}</p>
      <h2>{descriptor}</h2>
      <h2>{pronoun}</h2>
    </motion.div>
  )
}