import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Cloud,
  Boxes,
  Container,
  ShieldCheck,
  Brain,
  Activity,
  ArrowRight,
  Award,
  GitBranch,
  Star,
  Users,
  Terminal as TerminalIcon,
  Zap,
  Eye,
  Workflow,
} from "lucide-react";

import profileImg from "@/assets/profile.jpg";
import projAws from "@/assets/project-aws.jpg";
import projK8s from "@/assets/project-k8s.jpg";
import projTf from "@/assets/project-terraform.jpg";
import projMlops from "@/assets/project-mlops.jpg";
import projDevsec from "@/assets/project-devsecops.jpg";

/* ---------- shared motion ---------- */
const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

/* ============================================================ */
/*                         NAV                                  */
/* ============================================================ */
/* ---------- BOOT SEQUENCE ---------- */
function BootSequence() {
  const steps = [
    "Initializing infrastructure",
    "Loading configuration",
    "Starting control plane",
    "Scheduling workloads",
    "Provisioning containers",
    "Deploying services",
    "Collecting telemetry",
    "Cluster status: ready",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => Math.min(p + 1, steps.length - 1)), 280);
    return () => clearInterval(id);
  }, [steps.length]);
  const progress = ((i + 1) / steps.length) * 100;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      </div>
      <div className="relative w-full max-w-md px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary font-display text-sm font-bold">
            DA
          </span>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            cluster · bootstrap
          </div>
        </div>
        <div className="mt-8 h-px w-full overflow-hidden rounded-full bg-hairline">
          <motion.div
            className="h-full bg-primary shadow-[0_0_20px_oklch(0.7_0.18_240/_80%)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <ul className="mt-6 space-y-1.5 font-mono text-[12px] leading-relaxed">
          {steps.slice(0, i + 1).map((s, idx) => {
            const done = idx < i || i === steps.length - 1;
            return (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    done ? "bg-primary shadow-[0_0_8px_oklch(0.7_0.18_240/_90%)]" : "bg-primary/40"
                  }`}
                />
                <span className={done ? "text-foreground/85" : "text-muted-foreground"}>
                  {s}
                  {!done && idx === i && <span className="ml-1 animate-pulse text-primary">…</span>}
                  {done && idx === steps.length - 1 && (
                    <span className="ml-2 text-primary">✓</span>
                  )}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

/* ---------- FLOATING HERO LABELS ---------- */
function FloatingLabels() {
  const labels = [
    { t: "Control Plane", x: "-12%", y: "8%", d: 0 },
    { t: "Cluster Ready", x: "92%", y: "4%", d: 0.4 },
    { t: "Gateway", x: "-18%", y: "44%", d: 0.8 },
    { t: "Ingress", x: "96%", y: "38%", d: 1.2 },
    { t: "Worker Node", x: "-10%", y: "78%", d: 1.6 },
    { t: "Scheduler", x: "94%", y: "70%", d: 2.0 },
    { t: "Telemetry", x: "-22%", y: "96%", d: 2.4 },
    { t: "Healthy", x: "90%", y: "100%", d: 2.8 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block">
      {labels.map((l) => (
        <motion.div
          key={l.t}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: l.d * 0.3 + 0.4 },
            y: { duration: 6 + l.d, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: l.x, top: l.y }}
          className="absolute flex items-center gap-1.5 rounded-full hairline glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_oklch(0.7_0.18_240/_90%)]" />
          {l.t}
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- PILLAR HOVER EFFECT ---------- */
function PillarHoverFx() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 200"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <defs>
        <linearGradient id="ph-ln" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path id="ph-p" d="M20 170 C 90 140 180 60 280 30" fill="none" stroke="url(#ph-ln)" strokeWidth="1" />
      <circle r="2" fill="currentColor">
        <animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#ph-p" /></animateMotion>
      </circle>
      {[[40, 160], [120, 110], [220, 60]].map(([x, y], idx) => (
        <g key={idx}>
          <circle cx={x} cy={y} r="2.5" fill="currentColor" opacity="0.85" />
          <circle cx={x} cy={y} r="6" fill="none" stroke="currentColor" strokeOpacity="0.5">
            <animate attributeName="r" values="2.5;10;2.5" dur="2.6s" begin={`${idx * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" begin={`${idx * 0.4}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function Nav() {
  const links = [
    { label: "Domains", href: "#domains" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Certifications", href: "#certs" },
    { label: "Contact", href: "#contact" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "domains", "projects", "stack", "certs", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.6, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full hairline px-4 py-2 transition-[background,backdrop-filter,box-shadow] duration-300 sm:px-5 ${
          scrolled
            ? "glass bg-background/70 shadow-[0_8px_40px_-20px_oklch(0_0_0/_70%)] [backdrop-filter:blur(22px)_saturate(160%)]"
            : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary font-display text-sm font-bold">
            DA
          </span>
          <span className="font-display text-sm font-semibold tracking-tight hidden sm:inline">
            Darshan Atkari
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3 py-1.5 text-[13px] transition ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-inset ring-primary/25"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-foreground/95 px-3.5 py-1.5 text-[13px] font-medium text-background transition hover:bg-foreground"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.header>
  );
}

/* ============================================================ */
/*                         HERO                                 */
/* ============================================================ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 grain">
      {/* Atmospheric layers — cloud-engineering blue */}
      <motion.div style={{ y, opacity }} aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute left-1/2 top-0 h-[640px] w-[1200px] -translate-x-1/2 amber-glow" />
        <HeroBlueprint />
        <div className="absolute left-1/2 top-40 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -left-40 top-40 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute -right-32 top-72 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[160px]" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* LEFT — content */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-start gap-7">
            <motion.div variants={fade} className="flex items-center gap-3 rounded-full hairline bg-surface/60 px-3 py-1.5 backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Available for cloud · DevOps · SRE roles
              </span>
            </motion.div>

            <motion.h1
              variants={fade}
              className="font-display text-balance text-[clamp(2.4rem,6.2vw,4.6rem)] font-semibold leading-[1.02] tracking-tight"
            >
              Darshan Atkari
            </motion.h1>

            <motion.p
              variants={fade}
              className="-mt-2 font-mono text-[clamp(0.78rem,1.05vw,0.95rem)] uppercase tracking-[0.28em] text-muted-foreground"
            >
              <span className="text-primary">Cloud</span> · DevOps · <span className="text-primary">SRE</span> · MLOps
            </motion.p>

            <motion.p variants={fade} className="max-w-xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-[1.6rem]">
              Automating the present. <span className="text-primary not-italic font-normal">·</span> Scaling the future.
            </motion.p>

            <motion.p variants={fade} className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and operate the unseen layer beneath modern software — cloud-native
              infrastructure, Kubernetes workloads, DevSecOps pipelines and MLOps systems —
              built for reliability, observability and automation at scale.
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.7_0.18_240/_60%)] transition hover:brightness-110"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://github.com/darshanatkari"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full hairline bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:bg-surface-elevated"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="#resume"
                className="group inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                Resume
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:mt-2"
          >
            <FloatingLabels />
            {/* soft glow */}
            <div aria-hidden className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary/25 blur-3xl" />
            <div aria-hidden className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-md" />

            {/* glass frame */}
            <div className="relative rounded-[2rem] hairline glass p-2 shadow-[0_30px_80px_-30px_oklch(0_0_0/_70%)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-surface">
                <img
                  src={profileImg}
                  alt="Portrait of Darshan Atkari"
                  width={640}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[1.6rem]" />
              </div>

              {/* terminal-style badge */}
              <div className="absolute -bottom-3 left-6 flex items-center gap-2 rounded-full hairline glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                kubectl get engineer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                ENGINEERING PHILOSOPHY                        */
/* ============================================================ */
function Philosophy() {
  const pillars = [
    { icon: Workflow, k: "Automate", t: "Every manual step is a future incident — codified, versioned, repeatable." },
    { icon: ShieldCheck, k: "Reliable", t: "Designed for failure: SLOs, error budgets, graceful degradation by default." },
    { icon: Eye, k: "Observable", t: "Metrics, logs and traces unified — you cannot operate what you cannot see." },
    { icon: Cloud, k: "Cloud Native", t: "Loosely coupled, declarative, elastic — built to live on Kubernetes." },
    { icon: Boxes, k: "Resilient", t: "Self-healing workloads, autoscaling, blast-radius containment by design." },
    { icon: Zap, k: "Operational", t: "Runbooks, on-call hygiene, post-mortems — excellence is a daily practice." },
  ];
  return (
    <section id="philosophy" className="section-pad relative overflow-hidden border-t border-hairline">
      <FlowField className="opacity-[0.18]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="◇" title="Engineering Philosophy" />
            <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              Automating the present.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
                Scaling the future.
              </span>
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md text-base text-muted-foreground">
            Software is no longer shipped — it is operated. I build the unseen layer that
            keeps platforms reliable, secure, observable and developer-friendly at scale.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden bg-background p-7 transition hover:bg-surface/60"
            >
              <PillarHoverFx />
              <div className="flex items-center gap-3">
                <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_-4px_oklch(0.7_0.18_240/_70%)]">
                  <p.icon className="h-4 w-4" />
                  <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-primary/30 opacity-0 transition group-hover:opacity-100" />
                </div>
                <span className="font-display text-lg font-semibold tracking-tight">{p.k}</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary/40 transition group-hover:bg-primary group-hover:shadow-[0_0_10px_oklch(0.7_0.18_240/_90%)]" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.t}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*           ENGINEERING-THEMED MOTION PRIMITIVES               */
/* ============================================================ */

/** Subtle flowing topology background (network packets along curves). */
function FlowField({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full text-primary ${className}`}
    >
      <defs>
        <linearGradient id="ff-ln" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[80, 160, 240, 320].map((y, i) => (
        <g key={y}>
          <path
            id={`ff-p-${i}`}
            d={`M0 ${y} C200 ${y - 30} 600 ${y + 30} 800 ${y}`}
            fill="none"
            stroke="url(#ff-ln)"
            strokeWidth="1"
          />
          <circle r="2" fill="currentColor">
            <animateMotion dur={`${7 + i * 1.5}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#ff-p-${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;0" dur={`${7 + i * 1.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------ */
/*  GLOBAL AMBIENT TOPOLOGY                                     */
/*  Fixed full-viewport layer: distributed-systems node graph   */
/*  with packets traversing service-to-service edges. Extremely */
/*  subtle — sits behind every section.                         */
/* ------------------------------------------------------------ */
function AmbientTopology() {
  // Deterministic node positions (percent of 1000x600 viewBox) shaped
  // like a service mesh: edge ingress (left), services (mid), data (right).
  const nodes: { x: number; y: number; r?: number }[] = [
    { x: 60, y: 120 }, { x: 60, y: 300 }, { x: 60, y: 480 },
    { x: 260, y: 80 }, { x: 260, y: 220 }, { x: 260, y: 380 }, { x: 260, y: 520 },
    { x: 500, y: 140, r: 3 }, { x: 500, y: 300, r: 3 }, { x: 500, y: 460, r: 3 },
    { x: 740, y: 100 }, { x: 740, y: 240 }, { x: 740, y: 380 }, { x: 740, y: 520 },
    { x: 940, y: 200 }, { x: 940, y: 400 },
  ];
  const edges: [number, number][] = [
    [0, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6],
    [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9],
    [7, 10], [7, 11], [8, 11], [8, 12], [9, 12], [9, 13],
    [10, 14], [11, 14], [12, 15], [13, 15],
  ];
  // A handful of edges get packet animation.
  const flowing = [1, 4, 6, 9, 12, 15, 18, 21];
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: "strict" }}
    >
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-primary opacity-[0.18]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 90%)",
        }}
      >
        <defs>
          <radialGradient id="amb-node">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="0.6"
          />
        ))}
        {/* packets traversing select edges */}
        {flowing.map((idx, i) => {
          const [a, b] = edges[idx % edges.length];
          const dur = 6 + ((i * 1.3) % 5);
          return (
            <circle key={`pkt-${i}`} r="1.6" fill="currentColor" opacity="0.9">
              <animate
                attributeName="cx"
                from={nodes[a].x}
                to={nodes[b].x}
                dur={`${dur}s`}
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from={nodes[a].y}
                to={nodes[b].y}
                dur={`${dur}s`}
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur={`${dur}s`}
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={(n.r ?? 2.2) + 4} fill="url(#amb-node)" opacity="0.35" />
            <circle cx={n.x} cy={n.y} r={n.r ?? 2.2} fill="currentColor" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------ */
/*  HERO BLUEPRINT                                              */
/*  Kubernetes-cluster / cloud-architecture blueprint for the   */
/*  hero midground. Cluster boundary, control plane, worker     */
/*  nodes, ingress, service edges — with packet pulses.         */
/* ------------------------------------------------------------ */
function HeroBlueprint() {
  // viewBox 1200x600
  const workers = [
    { x: 280, y: 380 },
    { x: 460, y: 420 },
    { x: 640, y: 400 },
    { x: 820, y: 430 },
  ];
  const cp = { x: 550, y: 200 };
  const ingress = { x: 120, y: 300 };
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-primary opacity-[0.22]"
      style={{
        maskImage:
          "linear-gradient(180deg, black 10%, black 60%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(180deg, black 10%, black 60%, transparent 95%)",
      }}
    >
      <defs>
        <linearGradient id="hb-edge" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* cluster boundary (dashed) */}
      <rect
        x="200"
        y="140"
        width="900"
        height="380"
        rx="28"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="6 6"
      />
      <text
        x="220"
        y="132"
        fill="currentColor"
        opacity="0.45"
        fontSize="11"
        fontFamily="ui-monospace, monospace"
        letterSpacing="2"
      >
        CLUSTER · us-east-1
      </text>

      {/* inner control-plane region */}
      <rect
        x="430"
        y="160"
        width="240"
        height="100"
        rx="14"
        fill="currentColor"
        fillOpacity="0.04"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="0.8"
      />
      <text
        x="450"
        y="180"
        fill="currentColor"
        opacity="0.5"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        letterSpacing="1.5"
      >
        control-plane
      </text>

      {/* control plane node */}
      <circle cx={cp.x} cy={cp.y} r="6" fill="currentColor" />
      <circle cx={cp.x} cy={cp.y} r="14" fill="currentColor" opacity="0.12" />

      {/* ingress */}
      <circle cx={ingress.x} cy={ingress.y} r="5" fill="currentColor" />
      <text
        x={ingress.x - 30}
        y={ingress.y + 24}
        fill="currentColor"
        opacity="0.5"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
      >
        ingress
      </text>

      {/* edges from control plane to workers + ingress → cp */}
      <path
        id="hb-in"
        d={`M${ingress.x} ${ingress.y} C 300 260 380 220 ${cp.x} ${cp.y}`}
        fill="none"
        stroke="url(#hb-edge)"
        strokeWidth="1"
      />
      {workers.map((w, i) => (
        <g key={i}>
          <path
            id={`hb-w-${i}`}
            d={`M${cp.x} ${cp.y} C ${cp.x} 300 ${w.x} 320 ${w.x} ${w.y}`}
            fill="none"
            stroke="url(#hb-edge)"
            strokeWidth="0.9"
          />
          {/* worker node */}
          <rect
            x={w.x - 26}
            y={w.y - 16}
            width="52"
            height="32"
            rx="6"
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="0.8"
          />
          <text
            x={w.x}
            y={w.y + 4}
            textAnchor="middle"
            fill="currentColor"
            opacity="0.55"
            fontSize="9"
            fontFamily="ui-monospace, monospace"
          >
            node-{i + 1}
          </text>
          {/* pod dots inside worker */}
          {[0, 1, 2].map((p) => (
            <circle
              key={p}
              cx={w.x - 12 + p * 12}
              cy={w.y + 24}
              r="2"
              fill="currentColor"
              opacity="0.7"
            />
          ))}
        </g>
      ))}

      {/* packets: ingress → control-plane → each worker */}
      <circle r="2.2" fill="currentColor">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath href="#hb-in" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
      </circle>
      {workers.map((_, i) => (
        <circle key={`p-${i}`} r="2" fill="currentColor">
          <animateMotion
            dur={`${4 + i * 0.6}s`}
            begin={`${i * 0.8}s`}
            repeatCount="indefinite"
          >
            <mpath href={`#hb-w-${i}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={`${4 + i * 0.6}s`}
            begin={`${i * 0.8}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* telemetry tick marks bottom-right (observability hint) */}
      <g transform="translate(960,470)" opacity="0.45">
        {Array.from({ length: 24 }).map((_, i) => {
          const h = 4 + ((i * 37) % 22);
          return (
            <rect
              key={i}
              x={i * 7}
              y={-h}
              width="3"
              height={h}
              fill="currentColor"
              opacity={0.35 + (i % 5) * 0.08}
            />
          );
        })}
        <text
          x="0"
          y="14"
          fill="currentColor"
          opacity="0.55"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.5"
        >
          p99 · req/s
        </text>
      </g>
    </svg>
  );
}

/** Per-project animated overlay — visual storytelling on top of the static diagram. */
function ProjectFlowOverlay({ kind }: { kind: "cloud" | "k8s" | "tf" | "mlops" | "devsecops" }) {
  const common = "pointer-events-none absolute inset-0 h-full w-full";
  if (kind === "cloud") {
    // cloud traffic pulse
    return (
      <svg aria-hidden viewBox="0 0 400 280" className={`${common} text-primary`}>
        <defs>
          <radialGradient id="cl-g">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          "M40 220 C 120 160 200 100 360 60",
          "M40 220 C 140 200 240 180 360 140",
          "M40 220 C 100 220 220 240 360 220",
        ].map((d, i) => (
          <g key={i}>
            <path id={`cl-p-${i}`} d={d} stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" fill="none" strokeDasharray="2 4" />
            <circle r="3" fill="url(#cl-g)">
              <animateMotion dur={`${4 + i}s`} repeatCount="indefinite"><mpath href={`#cl-p-${i}`} /></animateMotion>
            </circle>
          </g>
        ))}
        {[[40,220],[360,60],[360,140],[360,220]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4" fill="currentColor" opacity="0.8">
            <animate attributeName="r" values="4;7;4" dur="2.4s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    );
  }
  if (kind === "k8s") {
    const pods = [[90,90],[200,70],[310,90],[90,200],[200,220],[310,200]];
    return (
      <svg aria-hidden viewBox="0 0 400 280" className={`${common} text-primary`}>
        {pods.flatMap((a, i) =>
          pods.slice(i + 1).map(([bx, by], j) => (
            <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={bx} y2={by} stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
          ))
        )}
        {pods.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="currentColor" opacity="0.85" />
            <circle cx={x} cy={y} r="10" fill="none" stroke="currentColor" strokeOpacity="0.4">
              <animate attributeName="r" values="6;18;6" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "tf") {
    const nodes = [[60,140],[160,70],[160,210],[260,140],[360,80],[360,200]];
    const edges: [number, number][] = [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5]];
    return (
      <svg aria-hidden viewBox="0 0 400 280" className={`${common} text-primary`}>
        {edges.map(([a,b], i) => {
          const [x1,y1] = nodes[a], [x2,y2] = nodes[b];
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
              <circle r="2.5" fill="currentColor">
                <animate attributeName="cx" values={`${x1};${x2}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="cy" values={`${y1};${y2}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
        {nodes.map(([x,y], i) => (
          <rect key={i} x={x-7} y={y-7} width="14" height="14" rx="3" fill="currentColor" opacity="0.8" />
        ))}
      </svg>
    );
  }
  if (kind === "mlops") {
    return (
      <svg aria-hidden viewBox="0 0 400 280" className={`${common} text-primary`}>
        <path id="ml-p" d="M30 200 Q 120 60 200 140 T 370 80" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" fill="none" />
        {["Data", "Train", "Registry", "Serve"].map((label, i) => {
          const x = 30 + i * 113;
          const y = i % 2 === 0 ? 200 : 110;
          return (
            <g key={label}>
              <rect x={x - 26} y={y - 12} width="52" height="24" rx="6" fill="currentColor" opacity="0.15" />
              <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.9" fontFamily="monospace">{label}</text>
            </g>
          );
        })}
        {[0, 0.6, 1.2].map((delay, i) => (
          <circle key={i} r="3" fill="currentColor">
            <animateMotion dur="4s" begin={`${delay}s`} repeatCount="indefinite"><mpath href="#ml-p" /></animateMotion>
          </circle>
        ))}
      </svg>
    );
  }
  // devsecops pipeline
  const steps = ["commit", "build", "scan", "deploy"];
  return (
    <svg aria-hidden viewBox="0 0 400 280" className={`${common} text-primary`}>
      <line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 4" />
      {steps.map((s, i) => {
        const x = 40 + i * (320 / 3);
        return (
          <g key={s}>
            <circle cx={x} cy={140} r="10" fill="currentColor" opacity="0.85" />
            <circle cx={x} cy={140} r="14" fill="none" stroke="currentColor" strokeOpacity="0.5">
              <animate attributeName="r" values="10;22;10" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </circle>
            <text x={x} y={170} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.8">{s}</text>
          </g>
        );
      })}
      <circle r="3.5" fill="currentColor">
        <animate attributeName="cx" values="40;360" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="140;140" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ============================================================ */
/*                   TERMINAL COMPONENT                         */
/* ============================================================ */
function CommandTerminal() {
  const lines = [
    { cmd: "terraform apply -auto-approve", out: "Apply complete! 37 added, 0 changed, 0 destroyed." },
    { cmd: "kubectl get pods -n platform", out: "argocd-server-7c9f   1/1   Running   0   12d" },
    { cmd: "argocd app sync platform", out: "Synced  →  Healthy" },
    { cmd: "docker build -t platform/api:1.4.2 .", out: "Successfully tagged platform/api:1.4.2" },
    { cmd: "gh workflow run release.yml", out: "✓ release.yml queued on main" },
  ];
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    const cmd = lines[idx].cmd;
    setTyped("");
    setShowOut(false);
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) {
        clearInterval(typer);
        setTimeout(() => setShowOut(true), 250);
        setTimeout(() => setIdx((p) => (p + 1) % lines.length), 2600);
      }
    }, 45);
    return () => clearInterval(typer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div className="relative overflow-hidden rounded-2xl hairline bg-[oklch(0.1_0.02_255)] shadow-[0_30px_80px_-30px_oklch(0_0_0/_70%)]">
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          ~/platform · zsh
        </span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.slice(0, idx).map((l, i) => (
          <div key={i} className="opacity-50">
            <div><span className="text-primary">❯</span> {l.cmd}</div>
            <div className="pl-3 text-muted-foreground">{l.out}</div>
          </div>
        ))}
        <div>
          <span className="text-primary">❯</span> {typed}
          <span className="ml-0.5 inline-block h-4 w-1.5 -mb-0.5 animate-pulse bg-primary" />
        </div>
        {showOut && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="pl-3 text-muted-foreground"
          >
            {lines[idx].out}
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ============================================================ */
/*                         ABOUT                                */
/* ============================================================ */
function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <SectionLabel index="01" title="About" />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-8 space-y-6"
        >
          <motion.p variants={fade} className="font-display text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            I design and ship the <span className="text-primary">unseen layer</span> beneath modern
            software — the infrastructure, pipelines and runtimes that turn ideas into production.
          </motion.p>
          <motion.p variants={fade} className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            My work lives at the intersection of <em className="not-italic text-foreground/90">Cloud Architecture, Infrastructure as Code, Kubernetes, DevSecOps, MLOps and Observability</em>.
            I build reference-grade systems — small enough to read end-to-end, serious enough to run real workloads.
          </motion.p>
          <motion.p variants={fade} className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Lately I have been obsessed with reliability engineering: SLOs, error budgets, graceful
            degradation, and the operational discipline that keeps cloud-native systems healthy under load.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-primary">{index}</span>
      <div className="h-px w-10 bg-primary/40" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{title}</span>
    </div>
  );
}

/* ============================================================ */
/*                  ENGINEERING DOMAINS                         */
/* ============================================================ */
function Domains() {
  const domains = [
    { icon: Cloud, name: "Cloud Architecture", desc: "Multi-cloud landing zones, network topology, cost and security baselines.", tag: "Design" },
    { icon: Boxes, name: "Infrastructure as Code", desc: "Reusable Terraform modules, GitOps workflows, drift-free environments.", tag: "Automate" },
    { icon: Container, name: "Containers", desc: "Kubernetes, Helm, service mesh, progressive delivery with Argo.", tag: "Run" },
    { icon: ShieldCheck, name: "DevSecOps", desc: "Shift-left security, SAST, SCA, secrets scanning and policy as code.", tag: "Secure" },
    { icon: Activity, name: "Observability", desc: "Metrics, logs and traces unified with OpenTelemetry and Grafana.", tag: "See" },
    { icon: Brain, name: "MLOps", desc: "Model registries, reproducible pipelines, KServe-based serving.", tag: "Ship" },
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="domains" className="section-pad relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[160px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="02" title="Engineering Domains" />
            <h2 className="mt-6 font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Six disciplines.
              <br />
              <span className="text-muted-foreground">One operating model.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Every domain feeds the next — a connected pipeline from design through deployment,
              security, observation and intelligence.
            </p>
          </div>

          {/* Connected pipeline layout */}
          <div className="md:col-span-8">
            <ol className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
              {domains.map((d, i) => {
                const isActive = active === i;
                const isLinked = active !== null && (active === i - 1 || active === i + 1);
                return (
                  <motion.li
                    key={d.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    className={`group relative overflow-hidden rounded-2xl hairline bg-surface/70 p-5 transition-all duration-500 ${
                      isActive
                        ? "bg-surface-elevated shadow-[0_0_40px_-10px_oklch(0.7_0.18_240/_60%)] ring-1 ring-primary/40"
                        : isLinked
                          ? "bg-surface ring-1 ring-primary/20"
                          : "hover:bg-surface-elevated"
                    }`}
                  >
                    {/* connector arrow to next */}
                    {i < domains.length - 1 && (
                      <span
                        aria-hidden
                        className={`absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-[10px] transition sm:inline ${
                          isActive || active === i + 1 ? "text-primary" : "text-primary/40"
                        }`}
                      >
                        {i % 2 === 0 ? "→" : "↓"}
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <div className={`relative grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition ${isActive ? "bg-primary/25 shadow-[0_0_24px_-4px_oklch(0.7_0.18_240/_80%)]" : ""}`}>
                        <d.icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          step · 0{i + 1}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                          {d.tag}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{d.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                    {/* flowing packet on hover */}
                    <svg
                      aria-hidden
                      viewBox="0 0 300 80"
                      preserveAspectRatio="none"
                      className={`pointer-events-none mt-4 h-6 w-full text-primary transition-opacity duration-500 ${isActive || isLinked ? "opacity-100" : "opacity-30"}`}
                    >
                      <path id={`dm-p-${i}`} d="M0 40 C 80 10 220 70 300 40" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" strokeDasharray="2 4" />
                      <circle r="1.8" fill="currentColor">
                        <animateMotion dur="3.5s" repeatCount="indefinite"><mpath href={`#dm-p-${i}`} /></animateMotion>
                      </circle>
                    </svg>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                  FEATURED PROJECTS                           */
/* ============================================================ */
type Project = {
  num: string;
  title: string;
  kicker: string;
  summary: string;
  tech: string[];
  outcomes: string[];
  image: string;
  github: string;
  docs: string;
  flow: "cloud" | "k8s" | "tf" | "mlops" | "devsecops";
};

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "AWS Cloud Portfolio",
    kicker: "Reference Cloud Architecture",
    summary:
      "A curated portfolio of production-style AWS workloads — VPC landing zones, serverless event pipelines, and hardened compute baselines — each shipped with diagrams, IaC and runbooks.",
    tech: ["AWS", "Terraform", "CloudFront", "Lambda", "EventBridge"],
    outcomes: [
      "Reusable multi-account landing zone",
      "Cost & security baselines applied by default",
      "End-to-end runbooks for every workload",
    ],
    image: projAws,
    github: "https://github.com/darshanatkari",
    docs: "#",
    flow: "cloud",
  },
  {
    num: "02",
    title: "CloudNative DevOps Blueprint",
    kicker: "Platform Engineering",
    summary:
      "A reference platform built on Kubernetes with GitOps, progressive delivery and full observability — the kind of golden-path setup developers actually want to use.",
    tech: ["Kubernetes", "ArgoCD", "Helm", "Argo Rollouts", "Prometheus"],
    outcomes: [
      "Pull-request driven deploys via ArgoCD",
      "Canary & blue/green out of the box",
      "Unified metrics, logs and traces",
    ],
    image: projK8s,
    github: "https://github.com/darshanatkari",
    docs: "#",
    flow: "k8s",
  },
  {
    num: "03",
    title: "Terraform AWS Reference Architecture",
    kicker: "Infrastructure as Code",
    summary:
      "Composable Terraform modules and root stacks that codify AWS best practices — networking, IAM, observability, data — all wired through a CI workflow with policy checks.",
    tech: ["Terraform", "OPA", "AWS", "GitHub Actions", "tflint"],
    outcomes: [
      "30+ reusable Terraform modules",
      "Policy-as-code guardrails in CI",
      "Drift detection on every PR",
    ],
    image: projTf,
    github: "https://github.com/darshanatkari",
    docs: "#",
    flow: "tf",
  },
  {
    num: "04",
    title: "MLOps Platform Blueprint",
    kicker: "Machine Learning Operations",
    summary:
      "A production-shaped MLOps stack: experiment tracking, dataset versioning and model serving — all running on Kubernetes with reproducible pipelines.",
    tech: ["MLflow", "DVC", "KServe", "FastAPI", "Kubernetes"],
    outcomes: [
      "Reproducible training & inference paths",
      "Model registry & lineage by default",
      "Autoscaling, GPU-aware serving",
    ],
    image: projMlops,
    github: "https://github.com/darshanatkari",
    docs: "#",
    flow: "mlops",
  },
  {
    num: "05",
    title: "DevSecOps GitHub Actions",
    kicker: "Secure Software Delivery",
    summary:
      "An opinionated GitHub Actions library that bakes security into the developer feedback loop — SAST, SCA, container scanning, IaC scanning and secret detection on every PR.",
    tech: ["GitHub Actions", "Trivy", "Gitleaks", "Checkov", "Vault"],
    outcomes: [
      "Critical findings blocked in CI",
      "Signed, attested container builds",
      "Secrets policy enforced by default",
    ],
    image: projDevsec,
    github: "https://github.com/darshanatkari",
    docs: "#",
    flow: "devsecops",
  },
];

function ProjectRow({ p, i, featured = false }: { p: Project; i: number; featured?: boolean }) {
  const flip = !featured && i % 2 === 1;
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground">
            Flagship
          </span>
          <span className="font-mono text-xs text-primary">{p.num}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
        <div className="group relative overflow-hidden rounded-[2rem] hairline bg-surface">
          <div className="absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/15 to-transparent opacity-70" />
          <div className="relative aspect-[21/10] overflow-hidden">
            <img
              src={p.image}
              alt={`${p.title} — architecture visual`}
              loading="eager"
              className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <ProjectFlowOverlay kind={p.flow} />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full glass hairline px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {p.kicker}
              </span>
            </div>
            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full hairline bg-background/60 px-3 py-1.5 backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Interactive Infrastructure View · Coming soon
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="md:col-span-7">
                <h3 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{p.summary}</p>
              </div>
              <div className="md:col-span-5">
                <ul className="space-y-1.5">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-foreground/85">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full hairline bg-surface/80 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground/95 px-4 py-2 text-xs font-semibold text-background transition hover:bg-foreground">
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a href={p.docs} className="inline-flex items-center gap-2 rounded-full hairline glass px-4 py-2 text-xs font-medium transition hover:bg-surface-elevated">
                    <FileText className="h-3.5 w-3.5" /> Documentation
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14"
    >
      {/* Image */}
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="group relative overflow-hidden rounded-3xl hairline bg-surface">
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-60" />
          <div className="relative aspect-[16/11] overflow-hidden">
            <img
              src={p.image}
              alt={`${p.title} — architecture visual`}
              loading="lazy"
              width={1280}
              height={880}
              className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
            <ProjectFlowOverlay kind={p.flow} />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full glass hairline px-2.5 py-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {p.kicker}
              </span>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full hairline bg-background/55 px-2.5 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Architecture diagram · soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-primary">{p.num}</span>
          <div className="h-px w-8 bg-primary/40" />
        </div>
        <h3 className="mt-3 font-display text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 text-balance text-sm text-muted-foreground sm:text-base">{p.summary}</p>

        <ul className="mt-5 space-y-1.5">
          {p.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
              {o}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full hairline bg-surface px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground/95 px-4 py-2 text-xs font-semibold text-background transition hover:bg-foreground"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a
            href={p.docs}
            className="inline-flex items-center gap-2 rounded-full hairline bg-surface px-4 py-2 text-xs font-medium text-foreground transition hover:bg-surface-elevated"
          >
            <FileText className="h-3.5 w-3.5" /> Documentation
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [flagship, ...rest] = PROJECTS;
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="03" title="Featured Projects" />
            <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl">
              Case studies, not<br />screenshots.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Each project ships as a reference implementation — architecture, infrastructure, security
            and operations all readable in one repository.
          </p>
        </div>

        <div className="mt-20">
          <ProjectRow p={flagship} i={0} featured />
        </div>

        {/* Terminal interlude — engineering character break */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-12 md:items-center"
        >
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <TerminalIcon className="h-3.5 w-3.5 text-primary" /> live shell
            </div>
            <h3 className="mt-3 font-display text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              The interface I think in.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Most of my craft happens in plain text — declarations, manifests, pipelines.
              Each command is a contract with production.
            </p>
          </div>
          <div className="md:col-span-7">
            <CommandTerminal />
          </div>
        </motion.div>

        <div className="mt-28 space-y-28">
          {rest.map((p, i) => (
            <ProjectRow key={p.num} p={p} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                        TECH STACK                            */
/* ============================================================ */
function Stack() {
  const groups: { name: string; items: string[] }[] = [
    { name: "Cloud", items: ["AWS"] },
    { name: "Infrastructure", items: ["Terraform", "Ansible"] },
    { name: "Containers", items: ["Docker", "Kubernetes", "Helm"] },
    { name: "GitOps", items: ["ArgoCD", "Argo Rollouts"] },
    { name: "Observability", items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
    { name: "Security", items: ["Trivy", "Gitleaks", "Vault"] },
    { name: "MLOps", items: ["MLflow", "DVC", "KServe", "FastAPI"] },
    { name: "CI/CD", items: ["GitHub Actions"] },
  ];

  return (
    <section id="stack" className="section-pad relative border-t border-hairline bg-surface/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="04" title="Tech Stack" />
            <h2 className="mt-6 font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              The tools I reach for,
              <br />
              <span className="text-muted-foreground">grouped by intent.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-hairline">
              {groups.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid grid-cols-[120px_1fr] items-center gap-6 py-5 transition-colors sm:grid-cols-[200px_1fr] hover:bg-surface/40"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-gradient-to-r from-primary via-primary/40 to-transparent transition-all duration-500 group-hover:w-full"
                  />
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/10 text-primary transition group-hover:bg-primary/20 group-hover:shadow-[0_0_18px_-2px_oklch(0.7_0.18_240/_80%)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display text-base font-medium">{g.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {g.items.map((it) => (
                      <motion.span
                        key={it}
                        whileHover={{ y: -1 }}
                        className="rounded-full px-1 text-base text-foreground/80 transition hover:text-primary group-hover:text-foreground"
                      >
                        {it}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                     CERTIFICATIONS                           */
/* ============================================================ */
function Certifications() {
  const certs = [
    { name: "AWS Certified Solutions Architect — Associate", issuer: "Amazon Web Services", year: "2025" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF / Linux Foundation", year: "2025" },
    { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2024" },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  ];
  return (
    <section id="certs" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="05" title="Certifications" />
            <h2 className="mt-6 font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Verified by the
              <br />
              <span className="text-muted-foreground">vendors I build on.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-hairline border-y border-hairline">
              {certs.map((c, i) => (
                <motion.li
                  key={c.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <a
                    href="#"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 transition hover:bg-surface/40 sm:gap-6"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-display text-base font-medium tracking-tight sm:text-lg">
                        {c.name}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {c.issuer} · <span className="font-mono">{c.year}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition group-hover:text-primary">
                      Verify
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                       GITHUB                                 */
/* ============================================================ */
function GitHubSection() {
  const [data, setData] = useState<{
    repos: number;
    stars: number;
    followers: number;
    following: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const user = "darshanatkari";
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${user}`).then((x) => x.json()),
          fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`).then((x) => x.json()),
        ]);
        if (cancelled || !u || u.message) return;
        const stars = Array.isArray(r)
          ? r.reduce((a: number, repo: { stargazers_count?: number }) => a + (repo.stargazers_count ?? 0), 0)
          : 0;
        setData({
          repos: u.public_repos ?? 0,
          stars,
          followers: u.followers ?? 0,
          following: u.following ?? 0,
        });
      } catch {
        /* network blocked / offline — section gracefully renders without stats */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = data
    ? [
        { icon: GitBranch, value: String(data.repos), label: "Public repositories" },
        { icon: Star, value: String(data.stars), label: "Stars across repos" },
        { icon: Users, value: String(data.followers), label: "Followers" },
        { icon: Activity, value: String(data.following), label: "Following" },
      ]
    : [];

  return (
    <section className="section-pad relative overflow-hidden border-t border-hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <SectionLabel index="06" title="GitHub" />
            <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Built in the open.
            </h2>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Every blueprint, pipeline and module on this site is available on GitHub — readable,
              forkable, production-shaped.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="https://github.com/darshanatkari"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground/95 px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground"
              >
                <Github className="h-4 w-4" />
                @darshanatkari
              </a>
            </div>
            {data && (
              <div className="mt-7 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl hairline bg-surface/60 p-3">
                    <div className="flex items-center gap-2 text-primary">
                      <s.icon className="h-3.5 w-3.5" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">live</span>
                    </div>
                    <div className="mt-1 font-display text-2xl font-semibold tracking-tight">{s.value}</div>
                    <div className="text-[11px] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-7 space-y-6">
            <RepoCards />
            <ContributionHeatmap />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <LatestDeployments />
              <LatestCommits />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GITHUB PLACEHOLDER WIDGETS ---------- */
function RepoCards() {
  const repos = [
    { name: "aws-cloud-portfolio", desc: "Production-style AWS workloads with diagrams, IaC and runbooks.", lang: "Terraform", color: "oklch(0.7 0.18 240)", stars: 24 },
    { name: "k8s-platform-blueprint", desc: "GitOps reference platform: ArgoCD, Rollouts, Prometheus.", lang: "Helm", color: "oklch(0.82 0.14 210)", stars: 18 },
    { name: "terraform-modules", desc: "Composable Terraform modules with policy-as-code in CI.", lang: "HCL", color: "oklch(0.65 0.18 270)", stars: 31 },
    { name: "devsecops-actions", desc: "Hardened GitHub Actions: SAST, SCA, scanning, signing.", lang: "YAML", color: "oklch(0.7 0.15 180)", stars: 12 },
  ];
  return (
    <div>
      <SectionMini label="Pinned repositories" />
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={`https://github.com/darshanatkari/${r.name}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl hairline bg-surface/60 p-4 transition hover:bg-surface-elevated"
          >
            <div className="flex items-center gap-2">
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono text-sm font-medium text-foreground">{r.name}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                <Star className="h-3 w-3" /> {r.stars}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{r.desc}</p>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
              <span className="font-mono">{r.lang}</span>
              <span className="ml-auto font-mono text-primary/70">placeholder</span>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function ContributionHeatmap() {
  // 7 rows × 24 cols; deterministic pseudo-random
  const cells: number[] = [];
  let seed = 7;
  for (let i = 0; i < 7 * 24; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    cells.push(seed / 233280);
  }
  const level = (v: number) =>
    v < 0.35 ? 0 : v < 0.6 ? 1 : v < 0.8 ? 2 : v < 0.93 ? 3 : 4;
  const op = ["0.06", "0.22", "0.45", "0.7", "0.95"];
  return (
    <div>
      <SectionMini label="Contribution activity · last 24 weeks" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mt-3 rounded-2xl hairline bg-surface/60 p-4"
      >
        <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
          {cells.map((v, i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 rounded-[3px] bg-primary"
              style={{ opacity: op[level(v)] }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-mono">less</span>
          <div className="flex items-center gap-1">
            {op.map((o, idx) => (
              <span key={idx} className="h-2.5 w-2.5 rounded-[3px] bg-primary" style={{ opacity: o }} />
            ))}
          </div>
          <span className="font-mono">more</span>
        </div>
      </motion.div>
    </div>
  );
}

function LatestDeployments() {
  const items = [
    { env: "production", svc: "platform-api", v: "1.4.2", status: "Synced" },
    { env: "staging", svc: "ml-serving", v: "0.9.1", status: "Healthy" },
    { env: "production", svc: "ingress-gw", v: "2.1.0", status: "Synced" },
    { env: "preview", svc: "docs-site", v: "1.0.7", status: "Running" },
  ];
  return (
    <div>
      <SectionMini label="Latest deployments" />
      <ul className="mt-3 divide-y divide-hairline overflow-hidden rounded-2xl hairline bg-surface/60">
        {items.map((d, i) => (
          <motion.li
            key={d.svc + i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 px-4 py-3 text-[13px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_oklch(0.7_0.18_240/_90%)]" />
            <span className="font-mono text-foreground/85">{d.svc}</span>
            <span className="font-mono text-[11px] text-muted-foreground">{d.v}</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">{d.env}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function LatestCommits() {
  const items = [
    { msg: "feat(argocd): wire blue/green hook for ml-serving", time: "2h" },
    { msg: "chore(terraform): bump vpc module to 5.4.0", time: "1d" },
    { msg: "fix(otel): drop high-cardinality span attrs", time: "3d" },
    { msg: "ci: sign container images via cosign keyless", time: "5d" },
  ];
  return (
    <div>
      <SectionMini label="Latest commits" />
      <ul className="mt-3 divide-y divide-hairline overflow-hidden rounded-2xl hairline bg-surface/60">
        {items.map((c, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 px-4 py-3 text-[13px]"
          >
            <GitBranch className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="truncate font-mono text-foreground/85">{c.msg}</span>
            <span className="ml-auto font-mono text-[11px] text-muted-foreground">{c.time}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function SectionMini({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {label}
    </div>
  );
}

/* ============================================================ */
/*                        CONTACT                               */
/* ============================================================ */
function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 amber-glow opacity-70" />
        <ContactParticles />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel index="07" title="Contact" />
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          Let&apos;s build something
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
            production-grade.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground">
          Open to cloud, DevOps, SRE and MLOps conversations. The fastest way to reach me is email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:darshan.atkari@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.78_0.14_65/_50%)] transition hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            darshan.atkari@example.com
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <a href="https://linkedin.com" className="inline-flex items-center gap-1.5 rounded-full hairline bg-surface px-4 py-2 transition hover:bg-surface-elevated">
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a href="https://github.com/darshanatkari" className="inline-flex items-center gap-1.5 rounded-full hairline bg-surface px-4 py-2 transition hover:bg-surface-elevated">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                        FOOTER                                */
/* ============================================================ */
function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary font-display text-xs font-bold">
            DA
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Darshan Atkari · © {new Date().getFullYear()}
          </span>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Designed & engineered with intent.
        </div>
      </div>
    </footer>
  );
}

/* ============================================================ */
/*                        ROOT                                  */
/* ============================================================ */
export default function Portfolio() {
  const [booting, setBooting] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("da:boot");
  });
  useEffect(() => {
    if (!booting) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("da:boot", "1");
      setBooting(false);
    }, 2600);
    return () => clearTimeout(t);
  }, [booting]);

  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
      {booting && <BootSequence />}
      <AmbientTopology />
      <Nav />
      <Hero />
      <Philosophy />
      <Domains />
      <Projects />
      <Stack />
      <Certifications />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}