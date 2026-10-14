"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'skills' | 'experience' | 'contact'>('certificates')
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('all')
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Lista Zyrtare me Emrat Ekzakte të Fajllave sipas GitHub-it tënd
  const certificates = [
    { id: 1, title: "Ethical Hacker", category: "security", issuer: "Cisco Networking Academy", date: "2026", fileName: "EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Pentesting", "Security Assessment", "Cyber Defense"] },
    { id: 2, title: "Computer Hardware Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", fileName: "Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["Hardware Assembly L2", "PC Diagnostics", "Component Repair"] },
    { id: 3, title: "IT Customer Support Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", fileName: "IT_Customer_Support_Basics_certificate_egzon-kalisi-ykc-edu-mk_d6eec463-3ae7-4f5b-8801-f2d5160e59b1.pdf", tags: ["Help Desk Support", "Troubleshooting", "User Assistance"] },
    { id: 4, title: "Networking Basics", category: "network", issuer: "Cisco Networking Academy", date: "2026", fileName: "Networking_Basics_certificate_egzon-kalisi-ykc-edu-mk_08273502-ba45-4b71-b2fd-bb6dfef5bcbb.pdf", tags: ["LAN/WAN", "TCP/IP", "Cisco Routers & Switches"] },
    { id: 5, title: "Operating Systems Basics", category: "systems", issuer: "Cisco Networking Academy", date: "2026", fileName: "Operating_Systems_Basics_certificate_egzon-kalisi-ykc-edu-mk_59c0ac65-c8db-489c-abfb-659e05877e5f.pdf", tags: ["Windows / Linux Administration", "Kernel Concepts", "OS Setup"] },
    { id: 6, title: "Introduction to IoT", category: "systems", issuer: "Cisco Networking Academy", date: "2026", fileName: "Introduction_to_IoT_certificate_egzon-kalisi-ykc-edu-mk_0f429a53-4c9c-4974-8140-775ea157653c.pdf", tags: ["Internet of Things", "Smart Systems", "Connectivity"] },
    { id: 7, title: "Basic Concepts of Cryptography", category: "security", issuer: "EIT Digital & ELTE Faculty", date: "2026", fileName: "egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses.pdf", tags: ["RSA Encryption", "Hash Functions", "Digital Signatures"] },
    { id: 8, title: "CS406: Information Security", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "certification egzon kalisi Information Security.pdf", tags: ["Access Control", "Risk Assessment", "Data Protection"] },
    { id: 9, title: "CS402: Computer Communications & Networks", category: "network", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["TCP/IP", "Routing & Switching", "Protocols"] },
    { id: 10, title: "CS401: Operating Systems", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Kernel Management", "Process Scheduling", "Memory Control"] },
    { id: 11, title: "CS301: Computer Architecture", category: "hardware", issuer: "Saylor Academy / University", date: "2026", fileName: "cERTIFICATE egzon Kalisi Computer Architecture.pdf", tags: ["Processor Design", "Instruction Sets", "Logic Gates"] },
    { id: 12, title: "CS302: Software Engineering", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "Egzon Kalisi Certifikate Software Engieneering.pdf", tags: ["System Architecture", "Software Lifecycle", "Agile"] },
    { id: 13, title: "CS120: Bitcoin for Developers I", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "Certificate egzon kalisi Bitcoin for Developers I.pdf", tags: ["Blockchain Protocol", "Cryptography", "Decentralized Systems"] },
    { id: 14, title: "Future of Emotion AI", category: "systems", issuer: "28DIGITAL & Univ. of Turku", date: "2026", fileName: "egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf", tags: ["Artificial Intelligence", "Emotion AI", "Machine Learning"] },
    { id: 15, title: "Introduction to IoT (Advanced Update)", category: "systems", issuer: "Cisco Networking Academy", date: "2026", fileName: "IntrotoIoTUpdate20261013-22-x5wc81.pdf", tags: ["IoT Infrastructure", "Smart Devices", "Sensors & APIs"] }
  ]

  const officialTitles = [
    "IT Support Specialist",
    "Help Desk Support",
    "Junior Network Engineer (L1)",
    "Hardware Maintenance & Diagnostics (L2)",
    "Web Administrator",
    "Cybersecurity Practitioner"
  ]

  const skillCategories = [
    {
      category: "🛠️ IT SUPPORT & HELP DESK SPECIALIST",
      skills: [
        { name: "Hardware & Software Diagnostics & Troubleshooting", level: "98%" },
        { name: "User Technical Support (Remote & On-Site Helpdesk)", level: "96%" },
        { name: "Windows / Linux / macOS OS Deployment & Imaging", level: "95%" },
        { name: "Active Directory, Ticketing Systems & User Access", level: "93%" },
        { name: "IT Service Desk Management & Escalation", level: "94%" }
      ]
    },
    {
      category: "🌐 JUNIOR NETWORK ENGINEER (L1) & WEB ADMIN",
      skills: [
        { name: "LAN / WAN Architecture, Switches & Routers (Cisco)", level: "92%" },
        { name: "TCP/IP Protocols, DNS, DHCP, Subnetting & VPNs", level: "95%" },
        { name: "Web Server Administration (cPanel, Nginx, Apache)", level: "90%" },
        { name: "Domain Routing, SSL Configuration & Web Hosting", level: "92%" },
        { name: "Network Traffic Analysis (Wireshark, Packet Sniffing)", level: "88%" }
      ]
    },
    {
      category: "⚡ HARDWARE MAINTENANCE & ASSEMBLY (LEVEL 2)",
      skills: [
        { name: "Advanced PC Assembly & Custom Gaming Rig Building", level: "99%" },
        { name: "Hardware Component Diagnostics & Chip-Level Fixes", level: "96%" },
        { name: "Server Infrastructure & Disk RAID Maintenance", level: "93%" },
        { name: "Power Supply & Thermal Management Testing", level: "95%" }
      ]
    },
    {
      category: "🔒 CYBERSECURITY & CRYPTOGRAPHY",
      skills: [
        { name: "Ethical Hacking & Penetration Testing Assessment", level: "91%" },
        { name: "Public Key Cryptography, RSA & Hash Algorithms", level: "89%" },
        { name: "Access Control, Risk Assessment & Data Protection", level: "93%" }
      ]
    }
  ]

  const experiences = [
    { title: "Major Gaming Center", role: "Manager & Lead IT Tech", period: "Shkup / Skopje", desc: "Menaxhimi i infrastrukturës teknike: Mirëmbajtja e dhjetëra kompjuterave të fuqishëm, rrjeti LAN/Switching, serverët lokalë dhe zgjidhja e avarive teknike." },
    { title: "Yahya Kemal College", role: "IT Support & Network Specialist", period: "Institucion Arsimor", desc: "Mirëmbajtja e rrjetit të shkollës, laboratorët IT, serverët dhe asistenca teknike për stafin dhe nxënësit." },
    { title: "Teleperformance", role: "IT Help Desk Specialist", period: "Enterprise Support", desc: "Zgjidhja e problemeve teknike korporative, mbështetja për softuerët e punës dhe linjat e sigurta të komunikimit." },
    { title: "Bonbon Resort", role: "IT Infrastructure & API Systems", period: "Resort Systems", desc: "Integrimi i sistemeve API, mirëmbajtja e rrjetit Wi-Fi/LAN, siguria e të dhënave dhe infrastrukturës digjitale." },
    { title: "Orange Films Studio / Studio Graff", role: "Media Specialist & Photographer", period: "Digital Production", desc: "Retushim digjital i fotografive, montazh profesional i videove dhe menaxhim i pajisjeve teknike." },
    { title: "Call Center Skopje / Grey System", role: "Systems Support Specialist", period: "IT Operations", desc: "Konfigurimi i sistemeve operative, optimizimi i kompjuterave dhe mbështetja teknike për stafin." }
  ]

  const filteredCerts = selectedCertCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCertCategory)

  if (!mounted) return null

  return (
    <div style={{ backgroundColor: "#020204", color: "#f8fafc", minHeight: "100vh", width: "100%", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", boxSizing: "border-box", overflowX: "hidden", margin: 0, padding: "20px" }}>
      
      {/* ANIMATED SMOKE / FOG STYLES */}
      <style jsx global>{`
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          background-color: #020204 !important;
          overflow-x: hidden !important;
        }
        @keyframes smokeFlowLeft {
          0% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.18; }
          50% { transform: translateY(-40px) rotate(5deg) scale(1.12); opacity: 0.28; }
          100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.18; }
        }
        @keyframes smokeFlowRight {
          0% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.15; }
          50% { transform: translateY(-50px) rotate(-6deg) scale(1.15); opacity: 0.25; }
          100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.15; }
        }
      `}</style>

      {/* LIGHT CURSOR GLOW */}
      <div style={{ position: "fixed", top: mousePos.y - 120, left: mousePos.x - 120, width: "240px", height: "240px", backgroundColor: "rgba(168, 85, 247, 0.12)", filter: "blur(90px)", pointerEvents: "none", borderRadius: "50%", zIndex: 1 }} />

      {/* AMBIENT SMOKE LAYERS ON EDGES */}
      <div style={{ position: "fixed", top: "5%", left: "-180px", width: "500px", height: "700px", background: "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(2, 2, 4, 0) 70%)", filter: "blur(100px)", pointerEvents: "none", zIndex: 1, animation: "smokeFlowLeft 12s infinite ease-in-out" }} />
      <div style={{ position: "fixed", bottom: "5%", right: "-180px", width: "500px", height: "700px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(2, 2, 4, 0) 70%)", filter: "blur(100px)", pointerEvents: "none", zIndex: 1, animation: "smokeFlowRight 14s infinite ease-in-out" }} />

      {/* HEADER SECTION */}
      <header style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "18px", marginBottom: "35px", flexWrap: "wrap", gap: "15px", maxWidth: "1200px", margin: "0 auto 35px auto" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#09090b", border: "1px solid rgba(168, 85, 247, 0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#a855f7", fontSize: "15px", boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}>
            EK
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "900", color: "#ffffff", letterSpacing: "1px" }}>
              EGZON KALISI
            </h1>
            <p style={{ margin: "2px 0 0 0", color: "#34d399", fontSize: "11px", fontWeight: "700" }}>
              IT Support Specialist & Junior Network Engineer
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: "rgba(16, 185, 129, 0.12)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "5px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" }}>
            ● SYSTEM ACTIVE // SKOPJE
          </span>
          <a href="https://www.linkedin.com/in/egzon-kalisi-9401962a1/" target="_blank" rel="noopener noreferrer" style={{ background: "#2563eb", color: "#ffffff", textDecoration: "none", fontSize: "12px", padding: "8px 16px", borderRadius: "8px", fontWeight: "800", boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)" }}>
            LinkedIn Profile ↗
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "20px 10px 40px 10px", maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ color: "#c084fc", fontSize: "12px", fontWeight: "800", letterSpacing: "4px", marginBottom: "12px", textTransform: "uppercase" }}>
          OFFICIAL IT PROFESSIONAL ARCHIVE
        </div>

        <h2 style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: "900", margin: "0 0 20px 0", color: "#ffffff", letterSpacing: "-1.5px", textShadow: "0 0 35px rgba(168, 85, 247, 0.4)" }}>
          EGZON KALISI
        </h2>

        {/* OFFICIAL ROLES BADGES */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "1000px", margin: "0 auto 35px auto" }}>
          {officialTitles.map((title, idx) => (
            <span key={idx} style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "8px 18px", borderRadius: "20px", fontSize: "12px", color: "#e2e8f0", fontWeight: "700", backdropFilter: "blur(5px)" }}>
              {title}
            </span>
          ))}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          <button onClick={() => setActiveTab('certificates')} style={{ backgroundColor: activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "800" }}>
            Certifikatat Zyrtare ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('overview')} style={{ backgroundColor: activeTab === 'overview' ? "#a855f7" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'overview' ? "#a855f7" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "800" }}>
            Pasqyra Kryesore
          </button>
          <button onClick={() => setActiveTab('skills')} style={{ backgroundColor: activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "800" }}>
            Skills & Aftësitë Teknike
          </button>
          <button onClick={() => setActiveTab('experience')} style={{ backgroundColor: activeTab === 'experience' ? "#d97706" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'experience' ? "#d97706" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "800" }}>
            Përvoja në Kompani
          </button>
          <button onClick={() => setActiveTab('contact')} style={{ backgroundColor: activeTab === 'contact' ? "#ffffff" : "rgba(255,255,255,0.05)", color: activeTab === 'contact' ? "#000000" : "#ffffff", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "800" }}>
            Kontakt
          </button>
        </div>
      </section>

      {/* CERTIFICATES TAB */}
      {activeTab === 'certificates' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "35px auto" }}>
          
          <div style={{ display:
