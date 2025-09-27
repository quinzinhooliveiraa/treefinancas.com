import React from "react";
import { Check, ArrowRight, Shield, TrendingUp, Clock, Star, PhoneCall, Mail, MessageSquare, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// --- Landing Page para Assessoria Financeira ---
// Estrutura inspirada em páginas de alta conversão (Hero -> Dor -> Benefício -> Autoridade -> Prova -> Oferta -> FAQ -> CTA -> Rodapé)
// Observações:
// - Todo o texto está em PT-BR e com placeholders para rápida personalização.
// - Se desejar, substitua imagens/ícones, integre com um backend (formulário), pixels e calendário.
// - As seções possuem IDs para navegação e links de anúncios.

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" aria-hidden />,
    title: "Plano de Investimentos",
    desc: "Alocação por objetivos, perfil de risco e horizonte de tempo (Brasil & Exterior).",
  },
  {
    icon: <Shield className="h-6 w-6" aria-hidden />,
    title: "Gestão de Risco",
    desc: "Proteções, reservas, seguros e diversificação inteligente para reduzir volatilidade.",
  },
  {
    icon: <Clock className="h-6 w-6" aria-hidden />,
    title: "Planejamento Financeiro",
    desc: "Fluxo de caixa, metas, quitação de dívidas e construção de patrimônio no longo prazo.",
  },
];

const steps = [
  {
    step: "01",
    title: "Diagnóstico 360°",
    desc: "Entendemos sua situação atual, objetivos e prazos. Sem custo e sem pressão.",
  },
  {
    step: "02",
    title: "Plano Sob Medida",
    desc: "Desenhamos um plano prático com prioridades, alocação e recomendações concretas.",
  },
  {
    step: "03",
    title: "Acompanhamento",
    desc: "Implementação assistida, checkpoints mensais e ajustes conforme o mercado e sua vida.",
  },
];

const plans = [
  {
    name: "Essencial",
    price: "R$ 297/mês",
    audience: "Para quem quer começar com o básico bem feito",
    bullets: [
      "Onboarding + Plano inicial (1 encontro)",
      "Acesso a planilhas e templates",
      "Check-in trimestral (30 min)",
      "Suporte assíncrono por e-mail",
    ],
    cta: "Quero o Essencial",
    highlight: false,
  },
  {
    name: "Estratégico",
    price: "R$ 697/mês",
    audience: "Para quem busca evolução consistente",
    bullets: [
      "Plano completo + Execução assistida",
      "Revisões mensais (45–60 min)",
      "Acesso a carteira modelo e alertas",
      "Canal direto (WhatsApp/Slack)",
    ],
    cta: "Escolher o Estratégico",
    highlight: true,
  },
  {
    name: "Private",
    price: "Sob consulta",
    audience: "Para quem precisa de acompanhamento premium",
    bullets: [
      "Planejamento patrimonial avançado",
      "Estratégias no exterior (quando aplicável)",
      "Coordenação com contábil/tributário",
      "Atendimento prioritário",
    ],
    cta: "Falar sobre o Private",
    highlight: false,
  },
];

const faqs = [
  {
    q: "A assessoria é independente?",
    a: "Sim. Trabalhamos com política de transparência e foco no melhor interesse do cliente (princípios de fiduciary duty). Não recebemos comissões ocultas.",
  },
  {
    q: "Preciso ter muito dinheiro para começar?",
    a: "Não. O mais importante é ter objetivos claros e disciplina. O plano é ajustado à sua realidade atual e cresce com você.",
  },
  {
    q: "Vocês fazem recomendação de ativos específicos?",
    a: "Fazemos orientação educacional e estratégica. A decisão final é sempre sua. Quando necessário, indicamos plataformas ou parceiros regulados.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Sem fidelidade. Você pode cancelar quando quiser; pedimos apenas 7 dias de antecedência para organização do time.",
  },
];

