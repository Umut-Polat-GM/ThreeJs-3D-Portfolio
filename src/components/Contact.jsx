/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const schema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Email is invalid.").required("Email is required."),
    message: yup.string().min(15, "Message is too short.").required("Message is required."),
});

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    to_name: "Umut",
                    from_email: data.email,
                    to_email: "umut.polat.272@gmail.com",
                    message: data.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you. I will get back to you as soon as possible.");

                    reset();
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    toast.error("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            {...register("name")}
                            placeholder="What's your good name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                        )}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            {...register("email")}
                            placeholder="What's your web address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            {...register("message")}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.message.message}
                            </span>
                        )}
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
