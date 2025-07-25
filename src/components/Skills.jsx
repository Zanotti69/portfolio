// src/components/Skills.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ResponsiveRadar } from "@nivo/radar";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const rawData = [
    {
        "skill": "CE1.01",
        "title": "Respecting client requirements",
        "hissambefore": 55,
        "hissamAfter": 87,
        "fullMark": 100,
        "Project": [
            "Internal GDPR Audit – Data Governance",
            "Vulnerability Scan – Aerospace (NDA)",
            "Strategic Intelligence Report – Fintech",
            "Certifications"
        ],
        "details": [
            "Translated business needs into technical constraints during GDPR audit",
            "Followed client scope strictly under NDA for vulnerability scan (Aerospace)",
            "Delivered a strategic report adapted to Codir expectations after GISEC",
            "Validated knowledge of client-centric posture through CNIL and ISC²"
        ]
    },
    {
        "skill": "CE1.04",
        "title": "Ensuring code/documentation quality",
        "hissambefore": 60,
        "hissamAfter": 85,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Internal GDPR Audit – Data Governance",
            "Certifications"
        ],
        "details": [
            "Produced structured internal security documentation under NDA",
            "Built a GDPR analysis table with clear, documented gaps",
            "Rigorously documented all findings and methods across missions",
            "Trained in documentation accountability via CNIL/ANSSI modules"
        ]
    },
    {
        "skill": "AC11.03",
        "title": "Testing and evaluating results",
        "hissambefore": 58,
        "hissamAfter": 86,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Certifications"
        ],
        "details": [
            "Validated CVE manually after Nessus scans to remove false positives",
            "Used ZAP, BurpSuite to confirm or reject alert severity",
            "Evaluated coverage of scans and escalated real alerts",
            "Training included test evaluation methods (TryHackMe, ISC²)"
        ]
    },
    {
        "skill": "AC21.03",
        "title": "Applying good design and programming practices",
        "hissambefore": 60,
        "hissamAfter": 83,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Strategic Intelligence Report – Fintech"
        ],
        "details": [
            "Respected standards (PTES, MITRE ATT&CK) in scan design",
            "Structured reporting and remediation suggestions",
            "Ensured clarity and reusability of risk matrices",
            "Avoided duplication through good document logic"
        ]
    },
    {
        "skill": "CE2.01",
        "title": "Formalizing and modeling complex situations",
        "hissambefore": 57,
        "hissamAfter": 84,
        "fullMark": 100,
        "Project": [
            "Strategic Intelligence Report – Fintech",
            "Internal GDPR Audit – Data Governance",
            "Certifications"
        ],
        "details": [
            "Mapped Fintech sector cybersecurity threats in a structured way",
            "Used Power BI to model risk matrices and KPIs",
            "Built GDPR gap matrix (by domain and principle)",
            "Learned EBIOS RM for structured risk modeling"
        ]
    },
    {
        "skill": "CE2.03",
        "title": "Justifying decisions and validating results",
        "hissambefore": 62,
        "hissamAfter": 86,
        "fullMark": 100,
        "Project": [
            "Strategic Intelligence Report – Fintech",
            "Vulnerability Scan – Aerospace (NDA)"
        ],
        "details": [
            "Explained tool choices (Veracode, Fortinet) with business impact",
            "Justified CVSS ratings with real-world risk implications",
            "Used visual KPIs to support findings and recommendations",
            "Prepared client-facing reporting with validation from mentors"
        ]
    },
    {
        "skill": "AC22.03",
        "title": "Understanding data/code security",
        "hissambefore": 66,
        "hissamAfter": 90,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Internal GDPR Audit – Data Governance",
            "Certifications"
        ],
        "details": [
            "Scanned for XSS, injection, misconfigurations on public IPs",
            "Applied OWASP Top 10 knowledge (TryHackMe, practice)",
            "Understood data lifecycle during GDPR review",
            "Cross-analyzed vulnerabilities with CVSS logic"
        ]
    },
    {
        "skill": "AC31.02",
        "title": "Evolving an existing application or system",
        "hissambefore": 61,
        "hissamAfter": 82,
        "fullMark": 100,
        "Project": [
            "Internal GDPR Audit – Data Governance",
            "Strategic Intelligence Report – Fintech"
        ],
        "details": [
            "Proposed updates to internal GDPR policies and documentation",
            "Recommended strategic adaptations to cyberstack post-GISEC",
            "Followed governance maturity curve through benchmarks",
            "Applied feedback to refine previous audit drafts"
        ]
    },
    {
        "skill": "AC32.01",
        "title": "Anticipating performance and risk metrics",
        "hissambefore": 63,
        "hissamAfter": 88,
        "fullMark": 100,
        "Project": [
            "Strategic Intelligence Report – Fintech",
            "Certifications",
            "Vulnerability Scan – Aerospace (NDA)"
        ],
        "details": [
            "Anticipated SIEM/EDR deployment risks (from training)",
            "Scored vulnerabilities with CVSS v3 and plotted over hosts",
            "Proposed prioritization logic in dashboards",
            "Benchmarked expected outcomes using ISO 27002 references"
        ]
    },
    {
        "skill": "CE5.03",
        "title": "Incorporating cybersecurity considerations",
        "hissambefore": 67,
        "hissamAfter": 92,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Internal GDPR Audit – Data Governance",
            "Certifications"
        ],
        "details": [
            "Systematic security integration in all audits and scans",
            "Governance posture aligned with CNIL, ISO, SOC 2",
            "Understood cyber impacts on business during GISEC debriefs",
            "Implemented security-first mindset (DevSecOps logic)"
        ]
    },
    {
        "skill": "CE6.02",
        "title": "Supporting IT system evolutions",
        "hissambefore": 60,
        "hissamAfter": 89,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Internal GDPR Audit – Data Governance",
            "Strategic Intelligence Report – Fintech",
            "Certifications"
        ],
        "details": [
            "Worked under NDA, anonymized deliverables for compliance",
            "Suggested updates to data retention and confidentiality clauses",
            "Linked tools to business needs and strategic planning",
            "Used ANSSI/CNIL/ISC² to support long-term IT evolution mindset"
        ]
    },
    {
        "skill": "AC15.03",
        "title": "Producing technical deliverables",
        "hissambefore": 68,
        "hissamAfter": 91,
        "fullMark": 100,
        "Project": [
            "Strategic Intelligence Report – Fintech",
            "Vulnerability Scan – Aerospace (NDA)",
            "Internal GDPR Audit – Data Governance"
        ],
        "details": [
            "Built client-ready Power BI dashboard from scratch",
            "Contributed to NDA-secured scan report (with visuals)",
            "Drafted realistic and actionable GDPR compliance table",
            "Used clear language and visuals to support decisions"
        ]
    },
    {
        "skill": "AC11.04",
        "title": "Developing user interfaces",
        "hissambefore": 65,
        "hissamAfter": 85,
        "fullMark": 100,
        "Project": [
            "Strategic Intelligence Report – Fintech"
        ],
        "details": [
            "Created accessible Power BI dashboards for Codir",
            "Structured UI to highlight top risks and legal status",
            "Chose colors and layout to suit decision-makers",
            "Focused on usability for business audiences"
        ]
    },
    {
        "skill": "CE4.04",
        "title": "Monitoring IT activities",
        "hissambefore": 62,
        "hissamAfter": 87,
        "fullMark": 100,
        "Project": [
            "Vulnerability Scan – Aerospace (NDA)",
            "Strategic Intelligence Report – Fintech"
        ],
        "details": [
            "Tracked weekly vulnerability metrics, updated dashboards",
            "Built KPIs for business alignment post-GISEC",
            "Maintained traceability and documentation flows",
            "Visualized SI evolution with Power BI reporting"
        ]
    },

    {
        "skill": "AC11.02",
        "title": "Creating simple technical designs",
        "hissambefore": 61,
        "hissamAfter": 82,
        "fullMark": 100,
        "Project": [
            "Internal GDPR Audit – Data Governance",
            "Strategic Intelligence Report – Fintech"
        ],
        "details": [
            "Built audit checklists and simple mapping sheets",
            "Structured Fintech risk view using clean data design",
            "Refined layouts iteratively with mentor feedback",
            "Used clear logic chains in every deliverable"
        ]
    },
    {
        "skill": "AC31.03",
        "title": "integrating solutions in production environments",
        "hissambefore": 50,
        "hissamAfter": 78,
        "fullMark": 100,
        "Project": ["Vulnerability Scan – Aerospace (NDA)"],
        "details": [
            "Integrated Nessus into a secure and monitored environment",
            "Respected perimeter and deployment constraints in real-world pentest",
            "Ensured outputs were usable for client's infrastructure team"
        ]
    },
    {
        "skill": "CE2.04",
        "title": "justifying technical choices and validating results",
        "hissambefore": 60,
        "hissamAfter": 84,
        "fullMark": 100,
        "Project": ["Strategic Intelligence Report – Fintech", "Internal GDPR Audit – Data Governance"],
        "details": [
            "Structured reasoning for dashboard KPIs and GRC tools selection",
            "Applied regulatory standards (DORA, ISO 27001, RGPD) in analysis",
            "Used scoring metrics (CVSS, coverage) to support recommendations"
        ]
    },
    {
        "skill": "CE3.01",
        "title": "securing the information system",
        "hissambefore": 59,
        "hissamAfter": 85,
        "fullMark": 100,
        "Project": ["Vulnerability Scan – Aerospace (NDA)", "Certifications"],
        "details": [
            "Used Nessus, Nmap, and Burp Suite for in-depth security diagnosis",
            "Applied best practices from PTES and ISO 27002",
            "Identified critical exposures and proposed realistic remediation"
        ]
    },
    {
        "skill": "AC23.03",
        "title": "securing services and data",
        "hissambefore": 61,
        "hissamAfter": 88,
        "fullMark": 100,
        "Project": ["Internal GDPR Audit – Data Governance", "Vulnerability Scan – Aerospace (NDA)"],
        "details": [
            "Assessed access controls and encryption measures",
            "Evaluated retention policies and storage security",
            "Helped identify risks in HR and marketing data practices"
        ]
    },
    {
        "skill": "CE4.01",
        "title": "respecting data protection regulations",
        "hissambefore": 63,
        "hissamAfter": 91,
        "fullMark": 100,
        "Project": ["Internal GDPR Audit – Data Governance", "Certifications"],
        "details": [
            "Applied CNIL and EDPB guidelines for GDPR audit",
            "Identified legal bases for personal data in internal processes",
            "Used DPO tools: registers, risk tables, and compliance checklists"
        ]
    },
    {
        "skill": "AC24.02",
        "title": "ensuring data security and integrity",
        "hissambefore": 66,
        "hissamAfter": 90,
        "fullMark": 100,
        "Project": ["Internal GDPR Audit – Data Governance"],
        "details": [
            "Checked encryption policies, backups, and DLP measures",
            "Suggested secure anonymization techniques",
            "Mapped risks by category of personal data collected"
        ]
    },
    {
        "skill": "AC14.02",
        "title": "data visualization",
        "hissambefore": 72,
        "hissamAfter": 94,
        "fullMark": 100,
        "Project": ["Strategic Intelligence Report – Fintech"],
        "details": [
            "Created interactive dashboards in Power BI (risks, coverage, costs)",
            "Used slicers and KPIs to help decision-makers filter insights",
            "Linked datasets from Excel/benchmark to regulatory scores"
        ]
    },
    {
        "skill": "CE5.01",
        "title": "communicating effectively with stakeholders",
        "hissambefore": 65,
        "hissamAfter": 89,
        "fullMark": 100,
        "Project": ["Internal GDPR Audit – Data Governance", "Strategic Intelligence Report – Fintech"],
        "details": [
            "Presented audit results clearly to supervisors and team",
            "Built persuasive reports adapted to Codir and tech teams",
            "Explained security impacts during GISEC and client briefings"
        ]
    },
    {
        "skill": "AC25.04",
        "title": "managing project follow-up",
        "hissambefore": 68,
        "hissamAfter": 86,
        "fullMark": 100,
        "Project": ["Strategic Intelligence Report – Fintech", "Internal GDPR Audit – Data Governance"],
        "details": [
            "Defined deliverables and schedule during GDPR audit",
            "Reported weekly to supervisors on scan and audit progression",
            "Managed scope and deliverables for GISEC dashboard project"
        ]
    },
    {
        "skill": "AC26.03",
        "title": "mobilizing soft skills within a tech team",
        "hissambefore": 67,
        "hissamAfter": 88,
        "fullMark": 100,
        "Project": ["Vulnerability Scan – Aerospace (NDA)", "Internal GDPR Audit – Data Governance"],
        "details": [
            "Adapted to different work styles (Sharjah, Dubai, remote)",
            "Shared feedback and improvement ideas respectfully",
            "Balanced autonomy with regular team reporting"
        ]
    },
    {
        "skill": "CE6.04",
        "title": "developing effective and collaborative communication",
        "hissambefore": 70,
        "hissamAfter": 92,
        "fullMark": 100,
        "Project": ["Internal GDPR Audit – Data Governance", "Strategic Intelligence Report – Fintech"],
        "details": [
            "Adapted tone and terminology for each stakeholder",
            "Practiced clear synthesis for both technical and legal topics",
            "Documented findings and guided junior teammates"
        ]
    },
];

