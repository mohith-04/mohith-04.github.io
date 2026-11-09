import { profile } from '../data'
import { Reveal, Arrow, useLocalTime } from './ui'

export function Contact() {
  const time = useLocalTime()
  const socials = [
    ['Email', `mailto:${profile.email}`],
    ['GitHub', profile.socials.github],
    ['LinkedIn', profile.socials.linkedin],
    ['LeetCode', profile.socials.leetcode],
  ]
  return (
    <footer id="contact" className="mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-paper/50">(06) Contact</p>
          <h2 className="mt-6 font-serif text-5xl italic leading-tight sm:text-7xl">
            Let's build
            <br />
            something together.
          </h2>
          <a href={`mailto:${profile.email}`} className="group mt-10 inline-flex items-center gap-3 border-b border-paper/30 pb-2 text-lg font-medium transition hover:border-accent hover:text-accent sm:text-2xl">
            <span className="break-all">{profile.email}</span>
            <Arrow className="h-5 w-5 shrink-0 transition group-hover:rotate-45" />
          </a>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-paper/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/40">Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[['Home', '#'], ['Work', '#work'], ['About', '#about'], ['Education', '#education']].map(([l, h]) => (
                <li key={l}><a href={h} className="text-paper/80 hover:text-accent">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/40">Socials</p>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map(([l, h]) => (
                <li key={l}>
                  <a href={h} target={h.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="text-paper/80 hover:text-accent">
                    {l} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/40">Local time</p>
            <p className="mt-4 font-mono text-sm">{time} IST</p>
            <p className="text-sm text-paper/60">{profile.location}</p>
            <p className="font-mono text-xs text-paper/40">{profile.coords}</p>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-4 overflow-hidden">
          <p className="select-none text-[22vw] font-semibold leading-[0.8] tracking-tighter text-paper sm:text-[16vw] lg:text-[13rem]">
            MOHITH
          </p>
          <a href="#" aria-label="Back to top" className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/30 transition hover:border-accent hover:bg-accent hover:text-ink">
            ↑
          </a>
        </div>
        <div className="flex flex-col gap-2 border-t border-paper/15 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="font-mono">Version 2026 © Edition</span>
        </div>
      </div>
    </footer>
  )
}
