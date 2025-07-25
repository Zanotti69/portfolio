import {
    mobile,
    backend,
    creator,
    web,
    figma,
    docker,
    aicpaSoc2,
    burpsuite,
    ebiosRM,
    gdpr,
    iso27001,
    metasploit,
    mitreAttck,
    nessus,
    nist,
    owasp,
    sentinel,
    vaporvm,
    optiim,
    lyon1,
    lyceeVinci,
    reportGisec,
    quizzgrinding,
    serveurApache,
    secnum,
    ccisc2,
    presecurity,
    cybersecurity101,
    ateliergrpg,
    gdpr2,
    nessus2,
    omar,
    hassan,
    ahmed
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Cybersecurity Analyst",
        icon: web,
    },
    {
        title: "GRC & Risk Consultant",
        icon: mobile,
    },
    {
        title: "Vulnerability Assessor",
        icon: backend,
    },
    {
        title: "Compliance & Reporting ",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: iso27001,
    },
    {
        name: "CSS 3",
        icon: aicpaSoc2,
    },
    {
        name: "JavaScript",
        icon: gdpr,
    },
    {
        name: "TypeScript",
        icon: nist,
    },
    {
        name: "React JS",
        icon: ebiosRM,
    },
    {
        name: "Redux Toolkit",
        icon: metasploit,
    },
    {
        name: "Tailwind CSS",
        icon: burpsuite,
    },
    {
        name: "Node JS",
        icon: nessus,
    },
    {
        name: "MongoDB",
        icon: owasp,
    },
    {
        name: "Three JS",
        icon: mitreAttck,
    },
    {
        name: "git",
        icon: sentinel,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Optiim",
        icon: optiim,
        iconBg: "#ffffff",
        date: "July 2024 - August 2024",
        points: [
            "Developed a note management service using Spring Boot, Java, Docker, and HTML/CSS.",
            "Applied OWASP Top 10 2024 to prevent common web vulnerabilities like XSS, injections, and access control flaws.",
            "Collaborated with a multicultural team in English throughout all project phases.",
            "Improved both technical and communication skills in an international remote environment."
        ],
    },
    {
        title: "Cybersecurity Intern",
        company_name: "VaporVM",
        icon: vaporvm,
        iconBg: "#010137",
        date: "April 2025 - July 2025",
        points: [
            "Contributed to SOC 2 and ISO 27001 gap assessments for GRC compliance.",
            "Supported pentesters with vulnerability analysis and penetration testing tasks.",
            "Participated in GISEC 2025, producing a cybersecurity report and dashboard for strategic visibility.",
            "Integrated into a SOC team and observed operational incident detection and response processes.",
            "Used English daily for meetings, reports, and international event preparation."
        ],
    },

];
export const education = [
    {
        date: "2020–2021",
        title: "General Baccalaureate – Mathematics & Engineering Sciences",
        company_name: "Lycée Léonard de Vinci",
        icon: lyceeVinci,
        iconBg: "#fff",
        points: [
            "High school diploma with honors",
            "Scientific track with NSI fundamentals in Première",
        ],
    },
    {
        date: "2022–2023",
        title: "BUT Computer Science – 1st year",
        company_name: "IUT Lyon 1",
        icon: lyon1,
        iconBg: "#fff",
        points: [
            "General training: algorithms, databases, web, networks, systems",
            "Year average: 15.03 – ranked 6th in the class",
        ],
    },
    {
        date: "2023–2024",
        title: "BUT Computer Science – 2nd year (Application Development track)",
        company_name: "IUT Lyon 1",
        icon: lyon1,
        iconBg: "#fff",
        points: [
            "Focus on Java, GUI, web development, and project management",
            "Still multidisciplinary with a strong development orientation",
            "Semester 3 average: 15 – ranked 3rd in the class",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "Hissam showed real initiative and technical strength during our cyber projects. A promising talent.",
        name: "Omar Zaman",
        designation: "Cybersecurity Consultant",
        company: "VaporVM",
        image: omar,
    },
    {
        testimonial:
            "Great communication skills and adaptability. Hissam was a strong asset during the GISEC event.\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
        name: "Hassan Pasha",
        designation: "Marketing Manager",
        company: "VaporVM",
        image: hassan,
    },
    {
        testimonial:
            "Quick learner and very reliable. Hissam worked seriously on our vulnerability scans.\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
        name: "Ahmed Abdelghfar",
        designation: "Security Lead",
        company: "VaporVM",
        image: ahmed,
    },
];





const projects = [
    {
        name: "Vulnerability Scan – Aerospace (NDA)\u00A0\u00A0",
        description:
            "Security testing mission for a sensitive aerospace client. Scan orchestration (Nessus), validation with Burp/ZAP, contributions to internal reporting. Based on PTES, MITRE ATT&CK and ISO standards.\u00A0\u00A0\u00A0",
        tags: [
            { name: "Nessus", color: "blue-text-gradient" },
            { name: "BurpSuite", color: "green-text-gradient" },
            { name: "CVSS", color: "pink-text-gradient" }
        ],
        image: nessus2,
        source_code_link: ""
    },
    {
        name: "Internal GDPR Audit – Data Governance\u00A0\u00A0",
        description:
            "Gap analysis of data handling practices across HR, marketing and IT. Recommendations based on GDPR principles: transparency, minimization, accountability. Internal audit with governance focus.\u00A0\u00A0\u00A0",
        tags: [
            { name: "GDPR", color: "blue-text-gradient" },
            { name: "Audit", color: "green-text-gradient" },
            { name: "Governance", color: "pink-text-gradient" }
        ],
        image: gdpr2,
        source_code_link: ""
    },
    {
        name: "Strategic Intelligence Report – Fintech\u00A0\u00A0",
        description:
            "Autonomous report after GISEC 2025 for a fintech SME. Analysis of cyber solutions, risk dashboards, and compliance tools (GDPR, DORA, ISO). Full GRC perspective powered by Power BI.\u00A0\u00A0",
        tags: [
            { name: "Ebios RM", color: "blue-text-gradient" },
            { name: "Compliance", color: "green-text-gradient" },
            { name: "PowerBI", color: "pink-text-gradient" }
        ],
        image: reportGisec,
        source_code_link: ""
    },
    {
        name: "QuizGrinding – Full Stack AI – Scrum Master\u00A0\u00A0",
        description:
            "Development of a PHP/React application generating quizzes with AI. Agile project with teamwork, feature integration, and final pitch in PowerPoint. Role: Scrum Master.\u00A0\u00A0\u00A0",
        tags: [
            { name: "AI", color: "blue-text-gradient" },
            { name: "ScrumMaster", color: "green-text-gradient" },
            { name: "React", color: "pink-text-gradient" }
        ],
        image: quizzgrinding,
        source_code_link: "https://quiz-grinding.fr/"
    },
    {
        name: "Apache Server – Technical Project (BUT)\u00A0\u00A0",
        description:
            "Setup and configuration of an Apache web server in a lab context. Network analysis with Wireshark. Learned service deployment, port scanning and basic packet inspection.\u00A0\u00A0",
        tags: [
            { name: "Networking", color: "blue-text-gradient" },
            { name: "Linux", color: "green-text-gradient" },
            { name: "Wireshark", color: "pink-text-gradient" }
        ],
        image: serveurApache,
        source_code_link: ""
    }
]

export const certifications = [
    {
        index: 0,
        name: "Cybersecurity 101 – TryHackMe",
        description:
            "Covers core Blue Team practices: logs analysis, SOC alert triage, SIEM tools, MITRE ATT&CK, threat intel basics, and incident response workflows.",
        tags: [
            { name: "TryHackMe", color: "text-blue-400" },
            { name: "Blue Team", color: "text-green-400" },
        ],
        image: cybersecurity101,
        source_code_link: "https://tryhackme.com/path/outline/cybersecurity101",
    },
    {
        index: 1,
        name: "PreSecurity       – TryHackMe", // Ajout d’espaces pour aligner les titres visuellement
        description:
            "Introduces essential cybersecurity concepts: networking (OSI, IP), Linux basics, terminal skills, web architecture, and attack surface analysis.",
        tags: [
            { name: "TryHackMe", color: "text-blue-400" },
            { name: "Foundations", color: "text-purple-400" },
        ],
        image: presecurity,
        source_code_link: "https://tryhackme.com/path/outline/presecurity",
    },
    {
        index: 2,
        name: "SecNumAcadémie – ANSSI",
        description:
            "Covers security awareness topics: password protection, workstation hygiene, basic cryptography, and digital safety good practices.",
        tags: [
            { name: "ANSSI", color: "text-red-400" },
            { name: "Awareness", color: "text-yellow-400" },
        ],
        image: secnum,
        source_code_link: "https://secnumacademie.gouv.fr/auth/login",
    },
    {
        index: 3,
        name: "Atelier RGPD–                         CNIL",
        description:
            "Introduces GDPR principles: data lifecycle, DPO tools, accountability, rights of individuals, and compliance in professional environments.",
        tags: [
            { name: "CNIL", color: "text-pink-400" },
            { name: "Compliance", color: "text-yellow-400" },
        ],
        image: ateliergrpg,
        source_code_link: "https://atelier-rgpd.cnil.fr/",
    },
    {
        index: 4,
        name: "Certified in Cybersecurity – (ISC)²",
        description:
            "Training completed – exam pending. Covers security principles, access control, network and operations security, and risk management.",
        tags: [
            { name: "(ISC)²", color: "text-cyan-400" },
            { name: "In progress", color: "text-gray-400" },
        ],
        image: ccisc2,
        source_code_link: "https://www.isc2.org/certifications/cc",
    },
];


export { services, technologies, experiences, testimonials, projects };