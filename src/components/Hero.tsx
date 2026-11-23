import { motion } from "motion/react";

export default function Hero() {
  const bottomCards = [
    { label: "Estratégia", icon: "◎" },
    { label: "Performance", icon: "↗" },
    { label: "Dados", icon: "◔" },
    { label: "Crescimento", icon: "↑" },
  ];

  const buildings = [
    { x: 10, width: 34, height: 88, opacity: 0.42 },
    { x: 50, width: 38, height: 124, opacity: 0.5 },
    { x: 94, width: 42, height: 164, opacity: 0.58 },
    { x: 142, width: 46, height: 208, opacity: 0.68 },
    { x: 194, width: 52, height: 254, opacity: 0.8 },
    { x: 252, width: 58, height: 302, opacity: 0.94 },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      id="hero"
      style={{
        backgroundImage: "url('/assets/bg-city.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 38%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#061426]/86 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/95 via-[#061426]/78 to-[#061426]/42 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-20 pb-6 min-h-[72vh]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="block font-sans text-[11px] uppercase tracking-[0.28em] mb-6 font-semibold text-secondary">
              CONSULTORIA ESTRATÉGICA EM TRÁFEGO PAGO
            </span>

            <h1 className="font-display font-bold mb-6 leading-[1.08]">
              <span className="block text-white text-5xl sm:text-6xl">Seu sucesso</span>
              <span className="block text-5xl sm:text-6xl text-secondary">começa aqui.</span>
            </h1>

            <div className="w-14 h-[2px] mb-6 bg-secondary" />

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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="flex justify-center items-end min-h-[360px]"
          >
            <div className="relative w-full max-w-[470px] h-[350px] sm:h-[410px] overflow-hidden">
              <div className="absolute bottom-12 left-0 right-0 h-px bg-secondary/50" />
              <div className="absolute bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-secondary/15 to-transparent blur-xl" />
              <div className="absolute bottom-14 right-8 text-secondary/80 font-mono text-[10px] uppercase tracking-[0.28em]">
                escala de resultados
              </div>

              {buildings.map((building, index) => (
                <motion.div
                  key={building.x}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: building.opacity, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                  className="absolute bottom-12 rounded-t-sm border border-secondary/40 bg-gradient-to-t from-[#0a2340] to-[#347fb8]/55 shadow-[0_0_28px_rgba(98,177,255,0.13)]"
                  style={{
                    left: `${building.x}px`,
                    width: `${building.width}px`,
                    height: `${building.height}px`,
                  }}
                >
                  <div className="grid grid-cols-3 gap-2 p-2 opacity-70">
                    {Array.from({ length: Math.max(6, Math.floor(building.height / 24) * 3) }).map((_, windowIndex) => (
                      <span key={windowIndex} className="h-1.5 rounded-[1px] bg-secondary/70" />
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-[268px] right-9 flex items-center gap-2 text-secondary">
                <span className="h-px w-12 bg-secondary" />
                <span className="text-2xl">↗</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-8">
          {bottomCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
              className="flex items-center gap-4 rounded-xl px-5 py-4 cursor-default select-none transition-all duration-300 hover:border-secondary/40"
              style={{
                background: "rgba(10, 24, 43, 0.88)",
                border: "1px solid rgba(98,177,255,0.16)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border border-secondary/30 bg-secondary/10 text-secondary text-2xl font-light">
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
