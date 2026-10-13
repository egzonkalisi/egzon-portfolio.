"use client"

import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<null | 'bio' | 'contact' | 'projects' | 'certificates'>(null)

  const certificates = [
    { title: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "Oct 13, 2026", pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf" },
    { title: "Computer Hardware Basics", issuer: "Cisco Networking Academy", date: "Sep 23, 2026", pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf" },
    { title: "Basic Concepts of Cryptography", issuer: "EIT Digital & ELTE", date: "2026", pdfUrl: "/egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf" },
    { title: "CS406: Information Security", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/certification egzon kalisi  Information Security.pdf" },
    { title: "CS402: Computer Communications & Networks", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf" },
    { title: "CS401: Operating Systems", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf" },
    { title: "CS301: Computer Architecture", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/cERTIFICATE egzon Kalisi Computer Architecture.pdf" },
    { title: "CS302: Software Engineering", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/Egzon Kalisi Certifikate Software Engieneering.pdf" },
    { title: "CS120: Bitcoin for Developers I", issuer: "Saylor Academy", date: "Oct 5, 2026", pdfUrl: "/Certificate egzon kalisi Bitcoin for Developers I.pdf" },
    { title: "Future of Emotion AI", issuer: "28DIGITAL & Univ. of Turku", date: "2026", pdfUrl: "/egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf" }
  ]

  const experiences = [
    { title: "IT Support & Help Desk Specialist", desc: "Hardware & Software Troubleshooting, User Support" },
    { title: "Junior Network Administrator", desc: "LAN/WAN Configuration, Switches, Routers" },
    { title: "Hardware Technician & Diagnostics", desc: "PC Assembly, Hardware Maintenance" },
    { title: "Cybersecurity & Cryptography", desc: "Ethical Hacking, Public Key Encryption" },
    { title: "Media & Digital Production", desc: "Photography, Video Editing & Visual Retouching" },
    { title: "Systems & API Technician", desc: "System Integration, API Systems" }
  ]

  return (
    <main style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", fontFamily: "monospace", padding: "20px" }}>
      
      {/* HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "20px", background: "#fff", color: "#000", padding: "2px 8px", fontWeight: "bold" }}>EGZON KALISI</h1>
          <p style={{ margin: "5px 0 0 0", color: "#666", fontSize: "10px", letterSpacing: "2px" }}>PORTFOLIO // 2026</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/egzon-kalisi-9401962a1/" target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", textDecoration: "none", fontSize: "12px", border: "1px solid #2563eb", padding: "5px 10px", borderRadius: "4px" }}>
            [ LinkedIn ↗ ]
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "40px 10px" }}>
        <h2 style={{ fontSize: "32px", margin: "0 0 10px 0", color: "#fff", textTransform: "uppercase", letterSpacing: "1px" }}>EGZON KALISI</h2>
        <p style={{ color: "#c084fc", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>IT Support Specialist // Hardware & Networking</p>

        {/* BUTTONS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "25px" }}>
          <button onClick={() => setActiveTab('bio')} style={{ background: "#111", color: "#fff", border: "1px solid #333", padding: "10px 15px", cursor: "pointer", fontFamily: "monospace" }}>[ i ] Bio & Skills</button>
          <button onClick={() => setActiveTab('certificates')} style={{ background: "#064e3b", color: "#34d399", border: "1px solid #059669", padding: "10px 15px", cursor: "pointer", fontFamily: "monospace" }}>[ * ] Certifikatat ({certificates.length})</button>
          <button onClick={() => setActiveTab('contact')} style={{ background: "#111", color: "#fff", border: "1px solid #333", padding: "10px 15px", cursor: "pointer", fontFamily: "monospace" }}>[@] Kontakt</button>
        </div>
      </section>

      {/* GRID EXPERIENCE */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "15px", maxWidth: "1000px", margin: "0 auto" }}>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ background: "#0a0a0a", border: "1px solid #222", padding: "20px" }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "15px", color: "#e4e4e7" }}>{exp.title}</h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#71717a" }}>{exp.desc}</p>
          </div>
        ))}
      </section>

      {/* MODAL CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", display: "flex", justifyContent: "center", alignItems: "center", padding: "15px", zIndex: 100 }}>
          <div style={{ background: "#09090b", border: "1px solid #059669", padding: "20px", maxWidth: "600px", width: "100%", maxHeight: "80vh", overflowY: "auto", position: "relative" }}>
            <button onClick={() => setActiveTab(null)} style={{ position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "#ff4d4d", cursor: "pointer", fontWeight: "bold" }}>[ MBYLL ]</button>
            <h3 style={{ color: "#34d399", marginTop: 0 }}>CERTIFIKATAT ZYRTARE</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {certificates.map((cert, i) => (
                <div key={i} style={{ borderBottom: "1px solid #222", paddingBottom: "10px" }}>
                  <h4 style={{ margin: "0 0 5px 0", color: "#fff" }}>{cert.title}</h4>
                  <p style={{ margin: "0 0 8px 0", fontSize: "11px", color: "#a1a1aa" }}>{cert.issuer} ({cert.date})</p>
                  <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#059669", color: "#fff", padding: "5px 10px", fontSize: "11px", textDecoration: "none", borderRadius: "3px" }}>VIEW PDF ↗</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL BIO */}
      {activeTab === 'bio' && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", display: "flex", justifyContent: "center", alignItems: "center", padding: "15px", zIndex: 100 }}>
          <div style={{ background: "#09090b", border: "1px solid #c084fc", padding: "20px", maxWidth: "500px", width: "100%", position: "relative" }}>
            <button onClick={() => setActiveTab(null)} style={{ position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "#ff4d4d", cursor: "pointer", fontWeight: "bold" }}>[ MBYLL ]</button>
            <h3 style={{ color: "#c084fc", marginTop: 0 }}>BIO & SKILLS</h3>
            <p style={{ fontSize: "13px", color: "#ccc" }}>I LINDUR NË: SHKUP, MAQEDONI</p>
            <p style={{ fontSize: "12px", color: "#aaa" }}>Përvojat: Major Gaming Center, Yahya Kemal College, Teleperformance, Bonbon Resort, Orange Films Studio, Call Center Skopje.</p>
          </div>
        </div>
      )}

      {/* MODAL CONTACT */}
      {activeTab === 'contact' && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", display: "flex", justifyContent: "center", alignItems: "center", padding: "15px", zIndex: 100 }}>
          <div style={{ background: "#09090b", border: "1px solid #2563eb", padding: "20px", maxWidth: "400px", width: "100%", textAlign: "center", position: "relative" }}>
            <button onClick={() => setActiveTab(null)} style={{ position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "#ff4d4d", cursor: "pointer", fontWeight: "bold" }}>[ MBYLL ]</button>
            <h3 style={{ color: "#60a5fa", marginTop: 0 }}>KONTAKT</h3>
            <p style={{ color: "#fff", fontSize: "14px" }}>info@egzonkalisi.com</p>
            <a href="mailto:info@egzonkalisi.com" style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "8px 15px", textDecoration: "none", marginTop: "10px" }}>Dërgo Email</a>
          </div>
        </div>
      )}

      <footer style={{ textAlign: "center", margin: "40px 0 10px 0", color: "#444", fontSize: "10px", borderTop: "1px solid #111", paddingTop: "15px" }}>
        Egzon Kalisi &copy; 2026
      </footer>
    </main>
  )
}
