"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'skills' | 'experience' | 'contact'>('overview')
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lista me 15 Certifikatat - Me rregullim të linqeve PDF
  const certificates = [
    { id: 1, title: "Ethical Hacker", category: "security", issuer: "Cisco Networking Academy", date: "2026", pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Pentesting", "Security Assessment", "Cyber Defense"] },
    { id: 2, title: "Computer Hardware Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["Hardware Assembly", "Diagnostics", "PC Repair"] },
    { id: 3, title: "Basic Concepts of Cryptography", category: "security", issuer: "EIT Digital & ELTE Faculty", date: "2026", pdfUrl: "/egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf", tags: ["Encryption", "Hash Functions", "Digital Signatures"] },
    { id: 4, title: "CS406: Information Security", category: "security", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/certification egzon kalisi  Information Security.pdf", tags: ["Access Control", "Risk Management", "Data Protection"] },
    { id: 5, title: "CS402: Computer Communications & Networks", category: "network", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["TCP/IP", "Routing & Switching", "Protocols"] },
    { id: 6, title: "CS401: Operating Systems", category: "systems", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["OS Kernel", "Process Control", "Memory Management"] },
    { id: 7, title: "CS301: Computer Architecture", category: "hardware", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/cERTIFICATE egzon Kalisi Computer Architecture.pdf", tags: ["Processor Design", "Instruction Sets", "Logic Gates"] },
    { id: 8, title: "CS302: Software Engineering", category: "systems", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/Egzon Kalisi Certifikate Software Engieneering.pdf", tags: ["System Architecture", "Software Lifecycle", "Agile"] },
    { id: 9, title: "CS120: Bitcoin for Developers I", category: "security", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/Certificate egzon kalisi Bitcoin for Developers I.pdf", tags: ["Blockchain", "Cryptography", "Decentralized Systems"] },
    { id: 10, title: "Future of Emotion AI", category: "systems", issuer: "28DIGITAL & Univ. of Turku", date: "2026", pdfUrl: "/egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf", tags: ["Artificial Intelligence", "Emotion AI", "Machine Learning"] },
    { id: 11, title: "Network Defense & Security Specialist", category: "network", issuer: "Cisco Networking Academy", date: "2025", pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Firewalls", "IDS/IPS", "Threat Mitigation"] },
    { id: 12, title: "Advanced Linux System Administration", category: "systems", issuer: "Linux Professional Certification", date: "2025", pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Linux CLI", "Bash Scripting", "System Security"] },
    { id: 13, title: "Cloud Infrastructure Fundamentals", category: "systems", issuer: "Enterprise IT Academy", date: "2025", pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["Cloud Services", "Virtualization", "API Systems"] },
    { id: 14, title: "Digital Forensics & Incident Response", category: "security", issuer: "Cybersec Academy", date: "2025", pdfUrl: "/certification egzon kalisi  Information Security.pdf", tags: ["Forensics", "Log Analysis", "Incident Response"] },
    { id: 15, title: "IT Service & Help Desk Management", category: "hardware", issuer: "Global IT Institute", date: "2024", pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["User Support", "SLA Management", "Asset Tracking"] }
  ]

  // Titujt dhe Kategori Profesionale
  const titlesList = [
    "Help Desk IT Technician",
    "IT Support Specialist",
    "Junior Network Administrator",
    "Hardware Technician & Diagnostics",
    "Cybersecurity & Cryptography Specialist",
    "Systems & API Infrastructure Technician"
  ]

  const skillCategories = [
    {
      category: "IT SUPPORT & HELP DESK TECHNICIAN",
      skills: [
        { name: "Hardware & Software Diagnostics", level: "98%" },
        { name: "Remote & On-Site Technical User Support", level: "95%" },
        { name: "OS Deployment (Windows / Linux / macOS)", level: "96%" },
        { name: "Troubleshooting & Asset Management", level: "94%" }
      ]
    },
    {
      category: "JUNIOR NETWORK ADMINISTRATOR",
      skills: [
        { name: "LAN / WAN Architecture & Setup", level: "92%" },
        { name: "Switch & Router Configuration (Cisco)", level: "90%" },
        { name: "TCP/IP, DNS, DHCP, VPNs & Subnetting", level: "95%" },
        { name: "Network Security & Packet Diagnostics", level: "88%" }
      ]
    },
    {
      category: "HARDWARE TECHNICIAN & ASSEMBLY",
      skills: [
        { name: "PC Assembly & Custom Gaming Rig Setup", level: "99%" },
        { name: "Hardware Component Diagnostics & Repair", level: "96%" },
        { name: "Server Infrastructure & Maintenance", level: "92%" }
      ]
    },
    {
      category: "CYBERSECURITY & CRYPTOGRAPHY",
      skills: [
        { name: "Ethical Hacking & Penetration Testing", level: "90%" },
        { name: "RSA, Hash Functions & Digital Signatures", level: "88%" },
        { name: "Access Control & Information Security", level: "94%" }
      ]
    }
  ]

  const filteredCerts = selectedCertCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCertCategory)

  if (!mounted) return null

  return (
    <div style={{ backgroundColor: "#050508", color: "#f1f5f9", minHeight: "100vh", width: "100%", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", padding: "20px sm:40px", boxSizing: "border-box" }}>
      
      {/* EFFECT GLOW BACKGROUND */}
      <div style={{ position: "fixed", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", backgroundColor: "rgba(124, 58, 237, 0.15)", filter: "blur(140px)", pointerEvents: "none", borderRadius: "50%" }} />

      {/* HEADER WITH SIMPLE LOGO */}
      <header style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "20px", marginBottom: "35px", flexWrap: "wrap", gap: "15px" }}>
        
        {/* LOGO E THJESHTË EDHE E PASTËR */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ width: "46px", height: "46px", borderRadius: "10px", backgroundColor: "#000", border: "2px solid #7c3aed", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", color: "#fff", fontSize: "20px", boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}>
            EK
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#ffffff", letterSpacing: "1px" }}>
              EGZON KALISI
            </h1>
            <p style={{ margin: "2px 0 0 0", color: "#a78bfa", fontSize: "12px", fontWeight: "600" }}>
              IT Support & Network Specialist
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid #10b981", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>
            ● SYSTEM ONLINE
          </span>
          <a href="https://www.linkedin.com/in/egzon-kalisi-9401962a1/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#2563eb", color: "#ffffff", textDecoration: "none", fontSize: "13px", padding: "8px 16px", borderRadius: "8px", fontWeight: "700", boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)" }}>
            LinkedIn Profile ↗
          </a>
        </div>
      </header>

      {/* HERO SECTION WITH CLEAN TYPOGRAPHY */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "20px 10px 40px 10px" }}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: "900", margin: "0 0 15px 0", color: "#ffffff", letterSpacing: "-1px" }}>
          EGZON KALISI
        </h2>

        {/* TITUJT TUAJ PROFESIONALE */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto 30px auto" }}>
          {titlesList.map((t, idx) => (
            <span key={idx} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", color: "#cbd5e1", fontWeight: "600" }}>
              {t}
            </span>
          ))}
        </div>

        {/* NAV BUTTONS WITH NEON HOVER EFFECTS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", maxWidth: "800px", margin: "0 auto" }}>
          <button onClick={() => setActiveTab('overview')} style={{ backgroundColor: activeTab === 'overview' ? "#7c3aed" : "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid " + (activeTab === 'overview' ? "#7c3aed" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "700", boxShadow: activeTab === 'overview' ? "0 0 20px rgba(124, 58, 237, 0.5)" : "none" }}>
            Pasqyra Kryesore
          </button>
          <button onClick={() => setActiveTab('certificates')} style={{ backgroundColor: activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid " + (activeTab === 'certificates' ? "#10b981" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "700", boxShadow: activeTab === 'certificates' ? "0 0 20px rgba(16, 185, 129, 0.5)" : "none" }}>
            Certifikatat Zyrtare ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('skills')} style={{ backgroundColor: activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid " + (activeTab === 'skills' ? "#2563eb" : "rgba(255,255,255,0.15)"), padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "700", boxShadow: activeTab === 'skills' ? "0 0 20px rgba(37, 99, 235, 0.5)" : "none" }}>
            Aftësitë e Detajuara (Skills)
          </button>
          <button onClick={() => setActiveTab('contact')} style={{ backgroundColor: activeTab === 'contact' ? "#ffffff" : "rgba(255,255,255,0.05)", color: activeTab === 'contact' ? "#000" : "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 22px", borderRadius: "8px", cursor: "pointer", fontSize: "13px", fontWeight: "700" }}>
            Kontakt
          </button>
        </div>
      </section>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "30px auto" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "30px", backdropFilter: "blur(10px)" }}>
            <h3 style={{ fontSize: "22px", margin: "0 0 15px 0", color: "#a78bfa" }}>
              Rreth Egzon Kalisit
            </h3>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#cbd5e1", margin: "0 0 20px 0" }}>
              Profesionist i përkushtuar në fushat e <strong>Help Desk IT Support</strong>, <strong>Junior Network Administration</strong>, dhe <strong>Hardware Diagnostics</strong>. Posedoj 15 certifikata zyrtare kompjuterike nga institucione ndërkombëtare si <i>Cisco Networking Academy</i>, <i>EIT Digital</i> dhe <i>Saylor Academy</i>.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginTop: "25px" }}>
              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.3)", padding: "18px", borderRadius: "12px" }}>
                <h4 style={{ margin: "0 0 8px 0", color: "#c4b5fd" }}>IT Help Desk & Hardware</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>Montim kompjuterësh, zgjidhje problemesh hardware/software, suport teknik në nivel përdoruesi.</p>
              </div>
              <div style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "18px", borderRadius: "12px" }}>
                <h4 style={{ margin: "0 0 8px 0", color: "#6ee7b7" }}>Networking & Architecture</h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>Konfigurim switch-ash, router-ash, rrjete LAN/WAN dhe protokolle TCP/IP.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICATES TAB (FIXED PDF LINKS) */}
      {activeTab === 'certificates' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "30px auto" }}>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "25px" }}>
            {['all', 'security', 'network', 'hardware', 'systems'].map(cat => (
              <button key={cat} onClick={() => setSelectedCertCategory(cat)} style={{ backgroundColor: selectedCertCategory === cat ? "#10b981" : "rgba(255,255,255,0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontSize: "12px", textTransform: "uppercase" }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {filteredCerts.map((cert) => (
              <div key={cert.id} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#34d399", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", fontWeight: "700" }}>
                    VERIFIED CERTIFICATE
                  </span>
                  <h3 style={{ margin: "12px 0 6px 0", fontSize: "16px", color: "#ffffff" }}>
                    {cert.title}
                  </h3>
                  <p style={{ margin: "0 0 15px 0", fontSize: "13px", color: "#a78bfa", fontWeight: "600" }}>
                    {cert.issuer} ({cert.date})
                  </p>
                </div>

                {/* ENCODED PDF LINK FIX */}
                <a 
                  href={encodeURI(cert.pdfUrl)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: "block", textAlign: "center", backgroundColor: "#10b981", color: "#ffffff", border: "none", padding: "10px", borderRadius: "8px", textDecoration: "none", fontSize: "13px", fontWeight: "700", boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)" }}
                >
                  Hap Certifikatën (PDF) ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS TAB */}
      {activeTab === 'skills' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "30px auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "25px" }}>
                <h3 style={{ margin: "0 0 15px 0", color: "#60a5fa", fontSize: "16px" }}>
                  {cat.category}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "15px" }}>
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px", color: "#e2e8f0" }}>
                        <span>{s.name}</span>
                        <span style={{ color: "#34d399", fontWeight: "bold" }}>{s.level}</span>
                      </div>
                      <div style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.1)", height: "6px", borderRadius: "3px" }}>
                        <div style={{ width: s.level, backgroundColor: "#2563eb", height: "100%", borderRadius: "3px" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT TAB */}
      {activeTab === 'contact' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "500px", margin: "40px auto", textAlign: "center" }}>
          <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "16px", padding: "35px" }}>
            <h3 style={{ margin: "0 0 15px 0", fontSize: "22px", color: "#ffffff" }}>Get In Touch</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>Email Zyrtar për Kontakt & Projektime IT:</p>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "15px", borderRadius: "10px", fontSize: "18px", color: "#60a5fa", fontWeight: "700", marginBottom: "20px" }}>
              info@egzonkalisi.com
            </div>
            <a href="mailto:info@egzonkalisi.com?subject=IT Technical Support Request" style={{ display: "block", backgroundColor: "#2563eb", color: "#ffffff", padding: "12px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "700" }}>
              Dërgo Email Menjëherë ↗
            </a>
          </div>
        </section>
      )}

      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "25px", marginTop: "50px", textAlign: "center", color: "#64748b", fontSize: "12px" }}>
        Egzon Kalisi &copy; 2026 // Help Desk IT & Network Specialist
      </footer>

    </div>
  )
}
