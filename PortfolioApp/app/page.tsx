"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Sparkles, ExternalLink, MoveUpRight, Braces, Globe2 } from "lucide-react";
import { accents, projects, skills, EMAIL, GITHUB, LINKEDIN } from "@/lib/data";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };
const inView = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.15 }, variants: rise } as const;

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const root = () => document.documentElement;
  const move = (e: React.PointerEvent) => {
    const c = ref.current!, r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 9}deg) rotateX(${(0.5 - y) * 9}deg) translateY(-6px)`;
    c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
  };
  const enter = () => root().style.setProperty("--a", accents[p.color]); // recolors the 3D scene
  const leave = () => { if (ref.current) ref.current.style.transform = ""; root().style.removeProperty("--a"); };
  return (
    <motion.article ref={ref as any} className={`project-card project-${p.color}`} {...inView} transition={{ delay: (i % 2) * 0.08 }} onPointerMove={move} onPointerEnter={enter} onPointerLeave={leave}>
      <div className="project-visual">
        <div className="project-visual-top"><span>{p.type}</span><span>{p.number}</span></div>
        <div className="project-art">
          <div className="art-window">
            <div className="window-bar"><span /><span /><span /><b>{p.mark.toLowerCase()}.studio</b></div>
            <div className="window-content"><span className="mini-label">DIGITAL / EXPERIENCE</span><strong>{p.mark}</strong><div className="mini-lines"><i /><i /><i /></div><div className="mini-pill">EXPLORE <ArrowUpRight size={11} /></div></div>
          </div>
          <div className="project-orb" /><div className="project-cross">✧</div>
        </div>
        <div className="project-visual-bottom"><span>CONCEPT / BUILD</span><span>↗</span></div>
      </div>
      <div className="project-info">
        <div className="project-title-row"><h3>{p.title}</h3><a href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}><ArrowUpRight size={18} /></a></div>
        <p>{p.description}</p>
        <div className="tag-list">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="project-links"><a href={p.live} target="_blank" rel="noreferrer">View project <ExternalLink size={13} /></a><a href={p.href} target="_blank" rel="noreferrer">Source code <Github size={13} /></a></div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const close = () => setMenuOpen(false);

  useEffect(() => { // cursor spotlight
    const on = (e: PointerEvent) => { document.documentElement.style.setProperty("--cx", e.clientX + "px"); document.documentElement.style.setProperty("--cy", e.clientY + "px"); };
    addEventListener("pointermove", on); return () => removeEventListener("pointermove", on);
  }, []);

  const h = (d: number) => ({ initial: "hidden", animate: "visible", variants: rise, transition: { delay: d } }) as const;

  return (
    <main>
      <Scene />
      <div className="noise" aria-hidden="true" /><div className="spot" aria-hidden="true" />
      <motion.div className="progress" style={{ scaleX: reduce ? scrollYProgress : bar }} aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={close} aria-label="Abdullah home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ABDULLAH <small>DEVELOPER PORTFOLIO</small></span></a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#work" onClick={close}>Work <span>01</span></a><a href="#about" onClick={close}>About <span>02</span></a>
            <a href="#skills" onClick={close}>Skills <span>03</span></a>
            <a className="nav-cta" href="#contact" aria-label="Back to top">Let&apos;s talk <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <motion.div {...h(0)} className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</motion.div>
          <motion.h1 {...h(0.08)}>I build digital<br/><span className="outline-word">experiences</span><span className="">✧</span></motion.h1>
          <motion.p className="hero-intro" {...h(0.16)}>I&apos;m <strong>Abdullah Malik Sher</strong> — a MERN Stack Developer building responsive web apps, real-time experiences, and useful full-stack products.</motion.p>
          <motion.div className="hero-actions" {...h(0.24)}><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a></motion.div>
          <motion.div className="hero-socials" {...h(0.32)}><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></motion.div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="floating-chip chip-code"><Braces size={15} /><span>clean code</span></div>
          <div className="floating-chip chip-ui"><Sparkles size={15} /><span>considered UI</span></div>
          <div className="floating-chip chip-react"><Code2 size={15} /><span>React / Next.js</span></div>
          <div className="art-caption"><span>MOVE YOUR MOUSE · SCROLL TO ORBIT</span><span>01 — 04</span></div>
        </div>
        <div className="hero-bottom"><span>MERN STACK DEVELOPER · PAKISTAN</span><a href="#about">SCROLL TO DISCOVER <span className="scroll-line" /></a></div>
      </section>

      <section className="ticker" aria-label="Specialties"><div className="ticker-track">
        {[0, 1].map((i) => <div className="ticker-set" key={i}><span>FRONTEND DEVELOPMENT</span><i>✧</i><span>INTERACTIVE UI</span><i>✧</i><span>RESPONSIVE DESIGN</span><i>✧</i><span>CREATIVE PROBLEM SOLVING</span><i>✧</i></div>)}
      </div></section>

      <section id="work" className="section container">
        <motion.div className="section-heading" {...inView}><div><span className="section-index">01 / SELECTED WORK</span><h2>Things I&apos;ve <em>built.</em></h2></div><p>A selection of projects that reflect how I learn, build, and bring ideas to the browser. Hover a card and watch the scene change color.</p></motion.div>
        <div className="projects-grid">{projects.map((p, i) => <ProjectCard key={p.number} p={p} i={i} />)}</div>
        <div className="section-footnote"><span>MORE EXPERIMENTS ARE ALWAYS IN PROGRESS</span><a href={GITHUB} target="_blank" rel="noreferrer">Explore GitHub <ArrowRight size={15} /></a></div>
      </section>

      <section id="about" className="about-section"><div className="container about-layout">
        <motion.div className="about-left" {...inView}><span className="section-index">02 / A LITTLE ABOUT ME</span><h2>Curiosity in.<br /><em>Good work out.</em></h2><div className="about-stamp"><span>ALWAYS</span><strong>LEARNING</strong><span>NEVER STANDING STILL</span></div></motion.div>
        <motion.div className="about-copy" {...inView}>
          <p className="about-lead">I build full-stack experiences with a frontend-first mindset — from polished interfaces to APIs, data, and real-time features.</p>
          <p>I hold a Bachelor of Computer Science from Virtual University of Pakistan and have hands-on development experience across React, Next.js, Node.js, Express, MongoDB, and headless CMS platforms.</p>
          <p>During my internship at Kommerce Hub, I rebuilt the Kamyabi Network website from Framer using Next.js and Tailwind CSS, working under senior developer mentorship and translating UI/UX designs into responsive pages and smooth animations.</p>
          <p>Before and alongside development, I worked as a customer service representative on the Mindbridge Talabat campaign, strengthening communication, accuracy, and calm problem-solving under pressure.</p>
          <a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <MoveUpRight size={16} /></a>
          <div className="education-card"><div className="education-icon"><Globe2 size={20} /></div><div><span>EDUCATION</span><strong>BS Computer Science · GPA 2.93/4.0</strong><small>Virtual University of Pakistan</small></div><span className="education-date">BSCS</span></div>
          <div className="education-card"><div className="education-icon"><Sparkles size={20} /></div><div><span>CERTIFICATE · UDEMY</span><strong>Ultimate AWS Certified Solutions Architect Associate 2026</strong><small>Completed October 2026 · AWS architecture, security, availability, and cost optimization training</small></div></div>
          <div className="experience-mini"><span className="section-index">EXPERIENCE SNAPSHOT</span><div><strong>Kommerce Hub</strong><small>Developer Intern · Next.js / Tailwind CSS</small></div><div><strong>Mindbridge · Talabat Campaign</strong><small>Customer Service Representative</small></div></div>
        </motion.div>
      </div></section>

      <section id="skills" className="section container">
        <motion.div className="section-heading" {...inView}><div><span className="section-index">03 / TOOLS I WORK WITH</span><h2>My current <em>toolkit.</em></h2></div><p>The same tools orbit the core in the background. Tools I use to turn a blank page into a working product.</p></motion.div>
        <div className="skills-grid">{skills.map((s, i) => { const Icon = s.icon; return (
          <motion.div className="skill-card" key={s.name} {...inView} transition={{ delay: i * 0.035 }} whileHover={{ y: -4 }}>
            <span className="skill-icon"><Icon size={20} /></span><span className="skill-group">{s.group}</span><strong>{s.name}</strong><ArrowUpRight className="skill-arrow" size={15} />
          </motion.div>); })}</div>
        <div className="learning-note"><span className="learning-pulse" /><p><strong>Current focus:</strong> building reliable full-stack applications, real-time features, mobile experiences, and strengthening cloud architecture knowledge.</p></div>
      </section>

      <section className="manifesto"><div className="container manifesto-inner"><span className="section-index">A SIMPLE PRINCIPLE</span><p>Good design gets attention.<br /><em>Good experiences earn trust.</em></p><span className="manifesto-star">✧</span></div></section>

      <section id="contact" className="contact-section container">
        <motion.div className="contact-panel" {...inView}>
          <div className="contact-orbit contact-orbit-a" /><div className="contact-orbit contact-orbit-b" />
          <div className="contact-content"><span className="section-index">04 / WHAT&apos;S NEXT?</span><h2>Have a good<br />idea? <em>Let&apos;s build.</em></h2><p>Open to junior frontend opportunities, collaborations, and projects where thoughtful work matters.</p><a className="button button-light" href={`mailto:${EMAIL}`}>Start a conversation <Mail size={16} /></a></div>
        </motion.div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ABDULLAH <small>DESIGNED &amp; BUILT WITH CARE</small></span></a>
        <span className="footer-copy">© {new Date().getFullYear()} ABDULLAH MALIK SHER</span>
        <div className="footer-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a></div>
      </footer>
    </main>
  );
}
