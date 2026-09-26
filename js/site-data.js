// ====================================================================
// ===== EDIT YOUR PERSONAL DETAILS HERE ===============================
// ====================================================================
/**
 * Mohamed Sherif M - Personal Portfolio Data
 * Synchronized with official resume details.
 */

const siteData = {
  // Personal & Contact Info
  personal: {
    fullName: "MOHAMED SHERIF M",
    displayName: "Mohamed Sherif M",
    jobTitle: "Python Full-Stack Developer | MCA Graduate",
    eyebrow: "I'M A WEB DEVELOPER",
    headline: "Hi, I'm Mohamed Sherif M",
    supportingStatement: "Building clean and responsive web experiences.",
    professionalSummary: "MCA graduate and Python Full-Stack Developer with practical experience in designing, building, and deploying web applications using Python, Django, Flask, MySQL, and JavaScript. Proficient in engineering RESTful APIs, relational database schemas, and modern responsive front-end layouts using ReactJS and Bootstrap. Demonstrated strong analytical and problem-solving skills across full-stack software development projects. Seeking an entry-level Software Engineer or Full-Stack Developer position to contribute scalable technical solutions.",
    email: "m.sherif22118@gmail.com",
    phone: "+91 9791591830",
    location: "Chennai, India",
    profilePhoto: "images/profile/profile-photo.jpg",
    resumePdf: "resume/Mohamed-Sherif-Resume.pdf"
  },

  // Real Verified Social & Professional Links from Resume
  socialLinks: {
    github: "https://github.com/techsherif-arch",
    linkedin: "https://linkedin.com/in/mohamed-sherif-m-7061a3246",
    naukri: "#"
  },

  // Technical Skills from Resume
  skillCategories: {
    programmingLanguages: [
      { name: "Python", icon: "devicon-python-plain colored", tag: "Primary Backend" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", tag: "Frontend Logic (ES6+)" }
    ],
    webFrameworksUI: [
      { name: "Django", icon: "devicon-django-plain colored", tag: "Full-Stack MVC" },
      { name: "ReactJS", icon: "devicon-react-original colored", tag: "Component UI" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", tag: "Bootstrap 5 Responsive" },
      { name: "HTML5", icon: "devicon-html5-plain colored", tag: "Semantic Markup" },
      { name: "CSS3", icon: "devicon-css3-plain colored", tag: "Custom Styling & Flex/Grid" }
    ],
    database: [
      { name: "MySQL", icon: "devicon-mysql-plain colored", tag: "Relational DB" },
      { name: "SQL", icon: "bi-table", tag: "Complex Queries & Optimization" }
    ],
    toolsHardware: [
      { name: "Git & GitHub", icon: "devicon-git-plain colored", tag: "Version Control" },
      { name: "VS Code", icon: "devicon-vscode-plain colored", tag: "Development IDE" },
      { name: "Arduino", icon: "devicon-arduino-plain colored", tag: "Microcontrollers" },
      { name: "GPS/GSM Modules", icon: "bi-broadcast-pin", tag: "Telemetry & SMS Alerts" }
    ]
  },

  // Real Education Information from Resume
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
      period: "2023 – 2025",
      score: "CGPA: 7.49",
      description: "Comprehensive post-graduate software engineering education covering full-stack architecture, relational database management systems, algorithms, and practical technical project execution."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "The Quaide Milleth College for Men",
      period: "2020 – 2023",
      score: "CGPA: 7.3",
      description: "Undergraduate computer applications coursework emphasizing programming fundamentals, web technologies, software design principles, and relational databases."
    }
  ],

  // Real Internship Experience from Resume
  internship: {
    role: "Front End Development Intern",
    company: "Edunet Foundation / IBM SkillsBuild",
    period: "June 2024 – July 2024",
    duration: "6 Weeks Program",
    bullets: [
      "Engineered responsive user interfaces utilizing HTML5, CSS3, and JavaScript during a 6-week intensive software development internship program.",
      "Applied modern front-end web development practices to build clean, maintainable, and cross-browser-compatible UI components.",
      "Collaborated on project deliverables and code reviews, optimizing DOM manipulation and styling structures to improve page rendering speeds and user experience."
    ]
  },

  // Real Verified Certifications & Professional Development
  certifications: [
    {
      id: "edunet-internship",
      title: "Front End Development (FED) Internship Certificate",
      issuer: "Edunet Foundation & AICTE / IBM SkillsBuild",
      badge: "AICTE & Edunet Verified",
      date: "June 2024 – July 2024",
      credentialId: "ID: INTERNSHIP_1715250706663ca6120b864",
      icon: "bi-laptop",
      imageUrl: "images/certifications/edunet-internship.jpg",
      pdfUrl: "images/certifications/edunet-internship.pdf",
      description: "Successfully completed a 6-week intensive software development internship building responsive front-end user interfaces using HTML5, CSS3, and modern JavaScript."
    },
    {
      id: "ibm-html-css-js",
      title: "HTML, CSS, and JavaScript for Beginners",
      issuer: "IBM Developer Skills Network / SLA Institute",
      badge: "IBM Skills Network",
      date: "September 2026",
      credentialId: "Course WD0102EN",
      icon: "bi-filetype-html",
      imageUrl: "images/certifications/ibm-html-css-js.jpg",
      pdfUrl: "images/certifications/ibm-html-css-js.pdf",
      description: "Comprehensive foundational certification in core web engineering, modern HTML5 semantic architecture, flexible CSS layouts, and DOM-driven JavaScript interactions."
    },
    {
      id: "nptel-cloud-computing",
      title: "Cloud Computing (Elite Certification)",
      issuer: "NPTEL & IIT Kharagpur (Govt. of India)",
      badge: "Elite Score (64%)",
      date: "Jul–Oct 2024 (12-Week Course)",
      credentialId: "Roll: NPTEL24CS118S952500696",
      icon: "bi-cloud-check-fill",
      imageUrl: "images/certifications/nptel-cloud-computing.jpg",
      pdfUrl: "images/certifications/nptel-cloud-computing.pdf",
      description: "Rigorous 12-week national certification covering cloud architecture, distributed systems, virtualization, serverless models, storage clusters, and infrastructure security."
    },
    {
      id: "simplilearn-iot",
      title: "Introduction to IoT",
      issuer: "Simplilearn SkillUp",
      badge: "SkillUp Credential",
      date: "March 4, 2025",
      credentialId: "Code: 7994232",
      icon: "bi-cpu-fill",
      imageUrl: "images/certifications/simplilearn-iot.jpg",
      pdfUrl: "images/certifications/simplilearn-iot.pdf",
      description: "Foundational training in Internet of Things architecture, sensor integration, microcontroller programming, and real-time smart device communication protocols."
    },
    {
      id: "alpha-arts-conference",
      title: "International Conference Research Paper Presentation",
      issuer: "Alpha Arts and Science College (University of Madras)",
      badge: "Research Appreciation",
      date: "March 7, 2025",
      credentialId: "Next Gen Intelligence Conference",
      icon: "bi-award-fill",
      imageUrl: "images/certifications/alpha-arts-conference.jpg",
      pdfUrl: "images/certifications/alpha-arts-conference.pdf",
      description: "Awarded Certificate of Appreciation for presenting research paper: 'Arduino GPS and GSM Based Location Tracking System for Women Safety' at an international AI conference."
    },
    {
      id: "cvesd-spoken-english",
      title: "CVESD Certification: Spoken English & Communication",
      issuer: "Council for Vocational Education & Skill Development",
      badge: "Grade 'A' Certified",
      date: "June 12, 2021",
      credentialId: "Reg No: 312408080221",
      icon: "bi-chat-quote-fill",
      imageUrl: "images/certifications/cvesd-spoken-english.jpg",
      pdfUrl: "images/certifications/cvesd-spoken-english.pdf",
      description: "Successfully completed vocational examination in Spoken English and professional communication with Grade 'A' at Quaide Milleth College Campus under CVESD (Govt. of India registered)."
    }
  ]
};

// Export globally
if (typeof window !== "undefined") {
  window.siteData = siteData;
}