export default function FinancialAdvisoryLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <DollarSign className="h-5 w-5" />
            <span>SeuLogo Finance</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:opacity-70">Como funciona</a>
            <a href="#servicos" className="hover:opacity-70">Serviços</a>
            <a href="#provas" className="hover:opacity-70">Resultados</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden sm:inline-block">
              <Button variant="outline" className="rounded-2xl">Falar com especialista</Button>
            </a>
            <a href="#aplicar">
              <Button className="rounded-2xl">Quero meu plano</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <Star className="h-4 w-4" /> Sessão Diagnóstico gratuita por tempo limitado
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sua rota mais curta para organizar as finanças e investir com segurança
              <span className="block text-gray-500 text-xl md:text-2xl mt-3">sem planilhas complicadas e sem perder horas estudando.</span>
            </h1>
            <ul className="mt-6 space-y-3 text-base">
              <li className="flex items-start gap-2"><Check className="mt-1 h-5 w-5" /> Plano sob medida por objetivos e perfil de risco</li>
              <li className="flex items-start gap-2"><Check className="mt-1 h-5 w-5" /> Acompanhamento mensal e ajustes contínuos</li>
              <li className="flex items-start gap-2"><Check className="mt-1 h-5 w-5" /> Transparência total de custos e decisões</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#aplicar"><Button size="lg" className="rounded-2xl">Quero meu plano agora <ArrowRight className="ml-2 h-5 w-5" /></Button></a>
              <a href="#leadmagnet"><Button size="lg" variant="outline" className="rounded-2xl">Baixar guia gratuito</Button></a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> Atendimento humano</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Dados protegidos</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> +XX clientes ativos</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl shadow-xl border bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-xs uppercase tracking-wider text-gray-500">Preview do Painel</p>
                <h3 className="text-2xl font-semibold mt-2">Mapa Financeiro 360°</h3>
                <p className="mt-2 text-sm text-gray-600">Patrimônio • Risco • Metas • Alocação • Alertas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identificação de dores */}
      <section className="bg-gray-50" aria-labelledby="dores-title">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="dores-title" className="text-3xl font-bold">Se você se identifica com isso, nós podemos ajudar</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  {f.icon}
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-700">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" aria-labelledby="como-title">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="como-title" className="text-3xl font-bold">Como funciona</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <Card key={s.step} className="rounded-2xl">
                <CardHeader>
                  <p className="text-xs text-gray-500">Passo {s.step}</p>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade / Quem somos */}
      <section id="autoridade" className="bg-gray-50" aria-labelledby="autor-title">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Quem vai te acompanhar</p>
            <h2 id="autor-title" className="text-3xl font-bold">[Seu Nome], CFP® (ou cargo/credencial)</h2>
            <p className="mt-4 text-gray-700">
              Coloque aqui sua bio curta: experiência, especialidades (ex.: finanças pessoais, investimentos no exterior, previdência, proteção),
              volume de clientes atendidos e um ponto de diferenciação. Mencione certificações/credenciais relevantes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><Shield className="h-4 w-4" /> Transparência</span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><TrendingUp className="h-4 w-4" /> Estratégia</span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><Clock className="h-4 w-4" /> Consistência</span>
            </div>
          </div>
          <div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Resultados & Provas</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p><strong>+XX</strong> famílias/empresas atendidas</p>
                <p><strong>YY%</strong> dos clientes mantêm o plano após 12 meses</p>
                <p>Estudos de caso (anônimos) com evolução de patrimônio, quitação de dívidas e metas alcançadas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Provas / Depoimentos */}
      <section id="provas" aria-labelledby="provas-title">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="provas-title" className="text-3xl font-bold">O que nossos clientes dizem</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="pt-6 text-sm text-gray-700">
                  <p>“Coloque um depoimento real curto e específico sobre o benefício obtido. Ex.: organizei as finanças em 30 dias e comecei a investir com confiança.”</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <Star className="h-4 w-4" /> <span>Cliente verificado</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta / Planos */}
      <section id="servicos" className="bg-gray-50" aria-labelledby="servicos-title">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="servicos-title" className="text-3xl font-bold">Escolha o plano ideal para você</h2>
          <p className="mt-2 text-gray-600">Sem letras miúdas e com total transparência de preços.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <Card key={p.name} className={`rounded-2xl ${p.highlight ? 'ring-2 ring-gray-900 shadow-xl' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{p.name}</span>
                    <span className="text-xl font-semibold">{p.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{p.audience}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> {b}</li>
                    ))}
                  </ul>
                  <a href="#aplicar" className="block mt-6">
                    <Button className="w-full rounded-2xl">{p.cta}</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">*Valores de referência. Sujeitos a atualização. Planos corporativos sob consulta.</p>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="leadmagnet" aria-labelledby="lead-title">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="lead-title" className="text-3xl font-bold">Guia prático: “Primeiros 30 dias de organização financeira”</h2>
            <p className="mt-3 text-gray-700">Baixe gratuitamente um checklist simples para sair do zero: orçamento, reserva de emergência e primeiros investimentos.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> Checklist imprimível</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> Planilha básica (Google Sheets)</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> Mini-aulas em vídeo</li>
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome" required />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="voce@email.com" required />
                </div>
                <Button type="submit" className="w-full rounded-2xl">Receber guia por e-mail</Button>
                <p className="text-xs text-gray-500 mt-2">Prometemos não enviar spam. Você pode cancelar a assinatura a qualquer momento.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50" aria-labelledby="faq-title">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 id="faq-title" className="text-3xl font-bold">Perguntas frequentes</h2>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA final / Aplicação */}
      <section id="aplicar" aria-labelledby="aplicar-title">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="aplicar-title" className="text-3xl font-bold">Agende sua Sessão Diagnóstico gratuita</h2>
            <p className="mt-3 text-gray-700">Entenda seu momento, receba recomendações iniciais e veja se faz sentido seguirmos juntos.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> Sem compromisso</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> 30–40 minutos via vídeo</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 mt-0.5" /> Link do calendário automático</li>
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Aplicar agora</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <Label htmlFor="nome2">Nome completo</Label>
                  <Input id="nome2" placeholder="Seu nome" required />
                </div>
                <div>
                  <Label htmlFor="email2">E-mail</Label>
                  <Input id="email2" type="email" placeholder="voce@email.com" required />
                </div>
                <div>
                  <Label htmlFor="fone">WhatsApp</Label>
                  <Input id="fone" placeholder="(00) 90000-0000" />
                </div>
                <div>
                  <Label htmlFor="objetivo">Objetivo financeiro principal</Label>
                  <Input id="objetivo" placeholder="Ex.: investir melhor / quitar dívidas / aposentadoria" />
                </div>
                <Button type="submit" className="w-full rounded-2xl">Enviar e abrir calendário</Button>
                <p className="text-xs text-gray-500 mt-2">Ao enviar, você concorda com nossa <a href="#" className="underline">Política de Privacidade</a>.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-gray-50" aria-labelledby="contato-title">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="pt-6 text-sm">
              <div className="flex items-center gap-2 font-medium"><PhoneCall className="h-4 w-4" /> Telefone</div>
              <p className="mt-2 text-gray-700">(00) 0000-0000</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-6 text-sm">
              <div className="flex items-center gap-2 font-medium"><Mail className="h-4 w-4" /> E-mail</div>
              <p className="mt-2 text-gray-700">contato@seudominio.com</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="pt-6 text-sm">
              <div className="flex items-center gap-2 font-medium"><MessageSquare className="h-4 w-4" /> WhatsApp</div>
              <p className="mt-2 text-gray-700">Clique para iniciar uma conversa</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rodapé / Legal */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SeuNome Assessoria Financeira. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="underline">Termos de Uso</a>
              <a href="#" className="underline">Política de Privacidade</a>
              <a href="#" className="underline">Divulgação de Riscos</a>
            </div>
          </div>
          <p className="mt-4 text-xs">
            Aviso legal: As informações apresentadas têm caráter educacional e não constituem aconselhamento financeiro individual, oferta, solicitação
            ou recomendação de compra/venda de ativos. Rentabilidade passada não é garantia de resultados futuros. Decisões de investimento são de sua
            exclusiva responsabilidade. Consulte sempre os documentos oficiais e, se necessário, profissionais habilitados (ex.: tributário/contábil).
          </p>
        </div>
      </footer>
    </div>
  );
}
