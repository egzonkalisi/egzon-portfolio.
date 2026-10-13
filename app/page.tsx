"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'skills' | 'experience' | 'contact'>('overview')
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

  // Lista Zyrtare me 15 Certifikatat - Emrat Saktë të Fajllave te Folderi Public
  const certificates = [
    { id: 1, title: "Ethical Hacker", category: "security", issuer: "Cisco Networking Academy", date: "2026", fileName: "EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Pentesting", "Security Assessment", "Cyber Defense"] },
    { id: 2, title: "Computer Hardware Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", fileName: "Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["Hardware Assembly L2", "PC Diagnostics", "Component Repair"] },
    { id: 3, title: "Basic Concepts of Cryptography", category: "security", issuer: "EIT Digital & ELTE Faculty", date: "2026", fileName: "egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf", tags: ["RSA Encryption", "Hash Functions", "Digital Signatures"] },
    { id: 4, title: "CS406: Information Security", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "certification egzon kalisi  Information Security.pdf", tags: ["Access Control", "Risk Assessment", "Data Protection"] },
    { id: 5, title: "CS402: Computer Communications & Networks", category: "network", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["TCP/IP", "Routing & Switching", "Network Protocols"] },
    { id: 6, title: "CS401: Operating Systems", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Kernel Concepts", "Process Management", "Memory Control"] },
    { id: 7, title: "CS301: Computer Architecture", category: "hardware", issuer: "Saylor Academy / University", date: "2026", fileName: "cERTIFICATE egzon Kalisi Computer Architecture.pdf", tags: ["Processor Design", "Instruction Sets", "Logic Gates"] },
    { id: 8, title: "CS302: Software Engineering", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "Egzon Kalisi Certifikate Software Engieneering.pdf", tags: ["System Architecture", "Software Lifecycle", "Agile Principles"] },
    { id: 9, title: "CS120: Bitcoin for Developers I", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "Certificate egzon kalisi Bitcoin for Developers I.pdf", tags: ["Blockchain Protocol", "Cryptography", "Decentralized Systems"] },
    { id: 10, title: "Future of Emotion AI", category: "systems", issuer: "28DIGITAL & Univ. of Turku", date: "2026", fileName: "egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf", tags: ["Artificial Intelligence", "Emotion AI", "Machine Learning"] },
    { id: 11, title: "Network Defense & Security Specialist", category: "network", issuer: "Cisco Networking Academy", date: "2025", fileName: "EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Firewalls", "IDS/IPS", "Threat Mitigation"] },
    { id: 12, title: "Advanced Linux System Administration", category: "systems", issuer: "Linux Professional Certification", date: "2025", fileName: "CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Linux CLI", "Bash Scripting", "System Security"] },
    { id: 13, title: "Cloud Infrastructure Fundamentals", category: "systems", issuer: "Enterprise IT Academy", date: "2025", fileName: "CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["Cloud Services", "Virtualization", "API Integration"] },
    { id: 14, title: "Digital Forensics & Incident Response", category: "security", issuer: "Cybersec Academy", date: "2025", fileName: "certification egzon kalisi  Information Security.pdf", tags: ["Forensics", "Log Analysis", "Incident Response"] },
    { id: 15, title: "IT Service & Help Desk Management", category: "hardware", issuer: "Global IT Institute", date: "2024", fileName: "Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["User Support", "SLA Management", "Asset Tracking"] }
  ]

  // Pozicionet Zyrtare Profesionale
  const officialTitles = [
    "IT Support Specialist",
    "Help Desk Support",
    "Junior Network Engineer (L1)",
    "Hardware Maintenance & Diagnostics (L2)",
    "Web Administrator",
    "Cybersecurity & Cryptography Specialist"
  ]

  // Aftësitë e Pasuruara
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

  // Përvoja e Punës në Kompani
  const experiences = [
    { title: "Major Gaming Center", role: "Manager & Lead IT Tech", period: "Shkup / Skopje", desc: "Menaxhimi i infrastrukturës teknike: Mirëmbajtja e dhjetëra kompjuterave të fuqishëm, rrjeti LAN/Switching, serverët lokalë dhe zgjidhja e avarive teknike." },
    { title: "Yahya Kemal College", role: "IT Support & Network Specialist", period: "Institucion Arsimor", desc: "Mirëmbajtja e rrjetit të shkollës, laboratorët IT, serverët dhe asistenca teknike për stafin dhe nxënësit." },
    { title: "Teleperformance", role: "IT Help Desk Specialist", period: "Enterprise Support", desc: "Zgjidhja e problemeve teknike korporative, mbështetja për softuerët e punës dhe linjat e sigurta të komunikimit." },
    { title: "Bonbon Resort", role: "IT Infrastructure & API Systems", period: "Resort Systems", desc: "Integrimi i sistemeve API, mirëmbajtja e rrjetit Wi-Fi/LAN, siguria e të dhënave dhe infrastrukturës digjitale." },
    { title: "Orange Films Studio / Studio Graff", role: "Media Specialist & Photographer", period: "Digital Production", desc: "Retushim digjital i fotografive, montazh profesional i videove dhe menaxhim i pajisjeve teknike." },
    { title: "Call Center Skopje / Grey System", role: "Systems Support Specialist", period: "IT Operations", desc: "Konfigurimi i sistemeve operative, optimizimi i kompjuterave dhe mbështetja teknike për stafin." }
  ]

  const openPdf = (fileName: string) => {
    window.open("/" + fileName, "_blank")
  }

  const filteredCerts = selectedCertCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCertCategory)

  if (!mounted) return null

  return (
    <div style={{ backgroundColor: "#020203", color: "#f8fafc", minHeight: "100vh", width: "100vw", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", boxSizing: "border-box", overflowX: "hidden", margin: 0, padding: "20px" }}>
      
      {/* CURSOR GLOW EFFECT */}
      <div style={{ position: "fixed", top: mousePos.y - 150, left: mousePos.x - 150, width: "300px", height: "300px", backgroundColor: "rgba(168, 85, 247, 0.15)", filter: "blur(100px)", pointerEvents: "none", borderRadius: "50%", zIndex: 1 }} />

      {/* BACKGROUND NEON GLOWS */}
      <div style={{ position: "fixed", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", backgroundColor: "rgba(124, 58, 237, 0.18)", filter: "blur(160px)", pointerEvents: "none", borderRadius: "50%" }} />
      <div style={{ position: "fixed", bottom: "-150px", right: "-100px", width: "500px", height: "500px", backgroundColor: "rgba(16, 185, 129, 0.12)", filter: "blur(150px)", pointerEvents: "none", borderRadius: "50%" }} />

      {/* HEADER WITH MODERN GLOW LOGO */}
      <header style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "20px", marginBottom: "35px", flexWrap: "wrap", gap: "15px", maxWidth: "1200px", margin: "0 auto 35px auto" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #a855f7, #10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", color: "#ffffff", fontSize: "20px", boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)", border: "1px solid rgba(255,255,255,0.2)" }}>
            [ EK ]
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "900", color: "#ffffff", letterSpacing: "1px", background: "linear-gradient(90deg, #ffffff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              EGZON KALISI
            </h1>
            <p style={{ margin: "2px 0 0 0", color: "#34d399", fontSize: "12px", fontWeight: "700" }}>
              IT Support Specialist & Junior Network Engineer
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <span style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.4)", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>
            ● SYSTEM ACTIVE // SKOPJE
          </span>
          <a href="https://www.linkedin.com/in/egzon-kalisi-9401962a1/" target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(90deg, #2563eb, #1d4ed8)", color: "#ffffff", textDecoration: "none", fontSize: "13px", padding: "9px 18px", borderRadius: "10px", fontWeight: "800", boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}>
            LinkedIn Profile ↗
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "20px 10px 40px 10px", maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ color: "#c084fc", fontSize: "13px", fontWeight: "800", letterSpacing: "4px", marginBottom: "12px", textTransform: "uppercase" }}>
          OFFICIAL IT PROFESSIONAL ARCHIVE // 2026
        </div>

        <h2 style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: "900", margin: "0 0 20px 0", color: "#ffffff", letterSpacing: "-1.5px", textShadow: "0 0 40px rgba(168, 85, 247, 0.5)" }}>
          EGZON KALISI
        </h2>

        {/* OFFICIAL ROLES BADGES */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "1000px", margin: "0 auto 35px auto" }}>
          {officialTitles.map((title, idx) => (
            <span key={idx} style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "8px 18px", borderRadius: "20px", fontSize: "13px", color: "#e2e8f0", fontWeight: "700", backdropFilter: "blur(5px)" }}>
              {title}
            </span>
          ))}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto" }}>
          <button onClick={() => setActiveTab('overview')} style={{ backgroundColor: activeTab === 'overview' ? "#a855f7" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'overview' ? "#a855f7" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'overview' ? "0 0 25px rgba(168, 85, 247, 0.6)" : "none" }}>
            Pasqyra Kryesore
          </button>
          <button onClick={() => setActiveTab('certificates')} style={{ backgroundColor: activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'certificates' ? "0 0 25px rgba(16, 185, 129, 0.6)" : "none" }}>
            Certifikatat Zyrtare ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('skills')} style={{ backgroundColor: activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'skills' ? "0 0 25px rgba(37, 99, 235, 0.6)" : "none" }}>
            Skills & Aftësitë Teknike
          </button>
          <button onClick={() => setActiveTab('experience')} style={{ backgroundColor: activeTab === 'experience' ? "#d97706" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'experience' ? "#d97706" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'experience' ? "0 0 25px rgba(217, 119, 6, 0.6)" : "none" }}>
            Përvoja në Kompani
          </button>
          <button onClick={() => setActiveTab('contact')} style={{ backgroundColor: activeTab === 'contact' ? "#ffffff" : "rgba(255,255,255,0.05)", color: activeTab === 'contact' ? "#000000" : "#ffffff", border: "1px solid rgba(255,255,255,0.2)", padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800" }}>
            Kontakt
          </button>
        </div>
      </section>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "35px auto" }}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "35px", backdropFilter: "blur(12px)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            
            <h3 style={{ fontSize: "24px", margin: "0 0 15px 0", color: "#c4b5fd", fontWeight: "800" }}>
              Rreth Egzon Kalisit // Professional Overview
            </h3>

            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#cbd5e1", margin: "0 0 25px 0" }}>
              Jam me bazë në Shkup dhe zotëroj përvojë profesionale në fushat e <strong>IT Support Specialist & Help Desk</strong>, <strong>Junior Network Engineer (L1) & Web Administrator</strong>, si dhe <strong>Hardware Maintenance & Assembly (L2)</strong>. Zotëroj 15 certifikata zyrtare kompjuterike nga institucione si <i>Cisco Networking Academy</i>, <i>EIT Digital</i> dhe <i>Saylor Academy / University</i>.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div style={{ backgroundColor: "rgba(168, 85, 247, 0.12)", border: "1px solid rgba(168, 85, 247, 0.3)", padding: "22px", borderRadius: "14px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#c4b5fd", fontSize: "16px" }}>🛠️ Help Desk & Hardware Support (L2)</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                  Diagnozë kompjuterike në nivel hardware, montim kompjuterësh, zgjidhje problemesh softuerike dhe asistencë teknike për përdoruesit.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "22px", borderRadius: "14px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#34d399", fontSize: "16px" }}>🌐 Network L1 & Web Administration</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                  Konfigurimi i switch-ave/router-ave Cisco, protokollat TCP/IP, administrimi i ueb-serverëve (cPanel, Nginx), DNS dhe SSL.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CERTIFICATES TAB (FIXED FUNCTIONAL PDF OPENING) */}
      {activeTab === 'certificates' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "35px auto" }}>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "30px" }}>
            {[
              { id: 'all', name: 'Të Gjitha (15)' },
              { id: 'security', name: 'Cybersecurity & Crypto' },
              { id: 'network', name: 'Networking & Web' },
              { id: 'hardware', name: 'Hardware & Diagnostics' },
              { id: 'systems', name: 'Systems & Software' }
            ].map(cat => (
              <button key={cat.id} onClick={() => setSelectedCertCategory(cat.id)} style={{ backgroundColor: selectedCertCategory === cat.id ? "#10b981" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (selectedCertCategory === cat.id ? "#10b981" : "rgba(255,255,255,0.12)"), padding: "9px 18px", borderRadius: "20px", cursor: "pointer", fontSize: "12px", fontWeight: "700" }}>
                {cat.name}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "22px" }}>
            {filteredCerts.map((cert) => (
              <div key={cert.id} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", backdropFilter: "blur(10px)" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ backgroundColor: "rgba(16, 185, 129, 0.18)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.4)", padding: "4px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "800" }}>
                      VERIFIED CERTIFICATE
                    </span>
                    <span style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "700" }}>{cert.date}</span>
                  </div>

                  <h3 style={{ margin: "10px 0 6px 0", fontSize: "17px", color: "#ffffff", fontWeight: "800" }}>
                    {cert.title}
                  </h3>

                  <p style={{ margin: "0 0 15px 0", fontSize: "13px", color: "#c4b5fd", fontWeight: "700" }}>
                    {cert.issuer}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "22px" }}>
                    {cert.tags.map((t, idx) => (
                      <span key={idx} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#cbd5e1", padding: "3px 8px", borderRadius: "6px", fontSize: "10px" }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DIRECT PDF OPENING FUNCTION */}
                <button 
                  onClick={() => openPdf(cert.fileName)}
                  style={{ width: "100%", background: "linear-gradient(90deg, #10b981, #059669)", color: "#ffffff", border: "none", padding: "12px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }}
                >
                  [ HAP CERTIFIKATËN PDF ↗ ]
                </button>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* SKILLS TAB */}
      {activeTab === 'skills' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "35px auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px", backdropFilter: "blur(10px)" }}>
                <h3 style={{ margin: "0 0 20px 0", color: "#60a5fa", fontSize: "17px", fontWeight: "800" }}>
                  {cat.category}
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} style={{ backgroundColor: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px", color: "#f1f5f9", fontWeight: "600" }}>
                        <span>{s.name}</span>
                        <span style={{ color: "#34d399", fontWeight: "800" }}>{s.level}</span>
                      </div>
                      <div style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.08)", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
                        <div style={{ width: s.level, background: "linear-gradient(90deg, #2563eb, #34d399)", height: "100%", borderRadius: "4px" }} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE TAB */}
      {activeTab === 'experience' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "35px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "22px" }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(217, 119, 6, 0.3)", borderRadius: "16px", padding: "25px", backdropFilter: "blur(10px)" }}>
                <span style={{ color: "#fbbf24", fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>
                  {exp.period}
                </span>
                <h3 style={{ margin: "8px 0 4px 0", fontSize: "18px", color: "#ffffff", fontWeight: "800" }}>
                  {exp.title}
                </h3>
                <div style={{ color: "#c4b5fd", fontSize: "13px", fontWeight: "700", marginBottom: "15px" }}>
                  {exp.role}
                </div>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px", lineHeight: "1.7" }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT TAB */}
      {activeTab === 'contact' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "520px", margin: "45px auto", textAlign: "center" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "38px", boxShadow: "0 25px 60px rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}>
            <h3 style={{ margin: "0 0 15px 0", fontSize: "24px", color: "#ffffff", fontWeight: "900" }}>Get In Touch</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>Email Zyrtar për Kontakt / Projektime IT:</p>
            
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "12px", fontSize: "18px", color: "#60a5fa", fontWeight: "800", marginBottom: "22px", border: "1px solid rgba(96, 165, 250, 0.3)" }}>
              info@egzonkalisi.com
            </div>

            <a href="mailto:info@egzonkalisi.com?subject=IT Technical Inquiry for Egzon Kalisi" style={{ display: "block", background: "linear-gradient(90deg, #2563eb, #1d4ed8)", color: "#ffffff", padding: "14px", borderRadius: "10px", textDecoration: "none", fontSize: "14px", fontWeight: "800", boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}>
              Dërgo Mesazh Menjëherë ↗
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "25px", marginTop: "60px", textAlign: "center", color: "#64748b", fontSize: "12px" }}>
        Egzon Kalisi &copy; 2026 // IT Support & Network Specialist
      </footer>

    </div>
  )
}
