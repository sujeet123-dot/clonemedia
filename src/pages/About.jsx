import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Rocket } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

const timeline = [
  { year: '2025', event: 'TheBuzzDrop Media founded by a trio of filmmakers and strategists in Delhi.' },
  { year: '2026', event: 'Secured first national brand campaign; grew team to 15 creatives.' },
  { year: '2026', event: 'Pivoted to digital-first content — became a top digital media partner regionally.' },
  { year: '2026', event: 'Launched our in-house video studio and analytics division.' },
  { year: '2026', event: 'Surpassed 450 campaigns and 12M cumulative content views across platforms.' },
]

const values = [
  { icon: Target, title: 'Precision', desc: 'Every campaign is built on research, audience insight, and clear objectives — not guesswork.' },
  { icon: Lightbulb, title: 'Creativity', desc: 'We believe the most powerful ideas live at the edge of unexpected thinking.' },
  { icon: Heart, title: 'Authenticity', desc: 'Real stories resonate. We help brands speak truthfully and compellingly.' },
  { icon: Shield, title: 'Integrity', desc: 'We work with brands whose values we believe in — long-term partnership over short-term gain.' },
  { icon: Rocket, title: 'Ambition', desc: 'Good enough isn\'t our standard. We push until every project exceeds expectations.' },
  { icon: Eye, title: 'Clarity', desc: 'Complex ideas deserve clear, beautiful communication. We simplify without dumbing down.' },
]

const team = [
  { name: 'Aman RAJ', role: 'Co-founder & Creative Director', initials: 'AK', color: '#e94560' },
  { name: 'Suman kumar', role: 'Co-founder & Brand Strategist', initials: 'NR', color: '#00d4ff' },
]

export default function About() {
  return (
    <div className="pt-24">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#e94560]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#00d4ff]/8 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="section-tag">About BuzzDrop Media</p>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl"
          >
            We Are Storytellers,
            <br />
            <span className="text-gradient">Strategists</span> &
            <br />
            Media Makers
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Founded in 2026, TheBuzzDrop Media has grown from a small creative team into a global
            media agency delivering campaigns that shape culture, build brands, and move audiences
            across every platform and market.
          </motion.p>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="py-20 bg-[#10101a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              tag: 'Our Mission',
              title: 'Amplifying Authentic Voices',
              text: 'We exist to give brands a voice that cuts through the noise. In a world of endless content, our mission is to create work that earns attention — not just buys it. We build campaigns grounded in truth, driven by strategy, and elevated by craft.',
              color: '#e94560',
            },
            {
              icon: Eye,
              tag: 'Our Vision',
              title: 'Defining the Future of Media',
              text: 'We envision a media landscape where creativity and data work in harmony — where every campaign feels human, every story feels genuine, and every brand has the power to create lasting cultural impact. BuzzDrop Media leads that future.',
              color: '#00d4ff',
            },
          ].map(({ icon: Icon, tag, title, text, color }, i) => (
            <motion.div
              key={tag}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              className="glass rounded-3xl p-10 border border-white/5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}20`, border: `1px solid ${color}40` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color }}>{tag}</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4">{title}</h2>
              <p className="text-white/60 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-tag justify-center">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black">
              One Years of <span className="text-gradient">Building Bold</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e94560] via-[#00d4ff] to-transparent" />

            <div className="space-y-10">
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                  className={`relative flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                    <div className="glass rounded-2xl p-5 border border-white/5 inline-block text-left">
                      <span className="text-xs font-semibold text-[#e94560] tracking-widest">{year}</span>
                      <p className="text-sm text-white/70 mt-1 leading-relaxed">{event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#e94560] border-2 border-[#0a0a0f] z-10 flex-shrink-0" />

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-[#10101a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                className="glass glass-hover rounded-2xl p-7 border border-white/5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center mb-4 group-hover:bg-[#e94560]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#e94560]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">The People</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Meet the <span className="text-gradient">Creative Minds</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Our diverse team of filmmakers, strategists, designers, and data analysts brings
              your brand to life from every angle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, initials, color }, i) => (
              <motion.div
                key={name}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                className="glass glass-hover rounded-2xl p-6 border border-white/5 flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                >
                  {initials}
                </div>
                <div>
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#10101a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Join Our <span className="text-gradient">Growing Story</span>
            </h2>
            <p className="text-white/60 mb-8">
              Ready to collaborate with a team that cares as much about your brand as you do?
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
