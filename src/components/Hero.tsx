import { motion } from "motion/react";

export default function Hero() {
  const bottomCards = [
    {
      label: "Estratégia",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" stroke="#c9a84c" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill="#c9a84c" />
          <line x1="12" y1="2" x2="12" y2="4.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="22" y1="12" x2="19.5" y2="12" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="4.5" y1="4.5" x2="6.3" y2="6.3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Performance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="3" y="12" width="4" height="9" fill="#c9a84c" opacity="0.6" rx="1" />
          <rect x="10" y="7" width="4" height="14" fill="#c9a84c" opacity="0.8" rx="1" />
          <rect x="17" y="3" width="4" height="18" fill="#c9a84c" rx="1" />
          <polyline points="2,10 7,5 13,8 20,2" stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Dados",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M12 3 A9 9 0 0 1 21 12 L12 12 Z" fill="#c9a84c" opacity="0.9" />
          <path d="M12 12 L21 12 A9 9 0 0 1 12 21 Z" fill="#c9a84c" opacity="0.55" />
          <path d="M12 12 L12 21 A9 9 0 0 1 3 12 Z" fill="#c9a84c" opacity="0.3" />
        </svg>
      ),
    },
    {
      label: "Crescimento",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5 C12 2.5 7 8 7 13 C7 15.76 9.24 18 12 18 C14.76 18 17 15.76 17 13 C17 8 12 2.5 12 2.5Z" fill="#c9a84c" opacity="0.25" />
          <path d="M12 2.5 C12 2.5 7 8 7 13 C7 15.76 9.24 18 12 18 C14.76 18 17 15.76 17 13 C17 8 12 2.5 12 2.5Z" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <line x1="9" y1="21" x2="15" y2="21" />
          <line x1="10" y1="11" x2="12" y2="13" />
          <line x1="14" y1="11" x2="12" y2="13" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      id="hero"
      style={{
        backgroundImage: "url('/assets/bg-predios.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#060a14]/80 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-20 pb-6 min-h-[72vh]">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="block font-sans text-[11px] uppercase tracking-[0.28em] mb-6 font-semibold"
              style={{ color: "#c9a84c" }}
            >
              CONSULTORIA ESTRATÉGICA EM TRÁFEGO PAGO
            </span>

            <h1 className="font-display font-bold mb-6 leading-[1.08]">
              <span className="block text-white text-5xl sm:text-6xl">Seu sucesso</span>
              <span className="block text-5xl sm:text-6xl" style={{ color: "#c9a84c" }}>
                começa aqui.
              </span>
            </h1>

            <div className="w-14 h-[2px] mb-6" style={{ backgroundColor: "#c9a84c" }} />

            <p className="text-gray-300 text-[15px] leading-relaxed mb-10 max-w-sm font-sans">
              Estratégia, performance e dados para transformar<br />
              investimento em crescimento real.
            </p>

            <a
              href="#servicos"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-7 py-3.5 rounded-lg hover:bg-white/5 transition-all duration-300 font-sans text-sm font-medium"
            >
              Conhecer soluções
              <span className="text-base opacity-80">›</span>
            </a>
          </motion.div>

          {/* ── RIGHT COLUMN — LD Symbol ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px]">
              <svg
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 32px rgba(201,168,76,0.35))" }}
              >
                <defs>
                  <linearGradient id="gG1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5e090" />
                    <stop offset="45%" stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#7a5a1a" />
                  </linearGradient>
                  <linearGradient id="gG2" x1="0%" y1="0%" x2="20%" y2="100%">
                    <stop offset="0%" stopColor="#f0d878" />
                    <stop offset="50%" stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#8b6914" />
                  </linearGradient>
                  <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(201,168,76,0.12)" />
                    <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                  </radialGradient>
                </defs>

                {/* Glow circle background */}
                <circle cx="160" cy="160" r="148" fill="url(#gGlow)" />

                {/* Outer ring */}
                <circle cx="160" cy="160" r="148" fill="none" stroke="url(#gG1)" strokeWidth="2.5" opacity="0.9" />
                {/* Inner ring */}
                <circle cx="160" cy="160" r="140" fill="none" stroke="url(#gG1)" strokeWidth="0.6" opacity="0.35" />

                {/* L letter */}
                <text
                  x="34"
                  y="208"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="148"
                  fontWeight="bold"
                  fill="url(#gG2)"
                >L</text>

                {/* D letter */}
                <text
                  x="142"
                  y="208"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="148"
                  fontWeight="bold"
                  fill="url(#gG2)"
                >D</text>

                {/* Arrow line going up-right */}
                <line x1="232" y1="178" x2="286" y2="92" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" />
                {/* Arrow head */}
                <polygon points="286,92 268,112 290,116" fill="#c9a84c" />

                {/* Bar chart at bottom */}
                <rect x="80" y="230" width="14" height="28" fill="#c9a84c" opacity="0.55" rx="2" />
                <rect x="101" y="218" width="14" height="40" fill="#c9a84c" opacity="0.7" rx="2" />
                <rect x="122" y="204" width="14" height="54" fill="#c9a84c" rx="2" />
                <rect x="143" y="216" width="14" height="42" fill="#c9a84c" opacity="0.7" rx="2" />
                <rect x="164" y="225" width="14" height="33" fill="#c9a84c" opacity="0.5" rx="2" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM 4 CARDS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-8">
          {bottomCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-4 rounded-xl px-5 py-4 cursor-default select-none transition-all duration-300 hover:border-[#c9a84c]/40"
              style={{
                background: "rgba(10, 18, 30, 0.88)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                {card.icon}
              </div>
              <span className="text-white font-sans font-semibold text-[15px]">{card.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
