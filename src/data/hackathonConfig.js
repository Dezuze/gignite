/**
 * Centralized Configuration for gIGNITE 2026 AI Innovation Hackathon
 * Contains active event configuration consumed across the site.
 */

export const HACKATHON_CONFIG = {
  event: {
    eyebrow: "AI INNOVATION HACKATHON 2026",
    collaborators: {
      lead: "Gadgeon Smart Systems Pvt. Ltd.",
      leadNote: "Celebrating 15 Years of Engineering Excellence"
    },
    pills: [
      { id: "geo", text: "Kerala-wide", iconName: "globe" },
      { id: "format", text: "24-Hour Grand Finale", iconName: "bolt" }
    ],
    registrationStatus: {
      badgeText: "Registrations Open"
    }
  },

  statementBand: {
    tagline: "Empowering Kerala's finest engineering minds to build high-impact, real-world AI and signal processing solutions."
  },

  overview: {
    summary: "gIGNITE is a flagship two-stage AI hackathon sponsored by Gadgeon Smart Systems. Designed to bridge the gap between academic innovation and enterprise AI deployment, gIGNITE challenges student engineers across Kerala to solve complex real-world challenges across five focused tracks.",
    keyPoints: [
      "Two-tier competitive structure: Virtual Stage 1 shortlisting followed by a high-intensity 24-hour in-person Grand Finale.",
      "Direct technical mentorship from senior AI/ML architects and embedded systems experts at Gadgeon.",
      "Industry-standard continuous evaluation model assessing technical rigor, practical feasibility, and user experience.",
      "Comprehensive proposed prize pool along with internship, incubation, and IEEE recognition avenues."
    ]
  },

  themes: [
    {
      id: "01",
      code: "01",
      tag: "Biomedical & Care",
      title: "Intelligent Healthcare & Bio-Signal Processing"
    },
    {
      id: "02",
      code: "02",
      tag: "Industrial & Edge",
      title: "Smart Industrial IoT & Edge AI"
    },
    {
      id: "03",
      code: "03",
      tag: "Clean Tech & Mobility",
      title: "Sustainable Energy & Smart Mobility"
    },
    {
      id: "04",
      code: "04",
      tag: "Autonomous Systems",
      title: "Generative AI & Autonomous Agent Workflows"
    },
    {
      id: "05",
      code: "05",
      tag: "Open Innovation",
      title: "Open Track — Any Domain, High Impact"
    }
  ],

  eventStructure: {
    stage1: {
      title: "Stage 1: Virtual Shortlisting",
      requirements: [
        "Concise problem statement & domain justification",
        "System architecture & technical approach document",
        "Functional repository or simulated proof-of-concept",
        "2–3 minute video pitch / demonstration link (YouTube/Drive)"
      ]
    },
    stage2: {
      title: "Stage 2: 24-Hour Offline Grand Finale",
      venue: "FISAT, Angamaly",
      period: "October 10-11, 2026",
      flow: [
        { label: "Inauguration & Keynote", time: "Day 1 · Morning" },
        { label: "24-Hour Build Sprint & Checkpoints", time: "Day 1 – Day 2 · Non-stop" },
        { label: "Milestone Mentorship & Code Review", time: "Day 1 · Evening & Night" },
        { label: "Final Jury Presentations & Demos", time: "Day 2 · Afternoon" },
        { label: "Valedictory & Awards Ceremony", time: "Day 2 · Evening" }
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
      { id: "win", title: "Winner (1st Prize)", badge: "Champion", iconName: "trophy" },
      { id: "run1", title: "Runner-Up (2nd Prize)", badge: "Podium", iconName: "medal" },
      { id: "run2", title: "Second Runner-Up", badge: "Podium", iconName: "medal" },
      { id: "innov", title: "Best Innovation Award", badge: "Special", iconName: "lightbulb" },
      { id: "impact", title: "Best Industry Impact", badge: "Special", iconName: "bolt" },
      { id: "pitch", title: "Best Presentation & Demo", badge: "Special", iconName: "mic" },
      { id: "emerge", title: "Emerging Team Award", badge: "Special", iconName: "star" }
    ],
    breakdownNote: "Exact monetary split and trophy breakdown will be updated upon final committee approval."
  },

  timeline: [
    {
      phase: "Phase 01",
      title: "Launch & College Outreach",
      dateLabel: "August 15, 2026",
      description: "Statewide announcements across Kerala engineering colleges, opening of Stage 1 portal, and theme briefings."
    },
    {
      phase: "Phase 02",
      title: "Stage 1 Submission & Virtual Review",
      dateLabel: "August 15, 2026",
      description: "Submission of team proposals, technical architecture, and pitch videos. Initial screening of all 100 entries."
    },
    {
      phase: "Phase 03",
      title: "Shortlist Announcement & Prep",
      dateLabel: "August 15, 2026",
      description: "Declaration of the Top 20 finalist teams, mentor allocation from Gadgeon, and grand finale onboarding."
    },
    {
      phase: "Phase 04",
      title: "24-Hour Offline Grand Finale",
      dateLabel: "October 10-11, 2026",
      description: "High-octane 24-hour sprint at FISAT Angamaly (tentative venue). Live prototyping, continuous jury evaluation, and awards."
    }
  ],

  guidelines: {
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
    items: [
      {
        question: "Who is eligible to participate in gIGNITE 2026?",
        answer: "Any currently enrolled undergraduate or postgraduate engineering student from recognized engineering colleges and universities across Kerala can participate. All branches and engineering specializations (CSE, ECE, EEE, Robotics, AI/ML, Mechanical, etc.) are welcome."
      },
      {
        question: "What is the allowed team size and structure?",
        answer: "Teams must consist of 2 to 4 members. We strongly recommend forming multidisciplinary teams with complementary skills across hardware/embedded systems, machine learning/DSP algorithms, and software/UX development. Cross-department and cross-college teams are fully permitted."
      },
      {
        question: "Is there any registration fee for Stage 1?",
        answer: "No. Stage 1 registration and virtual proposal submission is completely free of charge for all eligible student teams."
      },
      {
        question: "What do we need to submit for Stage 1 (Virtual Shortlisting)?",
        answer: "Teams need to submit an executive project proposal (up to 5 pages PDF or slide deck) outlining: (1) Problem Statement & Target Domain, (2) Proposed System Architecture & Signal Processing/AI Pipeline, (3) Practical Feasibility & Hardware Components, and (4) Optional proof-of-concept GitHub repository or simulation link."
      },
      {
        question: "Who owns the intellectual property (IP) of our project?",
        answer: "You do — 100%. All intellectual property, software code, circuit designs, and prototypes developed by your team during gIGNITE remain the sole property of the team members. Neither Gadgeon Smart Systems nor IEEE SPS claims any ownership."
      },
      {
        question: "Can we use pre-trained AI models or pre-existing code?",
        answer: "Yes, foundational and pre-trained open-source models (like MobileNet, YOLO, Whisper, Llama, Hugging Face models) and standard libraries are encouraged. However, all domain adaptation, data preprocessing pipelines, hardware firmware, API connections, and user interface logic must be built during the 24-hour finale."
      },
      {
        question: "Will hardware components be provided for the Stage 2 Grand Finale?",
        answer: "The Grand Finale venue (FISAT) provides high-speed Wi-Fi, dedicated power workstations, basic electrical lab testing tools (digital multimeters, oscilloscopes), and soldering stations. Teams should bring their core edge computing boards (e.g. ESP32, Raspberry Pi, STM32, Jetson) and specialized sensors. A backup pool of common development boards and sensor kits will be available on-site for emergency hardware needs."
      },
      {
        question: "What facilities and hospitality are provided during the 24-hour sprint?",
        answer: "Shortlisted finalist teams receive complete hospitality at FISAT, including breakfast, lunch, dinner, midnight energy snacks, coffee/tea stations, dedicated rest lounges, and 24/7 security."
      }
    ]
  },

  closingCta: {
    headline: "Ready to Fuel India's AI Future?",
    subline: "Assemble your squad, choose your track, and take your shot at exciting prizes and industry acclaim.",
    primaryBtn: "Register Your Team",
    secondaryBtn: "Explore AI Themes"
  }
};
