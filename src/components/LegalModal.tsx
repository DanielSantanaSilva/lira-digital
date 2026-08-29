import { useEffect, useRef } from "react";
import { X, Shield, FileText, ChevronRight } from "lucide-react";

type LegalModalType = "privacy" | "terms";

interface LegalModalProps {
  type: LegalModalType | null;
  onClose: () => void;
}

const COMPANY = "VÉRTICE Marketing Digital";
const CNPJ = "XX.XXX.XXX/0001-XX"; // Substituir pelo CNPJ real
const EMAIL = "privacidade@vertice.digital"; // Substituir pelo e-mail real
const SITE = "www.vertice.digital";

const privacyContent = {
  title: "Política de Privacidade",
  icon: Shield,
  lastUpdated: "Agosto de 2026",
  sections: [
    {
      heading: "1. Quem Somos",
      body: `A ${COMPANY} (CNPJ ${CNPJ}), doravante denominada "Vértice", é responsável pelo tratamento dos seus dados pessoais neste website (${SITE}). Nosso compromisso é com a transparência, a segurança e o respeito à sua privacidade, em plena conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).`,
    },
    {
      heading: "2. Dados Coletados",
      body: `Coletamos as seguintes categorias de dados pessoais:\n\n• **Dados de identificação**: nome completo, empresa e cargo, fornecidos voluntariamente via formulário de contato.\n• **Dados de comunicação**: endereço de e-mail e número de telefone/WhatsApp, para atendimento às suas solicitações.\n• **Dados de navegação**: endereço IP, tipo de navegador, páginas visitadas, tempo de sessão e dados de cookies — coletados automaticamente por ferramentas de análise (ex.: Google Analytics).\n• **Dados de localização aproximada**: inferidos a partir do endereço IP, para personalização regional do conteúdo.`,
    },
    {
      heading: "3. Finalidade do Tratamento",
      body: `Seus dados são tratados exclusivamente para as seguintes finalidades:\n\n• **Atendimento ao cliente**: responder às suas dúvidas, solicitações de orçamento e demais comunicações.\n• **Envio de conteúdo de marketing**: newsletters, novidades e materiais educativos — apenas mediante consentimento explícito e com opção de descadastro em toda comunicação.\n• **Análise e melhoria do site**: compreender o comportamento dos visitantes para aprimorar a experiência de navegação.\n• **Cumprimento de obrigações legais**: atender exigências regulatórias aplicáveis à atividade da empresa.`,
    },
    {
      heading: "4. Compartilhamento de Dados com Terceiros",
      body: `Não vendemos nem alugamos seus dados. O compartilhamento ocorre somente com:\n\n• **Fornecedores de ferramentas de análise**: como Google LLC (Analytics / Tag Manager), sujeitos às suas próprias políticas de privacidade.\n• **Plataformas de comunicação**: ferramentas de e-mail marketing (ex.: Mailchimp, RD Station) utilizadas para envio de comunicações autorizadas.\n• **Autoridades públicas**: quando exigido por lei, ordem judicial ou regulamentação aplicável.\n\nTodos os terceiros são contratualmente obrigados a manter a confidencialidade e utilizar os dados apenas para as finalidades autorizadas.`,
    },
    {
      heading: "5. Armazenamento e Segurança",
      body: `Seus dados são armazenados em servidores seguros localizados no Brasil e/ou na União Europeia, com proteção por:\n\n• Criptografia SSL/TLS em todas as transmissões de dados.\n• Controle de acesso restrito por credenciais e autenticação.\n• Monitoramento contínuo para detecção de acessos não autorizados.\n• Backups regulares com retenção mínima necessária.\n\nOs dados são mantidos pelo período necessário à finalidade do tratamento ou por prazo legal obrigatório, sendo eliminados com segurança após o término.`,
    },
    {
      heading: "6. Cookies",
      body: `Utilizamos cookies para melhorar sua experiência. Você pode gerenciar ou desativar cookies nas configurações do seu navegador. Os tipos utilizados incluem:\n\n• **Cookies essenciais**: necessários para o funcionamento básico do site.\n• **Cookies analíticos**: coletam dados de uso de forma anônima para melhoria do site (ex.: Google Analytics).\n• **Cookies de marketing**: utilizados para apresentar conteúdo relevante em plataformas de mídia paga.`,
    },
    {
      heading: "7. Direitos do Titular (LGPD)",
      body: `Nos termos dos artigos 17 a 22 da LGPD, você possui os seguintes direitos:\n\n• **Confirmação e acesso**: saber se tratamos seus dados e obter cópia deles.\n• **Correção**: solicitar a atualização de dados incorretos ou desatualizados.\n• **Anonimização, bloqueio ou eliminação**: solicitar que dados desnecessários ou excessivos sejam anonimizados, bloqueados ou apagados.\n• **Portabilidade**: receber seus dados em formato estruturado para transferência a outro fornecedor.\n• **Revogação do consentimento**: retirar seu consentimento a qualquer momento, sem prejuízo ao tratamento realizado anteriormente.\n• **Oposição**: opor-se ao tratamento realizado sem base em consentimento, em caso de descumprimento da LGPD.\n\nPara exercer seus direitos, entre em contato com nosso Encarregado de Dados (DPO) pelo e-mail: **${EMAIL}**. Responderemos em até 15 dias úteis.`,
    },
    {
      heading: "8. Contato e Encarregado de Dados (DPO)",
      body: `Para quaisquer dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais:\n\n📧 E-mail: ${EMAIL}\n🌐 Site: ${SITE}\n\nVocê também pode registrar reclamações perante a Autoridade Nacional de Proteção de Dados (ANPD), por meio do portal gov.br/anpd.`,
    },
    {
      heading: "9. Alterações nesta Política",
      body: `Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou exigências legais. A data da última atualização será sempre indicada no topo do documento. Recomendamos a consulta periódica.`,
    },
  ],
};

