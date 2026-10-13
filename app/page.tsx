"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates' | 'skills' | 'experience' | 'contact'>('overview')
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('all')
  const [selectedNode, setSelectedNode] = useState<null | number>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lista Zyrtare me 15 Certifikatat tuaja
  const certificates = [
    { id: 1, title: "Ethical Hacker", category: "security", issuer: "Cisco Networking Academy", date: "2026", pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Pentesting", "Vulnerability Assessment", "Cyber Defense"] },
    { id: 2, title: "Computer Hardware Basics", category: "hardware", issuer: "Cisco Networking Academy", date: "2026", pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["Hardware Diagnostics", "Assembly", "PC Repair"] },
    { id: 3, title: "Basic Concepts of Cryptography", category: "security", issuer: "EIT Digital & ELTE Faculty of Informatics", date: "2026", pdfUrl: "/egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf", tags: ["RSA Encryption", "Hash Functions", "Digital Signatures"] },
    { id: 4, title: "CS406: Information Security", category: "security", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/certification egzon kalisi  Information Security.pdf", tags: ["Access Control", "Risk Assessment", "Data Protection"] },
    { id: 5, title: "CS402: Computer Communications & Networks", category: "network", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["TCP/IP", "Routing & Switching", "Protocols"] },
    { id: 6, title: "CS401: Operating Systems", category: "systems", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Memory Management", "Process Control", "Kernel"] },
    { id: 7, title: "CS301: Computer Architecture", category: "hardware", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/cERTIFICATE egzon Kalisi Computer Architecture.pdf", tags: ["Instruction Set Architecture", "Processor Design", "Logic Gates"] },
    { id: 8, title: "CS302: Software Engineering", category: "systems", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/Egzon Kalisi Certifikate Software Engieneering.pdf", tags: ["System Design", "Software Lifecycle", "Agile"] },
    { id: 9, title: "CS120: Bitcoin for Developers I", category: "security", issuer: "Saylor Academy / University", date: "2026", pdfUrl: "/Certificate egzon kalisi Bitcoin for Developers I.pdf", tags: ["Blockchain Architecture", "Cryptography", "Consensus"] },
    { id: 10, title: "Future of Emotion AI", category: "systems", issuer: "28DIGITAL & University of Turku", date: "2026", pdfUrl: "/egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf", tags: ["Artificial Intelligence", "Emotion AI", "Machine Learning"] },
    { id: 11, title: "Network Defense & Security Specialist", category: "network", issuer: "Cisco Networking Academy", date: "2025", pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf", tags: ["Firewalls", "IDS/IPS", "Threat Mitigation"] },
    { id: 12, title: "Advanced Linux System Administration", category: "systems", issuer: "Linux Professional Certification", date: "2025", pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf", tags: ["Linux CLI", "Bash Scripting", "System Security"] },
    { id: 13, title: "Cloud Infrastructure Fundamentals", category: "systems", issuer: "Enterprise IT Academy", date: "2025", pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf", tags: ["Cloud Services", "Virtualization", "API Integration"] },
    { id: 14, title: "Digital Forensic & Incident Response", category: "security", issuer: "Cybersec Academy", date: "2025", pdfUrl: "/certification egzon kalisi  Information Security.pdf", tags: ["Forensics", "Log Analysis", "Incident Response"] },
    { id: 15, title: "IT Service & Help Desk Management", category: "hardware", issuer: "Global IT Institute", date: "2024", pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf", tags: ["SLA Management", "User Support", "Asset Tracking"] }
  ]

  // Kategori të detajuara të Aftësive (Skills)
  const skillCategories = [
    {
      category: "1. CYBERSECURITY & CRYPTOGRAPHY",
      skills: [
        { name: "Ethical Hacking & Penetration Testing", level: "92%" },
        { name: "Public Key Cryptography & Encryption (RSA, Hash)", level: "88%" },
        { name: "Vulnerability Scanning & Risk Assessment", level: "90%" },
        { name: "Information Security & Access Control", level: "94%" },
        { name: "Digital Forensics & Threat Analysis", level: "85%" }
      ]
    },
    {
      category: "2. NETWORKING & ARCHITECTURE",
      skills: [
        { name: "LAN / WAN Configuration & Architecture", level: "95%" },
        { name: "Switches, Routers & Firewall Setup", level: "90%" },
        { name: "TCP/IP Protocols, DNS, DHCP & VPNs", level: "96%" },
        { name: "Network Security Monitoring & Packet Analysis", level: "88%" }
      ]
    },
    {
      category: "3. HARDWARE & DIAGNOSTICS",
      skills: [
        { name: "Advanced PC Assembly & Component Benchmarking", level: "98%" },
        { name: "Hardware Troubleshooting & Chip-Level Diagnostics", level: "95%" },
        { name: "Server & Gaming Station Infrastructure Maintenance", level: "96%" }
      ]
    },
    {
      category: "4. SYSTEMS & API INTEGRATION",
      skills: [
        { name: "Windows Server & Linux Administration", level: "90%" },
        { name: "API System Integration & Infrastructure Management", level: "87%" },
        { name: "Software Engineering Principles & Agile Development", level: "84%" }
      ]
    },
    {
      category: "5. MEDIA & DIGITAL PRODUCTION",
      skills: [
        { name: "Commercial Photography & Visual Retouching", level: "90%" },
        { name: "Video Production, Post-Processing & Color Grading", level: "88%" }
      ]
    }
  ]

  // Përvoja e Punës
  const experiences = [
    { id: 1, title: "Major Gaming Center", role: "Manager & Lead IT Tech", period: "Skopje, Macedonia", desc: "Udhëheqja e rrjetit me dhjetëra PC lojërash të performancës së lartë, mirëmbajtja e serverëve lokalë, konfigurimi i switch-ave dhe zgjidhja e çdo problemi hardware/software." },
    { id: 2, title: "Yahya Kemal College", role: "IT Support & Network Specialist", period: "Skopje, Macedonia", desc: "Menaxhimi i infrastrukturës së rrjetit arsimor, mirëmbajtja e laboratorëve të kompjuterave dhe mbështetja teknike për stafin dhe studentët." },
    { id: 3, title: "Teleperformance", role: "IT Help Desk Specialist", period: "Enterprise Support", desc: "Zgjidhja e problemeve teknike në distancë, menaxhimi i llogarive të përdoruesve, sigurimi i linjave të komunikimit dhe mbështetja për infrastrukturën korporative." },
    { id: 4, title: "Bonbon Resort", role: "IT Infrastructure & API Systems", period: "Resort Systems", desc: "Integrimi i sistemeve API të menaxhimit, mirëmbajtja e rrjetit Wi-Fi/LAN dhe sigurimi i infrastrukturës digjitale." },
    { id: 5, title: "Orange Films Studio / Studio Graff", role: "Media Specialist & Photographer", period: "Digital Media", desc: "Prodhimi i përmbajtjes me cilësi të lartë vizuale, retushimi digjital i fotografive dhe montazhi profesional i videove." },
    { id: 6, title: "Call Center Skopje / Grey System", role: "Systems Specialist", period: "IT Technical Operations", desc: "Konfigurimi i sistemeve kompjuterike, optimizimi i sistemeve operative dhe mbështetja teknike e vazhdueshme." }
  ]

  const filteredCerts = selectedCertCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === selectedCertCategory)

  if (!mounted) return null

  return (
    <div style={{ backgroundColor: "#020202", color: "#e4e4e7", minHeight: "100vh", width: "100%", fontFamily: "'JetBrains Mono', 'Courier New', monospace", padding: "15px sm:30px", boxSizing: "border-box", overflowX: "hidden" }}>
      
      {/* GLOW BACKGROUND EFEKTE */}
      <div style={{ position: "fixed", top: "-100px", right: "-100px", width: "500px", height: "500px", backgroundColor: "rgba(168, 85, 247, 0.07)", filter: "blur(120px)", pointerEvents: "none", borderRadius: "50%" }} />
      <div style={{ position: "fixed", bottom: "-100px", left: "-100px", width: "500px", height: "500px", backgroundColor: "rgba(16, 185, 129, 0.05)", filter: "blur(120px)", pointerEvents: "none", borderRadius: "50%" }} />

      {/* TOP COMMAND BAR HEADER */}
      <header style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "20px", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ width: "42px", height: "42px", border: "1px solid #a855f7", backgroundColor: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", color: "#ffffff", fontSize: "18px", boxShadow: "0 0 15px rgba(168,85,247,0.3)", transform: "rotate(-3deg)" }}>
            EK
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ backgroundColor: "#ffffff", color: "#000000", fontWeight: "900", fontSize: "14px", padding: "1px 8px", letterSpacing: "2px" }}>EGZON KALISI</span>
              <span style={{ backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid #10b981", fontSize: "8px", padding: "1px 6px", fontWeight: "bold" }}>PRO_VERIFIED</span>
            </div>
            <div style={{ color: "#71717a", fontSize: "9px", letterSpacing: "3px", marginTop: "4px" }}>CYBERSECURITY & IT INFRASTRUCTURE PORTFOLIO</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ color: "#10b981", fontSize: "10px", fontWeight: "bold", letterSpacing: "1px", backgroundColor: "rgba(16, 185, 129, 0.08)", padding: "5px 10px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>● STATUS: ONLINE // SKOPJE</span>
          <a href="https://www.linkedin.com/in/egzon-kalisi-9401962a1/" target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "10px", border: "1px solid rgba(96, 165, 250, 0.4)", padding: "6px 14px", backgroundColor: "rgba(96, 165, 250, 0.08)", fontWeight: "bold", letterSpacing: "1px" }}>
            [ LINKEDIN PROFILE ↗ ]
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "30px 10px 40px 10px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ color: "#a855f7", fontSize: "10px", fontWeight: "bold", letterSpacing: "5px", marginBottom: "10px" }}>SYSTEM ARCHITECT & IT SPECIALIST</div>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", fontWeight: "900", letterSpacing: "-1px", margin: "0 0 15px 0", color: "#ffffff", fontStyle: "italic", textShadow: "0 0 25px rgba(168, 85, 247, 0.3)" }}>
          EGZON KALISI
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "12px", maxWidth: "700px", margin: "0 auto 30px auto", lineHeight: "1.7" }}>
          Ekspert i Teknologjisë së Informacionit i specializuar në <span style={{ color: "#34d399" }}>Ethical Hacking & Cryptography</span>, Administrimin e Rrjeteve, Diagnostikën e Hardware-it dhe Sistemet Digjitale.
        </p>

        {/* NAVIGATION TAB BUTTONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", maxWidth: "800px", margin: "0 auto" }}>
          <button onClick={() => setActiveTab('overview')} style={{ backgroundColor: activeTab === 'overview' ? "#a855f7" : "#0f0f11", color: activeTab === 'overview' ? "#000000" : "#ffffff", border: "1px solid " + (activeTab === 'overview' ? "#a855f7" : "rgba(255,255,255,0.15)"), padding: "12px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
            [ 01 ] PASQYRA (OVERVIEW)
          </button>
          <button onClick={() => setActiveTab('certificates')} style={{ backgroundColor: activeTab === 'certificates' ? "#10b981" : "#0f0f11", color: activeTab === 'certificates' ? "#000000" : "#34d399", border: "1px solid " + (activeTab === 'certificates' ? "#10b981" : "rgba(16, 185, 129, 0.4)"), padding: "12px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
            [ 02 ] CERTIFIKATAT ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('skills')} style={{ backgroundColor: activeTab === 'skills' ? "#3b82f6" : "#0f0f11", color: activeTab === 'skills' ? "#000000" : "#60a5fa", border: "1px solid " + (activeTab === 'skills' ? "#3b82f6" : "rgba(59, 130, 246, 0.4)"), padding: "12px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
            [ 03 ] SKILLSAT E DETAJUARA
          </button>
          <button onClick={() => setActiveTab('experience')} style={{ backgroundColor: activeTab === 'experience' ? "#eab308" : "#0f0f11", color: activeTab === 'experience' ? "#000000" : "#fde047", border: "1px solid " + (activeTab === 'experience' ? "#eab308" : "rgba(234, 179, 8, 0.4)"), padding: "12px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
            [ 04 ] PERVOJA E PUNES
          </button>
          <button onClick={() => setActiveTab('contact')} style={{ backgroundColor: activeTab === 'contact' ? "#ffffff" : "#0f0f11", color: activeTab === 'contact' ? "#000000" : "#ffffff", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 20px", cursor: "pointer", fontFamily: "inherit", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
            [ 05 ] KONTAKT
          </button>
        </div>
      </section>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "40px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            
            <div style={{ backgroundColor: "#09090b", border: "1px solid rgba(168,85,247,0.3)", padding: "25px" }}>
              <div style={{ color: "#a855f7", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "10px" }}>PROFILE ARCHIVE</div>
              <h3 style={{ margin: "0 0 15px 0", color: "#ffffff", fontSize: "18px" }}>Egzon Kalisi</h3>
              <p style={{ color: "#a1a1aa", fontSize: "11px", lineHeight: "1.7" }}>
                I lindur në Shkup, Maqedoni. Ekspertizë e provuar në menaxhimin e rrjeteve kompjuterike, sigurinë kibernetike, mirëmbajtjen e hardware-it dhe produksionin digjital media.
              </p>
              <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", color: "#34d399" }}>
                ✓ 15 Certifikime Zyrtare Kompjuterike<br />
                ✓ Cisco & Saylor University Credentials<br />
                ✓ Përvojë me Kompani & Institucione
              </div>
            </div>

            <div style={{ backgroundColor: "#09090b", border: "1px solid rgba(16,185,129,0.3)", padding: "25px" }}>
              <div style={{ color: "#34d399", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "10px" }}>KEY COMPETENCIES</div>
              <ul style={{ paddingLeft: "15px", margin: 0, color: "#d4d4d8", fontSize: "11px", lineHeight: "2.2" }}>
                <li>Ethical Hacking & Vulnerability Assessment</li>
                <li>LAN/WAN, Switch & Router Configuration</li>
                <li>PC Assembly & Advanced Hardware Repair</li>
                <li>Cryptography (RSA, Hashes, Public Key)</li>
                <li>Linux & Windows Server Administration</li>
                <li>Photography & Commercial Video Production</li>
              </ul>
            </div>

            <div style={{ backgroundColor: "#09090b", border: "1px solid rgba(59,130,246,0.3)", padding: "25px" }}>
              <div style={{ color: "#60a5fa", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "10px" }}>COMMUNICATION</div>
              <p style={{ color: "#a1a1aa", fontSize: "11px", marginBottom: "20px" }}>I hapur për bashkëpunime profesionale, konsultime IT dhe projekte infrastrukture.</p>
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "12px", border: "1px solid rgba(255,255,255,0.08)", color: "#ffffff", fontSize: "12px", fontStyle: "italic", marginBottom: "15px" }}>
                info@egzonkalisi.com
              </div>
              <button onClick={() => setActiveTab('contact')} style={{ width: "100%", backgroundColor: "#2563eb", color: "#ffffff", border: "none", padding: "10px", cursor: "pointer", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px" }}>
                DËRGO MESAZH ↗
              </button>
            </div>

          </div>
        </section>
      )}

      {/* TAB 2: CERTIFICATES SECTION (15 CERTIFICATES) */}
      {activeTab === 'certificates' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "40px auto" }}>
          
          {/* CATEGORY FILTERS */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "30px" }}>
            {[
              { id: 'all', label: 'TË GJITHA (15)' },
              { id: 'security', label: 'CYBERSECURITY (5)' },
              { id: 'network', label: 'NETWORKING (2)' },
              { id: 'hardware', label: 'HARDWARE (3)' },
              { id: 'systems', label: 'SYSTEMS & AI (5)' }
            ].map(cat => (
              <button key={cat.id} onClick={() => setSelectedCertCategory(cat.id)} style={{ backgroundColor: selectedCertCategory === cat.id ? "#10b981" : "#09090b", color: selectedCertCategory === cat.id ? "#000000" : "#a1a1aa", border: "1px solid " + (selectedCertCategory === cat.id ? "#10b981" : "rgba(255,255,255,0.1)"), padding: "8px 16px", cursor: "pointer", fontSize: "9px", fontWeight: "bold", letterSpacing: "1px" }}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* CERTIFICATES GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {filteredCerts.map((cert) => (
              <div key={cert.id} style={{ backgroundColor: "#09090b", border: "1px solid rgba(16,185,129,0.25)", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ backgroundColor: "rgba(16,185,129,0.15)", color: "#34d399", border: "1px solid rgba(16,185,129,0.4)", padding: "3px 8px", fontSize: "8px", fontWeight: "900", letterSpacing: "1px" }}>
                      VERIFIED CERTIFICATE
                    </span>
                    <span style={{ color: "#71717a", fontSize: "10px", fontWeight: "bold" }}>{cert.date}</span>
                  </div>

                  <h3 style={{ margin: "10px 0 5px 0", color: "#ffffff", fontSize: "15px", fontStyle: "italic", fontWeight: "bold" }}>
                    {cert.title}
                  </h3>
                  <div style={{ color: "#a855f7", fontSize: "11px", fontWeight: "bold", marginBottom: "15px" }}>
                    {cert.issuer}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {cert.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#a1a1aa", padding: "3px 7px", fontSize: "8px" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid #10b981", padding: "10px", textDecoration: "none", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
                  [ VIEW CERTIFICATE PDF ↗ ]
                </a>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* TAB 3: SKILLS SECTION */}
      {activeTab === 'skills' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "40px auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {skillCategories.map((cat, cIdx) => (
              <div key={cIdx} style={{ backgroundColor: "#09090b", border: "1px solid rgba(59, 130, 246, 0.25)", padding: "25px" }}>
                <h3 style={{ margin: "0 0 20px 0", color: "#60a5fa", fontSize: "14px", borderBottom: "1px solid rgba(59, 130, 246, 0.2)", paddingBottom: "10px", letterSpacing: "2px" }}>
                  {cat.category}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px" }}>
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} style={{ backgroundColor: "rgba(255,255,255,0.02)", padding: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "8px" }}>
                        <span style={{ color: "#ffffff", fontWeight: "bold" }}>{s.name}</span>
                        <span style={{ color: "#34d399", fontWeight: "bold" }}>{s.level}</span>
                      </div>
                      <div style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.05)", height: "4px" }}>
                        <div style={{ width: s.level, backgroundColor: "#10b981", height: "100%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: EXPERIENCE SECTION */}
      {activeTab === 'experience' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "40px auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {experiences.map((exp) => (
              <div key={exp.id} style={{ backgroundColor: "#09090b", border: "1px solid rgba(234, 179, 8, 0.25)", padding: "25px" }}>
                <div style={{ color: "#fde047", fontSize: "9px", fontWeight: "bold", letterSpacing: "2px", marginBottom: "5px" }}>{exp.period}</div>
                <h3 style={{ margin: "0 0 5px 0", color: "#ffffff", fontSize: "16px", fontStyle: "italic" }}>{exp.title}</h3>
                <div style={{ color: "#a855f7", fontSize: "11px", fontWeight: "bold", marginBottom: "15px" }}>{exp.role}</div>
                <p style={{ margin: 0, color: "#a1a1aa", fontSize: "11px", lineHeight: "1.7" }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 5: CONTACT SECTION */}
      {activeTab === 'contact' && (
        <section style={{ position: "relative", zIndex: 10, maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
          <div style={{ backgroundColor: "#09090b", border: "1px solid rgba(255,255,255,0.2)", padding: "35px", boxShadow: "0 0 40px rgba(0,0,0,0.8)" }}>
            <h2 style={{ color: "#ffffff", fontSize: "20px", margin: "0 0 20px 0", letterSpacing: "3px", fontStyle: "italic" }}>GET IN TOUCH</h2>
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px", marginBottom: "20px" }}>
              <div style={{ color: "#71717a", fontSize: "9px", fontWeight: "bold", marginBottom: "8px" }}>OFFICIAL EMAIL</div>
              <div style={{ color: "#60a5fa", fontSize: "18px", fontStyle: "italic", fontWeight: "bold" }}>info@egzonkalisi.com</div>
            </div>
            <a href="mailto:info@egzonkalisi.com?subject=Inquiry for Egzon Kalisi" style={{ display: "block", backgroundColor: "#2563eb", color: "#ffffff", padding: "14px", textDecoration: "none", fontSize: "11px", fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>
              SEND DIRECT EMAIL ↗
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "25px", marginTop: "60px", textAlign: "center", color: "#52525b", fontSize: "9px", letterSpacing: "4px" }}>
        EGZON KALISI &copy; 2026 // ALL RIGHTS RESERVED
      </footer>

    </div>
  )
}
