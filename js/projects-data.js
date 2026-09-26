// ====================================================================
// ===== EDIT YOUR PROJECT DETAILS HERE ===============================
// ====================================================================
/**
 * Mohamed Sherif M - Portfolio Projects Data Store
 * Synchronized with Technical Projects from official resume.
 */

const projectsData = [
  // --------------------------------------------------------------------
  // PROJECT 01 — FEATURED CASE STUDY
  // --------------------------------------------------------------------
  {
    id: "disaster-relief-system",
    number: "01",
    featured: true,
    title: "Disaster Relief Management System",
    category: "Full-Stack Web Application",
    year: "2024",
    shortDescription: "Engineered a dynamic full-stack web application to centralize disaster incident reporting, victim tracking, relief inventory, and camp distributions.",
    coverImage: "images/projects/disaster-relief-dashboard.jpg",
    tags: ["Python", "Flask", "MySQL", "JavaScript", "Bootstrap"],
    liveDemo: "#", // Replace with your live deployment URL when ready
    github: "https://github.com/techsherif-arch",
    
    // Official Resume Bullet Points
    resumeBullets: [
      "Engineered a dynamic full-stack web application to centralize disaster incident reporting, victim tracking, relief inventory, and camp distributions.",
      "Integrated database schemas with MySQL to execute SQL relational queries efficiently and minimize processing latency.",
      "Designed dynamic, user-friendly front-end web interfaces utilizing custom CSS styling and responsive Bootstrap components."
    ],

    // Comprehensive 8-point Case Study
    caseStudy: {
      step01_Overview: "The Disaster Relief Management System is an end-to-end full-stack web application developed to centralize crisis operations. In emergency situations, immediate visibility into incident locations, victim status, emergency inventories, and camp allocations is crucial to coordinating life-saving aid efficiently.",
      
      step02_Problem: "During natural and regional crises, relief agencies frequently encounter severe communication latency, decentralized manual paperwork, inaccurate victim tracking, shelter capacity overruns, and unlogged citizen emergency requests, resulting in critical delays in relief distribution.",
      
      step03_Solution: "Engineered a dynamic, web-based platform using Python and Flask on the backend with MySQL relational database schemas, complemented by high-performance responsive frontend interfaces built with custom CSS and Bootstrap.",
      
      step04_KeyModules: [
        {
          code: "MOD-01",
          name: "Incident & Affected Zone Tracking",
          desc: "Centralized logging and situation mapping of active disaster incidents and emergency severity levels."
        },
        {
          code: "MOD-02",
          name: "Victim Tracking & People Registry",
          desc: "Digital admission registry capturing evacuee status, medical priority flags, and family groupings."
        },
        {
          code: "MOD-03",
          name: "Relief Camp Allocations",
          desc: "Automated camp capacity tracking, volunteer team assignments, and shelter occupancy management."
        },
        {
          code: "MOD-04",
          name: "Emergency Inventory Control",
          desc: "Real-time stock monitoring for food rations, water purification kits, and critical medical supplies."
        },
        {
          code: "MOD-05",
          name: "Public Relief Requests Portal",
          desc: "Accessible web intake portal for affected citizens to lodge urgent relief requests."
        },
        {
          code: "MOD-06",
          name: "Camp Distributions & Audit Trail",
          desc: "Comprehensive dispatch logging ensuring end-to-end accountability across relief distribution networks."
        }
      ],
      
      step05_Technologies: [
        { name: "Python", category: "Backend Engine", desc: "Core business logic, data models, and server-side request processing" },
        { name: "Flask", category: "Web Framework", desc: "Routing, view controllers, and RESTful API endpoints" },
        { name: "MySQL & SQL", category: "Relational Database", desc: "Normalized schemas, relational integrity, and optimized query execution" },
        { name: "JavaScript", category: "Frontend Logic", desc: "Dynamic DOM manipulation, client-side validation, and interactive metrics" },
        { name: "Bootstrap & CSS3", category: "UI & Styling", desc: "Custom responsive components, 12-column grid layout, and dark mode interface" }
      ]
    },

    gallery: [
      {
        url: "images/projects/disaster-relief-dashboard.jpg",
        caption: "Main Operations Dashboard - Global Incident Overview & Live Resource Metrics"
      },
      {
        url: "images/projects/disaster-relief-login.jpg",
        caption: "Secure Portal Authentication - Role-based Relief Coordinator Login"
      },
      {
        url: "images/projects/disaster-relief-inventory.jpg",
        caption: "Resource Inventory & Stock Allocation Management Interface"
      },
      {
        url: "images/projects/disaster-relief-camps.jpg",
        caption: "Relief Camp Status, Capacity Tracking & Citizen Request Overview"
      },
      {
        url: "images/projects/disaster-relief-people.jpg",
        caption: "Evacuee Registry & Family Admission Records with Medical Priority Flags"
      },
      {
        url: "images/projects/disaster-relief-distributions.jpg",
        caption: "Relief Distribution Tracking & Logistics Dispatch Audit Trail"
      }
    ]
  },

  // --------------------------------------------------------------------
  // PROJECT 02 — RESUME PROJECT
  // --------------------------------------------------------------------
  {
    id: "autonomous-robot",
    number: "02",
    featured: false,
    title: "AI-Driven Autonomous Robot",
    category: "Python, AI & Arduino",
    year: "2024",
    shortDescription: "Programmed control and navigation algorithms in Python on microcontrollers for real-time decision-making logic across multi-domain applications.",
    coverImage: "images/projects/disaster-relief-dashboard.jpg",
    tags: ["Python", "AI Algorithms", "Arduino"],
    liveDemo: "#",
    github: "https://github.com/techsherif-arch",
    resumeBullets: [
      "Programmed control and navigation algorithms in Python on microcontrollers for real-time decision-making logic.",
      "Implemented sensor-driven automated routines designed for intelligent control across multi-domain applications."
    ]
  },

  // --------------------------------------------------------------------
  // PROJECT 03 — RESUME PROJECT
  // --------------------------------------------------------------------
  {
    id: "women-safety-tracker",
    number: "03",
    featured: false,
    title: "Location Tracking System for Women Safety",
    category: "IoT & Embedded Systems",
    year: "2023",
    shortDescription: "Built an IoT-based emergency tracking system utilizing GPS modules for real-time geolocation retrieval and GSM modules for instant automated emergency SMS alerts.",
    coverImage: "images/projects/disaster-relief-camps.jpg",
    tags: ["Arduino", "GPS", "GSM Modules"],
    liveDemo: "#",
    github: "https://github.com/techsherif-arch",
    resumeBullets: [
      "Built an IoT-based emergency tracking system utilizing GPS modules for real-time geolocation retrieval and GSM modules for instant automated emergency SMS alerts.",
      "Configured hardware-software communication interfaces to ensure zero-delay signal transmission during emergency triggers."
    ]
  },

  // --------------------------------------------------------------------
  // PROJECT 04 — RESUME PROJECT
  // --------------------------------------------------------------------
  {
    id: "edunet-website-clone",
    number: "04",
    featured: false,
    title: "Edunet Website Clone",
    category: "Frontend Web Development",
    year: "2024",
    shortDescription: "Developed a fully responsive web application clone using custom CSS layouts and dynamic JavaScript DOM manipulation to practice UI design standards.",
    coverImage: "images/projects/disaster-relief-login.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "#",
    github: "https://github.com/techsherif-arch",
    resumeBullets: [
      "Developed a fully responsive web application clone using custom CSS layouts and dynamic JavaScript DOM manipulation to practice UI design standards."
    ]
  }
];

// Export to window
if (typeof window !== "undefined") {
  window.portfolioProjects = projectsData;
}
