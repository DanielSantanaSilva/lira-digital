import { motion } from "motion/react";
import { BarChart3, Gauge, Target, UserRoundCheck, TrendingUp } from "lucide-react";

export default function Diferenciais() {
  const list = [
    {
      num: "01",
      icon: <Target size={22} className="text-secondary" />,
      title: "Campanhas com objetivo claro",
      desc: "Cada campanha nasce de uma meta comercial definida: gerar leads, preencher agenda, aumentar oportunidades ou acelerar vendas. Nada de mídia sem direção.",
    },
    {
      num: "02",
      icon: <BarChart3 size={22} className="text-secondary" />,
      title: "Leads que fazem sentido",
      desc: "Otimizamos a operação pela qualidade das oportunidades, não por métricas de vaidade. Acompanhamos origem, perfil e avanço dos leads no funil.",
    },
    {
      num: "03",
      icon: <Gauge size={22} className="text-secondary" />,
      title: "Otimização diária de performance",
      desc: "Analisamos anúncios, públicos, palavras-chave e páginas para redistribuir verba rapidamente e reduzir desperdícios ao longo da operação.",
    },
    {
      num: "04",
      icon: <UserRoundCheck size={22} className="text-secondary" />,
      title: "Mídia alinhada ao comercial",
      desc: "Integramos marketing e vendas para entender quais leads avançam, quais objeções aparecem e quais ajustes aumentam a conversão no atendimento.",
    },
    {
      num: "05",
      icon: <TrendingUp size={22} className="text-secondary" />,
      title: "Escala com previsibilidade",
      desc: "Depois de encontrar o que funciona, ampliamos o investimento com controle, leitura de dados e foco em manter o custo por oportunidade saudável.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-surface-container" id="diferenciais">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-secondary uppercase tracking-[0.3em] mb-4 block font-bold">
            #diferenciais
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface uppercase font-black tracking-normal">
            MÍDIA PAGA COM FOCO NO RESULTADO
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant max-w-2xl mx-auto mt-5 leading-relaxed">
            Não entregamos apenas campanhas no ar. Construímos uma operação de aquisição orientada a leads qualificados, performance e crescimento comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {list.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="md:col-span-4 bg-background p-8 rounded-lg border-l-4 border-secondary hover:translate-y-[-4px] transition-all duration-300 shadow-lg group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:border-secondary/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-secondary font-display text-4xl opacity-25 font-black tracking-tighter">
                  {item.num}
                </span>
              </div>
              <h4 className="font-display text-lg text-on-surface mb-3 font-bold group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {list.slice(3).map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="md:col-span-6 bg-background p-8 rounded-lg border-l-4 border-secondary hover:translate-y-[-4px] transition-all duration-300 shadow-lg group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/30 group-hover:border-secondary/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-secondary font-display text-4xl opacity-25 font-black tracking-tighter">
                  {item.num}
                </span>
              </div>
              <h4 className="font-display text-lg text-on-surface mb-3 font-bold group-hover:text-secondary transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
