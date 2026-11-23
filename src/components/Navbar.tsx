import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Soluções", href: "#servicos" },
    { label: "Estratégia", href: "#diferenciais" },
    { label: "Resultados", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060a14]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1280px] mx-auto">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src="/assets/logo-liras.jpg"
            alt="Logo Lira Digital"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.05] logo-img floating-logo"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-semibold text-sm tracking-wide transition-colors duration-200"
              style={{
                color: i === 0 ? "#c9a84c" : "rgba(255,255,255,0.75)",
                borderBottom: i === 0 ? "2px solid #c9a84c" : "none",
                paddingBottom: i === 0 ? "2px" : "0",
              }}
              onMouseEnter={e => { if (i !== 0) (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
              onMouseLeave={e => { if (i !== 0) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <a
            href="#contato"
            className="px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:scale-[1.04] transition-transform duration-300 inline-block"
            style={{
              border: "1.5px solid #c9a84c",
              color: "#c9a84c",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            COMEÇAR &nbsp;›
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Alternar menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#060a14]/95 border-b border-white/5 py-6 px-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/75 font-semibold text-sm tracking-wider uppercase py-2 border-b border-white/5 transition-colors hover:text-[#c9a84c]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-center py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform duration-200 mt-2 inline-block"
              style={{ border: "1.5px solid #c9a84c", color: "#c9a84c" }}
            >
              COMEÇAR ›
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

