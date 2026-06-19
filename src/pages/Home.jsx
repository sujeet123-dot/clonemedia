import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, Play, TrendingUp, Users, Award, Sparkles,
  Video, Megaphone, PenTool, BarChart3, ChevronRight, Star
} from 'lucide-react'

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Floating orb background ─── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#e94560]/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00d4ff]/8 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-[#f5a623]/6 blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  )
}

const stats = [
  { icon: TrendingUp, value: 450, suffix: '+', label: 'Campaigns Delivered' },
  { icon: Users, value: 120, suffix: '+', label: 'Brand Clients' },
  { icon: Award, value: 38, suffix: '', label: 'Industry Awards' },
  { icon: Sparkles, value: 12, suffix: 'M+', label: 'Content Views' },
]

const services = [
  {
    icon: Video,
    title: 'Video Production',
    desc: 'Cinematic storytelling that grabs attention — from TVCs to short-form reels built for virality.',
    color: '#e94560',
  },
  {
    icon: Megaphone,
    title: 'Brand Campaigns',
    desc: 'End-to-end campaign strategy that builds brand equity and drives measurable audience action.',
    color: '#00d4ff',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    desc: 'Editorial, social, and multimedia content crafted to resonate with your exact target audience.',
    color: '#f5a623',
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    desc: "Data-driven media insights that reveal what's working, what's not, and what to do next.",
    color: '#9b59b6',
  },
]

const works = [
  { category: 'Campaign', title: 'NovaSpark Product Launch', result: '4.2M views in 72 hours', color: 'from-[#e94560] to-[#c73652]' },
  { category: 'Branding', title: 'Technospark', result: '180% increase in brand recall', color: 'from-[#00d4ff] to-[#0099bb]' },
  { category: 'Social', title: 'Bloom Fashion Social', result: '60K new followers in 30 days', color: 'from-[#f5a623] to-[#e0921a]' },
]

const testimonials = [
  {
    name: 'Priya Mehra',
    role: 'CMO, NovaSpark Technologies',
    text: 'BuzzDrop Media transformed how we present our brand. Their campaign exceeded every KPI we set and created genuine cultural buzz around our product.',
    rating: 5,
  },
  {
    name: 'David ray',
    role: 'Founder, Orion Financial',
    text: 'Working with BuzzDrop was a game-changer. They didn\'t just deliver creative assets — they built a complete visual language that our customers connect with.',
    rating: 5,
  },
  {
    name: 'Sophia Lin',
    role: 'Brand Director, Bloom Fashion',
    text: 'The team\'s creativity combined with their strategic thinking sets them apart. Every piece of content feels intentional and on-brand.',
    rating: 5,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function Home() {
  return (
    <div className="relative">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingOrbs />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-white/70"
          >
            <span className="w-2 h-2 rounded-full bg-[#e94560] animate-pulse" />
            Branding agency — Est. 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            We Create Media
            <br />
            <span className="text-gradient">That Moves</span>
            <br />
            the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            BuzzDrop Media is a full-service creative agency specializing in bold brand
            storytelling, viral content, and campaigns that drive real-world results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/portfolio" className="btn-primary">
              View Our Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-outline">
              <Play className="w-4 h-4" /> Our Story
            </Link>
          </motion.div>

          {/* Hero visual — abstract composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto mt-20 max-w-4xl h-64 md:h-80"
          >
            <div className="absolute inset-0 rounded-3xl glass overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/20 via-transparent to-[#00d4ff]/20" />
              <div className="flex items-center justify-center h-full gap-6 p-8">
                {['Brand', 'Story', 'Reach', 'Impact'].map((word, i) => (
                  <motion.div
                    key={word}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    className="glass rounded-2xl px-6 py-4 text-center border border-white/10"
                  >
                    <div
                      className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center text-lg font-black"
                      style={{ background: `hsl(${i * 80 + 10}, 80%, 55%)` }}
                    >
                      {word[0]}
                    </div>
                    <span className="text-sm font-semibold text-white/80">{word}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Icon className="w-5 h-5 text-[#e94560]" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-gradient mb-1">
                  <Counter target={value} suffix={suffix} />
                </div>
                <p className="text-sm text-white/50">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-tag justify-center">
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
              className="text-4xl md:text-5xl font-black"
            >
              Services Built for <span className="text-gradient">Modern Media</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass glass-hover rounded-2xl p-6 cursor-pointer group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#00d4ff] transition-colors">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold" style={{ color }}>
                  Learn more <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section className="py-24 bg-[#10101a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="section-tag">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-black">
                Projects That <span className="text-gradient-gold">Define Us</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-outline whitespace-nowrap self-start md:self-auto">
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {works.map(({ category, title, result, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="group cursor-pointer"
              >
                <div className={`h-52 rounded-2xl bg-gradient-to-br ${color} relative overflow-hidden mb-4`}>
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                      {category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-[#e94560] transition-colors">{title}</h3>
                <p className="text-sm text-white/40">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag justify-center">Client Stories</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }, i) => (
              <motion.div
                key={name}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass rounded-2xl p-8 border border-white/5"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#f5a623]" fill="#f5a623" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e94560] to-[#00d4ff] flex items-center justify-center text-sm font-bold text-white">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-white/40">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 bg-[#10101a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="section-tag justify-center">Next Step</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Your Story Deserves to <span className="text-gradient">Be Heard</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you're launching a brand, scaling your reach, or reinventing your narrative — we're the team to make it happen.
            </p>
            <Link to="/contact" className="btn-primary text-base px-10 py-5">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
