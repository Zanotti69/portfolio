import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { link } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects, certifications } from "../constants";
import { textVariant } from "../utils/motion";

const tabs = [
    { id: "projects",       label: "Projects" },
    { id: "certifications", label: "Certifications" },
];

const Card = ({ index, name, description, tags, image, source_code_link }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, type: "spring", stiffness: 50, damping: 10 }}
        className="w-full sm:w-[360px]"
    >
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary p-5 rounded-2xl"
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
                {source_code_link && (
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={link}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
);

const Works = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const items = activeTab === "projects" ? projects : certifications;

    return (
        <>
            {/* Header animé */}
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>
                    {activeTab === "projects" ? "Projects." : "Certifications."}
                </h2>
            </motion.div>

            {/* Onglets */}
            <div className="flex justify-center gap-6 mt-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-[16px] font-medium pb-2 ${
                            activeTab === tab.id
                                ? "text-white border-b-2 border-[#915EFF]"
                                : "text-secondary border-b-2 border-transparent hover:text-white/80"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Description sous les onglets */}
            <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto">
                {activeTab === "projects"
                    ? "Following projects showcase my skills through real-world examples."
                    : "Here are the certifications I have achieved or am currently preparing."}
            </p>

            {/* Grille de cartes */}
            <div
                key={activeTab}  // relance le montage complet à chaque switch
                className="mt-20 flex flex-wrap gap-7 justify-center"
            >
                {items.map((item, idx) => (
                    <Card key={`${activeTab}-${idx}`} index={idx} {...item} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
