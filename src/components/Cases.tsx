import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Trophy, Sparkles, X } from "lucide-react";

interface CaseItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  fullNarrative: string;
  metrics: string[];
}

export default function Cases() {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  const casesList: CaseItem[] = [
    {
      id: "aurora-saude",
      tag: "Aquisição & Performance",
      title: "Clínica Aurora: agenda cheia em 90 dias",
      desc: "Reposicionamos a marca e estruturamos campanhas locais para transformar buscas de alta intenção em consultas agendadas.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      fullNarrative: "A Clínica Aurora precisava reduzir a dependência de indicações e ocupar o espaço de referência em sua região. Criamos uma nova arquitetura de campanhas, páginas específicas por procedimento e uma rotina de otimização baseada na qualidade dos contatos. O investimento passou a ser direcionado para os serviços com maior margem e disponibilidade de agenda.",
      metrics: ["+218% em consultas qualificadas", "-41% no custo por lead", "92% das novas vagas preenchidas"],
    },
    {
      id: "nexo-contabil",
      tag: "B2B & Geração de Demanda",
      title: "Nexo Contábil: 4x mais oportunidades comerciais",
      desc: "Construímos uma operação digital previsível para uma empresa B2B que precisava gerar conversas com decisores, não apenas cliques.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      fullNarrative: "A Nexo Contábil tinha presença digital, mas não possuía uma jornada clara para empresas interessadas. Refinamos o posicionamento, criamos uma oferta de diagnóstico e conectamos mídia paga, conteúdo e CRM em um funil único. A equipe comercial passou a receber oportunidades mais maduras e com contexto para a abordagem.",
      metrics: ["4x mais oportunidades qualificadas", "+167% na taxa de reuniões", "Ciclo comercial 32% mais curto"],
    },
    {
      id: "casa-norte",
      tag: "E-commerce & CRO",
      title: "Casa Norte: crescimento sem aumentar a verba",
      desc: "Otimizamos criativos, páginas de produto e recuperação de carrinhos para escalar receita mantendo o orçamento sob controle.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      fullNarrative: "A Casa Norte já investia em mídia, mas perdia vendas entre o anúncio e o checkout. Mapeamos os pontos de atrito, reorganizamos a comunicação de benefícios e criamos uma matriz de criativos por intenção de compra. A combinação entre CRO e remarketing recuperou demanda sem exigir um aumento proporcional no investimento.",
      metrics: ["+86% no faturamento mensal", "+54% na conversão do site", "ROAS 2,7x maior em 60 dias"],
    },
    {
      id: "atlas-tech",
      tag: "SaaS & Escala",
      title: "Atlas Tech: pipeline previsível para vendas enterprise",
      desc: "Unimos conteúdo técnico, mídia e inteligência de contas para transformar autoridade em reuniões com empresas estratégicas.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      fullNarrative: "A Atlas Tech precisava sair de uma comunicação genérica e conquistar contas maiores. Segmentamos os públicos por potencial, desenvolvemos ativos de conteúdo para cada etapa do ciclo e criamos campanhas com mensagens específicas por setor. O marketing passou a influenciar o pipeline com clareza e previsibilidade.",
      metrics: ["+134% em reuniões enterprise", "3,1x mais pipeline influenciado", "+48% na taxa de fechamento"],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto" id="cases">
      <div className="text-center mb-20">
        <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
          #cases
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-on-surface uppercase font-black">
          CRESCIMENTO CONSTRUÍDO COM MÉTODO
        </h2>
        <p className="font-sans text-body-md text-on-surface-variant max-w-2xl mx-auto mt-5 leading-relaxed">
          Estratégias diferentes para negócios diferentes, sempre guiadas por dados, clareza e evolução constante.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {casesList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl glass-panel border border-outline-variant/10 shadow-2xl hover:border-secondary/30 transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-secondary font-mono text-xs uppercase tracking-wider mb-4 block font-bold">
                {item.tag}
              </span>
              <h3 className="font-display text-xl text-on-surface mb-6 font-bold leading-snug group-hover:text-secondary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-10 leading-relaxed">
                {item.desc}
              </p>

              <button
                onClick={() => setActiveCase(item)}
                className="border border-secondary/50 hover:border-secondary hover:bg-secondary hover:text-on-secondary text-secondary px-8 py-3 rounded-lg font-mono text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Ver estudo completo
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCase && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl cursor-pointer"
              onClick={() => setActiveCase(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-surface-container-low border border-outline-variant/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl glass-panel z-10 p-8 sm:p-12"
            >
              <button
                onClick={() => setActiveCase(null)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-secondary p-1.5 rounded-full hover:bg-surface-container"
                aria-label="Fechar estudo de caso"
              >
                <X size={20} />
              </button>

              <span className="text-secondary text-xs font-mono uppercase tracking-[0.2em] mb-4 block font-bold">
                {activeCase.tag}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-on-surface mb-6 font-black leading-snug">
                {activeCase.title}
              </h3>

              <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8 border border-outline-variant/20 shadow-md">
                <img
                  src={activeCase.image}
                  alt={activeCase.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider text-on-surface-variant mb-2 font-bold flex items-center gap-1.5">
                    <Sparkles size={14} className="text-secondary" /> ESTRATÉGIA APLICADA
                  </h4>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {activeCase.fullNarrative}
                  </p>
                </div>

                <div className="border-t border-outline-variant/20 pt-6">
                  <h4 className="font-display text-sm uppercase tracking-wider text-on-surface-variant mb-4 font-bold flex items-center gap-1.5">
                    <Trophy size={14} className="text-secondary" /> MÉTRICAS CHAVE ATINGIDAS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCase.metrics.map((metric, index) => (
                      <div key={index} className="bg-surface-container px-4 py-3 rounded border border-outline-variant/20">
                        <span className="text-secondary font-mono text-xs uppercase tracking-wider block font-bold mb-1">
                          Resultado {index + 1}
                        </span>
                        <span className="text-on-surface font-sans text-sm font-semibold">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#contato"
                onClick={() => setActiveCase(null)}
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-lg font-display text-xs font-bold uppercase hover:brightness-110 transition-all text-center block cyan-glow"
              >
                Quero construir um resultado assim
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
