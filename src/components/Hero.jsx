import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile, stats } from '../data'
import { Arrow, useLocalTime } from './ui'

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Stack', '#stack'],
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-[15px] font-bold tracking-tight">
          {profile.logo}
          <sup className="ml-0.5 text-[9px] font-semibold">™</sup>
        </a>
        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-ink/80 transition hover:text-ink">
              {l}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper transition hover:bg-accent-dark">
            Let's talk
          </a>
        </div>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-5 bg-ink transition ${open ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition ${open ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line bg-paper md:hidden"
          >
            <div className="flex flex-col px-4 pb-4">
              {[...links, ['Contact', '#contact']].map(([l, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-line py-3 font-serif text-2xl italic last:border-0">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function FloatingCursor({ label, color, className, delay = 0, path }) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-10 hidden sm:block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: path.x, y: path.y }}
      transition={{
        opacity: { delay: 0.8 + delay, duration: 0.4 },
        x: { duration: 7, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay },
        y: { duration: 9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay },
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ color }} aria-hidden="true">
        <path d="M1 1l5.5 14 2-6 6-2z" fill="currentColor" />
      </svg>
      <span className="ml-3 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white" style={{ background: color }}>
        {label}
      </span>
    </motion.div>
  )
}

function Photo() {
  if (profile.photo) {
    return <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
  }
  return (
    <div className="flex h-full w-full items-end justify-center bg-gradient-to-b from-[#3fd27a] to-accent">
      <svg viewBox="0 0 200 200" className="h-[88%] w-[88%] text-white/90" aria-label="Profile photo placeholder" role="img">
        <circle cx="100" cy="72" r="38" fill="currentColor" />
        <path d="M24 200c4-46 36-76 76-76s72 30 76 76z" fill="currentColor" />
      </svg>
    </div>
  )
}

export function Hero() {
  const time = useLocalTime()
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <FloatingCursor label="Recruiter" color="#ef6b4a" className="right-[34%] top-28" path={{ x: [0, -40, 10], y: [0, 30, -10] }} />
      <FloatingCursor label="Dev" color="#e0457b" className="left-[8%] top-[78%]" delay={0.6} path={{ x: [0, 50, 20], y: [0, -20, 10] }} />
      <FloatingCursor label="You" color="#5b5bd6" className="left-[42%] top-[88%]" delay={1.1} path={{ x: [0, -30, 30], y: [0, 15, -15] }} />

      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 font-mono text-xs text-accent-dark sm:text-sm"
          >
            &gt; Available for work &amp; internships <span className="cursor-blink inline-block h-3.5 w-2 translate-y-0.5 bg-accent" />
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] leading-[1.08] tracking-tight italic sm:text-6xl lg:text-7xl"
          >
            I build systems
            <br />
            that scale —
            <br />
            <span className="not-italic text-ink/90">from RAG to production.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="justify-self-start md:justify-self-end"
        >
          <div className={`relative h-64 w-64 overflow-hidden sm:h-80 sm:w-80 ${profile.photo ? 'rotate-2 rounded-3xl border border-line shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] transition duration-500 hover:rotate-0' : 'rounded-full'}`}>
            <Photo />
          </div>
          <div className="mt-5">
            <p className="text-lg text-muted">Full-Stack &amp; AI</p>
            <p className="text-xl font-semibold">{profile.role}</p>
            <p className="mt-2 font-mono text-[11px] text-muted">
              Local time {time} IST · {profile.location}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-[auto_auto_1fr] sm:items-start sm:gap-10">
        <a href="#contact" className="group flex items-center gap-2 text-sm font-medium">
          <Arrow className="h-4 w-4 text-accent transition group-hover:rotate-45" /> Get in touch
        </a>
        <a href="#work" className="group flex items-center gap-2 text-sm font-medium">
          <Arrow className="h-4 w-4 rotate-90 text-accent transition group-hover:translate-y-0.5" /> See my work
        </a>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 sm:justify-end">
          {stats.map((s) => (
            <li key={s.label} className="flex items-baseline gap-2 text-sm">
              <span className="h-1.5 w-1.5 translate-y-[-2px] bg-ink" />
              <span className="font-semibold">{s.value}</span>
              <span className="text-muted">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
