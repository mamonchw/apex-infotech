import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Smartphone,
  Monitor,
  Laptop,
  Cpu,
  ShoppingBag,
  Star,
  MapPin,
  Phone,
  MessageSquare,
  ChevronDown,
  Shield,
  Clock,
  Award,
  Zap,
  Headphones,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Smartphone,
    title: "Phone Repair",
    desc: "Screen replacement, battery swap, charging port fixes, water damage recovery for all smartphone brands.",
    tag: "SVC-01",
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    desc: "Motherboard repair, screen replacement, keyboard fix, thermal repaste, and full OS reinstallation.",
    tag: "SVC-02",
  },
  {
    icon: Monitor,
    title: "PC Repair & Build",
    desc: "Desktop build, upgrade, virus removal, hardware diagnostics, and custom PC assembly.",
    tag: "SVC-03",
  },
  {
    icon: ShoppingBag,
    title: "Buy & Sell",
    desc: "Get the best price for your old smartphone or certified second-hand mobiles, laptops, and tablets.",
    tag: "SVC-04",
  },
  {
    icon: Cpu,
    title: "Computer Parts",
    desc: "RAM, SSD, GPU, CPU, motherboards — genuine parts sourced and tested before sale.",
    tag: "SVC-05",
  },
  {
    icon: Headphones,
    title: "Accessories",
    desc: "Earphones, chargers, cables, covers, screen guards, power banks, keyboards, and more.",
    tag: "SVC-06",
  },
];

const stats = [
  { label: "Devices Repaired", value: 5000, suffix: "+" },
  { label: "Happy Customers", value: 3200, suffix: "+" },
  { label: "Years in Business", value: 2, suffix: "+" },
  { label: "Parts in Stock", value: 500, suffix: "+" },
];

