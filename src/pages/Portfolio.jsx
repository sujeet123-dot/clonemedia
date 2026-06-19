import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Play } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' } }),
}

const categories = ['All', 'Campaign', 'Video', 'Branding', 'Social', 'Digital']

const projects = [
  {
    id: 1,
    category: 'Campaign',
    client: 'NovaSpark Technologies',
    title: 'Product Launch: The Ignition Campaign',
    outcome: '4.2M views • 180% CTR uplift',
    tags: ['Campaign', 'Video'],
    color: 'from-[#e94560] to-[#9b2335]',
    size: 'large',
    year: '2024',
  },
  {
    id: 2,
    category: 'Branding',
    client: 'Technospark',
    title: 'Complete Brand Overhaul & Visual Identity',
    outcome: '180% brand recall increase',
    tags: ['Branding'],
    color: 'from-[#00d4ff] to-[#0066aa]',
    size: 'normal',
    year: '2023',
  },
  {
    id: 3,
    category: 'Social',
    client: 'Bloom Fashion House',
    title: '30-Day Social Growth Sprint',
    outcome: '60K followers • 420% engagement growth',
    tags: ['Social', 'Campaign'],
    color: 'from-[#f5a623] to-[#c47a1e]',
    size: 'normal',
    year: '2024',
  },
  {
    id: 4,
    category: 'Video',
    client: 'PureEarth Organics',
    title: 'Documentary Brand Film Series',
    outcome: '2.8M organic views • 3 festival selections',
    tags: ['Video'],
    color: 'from-[#27ae60] to-[#1a7a44]',
    size: 'large',
    year: '2023',
  },
  {
    id: 5,
    category: 'Digital',
    client: 'UrbanStay Hotels',
    title: 'Performance Advertising Overhaul',
    outcome: '3.8x ROAS • 52% lower CPA',
    tags: ['Digital', 'Campaign'],
    color: 'from-[#9b59b6] to-[#6c3483]',
    size: 'normal',
    year: '2023',
  },
  {
    id: 6,
    category: 'Social',
    client: 'CraftBrew Co.',
    title: 'Craft Culture Content Series',
    outcome: '15 viral posts • 200K shares',
    tags: ['Social', 'Video'],
    color: 'from-[#e67e22] to-[#a04000]',
    size: 'normal',
    year: '2024',
  },
  {
    id: 7,
    category: 'Campaign',
    client: 'Meridian Sportswear',
    title: 'Champions Never Quit — Brand Campaign',
    outcome: '8M impressions • 22% sales uplift',
    tags: ['Campaign', 'Video', 'Social'],
    color: 'from-[#c0392b] to-[#7b241c]',
    size: 'normal',
    year: '2024',
  },
  {
    id: 8,
    category: 'Branding',
    client: 'Lumina EdTech',
    title: 'Brand Identity & Visual System',
    outcome: '40% better user trust scores',
    tags: ['Branding'],
    color: 'from-[#16a085] to-[#0e6251]',
    size: 'normal',
    year: '2022',
  },
  {
    id: 9,
    category: 'Video',
    client: 'Atlas Real Estate',
    title: 'Luxury Property Film Collection',
    outcome: '92% lead quality improvement',
    tags: ['Video'],
    color: 'from-[#2c3e50] to-[#1a252f]',
    size: 'large',
    year: '2023',
  },
]

const caseStudy = {
  client: 'NovaSpark Technologies',
  title: 'The Ignition Campaign',
  challenge:
    'NovaSpark needed to introduce a revolutionary energy management product to a market dominated by entrenched legacy brands — with a limited launch window of just six weeks.',
  approach:
    'We built a campaign around the idea of "controlled ignition" — the precise moment when potential becomes power. This became the visual and verbal thread connecting a hero film, social series, PR push, and paid media strategy.',
  results: [
    { metric: '4.2M', label: 'Video views in 72 hours' },
    { metric: '180%', label: 'CTR above industry benchmark' },
    { metric: '38K', label: 'Pre-orders in launch week' },
    { metric: '#1', label: 'Trending topic in category' },
  ],
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeCategory))

  return (
    <div className="pt-24">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#f5a623]/8 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#e94560]/8 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="section-tag">
            Our Portfolio
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl"
          >
            Work That Speaks
            <br />
            <span className="text-gradient">Louder Than Words</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Browse our selection of campaigns, brand projects, and video productions — each one
            a story of collaboration, creativity, and measurable impact.
          </motion.p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="py-6 bg-[#10101a] sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#e94560] text-white'
                    : 'glass text-white/60 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECT GRID ─── */}
      <section className="py-16 bg-[#10101a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp} initial="hidden" animate="visible" custom={i * 0.06}
                  className={`group cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : ''}`}
                >
                  <div className={`relative h-64 ${project.size === 'large' ? 'md:h-80' : ''} rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-4`}>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Year */}
                    <div className="absolute bottom-4 right-4 text-xs text-white/60 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                      {project.year}
                    </div>
                  </div>
                  <div className="px-1">
                    <p className="text-xs text-white/40 mb-1">{project.client}</p>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-[#e94560] transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/50">{project.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/30">
              No projects in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>

      {/* ─── CASE STUDY SPOTLIGHT ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag justify-center">Case Study</p>
            <h2 className="text-4xl md:text-5xl font-black">
              A Closer Look: <span className="text-gradient">{caseStudy.title}</span>
            </h2>
          </div>

          <div className="glass rounded-3xl p-8 md:p-14 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e94560]/10 blur-[100px] pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#e94560] mb-2">{caseStudy.client}</p>
                <h3 className="text-3xl font-black mb-6">{caseStudy.title}</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">The Challenge</p>
                    <p className="text-white/60 leading-relaxed text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">Our Approach</p>
                    <p className="text-white/60 leading-relaxed text-sm">{caseStudy.approach}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="btn-primary">
                    <Play className="w-4 h-4" /> Watch Campaign Film
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-6">Campaign Results</p>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.results.map(({ metric, label }) => (
                    <div key={label} className="glass rounded-2xl p-6 border border-white/5 text-center">
                      <div className="text-3xl font-black text-gradient mb-1">{metric}</div>
                      <div className="text-xs text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#10101a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Your Brand Belongs <span className="text-gradient">In This Portfolio</span>
            </h2>
            <p className="text-white/60 mb-8">
              Ready to create work that makes a real difference? Let's talk about your next project.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
