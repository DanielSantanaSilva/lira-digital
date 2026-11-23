import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      id="hero"
      style={{
        backgroundImage: "url('/assets/bg-growth.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 42%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#061426]/42 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/88 via-[#061426]/48 to-[#061426]/10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="flex items-center pt-20 pb-20 min-h-[72vh]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
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
        </div>
      </div>
    </section>
  );
}
