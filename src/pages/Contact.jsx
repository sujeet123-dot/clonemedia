import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { IconInstagram, IconTwitter, IconLinkedin, IconYoutube } from '../components/SocialIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'amanraj@buzzdropmedia.com',
    sub: 'We reply within 24 hours',
    color: '#e94560',
  },
  
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Delhi',
    color: '#f5a623',
  },
]

const socials = [
  { icon: IconInstagram, label: 'Instagram', handle: '@buzzdropmedia', href: '#' },
  { icon: IconTwitter, label: 'Twitter', handle: '@buzzdropmedia', href: '#' },
  { icon: IconLinkedin, label: 'LinkedIn', handle: 'BuzzDrop Media', href: '#' },
  { icon: IconYoutube, label: 'YouTube', handle: 'BuzzDrop Media', href: '#' },
]

const services = [
  'Video Production',
  'Brand Campaign',
  'Content Creation',
  'Digital Advertising',
  'Analytics & Growth',
  'Photography & Visual Identity',
  'Other',
]

const budgets = [
  'Under ₹5 Lakhs',
  '₹5L – ₹15L',
  '₹15L – ₹50L',
  '₹50L+',
  'Let\'s discuss',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Tell us about your project'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  return (
    <div className="pt-24">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-[#e94560]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#00d4ff]/8 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-tag">
            Get in Touch
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl"
          >
            Let's Create
            <br />
            <span className="text-gradient">Something Bold</span>
            <br />
            Together
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Tell us about your project and we'll come back with ideas, timelines, and a
            proposal tailored to your goals. No obligation, just a good conversation.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT GRID ─── */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, sub, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass rounded-2xl p-6 border border-white/5 flex gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-0.5">{label}</p>
                  <p className="font-semibold text-sm">{value}</p>
                  <p className="text-xs text-white/40 mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.35}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">Follow Us</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-[#e94560]/40 group-hover:text-[#e94560] transition-all">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs">{handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#e94560]/5 blur-[80px] pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-[#27ae60]/20 border border-[#27ae60]/40 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#27ae60]" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Message Received!</h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    Thanks for reaching out. One of our team leads will be in touch within 24 hours to discuss your project.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    className="mt-8 text-sm text-[#e94560] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
                  <h2 className="text-2xl font-black mb-6">Tell Us About Your Project</h2>

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e94560] transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e94560] transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e94560] transition-colors"
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[#10101a] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white/70 focus:outline-none focus:border-[#e94560] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full bg-[#10101a] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white/70 focus:outline-none focus:border-[#e94560] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select budget</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">
                      Project Brief *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, goals, timeline, and any specific ideas you have in mind..."
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#e94560] transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/30 text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ STRIP ─── */}
      <section className="py-20 bg-[#10101a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag justify-center">Quick Answers</p>
            <h2 className="text-3xl md:text-4xl font-black">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How quickly do you respond to project inquiries?', a: 'We aim to respond within 24 business hours. For urgent projects, call us directly.' },
              { q: 'Do you work with international brands?', a: 'Absolutely. We have clients across India, the UAE, Singapore, and the UK — and we work remotely with teams worldwide.' },
              { q: 'How long does a typical campaign take?', a: 'Timelines vary by scope. A short-form content series can launch in 2–3 weeks, while a full brand campaign typically takes 6–10 weeks from strategy to delivery.' },
              { q: 'Do you offer retainer-based relationships?', a: 'Yes — many of our best client relationships are ongoing retainers. We offer monthly content and campaign packages for brands that need consistent creative output.' },
            ].map(({ q, a }, i) => (
              <motion.div
                key={q}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="glass rounded-2xl p-6 border border-white/5"
              >
                <p className="font-semibold mb-2">{q}</p>
                <p className="text-sm text-white/50 leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
