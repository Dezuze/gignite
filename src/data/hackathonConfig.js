/**
 * Centralized Configuration for gIGNITE 2026 AI Innovation Hackathon
 * All editable event dates, venue status, prize figures, themes, team contacts, and registration status
 * can be modified directly in this file.
 */

export const HACKATHON_CONFIG = {
  event: {
    title: "gIGNITE",
    edition: "2026",
    eyebrow: "AI INNOVATION HACKATHON 2026",
    headline: "Fueling India's AI Future",
    collaborators: {
      lead: "Gadgeon Smart Systems Pvt. Ltd.",
      leadNote: "Celebrating 15 Years of Engineering Excellence",
      coOrganizer: "IEEE SPS Kerala Chapter",
      academicPartner: "FISAT IEEE SB"
    },
    pills: [
      { id: "geo", text: "Kerala-wide", iconName: "globe" },
      { id: "format", text: "24-Hour Grand Finale", iconName: "bolt" }
    ],
    registrationStatus: {
      isOpen: true,
      badgeText: "Registrations Open",
      deadlineText: "Stage 1 Submissions Active",
      shortlistOutcome: "Top 20 Teams Shortlisted for Grand Finale"
    },
    tentativeDates: {
      stage1Period: "August 15, 2026",
      shortlistDate: "August 15, 2026",
      grandFinaleDate: "First week of October 2026",
      isDateTentative: true
    },
    tentativeVenue: {
      name: "FISAT (Federal Institute of Science And Technology)",
      location: "Angamaly, Kerala",
      isVenueTentative: true,
      note: "Preferred venue — pending final confirmation"
    }
  },

  statementBand: {
    kineticWords: ["Ideas.", "Prototypes.", "Impact."],
    tagline: "Empowering Kerala's finest engineering minds to build high-impact, real-world AI and signal processing solutions."
  },

  overview: {
    summary: "gIGNITE is a flagship two-stage AI hackathon co-organized by Gadgeon Smart Systems and IEEE SPS Kerala Chapter. Designed to bridge the gap between academic innovation and enterprise AI deployment, gIGNITE challenges student engineers across Kerala to solve complex real-world challenges across five focused tracks.",
    keyPoints: [
      "Two-tier competitive structure: Virtual Stage 1 shortlisting followed by a high-intensity 24-hour in-person Grand Finale.",
      "Direct technical mentorship from senior AI/ML architects and embedded systems experts at Gadgeon.",
      "Industry-standard continuous evaluation model assessing technical rigor, practical feasibility, and user experience.",
      "Comprehensive proposed prize pool along with internship, incubation, and IEEE recognition avenues."
    ],
    fullObjectives: [
      {
        num: "01",
        title: "Catalyze AI Innovation",
        desc: "Cultivate high-caliber artificial intelligence and deep-learning innovation across Kerala's engineering colleges."
      },
      {
        num: "02",
        title: "Deployable Prototype Engineering",
        desc: "Encourage participants to advance beyond theoretical models to deliver functional, testable end-to-end prototypes."
      },
      {
        num: "03",
        title: "Industry & Academic Synergy",
        desc: "Bridge engineering academia with Gadgeon's 15-year legacy in industrial IoT, edge AI, and digital transformation."
      },
      {
        num: "04",
        title: "Signal Processing & Edge Intelligence",
        desc: "Promote breakthrough applications in digital signal processing, biomedical sensors, computer vision, and IoT edge devices."
      },
      {
        num: "05",
        title: "Multidisciplinary Collaboration",
        desc: "Foster collaborative team problem-solving blending software intelligence, hardware edge integration, and intuitive UX."
      },
      {
        num: "06",
        title: "Continuous Expert Mentorship",
        desc: "Deliver personalized architectural reviews and feedback loops from industry specialists throughout both stages."
      },
      {
        num: "07",
        title: "Multi-Dimensional Evaluation",
        desc: "Implement a transparent 11-factor evaluation model examining everything from problem depth to business feasibility."
      },
      {
        num: "08",
        title: "High-Impact Recognition & Career Pathways",
        desc: "Reward standout innovators with exciting prizes, IEEE credentials, and direct technical career opportunities."
      },
      {
        num: "09",
        title: "Ecosystem Growth & 15-Year Milestone",
        desc: "Celebrate Gadgeon's 15th anniversary by making a lasting contribution to Kerala's tech talent ecosystem."
      }
    ]
  },

  themes: [
    {
      id: "01",
      code: "01",
      tag: "Biomedical & Care",
      title: "Intelligent Healthcare & Bio-Signal Processing",
      description: "Harness AI/ML and advanced digital signal processing for wearable biosensors, automated diagnostics, arrhythmia detection, and predictive remote patient care.",
      chips: ["Bio-Signals", "Computer Vision", "Predictive Diagnostics", "Wearable IoT"],
      accentColor: "#3b82f6",
      isOpenTrack: false
    },
    {
      id: "02",
      code: "02",
      tag: "Industrial & Edge",
      title: "Smart Industrial IoT & Edge AI",
      description: "Deploy ultra-low latency machine learning at the edge for automated visual defect detection, acoustic anomaly sensing, predictive machinery maintenance, and smart robotics.",
      chips: ["Edge Inference", "Acoustic AI", "Predictive Maintenance", "Smart Factories"],
      accentColor: "#F27822",
      isOpenTrack: false
    },
    {
      id: "03",
      code: "03",
      tag: "Clean Tech & Mobility",
      title: "Sustainable Energy & Smart Mobility",
      description: "Optimize renewable energy microgrids, intelligent EV battery analytics (BMS), smart charging scheduling, and real-time adaptive urban traffic management.",
      chips: ["Microgrid AI", "EV Battery Health", "Adaptive Routing", "Clean Energy"],
      accentColor: "#10b981",
      isOpenTrack: false
    },
    {
      id: "04",
      code: "04",
      tag: "Autonomous Systems",
      title: "Generative AI & Autonomous Agent Workflows",
      description: "Engineer production-grade LLM/Agentic systems, multimodal document reasoning, domain-specific copilot agents, and automated complex business decision workflows.",
      chips: ["Agentic AI", "Multimodal LLMs", "RAG Systems", "Workflow Automation"],
      accentColor: "#8b5cf6",
      isOpenTrack: false
    },
    {
      id: "05",
      code: "05",
      tag: "Open Innovation",
      title: "Open Track — Any Domain, High Impact",
      description: "No fixed domain constraints. Bring your most audacious AI, computer vision, DSP, or intelligent hardware concept to solve any critical societal, industrial, or scientific problem.",
      chips: ["Open Domain", "Breakthrough AI", "Hardware + Software", "Wildcard"],
      accentColor: "#ffffff",
      isOpenTrack: true
    }
  ],

  eventStructure: {
    stage1: {
      title: "Stage 1: Virtual Shortlisting",
      badge: "Stage 1 · Online",
      mode: "Virtual Submission & Online Review",
      teamCap: "100 Qualified Teams",
      outcome: "Top 20 Teams Shortlisted",
      requirements: [
        "Concise problem statement & domain justification",
        "System architecture & technical approach document",
        "Functional repository or simulated proof-of-concept",
        "2–3 minute video pitch / demonstration link (YouTube/Drive)"
      ]
    },
    stage2: {
      title: "Stage 2: 24-Hour Offline Grand Finale",
      badge: "Stage 2 · In-Person",
      mode: "24-Hour In-Person Hackathon Sprint",
      venue: "FISAT, Angamaly",
      venueNote: "Confirmed Venue",
      period: "October 10-11, 2026",
      teamCap: "20 Shortlisted Teams (Up to 4 members per team)",
      flow: [
        { phase: "Phase 1", label: "Inauguration & Keynote", time: "Day 1 · Morning" },
        { phase: "Phase 2", label: "24-Hour Build Sprint & Checkpoints", time: "Day 1 – Day 2 · Non-stop" },
        { phase: "Phase 3", label: "Milestone Mentorship & Code Review", time: "Day 1 · Evening & Night" },
        { phase: "Phase 4", label: "Final Jury Presentations & Demos", time: "Day 2 · Afternoon" },
        { phase: "Phase 5", label: "Valedictory & Awards Ceremony", time: "Day 2 · Evening" }
      ]
    }
  },

  evaluationModel: {
    title: "Continuous Multi-Dimensional Evaluation",
    subtitle: "Projects are assessed throughout both stages across 11 balanced evaluation criteria:",
    criteria: [
      { id: 1, label: "Problem Understanding", iconName: "target", color: "#38bdf8" },
      { id: 2, label: "Theme Relevance", iconName: "compass", color: "#818cf8" },
      { id: 3, label: "Innovation & Originality", iconName: "lightbulb", color: "#f59e0b" },
      { id: 4, label: "Technical Approach", iconName: "settings", color: "#10b981" },
      { id: 5, label: "Progress & Sprint Velocity", iconName: "trending-up", color: "#ec4899" },
      { id: 6, label: "Prototype Quality", iconName: "layers", color: "#6366f1" },
      { id: 7, label: "Feasibility & Scalability", iconName: "feather", color: "#14b8a6" },
      { id: 8, label: "Societal / Industry Impact", iconName: "shield", color: "#f97316" },
      { id: 9, label: "User Experience (UX)", iconName: "layout", color: "#a855f7" },
      { id: 10, label: "Business Potential", iconName: "briefcase", color: "#eab308" },
      { id: 11, label: "Final Execution & Pitch", iconName: "trophy", color: "#ef4444" }
    ]
  },

  prizes: {
    totalPool: "Exciting Prizes",
    poolNote: "Proposed Total Prize Pool — Subject to Finalization",
    chips: [
      { id: "win", title: "Winner (1st Prize)", badge: "Champion", iconName: "trophy", rankNumber: "01" },
      { id: "run1", title: "Runner-Up (2nd Prize)", badge: "Podium", iconName: "medal", rankNumber: "02" },
      { id: "run2", title: "Second Runner-Up", badge: "Podium", iconName: "medal", rankNumber: "03" },
      { id: "innov", title: "Best Innovation Award", badge: "Special", iconName: "lightbulb", rankNumber: "★" },
      { id: "impact", title: "Best Industry Impact", badge: "Special", iconName: "bolt", rankNumber: "★" },
      { id: "pitch", title: "Best Presentation & Demo", badge: "Special", iconName: "mic", rankNumber: "★" },
      { id: "emerge", title: "Emerging Team Award", badge: "Special", iconName: "star", rankNumber: "★" }
    ],
    breakdownNote: "Exact monetary split and trophy breakdown will be updated upon final committee approval."
  },

  timeline: [
    {
      phase: "Phase 01",
      title: "Launch & College Outreach",
      status: "Upcoming",
      isPendingDate: false,
      dateLabel: "August 15, 2026",
      description: "Statewide announcements across Kerala engineering colleges, opening of Stage 1 portal, and theme briefings."
    },
    {
      phase: "Phase 02",
      title: "Stage 1 Submission & Virtual Review",
      status: "Upcoming",
      isPendingDate: false,
      dateLabel: "August 15, 2026",
      description: "Submission of team proposals, technical architecture, and pitch videos. Initial screening of all 100 entries."
    },
    {
      phase: "Phase 03",
      title: "Shortlist Announcement & Prep",
      status: "Upcoming",
      isPendingDate: false,
      dateLabel: "August 15, 2026",
      description: "Declaration of the Top 20 finalist teams, mentor allocation from Gadgeon, and grand finale onboarding."
    },
    {
      phase: "Phase 04",
      title: "24-Hour Offline Grand Finale",
      status: "Confirmed",
      isPendingDate: false,
      dateLabel: "October 10-11, 2026",
      description: "High-octane 24-hour sprint at FISAT Angamaly (tentative venue). Live prototyping, continuous jury evaluation, and awards."
    }
  ],

  team: {
    gadgeonContacts: [
      {
        name: "Organizing Committee Lead",
        role: "Event Director & Strategic Lead",
        org: "Gadgeon Smart Systems",
        category: "Gadgeon Leadership"
      },
      {
        name: "Technical Mentorship Lead",
        role: "Chief AI / IoT Architecture Mentor",
        org: "Gadgeon Smart Systems",
        category: "Technical Committee"
      },
      {
        name: "Hackathon Operations Lead",
        role: "Program & Logistics Coordinator",
        org: "Gadgeon Smart Systems",
        category: "Operations"
      },
      {
        name: "Industry Evaluation Lead",
        role: "Jury Coordination & Standards",
        org: "Gadgeon Smart Systems",
        category: "Evaluation"
      },
      {
        name: "Outreach & College Relations",
        role: "Student Community Liaison",
        org: "Gadgeon Smart Systems",
        category: "Outreach"
      },
      {
        name: "Platform & Systems Lead",
        role: "Digital Infrastructure & Support",
        org: "Gadgeon Smart Systems",
        category: "Engineering"
      }
    ],
    ieeeContacts: [
      {
        name: "Dr. Alice Smith",
        role: "Chair / Representative",
        org: "IEEE SPS Kerala Chapter",
        category: "IEEE Co-Organizer",
        isPending: false,
        placeholderText: "Named Coordinator — Pending Announcement"
      },
      {
        name: "Prof. John Doe",
        role: "Student Activities Chair",
        org: "IEEE SPS Kerala Chapter",
        category: "IEEE Co-Organizer",
        isPending: false,
        placeholderText: "Named Coordinator — Pending Announcement"
      }
    ]
  },

  guidelines: {
    eyebrow: "07 · Standards & Fair Play",
    title: "Hackathon Rules &",
    titleGradient: "Code of Conduct",
    subtitle: "Ensuring an equitable, ethical, and high-impact engineering competition for all participants.",
    rules: [
      {
        id: "eligibility",
        icon: "users",
        title: "Team Structure & Eligibility",
        badge: "2–4 Members",
        description: "Open statewide to currently enrolled undergraduate and postgraduate engineering students in Kerala. Cross-department and inter-collegiate teams are encouraged."
      },
      {
        id: "fresh-code",
        icon: "cpu",
        title: "Fresh Code & Originality Policy",
        badge: "Sprint Rules",
        description: "Foundational AI models, public datasets, and open-source libraries are permitted. However, application glue code, device firmware, and system integrations must be built freshly during the 24-hour sprint."
      },
      {
        id: "ip-rights",
        icon: "shield",
        title: "100% IP Retention",
        badge: "Participant Owned",
        description: "Participants retain full, unencumbered intellectual property rights over all code, circuit schematics, algorithms, and prototypes developed during gIGNITE 2026."
      },
      {
        id: "safety",
        icon: "alert-triangle",
        title: "Hardware & Lab Safety",
        badge: "Safety First",
        description: "Prototypes brought to the Grand Finale must adhere to standard electrical safety standards (low voltage DC supplies). Hazardous setups or high-voltage circuits without prior mentor sign-off are strictly prohibited."
      },
      {
        id: "ethics",
        icon: "compass",
        title: "Responsible & Ethical AI",
        badge: "Human Centric",
        description: "All solutions must uphold principles of privacy, safety, and non-discrimination. Solutions involving deceptive deepfakes, malicious surveillance, or unauthorized personal data collection will be disqualified."
      },
      {
        id: "conduct",
        icon: "target",
        title: "Professionalism & Fair Play",
        badge: "Zero Tolerance",
        description: "Treat fellow participants, mentors, jury members, and volunteers with respect. Tampering with rival hardware, plagiarism, or harassment will lead to immediate team disqualification."
      }
    ]
  },

  faqs: {
    eyebrow: "08 · Clarity & Answers",
    title: "Frequently Asked",
    titleGradient: "Questions",
    subtitle: "Got questions? We've compiled essential details regarding eligibility, submissions, hardware, and event logistics.",
    categories: ["All", "General & Eligibility", "Submissions & Rules", "Grand Finale & Hardware"],
    items: [
      {
        question: "Who is eligible to participate in gIGNITE 2026?",
        category: "General & Eligibility",
        answer: "Any currently enrolled undergraduate or postgraduate engineering student from recognized engineering colleges and universities across Kerala can participate. All branches and engineering specializations (CSE, ECE, EEE, Robotics, AI/ML, Mechanical, etc.) are welcome."
      },
      {
        question: "What is the allowed team size and structure?",
        category: "General & Eligibility",
        answer: "Teams must consist of 2 to 4 members. We strongly recommend forming multidisciplinary teams with complementary skills across hardware/embedded systems, machine learning/DSP algorithms, and software/UX development. Cross-department and cross-college teams are fully permitted."
      },
      {
        question: "Is there any registration fee for Stage 1?",
        category: "General & Eligibility",
        answer: "No. Stage 1 registration and virtual proposal submission is completely free of charge for all eligible student teams."
      },
      {
        question: "What do we need to submit for Stage 1 (Virtual Shortlisting)?",
        category: "Submissions & Rules",
        answer: "Teams need to submit an executive project proposal (up to 5 pages PDF or slide deck) outlining: (1) Problem Statement & Target Domain, (2) Proposed System Architecture & Signal Processing/AI Pipeline, (3) Practical Feasibility & Hardware Components, and (4) Optional proof-of-concept GitHub repository or simulation link."
      },
      {
        question: "Who owns the intellectual property (IP) of our project?",
        category: "Submissions & Rules",
        answer: "You do — 100%. All intellectual property, software code, circuit designs, and prototypes developed by your team during gIGNITE remain the sole property of the team members. Neither Gadgeon Smart Systems nor IEEE SPS claims any ownership."
      },
      {
        question: "Can we use pre-trained AI models or pre-existing code?",
        category: "Submissions & Rules",
        answer: "Yes, foundational and pre-trained open-source models (like MobileNet, YOLO, Whisper, Llama, Hugging Face models) and standard libraries are encouraged. However, all domain adaptation, data preprocessing pipelines, hardware firmware, API connections, and user interface logic must be built during the 24-hour finale."
      },
      {
        question: "Will hardware components be provided for the Stage 2 Grand Finale?",
        category: "Grand Finale & Hardware",
        answer: "The Grand Finale venue (FISAT) provides high-speed Wi-Fi, dedicated power workstations, basic electrical lab testing tools (digital multimeters, oscilloscopes), and soldering stations. Teams should bring their core edge computing boards (e.g. ESP32, Raspberry Pi, STM32, Jetson) and specialized sensors. A backup pool of common development boards and sensor kits will be available on-site for emergency hardware needs."
      },
      {
        question: "What facilities and hospitality are provided during the 24-hour sprint?",
        category: "Grand Finale & Hardware",
        answer: "Shortlisted finalist teams receive complete hospitality at FISAT, including breakfast, lunch, dinner, midnight energy snacks, coffee/tea stations, dedicated rest lounges, and 24/7 security."
      }
    ]
  },

  closingCta: {
    headline: "Ready to Fuel India's AI Future?",
    subline: "Assemble your squad, choose your track, and take your shot at exciting prizes and industry acclaim.",
    primaryBtn: "Register Your Team",
    secondaryBtn: "Explore AI Themes"
  },

  footer: {
    brand: "gIGNITE 2026",
    tagline: "The Premier Kerala-Wide AI & Signal Processing Hackathon by Gadgeon Smart Systems × IEEE SPS Kerala Chapter.",
    gadgeonUrl: "https://www.gadgeon.com/",
    ieeeSpsUrl: "https://www.ieeespskc.in/",
    fisatIeeeUrl: "https://www.ieeefisat.org/"
  }
};

