import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Video, Megaphone, PenTool, BarChart3, Globe, Camera,
  ArrowRight, CheckCircle, ChevronDown
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

const services = [
  {
    icon: Video,
    title: 'Video Production',
    tagline: 'Cinematic Stories That Sell',
    color: '#e94560',
    description:
      'From concept to final cut, our video production team crafts content that commands attention. We produce TVCs, brand films, social reels, documentary-style stories, and everything in between — each piece designed to stop the scroll and drive action.',
    deliverables: [
      'Brand films & commercials',
      'Short-form reels & TikTok content',
      'Documentary & testimonial videos',
      'Product showcases & demos',
      'Event highlight packages',
      'Motion graphics & animation',
    ],
  },
  {
    icon: Megaphone,
    title: 'Brand Campaigns',
    tagline: 'Strategy That Builds Equity',
    color: '#00d4ff',
    description:
      'A great campaign starts with a great strategy. Our brand team immerses itself in your category, audience, and competitive landscape to develop positioning, messaging, and multi-channel campaign architectures that make your brand impossible to ignore.',
    deliverables: [
      'Brand positioning & architecture',
      'Campaign concept development',
      'Multi-platform media planning',
      'Launch strategy & rollout',
      'Influencer integration',
      'PR & earned media amplification',
    ],
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    tagline: 'Content That Builds Community',
    color: '#f5a623',
    description:
      'Consistent, high-quality content is the engine of modern brand growth. We create editorial calendars, produce on-brand visuals, write copy that converts, and build content systems your team can scale — without losing quality or voice.',
    deliverables: [
      'Social media content calendars',
      'Photography & visual asset creation',
      'Long-form editorial & blog content',
      'Email newsletter creative',
      'Podcast production & editing',
      'Infographics & branded visuals',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Growth',
    tagline: 'Data That Drives Decisions',
    color: '#9b59b6',
    description:
      'Creative without data is just art. Our analytics team turns platform metrics, audience signals, and campaign performance into clear, actionable intelligence — helping you invest smarter, optimize faster, and grow with confidence.',
    deliverables: [
      'Campaign performance dashboards',
      'Audience profiling & segmentation',
      'A/B testing frameworks',
      'ROI attribution modelling',
      'Monthly insight reports',
      'Competitive landscape audits',
    ],
  },
  {
    icon: Globe,
    title: 'Digital Advertising',
    tagline: 'Paid Media That Performs',
    color: '#27ae60',
    description:
      'From Meta and Google to programmatic and OTT, our paid media specialists build, manage, and optimize ad campaigns that deliver measurable outcomes. We blend data, creative, and platform expertise to stretch every rupee of your media budget.',
    deliverables: [
      'Google & Meta ad management',
      'Programmatic display campaigns',
      'YouTube & connected TV ads',
      'Retargeting & funnel optimization',
      'Creative testing & iteration',
      'Budget allocation strategy',
    ],
  },
  {
    icon: Camera,
    title: 'Photography & Visual Identity',
    tagline: 'Visuals That Define Your Brand',
    color: '#e67e22',
    description:
      'First impressions are visual. Our photography and design team creates cohesive visual identities — from brand guidelines and photo libraries to packaging concepts — ensuring your brand looks unmistakably like itself across every touchpoint.',
    deliverables: [
      'Commercial & lifestyle photography',
      'Brand identity & logo design',
      'Visual style guide creation',
      'Packaging & product design',
      'Website visual direction',
      'Print & OOH creative',
    ],
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your brand inside out — your goals, audience, market, and competition.' },
  { step: '02', title: 'Strategy', desc: 'We develop a custom roadmap: messaging, channels, timelines, and success metrics.' },
  { step: '03', title: 'Creation', desc: 'Our creative teams produce exceptional assets across every format you need.' },
  { step: '04', title: 'Launch', desc: 'We deploy across channels with precision timing and platform best-practices.' },
  { step: '05', title: 'Optimize', desc: 'Real-time data shapes our ongoing iterations — every campaign gets smarter.' },
  { step: '06', title: 'Report', desc: 'Transparent reporting against your KPIs with honest insights and next steps.' },
]

function ServiceAccordion({ service, isOpen, onToggle }) {
  const { icon: Icon, title, tagline, color, description, deliverables } = service

  return (
    <div className="glass border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center gap-4 text-left hover:bg-white/2 transition-colors"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-white/40">{tagline}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 grid md:grid-cols-2 gap-8 border-t border-white/5 pt-6">
              <div>
                <p className="text-white/60 leading-relaxed mb-0">{description}</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">What's Included</p>
                <ul className="space-y-2">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="pt-24">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/8 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-[#e94560]/8 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-tag">
            Our Services
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl"
          >
            Everything You Need
            <br />
            to <span className="text-gradient">Dominate</span> Your
            <br />
            Media Landscape
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            From initial strategy to final analytics report, BuzzDrop Media offers end-to-end
            creative and media services — all under one roof, with one unified vision.
          </motion.p>
        </div>
      </section>

      {/* ─── SERVICES ACCORDION ─── */}
      <section className="py-16 bg-[#10101a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.06}
              >
                <ServiceAccordion
                  service={service}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-tag justify-center">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Our <span className="text-gradient-gold">Creative Process</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Six stages. Zero guesswork. Every project follows our proven methodology that
              consistently delivers results above expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass glass-hover rounded-2xl p-7 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 select-none leading-none">
                  {step}
                </div>
                <div className="relative">
                  <span className="text-sm font-black text-[#e94560] tracking-widest">{step}</span>
                  <h3 className="text-xl font-black mt-1 mb-3">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING CTA ─── */}
      <section className="py-20 bg-[#10101a]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/10 via-transparent to-[#00d4ff]/10 pointer-events-none" />
            <p className="section-tag justify-center">Flexible Packages</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Custom Pricing for <span className="text-gradient">Every Budget</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              No one-size-fits-all packages here. We scope every engagement individually to
              match your goals, timeline, and investment level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get a Custom Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
