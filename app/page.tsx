"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [selectedId, setSelectedId] = useState<null | number>(null)
  const [activeTab, setActiveTab] = useState<null | 'bio' | 'contact' | 'projects' | 'certificates'>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Eksperiencat & Pozicionet Zyrtare IT
  const experiences = [
    { 
      id: 1, 
      title: "IT Support & Help Desk Specialist", 
      desc: "Hardware & Software Troubleshooting, User Support", 
      icon: "01", 
      workplace: "Major Gaming Center (Manager), Yahya Kemal College, Teleperformance, Call Center Skopje, Bonbon Resort." 
    },
    { 
      id: 2, 
      title: "Junior Network Administrator", 
      desc: "LAN/WAN Configuration, Switches, Routers & Architecture", 
      icon: "02", 
      workplace: "Major Gaming Center (Manager), Yahya Kemal College, Bonbon Resort." 
    },
    { 
      id: 3, 
      title: "Hardware Technician & Diagnostics", 
      desc: "PC Assembly, Hardware Maintenance & Troubleshooting", 
      icon: "03", 
      workplace: "Major Gaming Center (Manager), Freelance Hardware Maintenance." 
    },
    { 
      id: 4, 
      title: "Cybersecurity & Cryptography Learner", 
      desc: "Ethical Hacking, Public Key Encryption, Information Security", 
      icon: "04", 
      workplace: "Cisco Networking Academy, EIT Digital & Saylor Academy." 
    },
    { 
      id: 5, 
      title: "Media & Digital Production", 
      desc: "Photography, Video Editing & Visual Retouching", 
      icon: "05", 
      workplace: "Orange Films Studio, Studio Graff, Major Gaming Center." 
    },
    { 
      id: 6, 
      title: "Systems & API Technician", 
      desc: "System Integration, API Systems & Infrastructure", 
      icon: "06", 
      workplace: "Bonbon Resort (API Systems), Grey System." 
    }
  ]

  // Lista e Certifikatave Zyrtare
  const certificates = [
    {
      id: 1,
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      program: "Penetration Testing & Security Assessment",
      date: "Oct 13, 2026",
      pdfUrl: "/EthicalHackerUpdate20261013-22-6ra41r.pdf",
      skills: ["Vulnerability Scanning", "Penetration Testing", "Network Security", "Social Engineering"]
    },
    {
      id: 2,
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      program: "Hardware Maintenance & Assembly",
      date: "Sep 23, 2026",
      pdfUrl: "/Computer_Hardware_Basics_certificate_egzon-kalisi-ykc-edu-mk_469ff077-9288-4c8b-a4fa-786d56e996a9.pdf",
      skills: ["Hardware Assembly", "Diagnostics", "System Troubleshooting", "PC Maintenance"]
    },
    {
      id: 3,
      title: "Basic Concepts of Cryptography",
      issuer: "EIT Digital & ELTE Faculty of Informatics",
      program: "SPECTRO - Co-funded by European Union",
      date: "2026",
      pdfUrl: "/egzonkalisi-Basic-Concepts-of-Cryptography-Basic-Certificate-Basic-concepts-of-cryptography-28DIGITAL-EA-Online-Courses_2.pdf",
      skills: ["Encryption", "RSA", "Hash Functions", "Digital Signatures", "MAC"]
    },
    {
      id: 4,
      title: "CS406: Information Security",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/certification egzon kalisi  Information Security.pdf",
      skills: ["Information Security", "Risk Management", "Access Control", "Data Protection"]
    },
    {
      id: 5,
      title: "CS402: Computer Communications and Networks",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/CERTIFICATE EGZON KALISI Computer Communications and Networks.pdf",
      skills: ["Network Architecture", "TCP/IP", "Routing & Switching", "Protocols"]
    },
    {
      id: 6,
      title: "CS401: Operating Systems",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/CERTIFICATE EGZON KALISI OPERATING SYSTEM.pdf",
      skills: ["OS Concepts", "Process Management", "Memory Management", "File Systems"]
    },
    {
      id: 7,
      title: "CS301: Computer Architecture",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/cERTIFICATE egzon Kalisi Computer Architecture.pdf",
      skills: ["Processor Design", "Memory Hierarchy", "Instruction Set Architecture", "Logic Gates"]
    },
    {
      id: 8,
      title: "CS302: Software Engineering",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/Egzon Kalisi Certifikate Software Engieneering.pdf",
      skills: ["Software Lifecycle", "System Design", "Agile & Testing", "Architecture"]
    },
    {
      id: 9,
      title: "CS120: Bitcoin for Developers I",
      issuer: "Saylor Academy / University",
      program: "IACET Accredited CEU",
      date: "Oct 5, 2026",
      pdfUrl: "/Certificate egzon kalisi Bitcoin for Developers I.pdf",
      skills: ["Blockchain Basics", "Cryptography", "Decentralized Systems", "Bitcoin Protocol"]
    },
    {
      id: 10,
      title: "Future of Emotion AI",
      issuer: "28DIGITAL & University of Turku",
      program: "EIT Label Certified",
      date: "2026",
      pdfUrl: "/egzonkalisi-Future-of-Emotion-AI-EMAI4EU-Certificate-Future-of-Emotion-AI-Basic-28DIGITAL-EA-Online-Courses.pdf",
      skills: ["Artificial Intelligence", "Emotion AI", "Machine Learning Concepts"]
    }
  ]

  // Aftësitë e Përgjithshme (Technical Skills)
  const skillsList = [
    "IT Support & Help Desk",
    "Hardware Repair & PC Assembly",
    "Junior Network Administration",
    "Ethical Hacking & Penetration Testing",
    "Information Security",
    "Cryptography Fundamentals",
    "Operating Systems Management",
    "Computer Architecture & Hardware",
    "Software Engineering Principles",
    "System Integration & APIs",
    "Media Production & Digital Retouching"
  ]

  const infoData = {
    bio: {
      birth: "I LINDUR NË: SHKUP, MAQEDONI",
      workHistory: [
        "Major Gaming Center (Manager / Lead IT Tech)",
        "Yahya Kemal College (IT Support & Network Specialist)",
        "Teleperformance (IT Help Desk)",
        "Bonbon Resort (IT Infrastructure & API Systems)",
        "Orange Films Studio (Video & Photo Production)",
        "Studio Graff (Editor & Photographer)",
        "Call Center Skopje (IT Infrastructure)",
        "Grey System (Specialist Tech)"
      ]
    },
    email: "info@egzonkalisi.com",
    linkedin: "https://www.linkedin.com/in/egzon-kalisi-9401962a1/"
  }

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-[#020202] text-white overflow-x-hidden font-mono flex flex-col p-4 sm:p-6 md:p-10">
      
      {/* 🔴 GLOBAL GLITCH STYLES */}
      <style jsx global>{`
        @keyframes glitch {
          0% { text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA; }
          2% { text-shadow: 2px 0 0 #A855F7, -2px 0 0 #60A5FA; }
          4% { text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA; }
          60% { text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA; }
          62% { text-shadow: 1px 0 0 #60A5FA, -1px 0 0 #A855F7; }
          64% { text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA; }
          100% { text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA; }
        }
        .glitch-logo {
          animation: glitch 3s infinite;
          text-shadow: 0.5px 0 0 #A855F7, -0.5px 0 0 #60A5FA;
        }
      `}</style>
      
      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/[0.08] rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-600/[0.05] rounded-full blur-[90px] sm:blur-[120px]" />
      </div>

      {/* Header Section */}
      <header className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-16">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border border-purple-500/40 flex items-center justify-center rotate-45 bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.15)] shrink-0">
            <span className="-rotate-45 font-black text-lg sm:text-xl tracking-tighter">EK</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black tracking-widest uppercase bg-white text-black px-2">EGZON KALISI</h1>
            <p className="text-[8px] sm:text-[9px] text-zinc-500 font-bold tracking-[0.3em] sm:tracking-[0.4em] mt-1 uppercase">Portfolio // 2026 Archive</p>
          </div>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
          <span className="text-[9px] sm:text-[10px] text-green-500 font-black uppercase tracking-widest animate-pulse">● System_Active</span>
          <a 
            href={infoData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[9px] sm:text-[10px] text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest transition-colors flex items-center gap-1 bg-blue-500/10 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none border border-blue-500/30 sm:border-0"
          >
            [ LinkedIn ↗ ]
          </a>
        </div>
      </header>

      {/* 🔵 CENTER SECTION (Cyber-Glitch Logo) */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 py-6 sm:py-10">
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="glitch-logo text-3xl sm:text-5xl md:text-7xl font-[1000] tracking-tighter uppercase italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] leading-none">
            EGZON KALISI
          </h2>
          <div className="text-purple-400/60 font-black tracking-[0.4em] sm:tracking-[1em] text-[9px] sm:text-xs mt-3 sm:mt-4 uppercase">
            IT Support Specialist // Hardware & Networking
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-4 w-full max-w-xl mb-12 sm:mb-20 px-2">
          <button onClick={() => setActiveTab('bio')} className="px-4 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center">
            [ i ] Bio & Skills
          </button>
          <button onClick={() => setActiveTab('certificates')} className="px-4 sm:px-8 py-3.5 sm:py-4 bg-emerald-600/10 border border-emerald-500/30 hover:bg-emerald-600/20 hover:border-emerald-500/60 transition-all text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-emerald-400 text-center">
            [ * ] Certifikatat ({certificates.length})
          </button>
          <button onClick={() => setActiveTab('projects')} className="px-4 sm:px-8 py-3.5 sm:py-4 bg-purple-600/5 border border-purple-500/20 hover:bg-purple-600/10 hover:border-purple-500/60 transition-all text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-purple-400/80 text-center">
            [ + ] Projektet
          </button>
          <button onClick={() => setActiveTab('contact')} className="px-4 sm:px-8 py-3.5 sm:py-4 bg-white/5 border border-white/10 hover:border-blue-500 transition-all text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center">
            [@] Kontakt
          </button>
        </div>

        {/* 6 Grid Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-6xl">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedId(item.id)}
              className="group relative p-6 sm:p-8 bg-white/[0.01] border border-white/[0.05] backdrop-blur-md cursor-pointer hover:border-purple-500/30 hover:bg-purple-500/[0.02] transition-all"
            >
              <div className="text-zinc-700 text-[9px] sm:text-[10px] font-bold mb-3 sm:mb-4 tracking-widest">NODE_00{item.icon}</div>
              <h3 className="text-sm sm:text-md font-black uppercase text-zinc-300 group-hover:text-white italic">{item.title}</h3>
              <p className="text-[9px] sm:text-[10px] text-zinc-500 mt-2 uppercase tracking-tight">{item.desc}</p>
              <div className="mt-4 h-[1px] w-8 bg-zinc-800 group-hover:w-full group-hover:bg-purple-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL CERTIFICATES */}
      <AnimatePresence>
        {activeTab === 'certificates' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/98 backdrop-blur-3xl">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-[#080808] border border-emerald-500/30 p-5 sm:p-8 md:p-12 max-w-4xl w-full shadow-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-lg sm:rounded-none">
              <button onClick={() => setActiveTab(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-500 hover:text-white font-black text-xs uppercase p-2">[ CLOSE ]</button>
              
              <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase italic border-l-4 border-emerald-500 pl-3 sm:pl-4 tracking-tighter mt-2 sm:mt-0">
                CERTIFIKATAT ZYRTARE ({certificates.length})
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-4 sm:p-6 bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
                    <div className="w-full md:w-auto">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[8px] sm:text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 font-bold uppercase">VERIFIED</span>
                        <span className="text-[9px] sm:text-[10px] text-zinc-500">{cert.program}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white italic">{cert.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{cert.issuer} • <span className="text-zinc-500">{cert.date}</span></p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        {cert.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[8px] sm:text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 sm:py-1 text-zinc-300 uppercase">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={cert.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-5 py-3 bg-emerald-500/20 border border-emerald-500/50 hover:bg-emerald-500 hover:text-black transition-all text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-emerald-300 text-center block"
                    >
                      [ VIEW PDF ]
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL BIO & SKILLS */}
      <AnimatePresence>
        {activeTab === 'bio' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/98 backdrop-blur-3xl">
             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-[#080808] border border-purple-500/20 p-5 sm:p-10 max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[85vh] sm:max-h-[90vh] rounded-lg sm:rounded-none">
                <button onClick={() => setActiveTab(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-500 hover:text-white font-black text-xs uppercase p-2">[ CLOSE ]</button>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase italic border-b border-purple-500/20 pb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mt-2 sm:mt-0">
                  ARCHIVE_LOG // EGZON KALISI
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <p className="text-purple-500 text-[9px] sm:text-[10px] font-black mb-1 sm:mb-2 uppercase tracking-widest">Personal_Data</p>
                    <p className="text-zinc-200 text-xs sm:text-sm font-bold">{infoData.bio.birth}</p>
                    <a 
                      href={infoData.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 text-xs text-blue-400 hover:underline uppercase font-bold"
                    >
                      LinkedIn: linkedin.com/in/egzon-kalisi ↗
                    </a>
                  </div>

                  <div>
                    <p className="text-purple-500 text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 uppercase tracking-widest">Technical_Skills & Expertise</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillsList.map((skill, idx) => (
                        <span key={idx} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-purple-500 text-[9px] sm:text-[10px] font-black mb-3 sm:mb-4 uppercase tracking-widest">Experience_History</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-y-3 text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-tight">
                      {infoData.bio.workHistory.map((job, idx) => (
                        <li key={idx} className="border-l border-white/10 pl-3"> {job}</li>
                      ))}
                    </ul>
                  </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL PROJECTS */}
      <AnimatePresence>
        {activeTab === 'projects' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/98 backdrop-blur-3xl">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative bg-[#080808] border border-purple-500/20 p-5 sm:p-10 max-w-5xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
                <button onClick={() => setActiveTab(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-500 hover:text-white font-black text-xs uppercase p-2">[ X ]</button>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-10 uppercase italic border-l-4 border-purple-500 pl-4 sm:pl-6 mt-2 sm:mt-0">GALERIA E PROJEKTEVE</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-zinc-900 border border-white/5 flex items-center justify-center text-[9px] sm:text-[10px] text-zinc-700 font-bold uppercase overflow-hidden">
                       Foto/Video {i}
                    </div>
                  ))}
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL CONTACT */}
      <AnimatePresence>
        {activeTab === 'contact' && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/96 backdrop-blur-xl">
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative bg-[#080808] border border-blue-500/30 p-6 sm:p-12 max-w-lg w-full text-center shadow-2xl rounded-lg sm:rounded-none">
                <button onClick={() => setActiveTab(null)} className="absolute top-4 right-4 sm:top-8 sm:right-8 text-zinc-600 hover:text-white text-xs uppercase font-bold p-2">[ X ]</button>
                <h2 className="text-lg sm:text-xl font-black text-white mb-6 sm:mb-10 uppercase tracking-[0.3em] sm:tracking-[0.5em] italic mt-2 sm:mt-0">Get in Touch</h2>
                <div className="bg-white/5 p-5 sm:p-8 border border-white/10 space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1 sm:mb-2">Official Email</h4>
                    <p className="text-lg sm:text-xl font-serif italic text-blue-400 select-all drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]">{infoData.email}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] text-zinc-600 font-black uppercase tracking-widest mb-1 sm:mb-2">LinkedIn Network</h4>
                    <a href={infoData.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-sans text-blue-400 hover:underline block break-all">
                      linkedin.com/in/egzon-kalisi-9401962a1 ↗
                    </a>
                  </div>

                  <a href={`mailto:${infoData.email}?subject=Project Inquiry`} className="inline-block w-full py-3.5 sm:py-4 bg-blue-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95">Send Message</a>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* POPUP DETAILS NODE */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-xl">
             <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-zinc-950 border border-purple-500/20 p-6 sm:p-10 max-w-lg w-full shadow-2xl rounded-lg sm:rounded-none">
                <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-500 hover:text-white text-xs font-black uppercase p-2">[ BACK ]</button>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 uppercase italic border-b border-purple-500/20 pb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mt-2 sm:mt-0">
                  {experiences.find(e => e.id === selectedId)?.title}
                </h2>
                <p className="text-zinc-400 text-xs font-bold leading-relaxed uppercase tracking-widest border-l-2 border-purple-500 pl-4 italic">
                  {experiences.find(e => e.id === selectedId)?.workplace}
                </p>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="relative z-10 border-t border-white/5 pt-6 sm:pt-10 text-[9px] sm:text-[10px] font-black text-zinc-800 tracking-[0.5em] sm:tracking-[0.8em] uppercase text-center mt-auto">
        Egzon Kalisi &copy; 2026
      </footer>

    </main>
  );
}
