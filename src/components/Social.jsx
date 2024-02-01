/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { socials } from "../constants";
import { SectionWrapper } from "../hoc";

const SocialCard = ({ index, link, icon, color }) => (
    <Tilt>
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
                style={{ backgroundColor: `${color}`, borderRadius: "50%", cursor: "pointer" }}
                onClick={() => window.open(link, "_blank")}
            />
        </motion.div>
    </Tilt>
);

const Social = () => {
    return (
        <div className="flex justify-center items-center gap-10">
            {socials.map((service, index) => (
                <SocialCard key={service.name} index={index} {...service} />
            ))}
        </div>
    );
};

export default SectionWrapper(Social, "");