const termsContent = {
  title: "Termos de Serviço",
  icon: FileText,
  lastUpdated: "Agosto de 2026",
  sections: [
    {
      heading: "1. Aceitação dos Termos",
      body: `Ao acessar e utilizar o site da ${COMPANY} (${SITE}), você concorda integralmente com estes Termos de Serviço. Caso não concorde com qualquer disposição, solicitamos que interrompa o uso do site imediatamente. O uso continuado após eventuais alterações implica a aceitação dos novos termos.`,
    },
    {
      heading: "2. Conduta do Usuário",
      body: `Ao utilizar este site, você concorda em não:\n\n• Praticar qualquer ato ilegal, fraudulento ou prejudicial a terceiros.\n• Enviar spam, conteúdo malicioso ou comunicações não solicitadas.\n• Tentar realizar ataques cibernéticos, incluindo injeção de código, força bruta, DDoS ou qualquer outra forma de comprometimento de segurança.\n• Acessar, sem autorização, áreas restritas, sistemas ou dados de outros usuários.\n• Reproduzir, copiar, distribuir ou comercializar qualquer conteúdo deste site sem autorização prévia e expressa da Vértice.\n• Utilizar robôs, scrapers ou qualquer método automatizado para extração de dados do site sem consentimento.`,
    },
    {
      heading: "3. Propriedade Intelectual",
      body: `Todo o conteúdo disponível neste site — incluindo, mas não se limitando a textos, logotipos, marcas, imagens, vídeos, layouts, identidade visual, código-fonte, metodologias e conceitos — é de propriedade exclusiva da ${COMPANY} ou de seus licenciantes, sendo protegido pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 9.279/1996 (Lei de Propriedade Industrial).\n\nÉ vedada qualquer reprodução, total ou parcial, sem autorização prévia e escrita. A violação poderá ensejar responsabilização civil e criminal.`,
    },
    {
      heading: "4. Serviços Oferecidos",
      body: `A Vértice oferece serviços de marketing digital, incluindo gestão de redes sociais, mídia paga, SEO, produção de conteúdo e criação de sites. As condições específicas de cada serviço serão detalhadas em proposta comercial e contrato firmado entre as partes, prevalecendo sobre estes Termos em caso de conflito.`,
    },
    {
      heading: "5. Limitação de Responsabilidade",
      body: `A ${COMPANY} envidará todos os esforços razoáveis para manter o site disponível e seguro, mas não garante:\n\n• Disponibilidade ininterrupta do site, que pode ficar temporariamente indisponível por manutenção, falhas técnicas ou causas de força maior.\n• Ausência de erros ou imprecisões no conteúdo informativo publicado.\n• Resultados específicos decorrentes do uso das informações disponibilizadas no site.\n\nA Vértice não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso do site, na máxima extensão permitida pela lei aplicável.`,
    },
    {
      heading: "6. Links para Sites de Terceiros",
      body: `Este site pode conter links para websites externos. Esses links são fornecidos apenas para conveniência e não implicam endosso ou responsabilidade da Vértice sobre o conteúdo, políticas ou práticas desses sites. Recomendamos a leitura das políticas de privacidade e termos de uso de cada site visitado.`,
    },
    {
      heading: "7. Rescisão e Suspensão de Acesso",
      body: `A ${COMPANY} reserva-se o direito de, a qualquer momento e sem aviso prévio:\n\n• Bloquear ou restringir o acesso de usuários que violem estes Termos de Serviço.\n• Suspender contas ou interações de usuários que pratiquem atos ilegais, abusivos ou prejudiciais à plataforma ou a terceiros.\n• Encerrar, modificar ou descontinuar qualquer funcionalidade do site.\n\nA suspensão não afasta o direito da Vértice de buscar reparação por eventuais danos causados.`,
    },
    {
      heading: "8. Modificações dos Termos",
      body: `Estes Termos de Serviço podem ser atualizados a qualquer momento. Alterações relevantes serão comunicadas neste documento, com indicação da data de atualização. O uso continuado do site após a publicação de alterações constitui aceite dos novos termos.`,
    },
    {
      heading: "9. Lei Aplicável e Foro",
      body: `Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas deste documento, fica eleito o Foro da Comarca de [Cidade/UF], com renúncia expressa a qualquer outro, por mais privilegiado que seja.`,
    },
    {
      heading: "10. Contato",
      body: `Para dúvidas ou esclarecimentos sobre estes Termos de Serviço:\n\n📧 E-mail: ${EMAIL}\n🌐 Site: ${SITE}`,
    },
  ],
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const content = type === "privacy" ? privacyContent : termsContent;
  const Icon = content?.icon;

  // Bloqueia scroll do body quando modal aberto
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
      // Scroll modal ao topo ao abrir
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [type]);

  // Fecha ao pressionar Esc
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!type) return null;

  return (
    <div
      className="legal-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
    >
      <div className="legal-modal-panel" ref={scrollRef}>
        {/* Header */}
        <div className="legal-modal-header">
          <div className="legal-modal-header-inner">
            <div className="legal-modal-icon-wrap">
              <Icon size={22} />
            </div>
            <div>
              <h2 className="legal-modal-title">{content.title}</h2>
              <p className="legal-modal-subtitle">
                Última atualização: {content.lastUpdated}
              </p>
            </div>
          </div>
          <button
            className="legal-modal-close"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="legal-modal-body">
          {content.sections.map((section, i) => (
            <div key={i} className="legal-section">
              <div className="legal-section-heading">
                <ChevronRight size={14} className="legal-section-chevron" />
                <h3>{section.heading}</h3>
              </div>
              <div className="legal-section-body">
                {section.body.split("\n").map((line, j) => {
                  if (line.trim() === "") return <br key={j} />;
                  // Render bold markdown **text**
                  const parts = line.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={j} className="legal-paragraph">
                      {parts.map((part, k) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={k}>{part.slice(2, -2)}</strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="legal-modal-footer">
          <p className="legal-modal-footer-text">
            © {new Date().getFullYear()} {COMPANY}. Todos os direitos reservados.
          </p>
          <button className="legal-modal-close-btn" onClick={onClose}>
            Fechar documento
          </button>
        </div>
      </div>
    </div>
  );
}
