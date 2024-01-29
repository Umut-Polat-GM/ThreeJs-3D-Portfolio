/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`flex flex-col-reverse sm:flex-row justify-between items-center max-w-7xl mx-auto ${styles.paddingX} h-full`}
            >
                <div className="flex flex-row justify-start items-start gap-5">
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                        <div className="w-1 sm:h-96 h-48 violet-gradient" />
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I am <span className="text-[#915EFF]">Umut</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I'm a software developer with experience in TypeScript and{" "}
                            <br className="sm:block hidden" />
                            JavaScript, and expertise in frameworks like React, Node.js,{" "}
                            <br className="sm:block hidden" />
                            and Three.js.
                        </p>
                    </div>
                </div>
                <ComputersCanvas />
            </div>

            <div className="absolute bottom-6 w-full hidden sm:flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
