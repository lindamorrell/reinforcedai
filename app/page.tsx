import {
  ShieldIcon,
  BrainIcon,
  ScaleIcon,
  FlaskIcon,
  EyeIcon,
  LockIcon,
  ArrowRightIcon,
  CheckIcon,
  BarsIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   REINFORCEDAI™ — Landing Page
   Sections: Nav | Hero | Services | Packages | Why | CTA | Footer
   ────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <Hero />
      <Services />
      <Packages />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════ */
function Nav() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Why Us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md">
      <div className="container-xxl flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <ShieldIcon size={22} className="text-[var(--accent)]" />
          <span
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight uppercase"
            style={{ letterSpacing: "0.04em" }}
          >
            REINFORCED<span className="text-[var(--accent)]">AI</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden text-sm md:inline-flex">
          Book Audit <ArrowRightIcon size={14} />
        </a>

        <button className="md:hidden" aria-label="Menu">
          <BarsIcon size={22} className="text-[var(--foreground)]" />
        </button>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand)] text-[var(--brand-foreground)]">
      <div className="particle-layer absolute inset-0 pointer-events-none" />
      <div className="container-xxl relative z-10 flex flex-col items-center py-28 text-center md:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
          <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          AI Safety &amp; Governance Engineering
        </div>

        <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] font-bold uppercase leading-[1.02] tracking-tight text-white">
          Build AI That
          <br />
          <span className="text-[var(--accent)]">Won’t Break</span> Under Pressure
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          REINFORCEDAI™ strengthens your AI systems through adversarial evaluation,
          alignment audits, and governance engineering. We help Australian
          organisations deploy AI safely, comply with ISO 42001 / NIST AI RMF,
          and sleep soundly.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#contact" className="btn-primary text-sm">
            Book a Free Audit <ArrowRightIcon size={14} />
          </a>
          <a href="#services" className="btn-ghost text-sm">
            Explore Services
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
          {["ISO 42001", "NIST AI RMF", "SOC 2", "Essential Eight"].map((b) => (
            <span
              key={b}
              className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-wider"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
function Services() {
  const cards = [
    {
      icon: <EyeIcon size={28} className="text-[var(--accent)]" />,
      title: "Adversarial Evaluation",
      body: "Red-team your LLMs, agents, and classifiers. We find jailbreaks, prompt-injection vectors, data-exfiltration paths, and reward-hacking before your users do.",
    },
    {
      icon: <BrainIcon size={28} className="text-[var(--accent)]" />,
      title: "Alignment Audits",
      body: "Measure goal-misgeneralisation, distributional-shift robustness, and specification-gaming. Get quantitative alignment scores and remediation roadmaps.",
    },
    {
      icon: <ScaleIcon size={28} className="text-[var(--accent)]" />,
      title: "Governance & Compliance",
      body: "ISO 42001, NIST AI RMF, and SOC 2 mapping tailored to your AI stack. Policy templates, risk registers, and evidence packs for auditors.",
    },
    {
      icon: <FlaskIcon size={28} className="text-[var(--accent)]" />,
      title: "Agent Evaluation Labs",
      body: "Continuous benchmarking for multi-agent systems: tool-use accuracy, hallucination rates, latency, cost, and safety guardrail efficacy.",
    },
    {
      icon: <LockIcon size={28} className="text-[var(--accent)]" />,
      title: "Secure Deployment",
      body: "Harden inference endpoints, implement input sanitisation, output filtering, and rate-limiting. Defence-in-depth for production AI.",
    },
    {
      icon: <ShieldIcon size={28} className="text-[var(--accent)]" />,
      title: "AI-as-a-Service Safety",
      body: "Third-party risk assessments for AI vendors. Model cards, safety sheets, and contractual guardrails so you inherit only the risk you choose.",
    },
  ];

  return (
    <section id="services" className="bg-[var(--muted)] py-24 md:py-32">
      <div className="container-xxl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Engineering Trust Into Every Layer
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            From model weights to boardroom policy — we reinforce AI systems so they
            behave as intended, even when the world doesn’t.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="structural-card p-8"
            >
              <div className="mb-5 inline-flex rounded-md bg-[var(--muted)] p-3">
                {c.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PACKAGES
   ═══════════════════════════════════════════════ */
function Packages() {
  const plans = [
    {
      name: "Starter",
      price: "$4,900",
      tag: "One-time engagement",
      features: [
        "AI readiness assessment",
        "ISO 42001 / NIST gap analysis",
        "Executive summary + risk register",
        "30-day remediation roadmap",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$12,900",
      tag: "Quarterly retainer",
      features: [
        "Everything in Starter",
        "Adversarial red-team (1 model / quarter)",
        "Alignment audit + scorecard",
        "Policy template pack",
        "Quarterly board briefing",
      ],
      cta: "Book Now",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tag: "Annual partnership",
      features: [
        "Everything in Professional",
        "Continuous agent evaluation lab",
        "Dedicated safety engineer",
        "SOC 2 evidence automation",
        "Incident-response retainers",
        "On-site workshops (AU)",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="packages" className="py-24 md:py-32">
      <div className="container-xxl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Reinforcement Packages
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            Choose the depth of engagement that matches your AI maturity and risk appetite.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-md border p-8",
                p.highlight
                  ? "border-[var(--accent)] bg-[var(--brand)] text-white shadow-xl"
                  : "border-[var(--border)] bg-white"
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-foreground)]">
                  Most Popular
                </span>
              )}
              <h3
                className={cn(
                  "font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-tight",
                  p.highlight ? "text-white" : "text-[var(--foreground)]"
                )}
              >
                {p.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider opacity-70">
                {p.tag}
              </p>
              <div className="mt-5">
                <span className="text-3xl font-bold tracking-tight">{p.price}</span>
                {p.price !== "Custom" && (
                  <span className="ml-1 text-sm opacity-70">AUD</span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckIcon
                      size={16}
                      className={cn(
                        "mt-0.5 shrink-0",
                        p.highlight ? "text-[var(--accent)]" : "text-[var(--accent)]"
                      )}
                    />
                    <span className={p.highlight ? "text-white/90" : "text-[var(--muted-foreground)]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors",
                  p.highlight
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[#00bfa0]"
                    : "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                )}
              >
                {p.cta} <ArrowRightIcon size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY US
   ═══════════════════════════════════════════════ */
function WhyUs() {
  const points = [
    {
      title: "Australian Context",
      body: "We understand the Essential Eight, ACSC guidelines, and local regulatory pressure. No generic US templates.",
    },
    {
      title: "Technical Depth",
      body: "Our engineers have built and broken production LLMs. We don’t just tick boxes — we find the failure modes.",
    },
    {
      title: "Board-Ready Reporting",
      body: "Every engagement delivers executive summaries, risk heat-maps, and evidence packs that auditors actually want.",
    },
    {
      title: "Fast Time-to-Value",
      body: "Starter assessments turn around in 10 business days. You’ll know where you stand before the month ends.",
    },
  ];

  return (
    <section id="why" className="bg-[var(--muted)] py-24 md:py-32">
      <div className="container-xxl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Why REINFORCEDAI
            </span>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Built by Engineers.
              <br />
              Trusted by Boards.
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              We sit at the intersection of deep technical AI research and pragmatic
              enterprise risk management. That’s a rare combination — and it’s why our
              clients stay.
            </p>
            <a href="#contact" className="btn-primary mt-8 text-sm">
              Start a Conversation <ArrowRightIcon size={14} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((pt) => (
              <div key={pt.title} className="structural-card p-6">
                <h4 className="font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-tight">
                  {pt.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {pt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--brand)] py-24 text-center md:py-32">
      <div className="particle-layer absolute inset-0 pointer-events-none opacity-60" />
      <div className="container-xxl relative z-10">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          Ready to Reinforce Your AI?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Book a free 30-minute audit call. We’ll map your current risk surface and
          tell you exactly where to start — no sales pressure, no vague promises.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@reinforcedai.com.au?subject=Free%20AI%20Audit%20Request"
            className="btn-primary text-sm"
          >
            Book Free Audit <ArrowRightIcon size={14} />
          </a>
          <a
            href="mailto:hello@reinforcedai.com.au"
            className="btn-ghost text-sm"
          >
            hello@reinforcedai.com.au
          </a>
        </div>
        <p className="mt-6 text-xs text-white/40">
          Response within 1 business day. Based in Australia, serving APAC.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white py-12">
      <div className="container-xxl flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <ShieldIcon size={20} className="text-[var(--accent)]" />
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider">
            REINFORCED<span className="text-[var(--accent)]">AI</span>
          </span>
        </div>
        <p className="text-xs text-[var(--muted-foreground)]">
          © {new Date().getFullYear()} REINFORCEDAI™. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs font-medium text-[var(--muted-foreground)]">
          <a href="#" className="hover:text-[var(--foreground)]">Privacy</a>
          <a href="#" className="hover:text-[var(--foreground)]">Terms</a>
          <a href="#" className="hover:text-[var(--foreground)]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