const reviews = [
  {
    name: "Arjun Banerjee",
    rating: 5,
    location: "Salt Lake, Kolkata",
    text: "Got my iPhone screen replaced in just 45 minutes! Excellent service and very reasonable price. Will definitely come back.",
  },
  {
    name: "Priya Chatterjee",
    rating: 5,
    location: "Park Street, Kolkata",
    text: "Bought a second-hand laptop for my son. They gave a 3-month warranty and it works perfectly. Trustworthy shop!",
  },
  {
    name: "Rohit Das",
    rating: 5,
    location: "Jadavpur, Kolkata",
    text: "My PC was not booting. They diagnosed the issue quickly and fixed it the same day. Very professional team.",
  },
  {
    name: "Sneha Mondal",
    rating: 4,
    location: "Behala, Kolkata",
    text: "Great place for phone accessories. Good quality products at lower prices than mall stores. Friendly staff.",
  },
  {
    name: "Kaushik Roy",
    rating: 5,
    location: "Garia, Kolkata",
    text: "Sold my old Samsung and got a great deal. Transparent evaluation and instant payment. Highly recommended!",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Warranty on All Repairs",
    desc: "Every repair comes with a 30-day service warranty — no fine print.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most repairs completed same day or within 24 hours.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    desc: "Our team is trained to handle all major brands and models.",
  },
  {
    icon: Zap,
    title: "Genuine Parts Only",
    desc: "We use original or OEM-grade parts — no cheap substitutes.",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Reviews", "Location", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080810]/90 backdrop-blur-md border-b border-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#00d4f5] rounded flex items-center justify-center">
            <Cpu className="w-4.5 h-4.5 text-[#080810]" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold tracking-widest text-white">
            APEX <span className="text-[#00d4f5]">INFOTECH</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-slate-400 hover:text-[#00d4f5] transition-colors tracking-[0.2em] uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/917001042980"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#00d4f5] text-[#080810] px-5 py-2 rounded font-bold text-sm tracking-wide hover:bg-[#00bfe0] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          Get Quote
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-[#00d4f5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#0d0d1c] border-t border-cyan-500/10 px-6 py-2"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block font-mono text-xs text-slate-400 hover:text-[#00d4f5] py-3.5 border-b border-white/5 last:border-0 tracking-[0.2em] uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 50% 15%, rgba(0,212,245,0.07) 0%, transparent 70%), #080810",
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,245,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,245,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-28 left-8 w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent hidden lg:block" />
      <div className="absolute top-28 left-8 w-16 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent hidden lg:block" />
      <div className="absolute top-28 right-8 w-px h-16 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent hidden lg:block" />
      <div className="absolute top-28 right-8 w-16 h-px bg-gradient-to-l from-transparent via-cyan-500/40 to-transparent hidden lg:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-[#00d4f5] rounded-full animate-pulse" />
          <span className="font-mono text-[10px] text-[#00d4f5] tracking-[0.3em] uppercase">
            Kolkata&apos;s Trusted Tech Shop
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-tight mb-2"
        >
          <span className="text-white">APEX</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-none tracking-[0.15em] mb-6"
          style={{ color: "#00d4f5" }}
        >
          INFOTECH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="font-mono text-[10px] text-slate-600 tracking-[0.4em] uppercase mb-8"
        >
          &#47;&#47; Repair &nbsp;&middot;&nbsp; Buy &nbsp;&middot;&nbsp; Sell &nbsp;&middot;&nbsp; Upgrade
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          From cracked screens to custom PC builds — we fix, sell, and source
          all things tech. Serving Kolkata with honest pricing and expert hands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="flex items-center gap-2 bg-[#00d4f5] text-[#080810] px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-[#00bfe0] transition-colors"
          >
            Explore Services <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/917001042980"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-cyan-400/30 text-[#00d4f5] px-8 py-3.5 rounded font-semibold text-sm tracking-wide hover:bg-cyan-400/8 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700"
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] text-[#00d4f5] tracking-[0.35em] uppercase mb-3">
            &#47;&#47; What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
          <div className="w-14 h-0.5 bg-[#00d4f5] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-[#0d0d1c] border border-white/5 rounded-lg p-6 hover:border-cyan-400/25 transition-colors cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/18 transition-colors">
                    <Icon className="w-5 h-5 text-[#00d4f5]" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-700 tracking-wider">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-2 tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section
      className="py-20 px-6 border-y border-cyan-500/8"
      style={{
        background:
          "linear-gradient(135deg, #0a0a16 0%, #0d0d1c 50%, #0a0a16 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl font-bold text-[#00d4f5] mb-2 tabular-nums">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-mono text-[10px] text-slate-600 tracking-[0.25em] uppercase">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────

function WhyUs() {
  return (
    <section className="py-28 px-6 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] text-[#00d4f5] tracking-[0.35em] uppercase mb-3">
            &#47;&#47; Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Built on Trust
          </h2>
          <div className="w-14 h-0.5 bg-[#00d4f5] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-[#0d0d1c] border border-white/5 rounded-lg hover:border-cyan-400/15 transition-colors"
              >
                <div className="w-10 h-10 bg-cyan-400/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#00d4f5]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

function Reviews() {
  return (
    <section id="reviews" className="py-28 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] text-[#00d4f5] tracking-[0.35em] uppercase mb-3">
            &#47;&#47; Customer Feedback
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <div className="w-14 h-0.5 bg-[#00d4f5] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="bg-[#0d0d1c] border border-white/5 rounded-lg p-6 flex flex-col hover:border-cyan-400/15 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${
                      j < review.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-700 fill-slate-700"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="font-semibold text-white text-sm">
                    {review.name}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    {review.location}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center text-[#00d4f5] font-bold text-sm font-display">
                  {review.name[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Map Section ──────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section id="location" className="py-28 px-6 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[10px] text-[#00d4f5] tracking-[0.35em] uppercase mb-3">
            &#47;&#47; Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Visit Our Store
          </h2>
          <div className="w-14 h-0.5 bg-[#00d4f5] mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Apex Infotech
                    <br />
                    Thakdari Rd, Action Area I
                    <br />
                    Newtown, Kolkata — 700102
                    <br />
                    West Bengal, India
                  </p>
                ),
              },
              {
                icon: Phone,
                title: "Contact",
                content: (
                  <a
                    href="tel:+917001042980"
                    className="text-[#00d4f5] text-sm font-mono hover:text-cyan-300 transition-colors"
                  >
                    +91 70010 42980
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Everyday</span>
                      <span className="text-slate-300 font-mono">10AM — 1PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Everyday</span>
                      <span className="text-slate-300 font-mono">5PM — 10PM</span>
                    </div>
                  </div>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="bg-[#0d0d1c] border border-white/5 rounded-lg p-5"
              >
                <div className="w-9 h-9 bg-cyan-400/10 rounded flex items-center justify-center mb-3.5">
                  <Icon className="w-4.5 h-4.5 text-[#00d4f5]" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2">
                  {title}
                </h3>
                {content}
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-lg overflow-hidden border border-white/5 min-h-[360px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1651496982768!2d88.45015507554882!3d22.57292573295797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275bae1e5b8c7%3A0xa1b8c6f74e1c3f1!2sApex%20Infotech!5e0!3m2!1sen!2sin!4v1779361638527!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(180deg) brightness(0.85) contrast(0.9)",
                minHeight: "360px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Infotech Location — Kolkata"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#050508] border-t border-white/5 py-14 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-[#00d4f5] rounded flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#080810]" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold tracking-widest text-white">
                APEX INFOTECH
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              {"Kolkata's"} trusted destination for device repair,
              second-hand tech, and accessories in Newtown, Action Area I.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-[#00d4f5] tracking-[0.3em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-slate-600 text-sm">
              {services.map((s) => (
                <li
                  key={s.title}
                  className="hover:text-slate-400 transition-colors cursor-default"
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] text-[#00d4f5] tracking-[0.3em] uppercase mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/917001042980"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-[#00d4f5] transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                WhatsApp: +91 70010 42980
              </a>
              <a
                href="tel:+917001042980"
                className="flex items-center gap-3 text-slate-500 hover:text-[#00d4f5] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 70010 42980
              </a>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Newtown, Kolkata — 700102
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-slate-700">
            &copy; {new Date().getFullYear()} Apex Infotech. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-slate-800">
            Newtown &middot; Kolkata 700102 &middot; West Bengal
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp FAB ─────────────────────────────────────────────────────────────

function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/917001042980"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl"
      style={{ boxShadow: "0 4px 24px rgba(37, 211, 102, 0.35)" }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#080810] text-slate-200 overflow-x-hidden font-sans">
      <Nav />
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Reviews />
      <MapSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
