import Image from "next/image";
import {useEffect} from "react";
import {motion, useAnimationControls, useScroll} from "framer-motion";
import styles from '../styles/Home.module.css';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 50 },
};

export default function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.3) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className={styles.scrollbtn}
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <Image
                src={"/topArrow.png"}
                width={50}
                height={50}
            />
        </motion.button>
    );
}