const Skills = () => {
    const [selectedProject, setSelectedProject] = useState("All");
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [animKey, setAnimKey] = useState(0);

    // 1) liste unique des projets pour le <select>
    const projectList = useMemo(() => {
        const all = rawData.flatMap((d) => d.Project);
        return ["All", ...Array.from(new Set(all))];
    }, []);

    // 2) filtrage des données selon projet choisi
    const filteredRaw = useMemo(() => {
        if (selectedProject === "All") return rawData;
        return rawData.filter((d) => d.Project.includes(selectedProject));
    }, [selectedProject]);

    // 3) transformation en structure pour nivo, avec clés "Avant" / "Après"
    const radarData = useMemo(
        () =>
            filteredRaw.map((d) => ({
                skill: d.skill,
                title: d.title,
                Project: d.Project,
                details: d.details,
                Avant: d.hissambefore,
                Après: d.hissamAfter,
            })),
        [filteredRaw]
    );

    const handleProjectSelect = (proj) => {
        setSelectedProject(proj);
        setSelectedSkill(null);
    };
    const handleSkillSelect = (skillObj) => {
        setSelectedSkill(skillObj);
        setAnimKey((k) => k + 1);
    };

    return (
        <>
            {/* ---- Dropdown Projet ---- */}
            <motion.div
                variants={fadeIn("up", "spring", 0.1, 1)}
                initial="hidden"
                animate="show"
                className="flex justify-center mb-6"
            >
                <select
                    value={selectedProject}
                    onChange={(e) => handleProjectSelect(e.target.value)}
                    className="bg-white/10 text-white rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#915EFF] w-full sm:w-auto"
                >
                    {projectList.map((proj) => (
                        <option key={proj} value={proj} className="bg-black-100 text-white">
                            {proj}
                        </option>
                    ))}
                </select>
            </motion.div>

            {/* ---- Radar + Détails ---- */}
            <motion.div
                variants={fadeIn("up", "spring", 0.2, 1)}
                initial="hidden"
                animate="show"
                className="flex flex-col lg:flex-row gap-8"
            >
                {/* Radar + Boutons */}
                <div className="w-full lg:w-3/4 bg-black-100 rounded-2xl p-4">
                    <div className="h-[500px]">
                        <ResponsiveRadar
                            data={radarData}
                            keys={["Avant", "Après"]}
                            indexBy="skill"
                            maxValue={100}
                            margin={{ top: 70, right: 120, bottom: 70, left: 120 }}
                            curve="linearClosed"
                            borderWidth={2}
                            borderColor="#fff"
                            gridLevels={5}
                            gridShape="circular"
                            gridLabelOffset={50}
                            enableDots
                            dotSize={8}
                            dotColor={{ from: "color" }}
                            dotBorderWidth={2}
                            dotBorderColor="#000"
                            colors={["#915EFF", "#34D399"]}        // purple = Avant, green = Après
                            fillOpacity={0.3}
                            blendMode="normal"
                            isInteractive
                            tooltip={() => null}
                            sliceTooltip={() => null}
                            onClick={(datum) => {
                                // sélectionner l'objet complet
                                const skillObj = radarData.find((d) => d.skill === datum.indexValue);
                                handleSkillSelect(skillObj);
                            }}
                            legends={[
                                {
                                    anchor: "bottom-left",
                                    direction: "row",
                                    translateY: 40,
                                    itemWidth: 60,
                                    itemHeight: 20,
                                    dataFrom: "keys",
                                    symbolShape: "circle",
                                },
                            ]}
                            theme={{
                                textColor: "#fff",
                                fontSize: 12,
                                axis: {
                                    domain: { line: { stroke: "#fff", strokeWidth: 1 } },
                                    ticks: {
                                        line: { stroke: "#888", strokeWidth: 1 },
                                        text: { fill: "#fff", fontSize: 12 },
                                    },
                                    legend: { text: { fill: "#fff", fontSize: 14 } },
                                },
                                grid: { line: { stroke: "#555", strokeWidth: 1 } },
                            }}
                        />
                    </div>

                    {/* Boutons de sélection */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {radarData.map((d) => (
                            <motion.button
                                key={d.skill}
                                onClick={() => handleSkillSelect(d)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                                    selectedSkill?.skill === d.skill
                                        ? "bg-[#915EFF] text-black"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                            >
                                {/* code + début du titre */}
                                {`${d.skill}: ${d.title.slice(0, 15)}…`}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Panneau Détails animé */}
                <motion.div
                    key={animKey}
                    variants={fadeIn("up", "spring", 0.3, 1)}
                    initial="hidden"
                    animate="show"
                    className="w-full lg:w-1/4 bg-black-100 rounded-2xl p-6 min-h-[500px]"
                >
                    {selectedSkill ? (
                        <>
                            <h3 className="text-white text-xl font-bold mb-4">{selectedSkill.title}</h3>
                            <p className="text-secondary italic mb-4">
                                Mobilisée dans : {selectedSkill.Project.join(", ")}
                            </p>
                            <ul className="list-disc list-inside text-white space-y-2">
                                {selectedSkill.details.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p className="text-secondary text-center mt-20">
                            Sélectionnez une compétence pour voir les détails.
                        </p>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
};
export default SectionWrapper(Skills, "skills");
