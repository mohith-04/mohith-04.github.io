import { profile, about, projects, moreProjects, experience, education, certifications, stack } from '../data'
import { Reveal, SectionLabel, Star, Arrow, GithubIcon } from './ui'

export function NameMarquee() {
  const item = (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      <span>{profile.name}</span>
      <Star className="spin-slow h-[0.6em] w-[0.6em] text-accent" />
    </span>
  )
  return (
    <div className="mt-16 overflow-hidden border-y border-line py-4 sm:mt-24" aria-hidden="true">
      <div className="marquee flex w-max text-[18vw] font-semibold leading-none tracking-tighter sm:text-[12vw]">
        {item}
        {item}
        {item}
        {item}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionLabel index="01">About</SectionLabel>
      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="font-serif text-3xl italic leading-snug sm:text-4xl">
            Hi, I'm {profile.firstName} —<br />a developer who likes hard problems and clean solutions.
          </p>
        </Reveal>
        <div className="space-y-6 text-[17px] leading-relaxed text-ink/75">
          {about.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-accent-dark">
                Say hello
              </a>
              {profile.resume && (
                <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full border border-ink px-5 py-2.5 text-sm font-semibold transition hover:bg-ink hover:text-paper">
                  [ Resume ]
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="02">Selected Work</SectionLabel>
      <Reveal>
        <h2 className="mt-8 font-serif text-4xl italic sm:text-6xl">Things I've built.</h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] sm:p-8">
              <div className="flex items-center justify-between font-mono text-xs text-muted">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-[28px]">{p.title}</h3>
              <p className="mt-1 font-serif italic text-muted">{p.subtitle}</p>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-ink/75">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-5 pt-7 text-sm font-medium">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-accent-dark">
                  <GithubIcon className="h-4 w-4" /> View code
                  <Arrow className="h-3.5 w-3.5 transition group-hover:rotate-45" />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 transition hover:text-accent-dark">
                    Live <Arrow className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-dashed border-line p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">More projects</p>
          <div className="mt-4 divide-y divide-line">
            {moreProjects.map((m) => (
              <div key={m.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-semibold">{m.title}</span>
                  <span className="text-muted"> — {m.desc}</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <a href={m.github} target="_blank" rel="noreferrer" className="hover:text-accent-dark">Code ↗</a>
                  {m.live && <a href={m.live} target="_blank" rel="noreferrer" className="hover:text-accent-dark">Live ↗</a>}
                </div>
              </div>
            ))}
          </div>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent-dark">
            All repositories on GitHub <Arrow className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="03">Experience</SectionLabel>
      {experience.map((e) => (
        <Reveal key={e.company}>
          <div className="mt-10 grid gap-6 border-t border-ink pt-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="mt-3 font-serif text-4xl italic">{e.company}</h3>
              <p className="text-muted">{e.tagline}</p>
              <p className="mt-4 font-semibold">{e.role}</p>
              <p className="text-sm text-muted">{e.mode}</p>
            </div>
            <div>
              <ul className="space-y-4 text-[16px] leading-relaxed text-ink/80">
                {e.points.map((pt, i) => (
                  <li key={pt} className="flex gap-4">
                    <span className="font-mono text-xs text-accent-dark">{String(i + 1).padStart(2, '0')}</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[11px]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="04">Education</SectionLabel>
      <Reveal>
        <h2 className="mt-8 font-serif text-4xl italic sm:text-6xl">Where I learned.</h2>
      </Reveal>
      <ol className="relative mt-14 border-l border-line pl-6 sm:pl-10">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08}>
            <li className="relative pb-12 last:pb-0">
              <span className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[47px] ${i === 0 ? 'border-accent bg-accent' : 'border-ink/40 bg-paper'}`} />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs text-muted">{ed.period}</p>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{ed.degree}</h3>
                  <p className="mt-1 text-ink/70">
                    {ed.school} <span className="text-muted">· {ed.place}</span>
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-serif text-4xl italic text-accent-dark sm:text-5xl">{ed.score}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{ed.scoreLabel}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-16 rounded-2xl bg-ink p-6 text-paper sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Certification</p>
          {certifications.map((c) => (
            <div key={c.title} className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-semibold sm:text-xl">{c.title}</p>
              <p className="shrink-0 font-mono text-sm text-accent">{c.issuer} · {c.period}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionLabel index="05">Skills &amp; Tech Stack</SectionLabel>
      <Reveal>
        <h2 className="mt-8 font-serif text-4xl italic sm:text-6xl">The toolkit.</h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.1}>
            <div className="border-t border-ink pt-5">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{g.group}</h3>
                <p className="font-serif text-sm italic text-muted">{g.note}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map(([name, cat]) => (
                  <span key={name} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm transition hover:border-accent hover:bg-accent/5">
                    {name} <span className="text-muted">/ {cat}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
