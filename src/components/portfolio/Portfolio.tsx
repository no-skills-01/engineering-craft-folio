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
function Nav() {
  const links = [
    { label: "Domains", href: "#domains" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Certifications", href: "#certs" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full glass hairline px-4 py-2 sm:px-5">
        <a href="#top" className="flex items-center gap-2.5 pl-1.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary font-display text-sm font-bold">
            DA
          </span>
          <span className="font-display text-sm font-semibold tracking-tight hidden sm:inline">
            Darshan Atkari
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
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
                Available for cloud & platform roles
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
              <span className="text-primary">Cloud</span> · DevOps · <span className="text-primary">Platform</span> Engineer
            </motion.p>

            <motion.p variants={fade} className="max-w-xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-[1.6rem]">
              Automating the present. <span className="text-primary not-italic font-normal">·</span> Scaling the future.
            </motion.p>

            <motion.p variants={fade} className="max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and ship the unseen layer beneath modern software — production-inspired
              cloud platforms, IaC, DevSecOps pipelines, Kubernetes and MLOps systems built with
              the discipline of platform engineering: golden paths, secure defaults, and developer
              experience as a first-class product surface.
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
    { icon: Boxes, k: "Platform", t: "Golden paths and paved roads — developer experience as a product surface." },
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
              className="group relative bg-background p-7 transition hover:bg-surface/60"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-4 w-4" />
                </div>
                <span className="font-display text-lg font-semibold tracking-tight">{p.k}</span>
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
/*                   TECH MARQUEE (unused)                      */
/* ============================================================ */
function Marquee() {
  const items = [
    "AWS", "Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana",
    "Docker", "Helm", "Vault", "GitHub Actions", "OpenTelemetry", "MLflow",
    "Ansible", "Loki", "KServe", "Trivy",
  ];
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-surface/30 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="mr-12 text-primary/60">/</span>{t}
          </span>
        ))}
      </motion.div>
    </section>
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
            software — the platforms, pipelines and infrastructure that turn ideas into production.
          </motion.p>
          <motion.p variants={fade} className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            My work lives at the intersection of <em className="not-italic text-foreground/90">Cloud Architecture, Infrastructure as Code, Kubernetes, DevSecOps, MLOps and Observability</em>.
            I build reference-grade systems — small enough to read end-to-end, serious enough to run real workloads.
          </motion.p>
          <motion.p variants={fade} className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Lately I have been obsessed with the discipline of platform engineering: golden paths, paved roads,
            secure defaults, and developer experience as a first-class product surface.
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
    { icon: Cloud, name: "Cloud Architecture", desc: "Well-architected, multi-account AWS landing zones with cost and security baselines.", tag: "Design" },
    { icon: Boxes, name: "Infrastructure as Code", desc: "Reusable Terraform modules, GitOps workflows, drift-free environments.", tag: "Automate" },
    { icon: Container, name: "Cloud Native", desc: "Kubernetes, Helm, service mesh, progressive delivery with Argo.", tag: "Run" },
    { icon: ShieldCheck, name: "DevSecOps", desc: "Shift-left security, SAST, SCA, secrets scanning and policy as code.", tag: "Secure" },
    { icon: Brain, name: "MLOps", desc: "Model registries, reproducible pipelines, KServe-based serving.", tag: "Ship" },
    { icon: Activity, name: "Observability", desc: "Metrics, logs and traces unified with OpenTelemetry and Grafana.", tag: "See" },
  ];

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
              Every domain feeds the next — from how infrastructure is described, to how it is secured,
              observed and evolved.
            </p>
          </div>

          {/* Constellation layout */}
          <div className="md:col-span-8">
            <div className="relative">
              {/* connector svg */}
              <svg
                aria-hidden
                viewBox="0 0 800 600"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
              >
                <defs>
                  <linearGradient id="ln" x1="0" x2="1">
                    <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                    <stop offset="0.5" stopColor="currentColor" stopOpacity="0.6" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className="text-primary" stroke="url(#ln)" strokeWidth="1" fill="none">
                  <path d="M120,90 C300,150 500,150 680,90" />
                  <path d="M120,300 C300,260 500,260 680,300" />
                  <path d="M120,510 C300,460 500,460 680,510" />
                  <path d="M120,90 C200,300 200,300 120,510" />
                  <path d="M680,90 C600,300 600,300 680,510" />
                </g>
              </svg>

              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
                {domains.map((d, i) => (
                  <motion.div
                    key={d.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`group relative overflow-hidden rounded-2xl hairline bg-surface/70 p-5 transition hover:bg-surface-elevated ${
                      i % 3 === 0 ? "sm:translate-y-3" : i % 3 === 2 ? "sm:-translate-y-3" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <d.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {d.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{d.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d.desc}</p>
                    <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </div>
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
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group grid grid-cols-[120px_1fr] items-baseline gap-6 py-5 sm:grid-cols-[180px_1fr]"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display text-base font-medium">{g.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="text-base text-foreground/80 transition group-hover:text-foreground"
                      >
                        {it}
                      </span>
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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
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
          </div>

          <div className="md:col-span-7">
            {data ? (
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="relative overflow-hidden rounded-2xl hairline bg-surface/70 p-5"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                    <div className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                    <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/70">
                      live
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 animate-pulse rounded-2xl hairline bg-surface/50"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                        CONTACT                               */
/* ============================================================ */
function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 amber-glow" />
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
          Open to platform, cloud, DevOps and SRE conversations. The fastest way to reach me is email.
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
  return (
    <main className="relative min-h-screen bg-background text-foreground antialiased">
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