"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'skills' | 'experience' | 'contact'>('overview')
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lista Zyrtare e Certifikatave me Rregullim të Plotë të URL-ve me spaces
  const rawCertificates = [
    { id: 1, title: "Ethical Hacker", category: "security", issuer: "Cisco Networking Academy", date: "2026", fileName: "EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Pentesting", "Vulnerability Assessment", "Cyber Defense"] },
    { id: 2, title: "Computer Hardware Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", fileName: "Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["Hardware Assembly", "PC Diagnostics", "Component Repair"] },
    { id: 3, title: "Basic Concepts of Cryptography", category: "security", issuer: "EIT Digital & ELTE Faculty", date: "2026", fileName: "egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf", tags: ["RSA Encryption", "Hash Functions", "Digital Signatures"] },
    { id: 4, title: "CS406: Information Security", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "certification egzon kalisi  Information Security.pdf", tags: ["Access Control", "Risk Assessment", "Data Protection"] },
    { id: 5, title: "CS402: Computer Communications & Networks", category: "network", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["TCP/IP", "Routing & Switching", "Network Protocols"] },
    { id: 6, title: "CS401: Operating Systems", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Kernel Concepts", "Process Management", "Memory Control"] },
    { id: 7, title: "CS301: Computer Architecture", category: "hardware", issuer: "Saylor Academy / University", date: "2026", fileName: "cERTIFICATE egzon Kalisi Computer Architecture.pdf", tags: ["Processor Design", "Instruction Sets", "Logic Gates"] },
    { id: 8, title: "CS302: Software Engineering", category: "systems", issuer: "Saylor Academy / University", date: "2026", fileName: "Egzon Kalisi Certifikate Software Engieneering.pdf", tags: ["System Architecture", "Software Lifecycle", "Agile"] },
    { id: 9, title: "CS120: Bitcoin for Developers I", category: "security", issuer: "Saylor Academy / University", date: "2026", fileName: "Certificate egzon kalisi Bitcoin for Developers I.pdf", tags: ["Blockchain Protocol", "Cryptography", "Decentralized Systems"] },
    { id: 10, title: "Future of Emotion AI", category: "systems", issuer: "28DIGITAL & Univ. of Turku", date: "2026", fileName: "egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf", tags: ["Artificial Intelligence", "Emotion AI", "Machine Learning"] }
  ]

  // Rregullimi i sigurt i linqeve duke përdorur encodeURI
  const certificates = rawCertificates.map(cert => ({
    ...cert,
    pdfUrl: `/${encodeURIComponent(cert.fileName)}`
  }))

  // Rolat dhe Titujt tuaj Zyrtarë
  const officialTitles = [
    "IT Support & Help Desk Specialist",
    "IT Technician",
    "Junior Network & Web Administrator",
    "Hardware Diagnostics & PC Assembly Specialist",
    "Cybersecurity & Cryptography Practitioner",
    "Systems & API Infrastructure Support"
  ]

  // Aftësitë e Detajuara sipas Profileve Tuaja
  const skillCategories = [
    {
      category: "💻 IT SUPPORT & HELP DESK TECHNICIAN",
      skills: [
        { name: "Hardware & Software Diagnostics / Troubleshooting", level: "98%" },
        { name: "User Technical Support (Remote & On-Site Helpdesk)", level: "96%" },
        { name: "Windows / Linux / macOS OS Installation & Deployment", level: "95%" },
        { name: "Active Directory, User Permissions & IT Ticketing", level: "92%" },
        { name: "PC Assembly, Hardware Repair & Maintenance", level: "99%" }
      ]
    },
    {
      category: "🌐 JUNIOR NETWORK & WEB ADMINISTRATOR",
      skills: [
        { name: "LAN / WAN Network Setup & Architecture", level: "92%" },
        { name: "Cisco Switches & Routers Configuration", level: "90%" },
        { name: "TCP/IP, DNS, DHCP, Subnetting & VPNs", level: "94%" },
        { name: "Web Server Administration (cPanel, Nginx, Apache)", level: "88%" },
        { name: "Domain Management, SSL Certificates & Web Hosting", level: "90%" }
      ]
    },
    {
      category: "🔒 CYBERSECURITY & CRYPTOGRAPHY",
      skills: [
        { name: "Ethical Hacking & Vulnerability Assessment", level: "90%" },
        { name: "Public Key Cryptography, RSA & Hash Algorithms", level: "88%" },
        { name: "Information Security Policies & Risk Mitigation", level: "92%" },
        { name: "Network Packet Analysis (Wireshark & Traffic Security)", level: "86%" }
      ]
    },
    {
      category: "⚙️ SYSTEMS & API INFRASTRUCTURE",
      skills: [
        { name: "System Integration & API Endpoint Support", level: "89%" },
        { name: "Computer Architecture & Logic System Design", level: "87%" },
        { name: "Software Engineering Principles & System Lifecycle", level: "85%" }
      ]
    }
  ]

  // Përvoja Zyrtare nga Kompanitë
  const experiences = [
    { title: "Major Gaming Center", role: "Manager & Lead IT Tech", period: "Shkup / Skopje", desc: "Udhëheqja e infrastrukturës teknike të dega kryesore: Mirëmbajtja e dhjetëra PC-ve të fuqishme, rrjeti LAN/Switching, serverët lokalë dhe zgjidhja e çdo avarie teknike." },
    { title: "Yahya Kemal College", role: "IT Support & Network Specialist", period: "Institucion Arsimor", desc: "Kujdesi për rrjetin kompjuterik të shkollës, mirëmbajtja e laboratorëve IT, serverët dhe asistenca teknike për stafin arsimor." },
    { title: "Teleperformance", role: "IT Help Desk Specialist", period: "Enterprise Technical Support", desc: "Zgjidhja e problemeve teknike korporative, mbështetja për softuerët e punës, konfigurimi i llogarive dhe linjat e sigurta të komunikimit." },
    { title: "Bonbon Resort", role: "IT Infrastructure & API Systems", period: "Resort Systems", desc: "Integrimi i sistemeve API, mirëmbajtja e rrjetit Wi-Fi/LAN, siguria e të dhënave dhe infrastrukturës digjitale." },
    { title: "Orange Films Studio / Studio Graff", role: "Media Specialist & Photographer", period: "Digital Production", desc: "Retushim digjital i fotografive, montazh profesional i videove dhe menaxhim i pajisjeve teknike të produksionit." },
    { title: "Call Center Skopje / Grey System", role: "Systems Specialist & Tech Support", period: "IT Operations", desc: "Konfigurimi i sistemeve operative, optimizimi i kompjuterave dhe mbështetja teknike për stafin operativ." }
  ]

  const filteredCerts = selectedCertCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCertCategory)

  if (!mounted) return null

  return (
    <div style={{ backgroundColor: "#030308", color: "#f8fafc", minHeight: "100vh", width: "100%", fontFamily: "'Inter', system-ui, -apple-system, sans-serif", padding: "20px sm:40px", boxSizing: "border-box" }}>
      
      {/* AMBIENT LIGHT GLOW EFFECTS */}
      <div style={{ position: "fixed", top: "-180px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", backgroundColor: "rgba(124, 58, 237, 0.18)", filter: "blur(160px)", pointerEvents: "none", borderRadius: "50%" }} />
      <div style={{ position: "fixed", bottom: "-180px", right: "-100px", width: "500px", height: "500px", backgroundColor: "rgba(16, 185, 129, 0.12)", filter: "blur(150px)", pointerEvents: "none", borderRadius: "50%" }} />

      {/* HEADER SECTION WITH MODERN NEON LOGO */}
      <header style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "20px", marginBottom: "35px", flexWrap: "wrap", gap: "15px" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, #7c3aed, #059669)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", color: "#ffffff", fontSize: "22px", boxShadow: "0 0 25px rgba(124, 58, 237, 0.6)", border: "1px solid rgba(255,255,255,0.2)" }}>
            EK
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: "900", color: "#ffffff", letterSpacing: "1.5px", background: "linear-gradient(90deg, #ffffff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              EGZON KALISI
            </h1>
            <p style={{ margin: "3px 0 0 0", color: "#34d399", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>
              IT Support & Junior Network / Web Administrator
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

      {/* HERO SECTION WITH LARGE GLOW TYPOGRAPHY */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "20px 10px 40px 10px" }}>
        
        <div style={{ color: "#a78bfa", fontSize: "13px", fontWeight: "800", letterSpacing: "4px", marginBottom: "12px", textTransform: "uppercase" }}>
          OFFICIAL PROFESSIONAL PORTFOLIO
        </div>

        <h2 style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: "900", margin: "0 0 20px 0", color: "#ffffff", letterSpacing: "-1.5px", textShadow: "0 0 35px rgba(124, 58, 237, 0.4)", background: "linear-gradient(180deg, #ffffff 40%, #cbd5e1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          EGZON KALISI
        </h2>

        {/* OFFICAL ROLES BADGES */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "950px", margin: "0 auto 35px auto" }}>
          {officialTitles.map((title, idx) => (
            <span key={idx} style={{ backgroundColor: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.12)", padding: "7px 16px", borderRadius: "20px", fontSize: "12px", color: "#e2e8f0", fontWeight: "700", backdropFilter: "blur(5px)" }}>
              {title}
            </span>
          ))}
        </div>

        {/* NAVIGATION BUTTONS WITH HIGH GLOW */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", maxWidth: "850px", margin: "0 auto" }}>
          <button onClick={() => setActiveTab('overview')} style={{ backgroundColor: activeTab === 'overview' ? "#7c3aed" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'overview' ? "#7c3aed" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'overview' ? "0 0 25px rgba(124, 58, 237, 0.6)" : "none" }}>
            Pasqyra / Overview
          </button>
          <button onClick={() => setActiveTab('certificates')} style={{ backgroundColor: activeTab === 'certificates' ? "#059669" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'certificates' ? "#059669" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'certificates' ? "0 0 25px rgba(5, 150, 105, 0.6)" : "none" }}>
            Certifikatat Zyrtare ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('skills')} style={{ backgroundColor: activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.15)"), padding: "13px 24px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800", boxShadow: activeTab === 'skills' ? "0 0 25px rgba(37, 99, 235, 0.6)" : "none" }}>
            Skills & Aftësitë
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
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1050px", margin: "35px auto" }}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "35px", backdropFilter: "blur(12px)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            
            <h3 style={{ fontSize: "24px", margin: "0 0 15px 0", color: "#c4b5fd", fontWeight: "800" }}>
              Rreth Egzon Kalisit // Professional Profile
            </h3>

            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#cbd5e1", margin: "0 0 25px 0" }}>
              Jam i lindur në Shkup dhe zotëroj përvojë praktike e teorike në fushat e <strong>IT Support & Help Desk</strong>, <strong>Junior Network & Web Administration</strong>, si dhe <strong>Hardware Repair & Diagnostics</strong>. Zotëroj certifikime zyrtare ndërkombëtare nga <i>Cisco Networking Academy</i>, <i>EIT Digital</i> dhe <i>Saylor Academy / University</i>.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.12)", border: "1px solid rgba(124, 58, 237, 0.3)", padding: "22px", borderRadius: "14px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#a78bfa", fontSize: "16px" }}>🛠️ Help Desk & Hardware Support</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                  Diagnozë kompjuterike në nivel hardware, montim i PC-ve të fuqishme, zgjidhje problemesh softuerike dhe asistencë teknike për përdoruesit.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(5, 150, 105, 0.12)", border: "1px solid rgba(5, 150, 105, 0.3)", padding: "22px", borderRadius: "14px" }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#34d399", fontSize: "16px" }}>🌐 Network & Web Administration</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                  Konfigurimi i switch-ave e router-ave Cisco, protokollat TCP/IP, administrimi i ueb-serverëve, cPanel, DNS dhe SSL.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CERTIFICATES TAB WITH GUARANTEED PDF OPENING */}
      {activeTab === 'certificates' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1150px", margin: "35px auto" }}>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "30px" }}>
            {[
              { id: 'all', name: 'Të Gjitha (10)' },
              { id: 'security', name: 'Cybersecurity & Crypto' },
              { id: 'network', name: 'Networking & Web' },
              { id: 'hardware', name: 'Hardware & Architecture' },
              { id: 'systems', name: 'Systems & Software' }
            ].map(cat => (
              <button key={cat.id} onClick={() => setSelectedCertCategory(cat.id)} style={{ backgroundColor: selectedCertCategory === cat.id ? "#059669" : "rgba(255,255,255,0.05)", color: "#ffffff", border: "1px solid " + (selectedCertCategory === cat.id ? "#059669" : "rgba(255,255,255,0.12)"), padding: "9px 18px", borderRadius: "20px", cursor: "pointer", fontSize: "12px", fontWeight: "700" }}>
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

                {/* BTN OPEN PDF DIRECTLY */}
                <a 
                  href={cert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: "block", textAlign: "center", background: "linear-gradient(90deg, #059669, #10b981)", color: "#ffffff", border: "none", padding: "12px", borderRadius: "10px", textDecoration: "none", fontSize: "13px", fontWeight: "800", boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }}
                >
                  [ HAP CERTIFIKATËN PDF ↗ ]
                </a>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* SKILLS TAB WITH ADVANCED GLASSMORPHISM & BARS */}
      {activeTab === 'skills' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1050px", margin: "35px auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px", backdropFilter: "blur(10px)" }}>
                <h3 style={{ margin: "0 0 20px 0", color: "#60a5fa", fontSize: "17px", fontWeight: "800", letterSpacing: "0.5px" }}>
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
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1050px", margin: "35px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "22px" }}>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(217, 119, 6, 0.3)", borderRadius: "16px", padding: "25px", backdropFilter: "blur(10px)" }}>
                <span style={{ color: "#fbbf24", fontSize: "11px", fontWeight: "800", letterSpacing: "1px", textTransform: "uppercase" }}>
                  {exp.period}
                </span>
                <h3 style={{ margin: "8px 0 4px 0", fontSize: "18px", color: "#ffffff", fontWeight: "800" }}>
                  {exp.title}
                </h3>
                <div style={{ color: "#a78bfa", fontSize: "13px", fontWeight: "700", marginBottom: "15px" }}>
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
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>Email Zyrtar për Kontakt / Projektime IT & Rrjeta:</p>
            
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
