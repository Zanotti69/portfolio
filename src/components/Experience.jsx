// Experience.jsx
import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const tabs = [
    { id: "experience", label: "Work" },
    { id: "school",     label: "School" },
];

const ExperienceCard = ({ item }) => (
    <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={item.date}
        iconStyle={{ background: item.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={item.icon}
                    alt={item.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >
        <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">{item.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {item.points.map((pt, i) => (
                <li
                    key={`${item.title}-pt-${i}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {pt}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Experience = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const data = activeTab === "experience" ? experiences : education;

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {activeTab === "experience" ? "Work Experience" : "Education"}
                </h2>
            </motion.div>

            {/* Onglets */}
            <div className="flex justify-center mt-8 space-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 font-medium border-b-2 ${
                            activeTab === tab.id
                                ? "text-white border-[#915EFF]"
                                : "text-secondary border-transparent hover:text-white/80"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="mt-20">
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={activeTab}                 // remount pour réanimer
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <VerticalTimeline>
                            {data.map((item, idx) => (
                                <ExperienceCard key={`${activeTab}-${idx}`} item={item} />
                            ))}
                        </VerticalTimeline>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
