import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, ArrowUpRight } from 'lucide-react'
import { IconInstagram, IconTwitter, IconLinkedin, IconYoutube } from './SocialIcons'

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Brand Strategy', path: '/services' },
    { label: 'Video Production', path: '/services' },
    { label: 'Digital Campaigns', path: '/services' },
    { label: 'Content Creation', path: '/services' },
  ],
}

const socials = [
  { icon: IconInstagram, label: 'Instagram', href: '#' },
  { icon: IconTwitter, label: 'Twitter', href: '#' },
  { icon: IconLinkedin, label: 'LinkedIn', href: '#' },
  { icon: IconYoutube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 mb-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e94560]/10 via-transparent to-[#00d4ff]/10 pointer-events-none" />
          <p className="section-tag justify-center mb-3">Ready to grow?</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Let's Build Something <span className="text-gradient">Remarkable</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            From bold ideas to viral campaigns — we turn your vision into media that moves people.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e94560] to-[#00d4ff] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-black">
                <span className="text-white">TheBuzzDrop</span>
                <span className="text-gradient">Media</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A creative media agency crafting stories that captivate audiences and drive results across every platform.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-[#e94560] hover:border-[#e94560]/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© {new Date().getFullYear()}TheBuzzDrop Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
