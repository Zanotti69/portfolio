// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import linkedinLogo from "../assets/linkedinLogo.png";
import emailLogo    from "../assets/emailLogo.png";
import cvLogo       from "../assets/cvLogo.png";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Hissam Arbi",
                    from_email: form.email,
                    to_email: "hissam.arbi76@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");
                    setForm({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error(error);
                    setLoading(false);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    {/* Name */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Email */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Message */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What would you like to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Send */}
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>

                    {/* Social / Contact Links */}
                    <div className="mt-6 flex items-center gap-6">
                        {/* LinkedIn (icône seule, un peu plus grand) */}
                        <a
                            href="https://www.linkedin.com/in/hissam-arbi-a33649294/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition"
                        >
                            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
                        </a>

                        {/* Email (icône + texte) */}
                        <a
                            href="mailto:hissam.arbi76@gmail.com"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <img src={emailLogo} alt="Email" className="w-6 h-6" />
                            <span className="text-white">hissam.arbi76@gmail.com</span>
                        </a>

                        {/* CV (icône seule, plus grand) */}
                        <a
                            href="CV_CybersecurityBUT_Hissam_Arbi.pdf"
                            download="CV_CybersecurityBUT_Hissam_Arbi.pdf"
                            className="hover:opacity-80 transition"
                        >
                            <img src={cvLogo} alt="Download CV" className="w-8 h-8" />
                        </a>
                    </div>
                </form>
            </motion.div>

            {/* 3D Canvas */}
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
