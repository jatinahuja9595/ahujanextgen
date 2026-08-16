import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, CheckCircle2, Code2, Globe, Calculator,
  BrainCircuit, BarChart3, Award, Sparkles, Phone, Mail, MapPin,
  Clock, Star, Users, Laptop, GraduationCap, Target, Briefcase,
  MessageSquareText, ChevronDown, ChevronRight, Shield,
  Database, Cloud, GitBranch, Lock, LineChart, Bot, MessageCircle, Megaphone, Rocket, BookOpen, Instagram, Presentation
} from "lucide-react";

/* ---------------------------------------------------------------
   AHUJA NEXTGEN — Skill & Education Academy
   Single-file React app. Client-side "page" state stands in for
   routing so everything lives in one artifact; see the README
   notes at the bottom of the chat reply for how to split this
   into real Next.js routes/pages.
----------------------------------------------------------------*/

const LOGO = "data:image/webp;base64,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";

const GRAIN = "data:image/png;base64,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";

const NAVY = "#0A2D6F";
const DEEP = "#050D1F"; // near-black navy — real depth for dark sections, instead of a flat gradient doing all the work

// Get your free Access Key at web3forms.com (enter your email, key is emailed instantly,
// no account needed) and paste it here. Both forms use this one constant.
// Unlike Apps Script, this endpoint URL never changes — nothing to redeploy, nothing that
// can silently break.
const WEB3FORMS_ACCESS_KEY = "fa7fc813-f313-4b14-869e-520ffee54019";

async function submitLead(payload) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New enquiry: " + (payload.name || "Website visitor"),
      from_name: "Ahuja NextGen Website",
      ...payload,
    }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data || data.success !== true) {
    throw new Error((data && data.message) || `Server responded with status ${res.status}`);
  }
  return data;
}
const ROYAL = "#1565C0";
const SKY = "#42A5F5";
const GOLD = "#E9A23B"; // added CTA accent — blue-on-blue CTAs disappear, so a warm accent is reserved only for action moments
const INK = "#0B1220";
const PAPER = "#F6F4EF";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "career", label: "Career Services" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
      style={{ background: "rgba(21,101,192,0.08)", color: ROYAL, letterSpacing: "0.08em" }}
    >
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", onClick, icon = true, className = "", type = "button", disabled = false }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-[15px] transition-all duration-200 whitespace-nowrap";
  const styles = {
    primary: { background: GOLD, color: "#20140a", boxShadow: "0 8px 24px -8px rgba(233,162,59,0.55)" },
    ghost: { background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" },
    dark: { background: NAVY, color: "#fff", boxShadow: "0 8px 24px -10px rgba(10,45,111,0.5)" },
    outline: { background: "transparent", color: ROYAL, border: `1.5px solid ${ROYAL}` },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className} hover:-translate-y-0.5 active:translate-y-0 ${disabled ? "opacity-60 pointer-events-none" : ""}`}
      style={styles[variant]}
    >
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
}

function SectionHeading({ eyebrow, title, sub, center = true }) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <h2
        className="mt-4 font-bold leading-[1.15]"
        style={{ fontFamily: "Fraunces, serif", color: INK, fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)" }}
      >
        {title}
      </h2>
      {sub && <p className="mt-4 text-[15.5px] leading-relaxed" style={{ color: "#5B6474" }}>{sub}</p>}
    </Reveal>
  );
}

/* ---------------- NAVBAR ---------------- */
/* ---------------- BOOK A FREE DEMO — MODAL ---------------- */
function DemoModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl" style={{ boxShadow: "0 30px 80px -20px rgba(10,45,111,0.5)" }}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: PAPER, color: "#5B6474" }} aria-label="Close">
          <X size={16} />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 size={40} color={GOLD} className="mx-auto" />
            <div className="mt-4 font-semibold text-[18px]" style={{ color: INK, fontFamily: "Fraunces, serif" }}>Thanks — we've got it.</div>
            <p className="mt-2 text-[13.5px]" style={{ color: "#727C8C" }}>A career counsellor will call you within 24 hours to schedule your free demo class.</p>
            <Button variant="dark" icon={false} onClick={onClose} className="mt-6 w-full">Close</Button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2.5 mb-1">
              <GraduationCap size={20} color={GOLD} />
              <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: ROYAL }}>Book a Free Demo</span>
            </div>
            <h3 className="font-bold" style={{ fontFamily: "Fraunces, serif", fontSize: "22px", color: INK }}>Which program interests you?</h3>
            <p className="mt-1.5 text-[13px]" style={{ color: "#727C8C" }}>Tell us a bit about you — a counsellor will call to confirm your slot.</p>

            <form
              className="mt-5 space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setError(""); setLoading(true);
                const data = new FormData(e.target);
                const payload = Object.fromEntries(data.entries());
                payload.page = "demo-modal";
                payload.submittedAt = new Date().toISOString();
                try {
                  await submitLead(payload);
                  setSent(true);
                } catch (err) {
                  setError(`Couldn't reach the server (${err.message}). Please call us instead.`);
                } finally {
                  setLoading(false);
                }
              }}
            >
              <input name="name" required placeholder="Full Name" className="h-12 w-full rounded-lg px-4 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: INK, borderColor: "rgba(10,45,111,0.14)" }} />
              <input name="phone" required placeholder="Phone Number" className="h-12 w-full rounded-lg px-4 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: INK, borderColor: "rgba(10,45,111,0.14)" }} />
              <select name="course" required defaultValue="" className="h-12 w-full rounded-lg px-4 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: "#5B6474", borderColor: "rgba(10,45,111,0.14)" }}>
                <option value="" disabled>Which program interests you?</option>
                {PROGRAM_CATS.map((p) => (
                  p.courses.length > 0
                    ? <optgroup key={p.t} label={p.t}>{p.courses.map((c) => <option key={c} value={c}>{c}</option>)}</optgroup>
                    : <option key={p.t} value={p.t}>{p.t}</option>
                ))}
              </select>
              <select name="preferredTime" defaultValue="" className="h-12 w-full rounded-lg px-4 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: "#5B6474", borderColor: "rgba(10,45,111,0.14)" }}>
                <option value="">Preferred Batch (optional)</option>
                <option value="Weekday">Weekday</option>
                <option value="Weekend">Weekend</option>
                <option value="Either">Either works</option>
              </select>
              {error && <p className="text-[12.5px]" style={{ color: "#c0392b" }}>{error}</p>}
              <Button type="submit" variant="primary" icon={false} disabled={loading} className="w-full !py-3.5">
                {loading ? "Sending…" : "Get Free Counselling"}
              </Button>
              <p className="text-[11px] text-center" style={{ color: "#9AA3B0" }}>No spam. Just a callback within 24 hours.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Navbar({ page, setPage, onOpenDemo }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => { setPage(id); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 relative"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "linear-gradient(180deg, rgba(5,13,31,0.7), rgba(5,13,31,0.4))",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 8px 24px -12px rgba(10,45,111,0.25)" : "none",
        borderBottom: "none",
      }}
    >
      {/* Signature gradient hairline — the one consistent premium detail, always present */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${GOLD}, ${SKY}, ${ROYAL})`, opacity: scrolled ? 1 : 0.7 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center p-1.5 shrink-0"
            style={{
              background: scrolled ? "#fff" : "rgba(255,255,255,0.12)",
              boxShadow: scrolled ? "0 4px 14px -4px rgba(10,45,111,0.3)" : "0 2px 10px -2px rgba(0,0,0,0.2)",
              border: scrolled ? "1px solid rgba(10,45,111,0.08)" : "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <img src={LOGO} alt="Ahuja NextGen logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-left leading-tight">
            <div className="font-bold text-[16px] tracking-tight" style={{ fontFamily: "Fraunces, serif" }}>
              <span style={{ color: scrolled ? NAVY : "#fff" }}>AHUJA</span>{" "}
              <span style={{ color: scrolled ? ROYAL : SKY }}>NEXTGEN</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: scrolled ? "#8892a0" : "rgba(255,255,255,0.65)" }}>
              Skill & Education Academy
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative px-4 py-2 text-[14px] font-medium transition-colors group"
              style={{ color: page === l.id ? (scrolled ? ROYAL : "#fff") : (scrolled ? "#48505c" : "rgba(255,255,255,0.85)") }}
            >
              {l.label}
              <span
                className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-transform duration-200 origin-left"
                style={{
                  background: scrolled ? ROYAL : GOLD,
                  transform: page === l.id ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" icon={false} onClick={onOpenDemo} className="!px-5 !py-2.5 !text-[13.5px]">
            Book Free Demo Class
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} style={{ color: scrolled ? INK : "#fff" }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-1" style={{ borderColor: "rgba(10,45,111,0.08)" }}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="text-left py-2.5 font-medium" style={{ color: page === l.id ? ROYAL : "#3a4150" }}>
              {l.label}
            </button>
          ))}
          <Button variant="dark" icon={false} onClick={() => { setOpen(false); onOpenDemo(); }} className="mt-2 w-full">Book Free Demo Class</Button>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ setPage }) {
  const [heroSent, setHeroSent] = useState(false);
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroError, setHeroError] = useState("");
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(160deg, ${DEEP} 0%, #0d1c3a 55%, ${NAVY} 100%)` }}>
      {/* ambient network mesh — stands in for a literal classroom photo; suits a "future skills" positioning better than stock imagery */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.16]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 26 }).map((_, i) => {
          const x1 = (i * 137) % 1200, y1 = (i * 251) % 800;
          const x2 = ((i + 6) * 173) % 1200, y2 = ((i + 3) * 197) % 800;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="1" />;
        })}
        {Array.from({ length: 26 }).map((_, i) => {
          const cx = (i * 137) % 1200, cy = (i * 251) % 800;
          return <circle key={"c" + i} cx={cx} cy={cy} r="3" fill="#42A5F5" />;
        })}
      </svg>
      {/* subtle dot-grid texture for depth, layered under the glows */}
      <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* layered ambient glows — gold now dominant, blue reduced to a single minimal accent */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.22]" style={{ background: GOLD }} />
      <div className="absolute top-1/3 -left-32 w-[320px] h-[320px] rounded-full blur-3xl opacity-[0.16]" style={{ background: "#c97f1f" }} />
      <div className="absolute -bottom-32 right-1/4 w-[380px] h-[380px] rounded-full blur-3xl opacity-[0.1]" style={{ background: SKY }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-28 lg:pt-24 lg:pb-36 grid lg:grid-cols-[1.1fr,0.9fr] gap-14 items-center">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <Sparkles size={14} color={SKY} /> Admissions Open — Classes Starting Soon
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5">
                <Shield size={13} color={GOLD} fill={GOLD} /> ISO 9001:2015 Certified
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="mt-6 font-bold text-white leading-[1.06]"
              style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
            >
              Learn{" "}
              <span className="relative inline-block">
                Today.
                <span className="absolute left-0 -bottom-1.5 w-full h-1 rounded-full" style={{ background: GOLD }} />
              </span>
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  background: `linear-gradient(90deg, #fff, ${SKY})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Lead Tomorrow.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[17px] leading-relaxed text-white/80 max-w-lg">
              Empowering learners through practical, industry-oriented education and future-ready skills — from your first line of code to your first job offer.
            </p>
          </Reveal>
          <Reveal delay={200}>
            {/* Tagline strip from the logo: Learn is the confirmed primary tagline; Grow / Succeed are placeholders until final copy is provided */}
            <div className="mt-5 flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[13px] font-bold tracking-[0.12em] text-white">
                <GraduationCap size={16} color={GOLD} /> LEARN
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[13px] font-semibold tracking-[0.12em] text-white/40">GROW</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-[13px] font-semibold tracking-[0.12em] text-white/40">SUCCEED</span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => setPage("programs")}>Explore Programs</Button>
              <Button variant="ghost" onClick={() => setPage("admissions")}>Apply Now</Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {[["12+", "Career-Ready Programs"], ["2", "Free Demo Classes"], ["15%", "Early Bird Discount"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Fraunces, serif" }}>{n}</div>
                  <div className="text-[12.5px] text-white/65">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto max-w-sm">
            {/* glow ring behind the card — the "it pops off the screen" detail */}
            <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40" style={{ background: `linear-gradient(135deg, ${GOLD}, ${SKY})` }} />
            <div className="relative rounded-3xl p-6 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <div className="rounded-2xl bg-white p-6 shadow-2xl">
                {heroSent ? (
                  <div className="py-6 text-center">
                    <CheckCircle2 size={32} color={GOLD} className="mx-auto" />
                    <div className="mt-3 font-semibold text-[14px]" style={{ color: INK }}>Thanks — we've got it.</div>
                    <p className="mt-1 text-[12.5px]" style={{ color: "#727C8C" }}>A career counsellor will call you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: ROYAL }}>Book a Free Demo</span>
                      <GraduationCap size={20} color={GOLD} />
                    </div>
                    <form
                      className="space-y-3"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setHeroError(""); setHeroLoading(true);
                        const data = new FormData(e.target);
                        const payload = Object.fromEntries(data.entries());
                        payload.page = "home-hero";
                        payload.submittedAt = new Date().toISOString();
                        try {
                          await submitLead(payload);
                          setHeroSent(true);
                        } catch (err) {
                          setHeroError(`Couldn't reach the server (${err.message}).`);
                        } finally {
                          setHeroLoading(false);
                        }
                      }}
                    >
                      <input name="name" required placeholder="Full Name" className="h-11 w-full rounded-lg px-3.5 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: INK, borderColor: "rgba(10,45,111,0.14)" }} />
                      <input name="phone" required placeholder="Phone Number" className="h-11 w-full rounded-lg px-3.5 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: INK, borderColor: "rgba(10,45,111,0.14)" }} />
                      <select name="course" defaultValue="" className="h-11 w-full rounded-lg px-3.5 text-[13.5px] outline-none border transition-all focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15" style={{ background: PAPER, color: "#5B6474", borderColor: "rgba(10,45,111,0.14)" }}>
                        <option value="">Course of Interest</option>
                        {PROGRAM_CATS.map((p) => (
                          p.courses.length > 0
                            ? <optgroup key={p.t} label={p.t}>{p.courses.map((c) => <option key={c} value={c}>{c}</option>)}</optgroup>
                            : <option key={p.t} value={p.t}>{p.t}</option>
                        ))}
                      </select>
                      {heroError && <p className="text-[11.5px]" style={{ color: "#c0392b" }}>{heroError}</p>}
                      <button type="submit" disabled={heroLoading} className="mt-1 w-full h-11 rounded-lg font-semibold text-[14px] text-white disabled:opacity-60" style={{ background: `linear-gradient(90deg, ${DEEP}, ${NAVY})` }}>
                        {heroLoading ? "Sending…" : "Get Free Counselling"}
                      </button>
                    </form>
                    <p className="mt-3 text-[11px] text-center" style={{ color: "#9AA3B0" }}>No spam. Just a callback within 24 hours.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* angled divider — bridges into the next (light) section instead of a hard flat cut */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "48px" }}>
        <path d="M0,60 L1440,20 L1440,60 Z" fill={PAPER} />
      </svg>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
const WHY_SHOWCASE = [
  { icon: Target, t: "Practical, Project-Based Learning", d: "Every module ends in something you built and can show off, not a stack of notes copied off a whiteboard. That's the difference between a certificate and a skill." },
  { icon: Award, t: "Placement & Interview Guidance", d: "Resume building, mock interviews, and career counselling don't stop the day you get certified — the placement cell stays with you until you're actually hired." },
  { icon: Sparkles, t: "Emerging Technology Tracks", d: "AI, cloud, cybersecurity, data analytics — the curriculum gets updated as the market moves, instead of teaching the same syllabus for five years straight." },
];
const WHY_MORE = [
  { icon: Briefcase, t: "Industry-Oriented Curriculum" },
  { icon: Users, t: "Experienced Trainers, Small Batches" },
  { icon: Laptop, t: "Modern Computer Lab" },
  { icon: Presentation, t: "Industry Expert Sessions (Online & Offline)" },
  { icon: Clock, t: "Weekday & Weekend Batches" },
  { icon: MessageSquareText, t: "1:1 Career Counselling" },
  { icon: CheckCircle2, t: "Certification on Completion" },
];

function WhyChoose() {
  return (
    <section className="py-24 px-6 lg:px-10 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Why AHUJA NEXTGEN" title="Built for how careers actually get started" sub="Every element of the academy — batch size, trainers, lab time, and mentorship — is designed around one outcome: you, hireable." />

        <div className="space-y-16 lg:space-y-24">
          {WHY_SHOWCASE.map((w, i) => {
            const reversed = i % 2 === 1;
            const textBlock = (
              <div key="text">
                <div className="text-[13px] font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>0{i + 1}</div>
                <h3 className="font-bold leading-tight" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", color: INK }}>{w.t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed max-w-md" style={{ color: "#5B6474" }}>{w.d}</p>
              </div>
            );
            const graphicBlock = (
              <div key="graphic" className="relative aspect-[4/3] rounded-3xl overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})` }}>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-25" style={{ background: SKY }} />
                <div className="absolute -bottom-14 -right-14 w-56 h-56 rounded-full blur-3xl opacity-20" style={{ background: GOLD }} />
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <w.icon size={72} color="rgba(255,255,255,0.9)" strokeWidth={1.2} className="relative" />
              </div>
            );
            return (
              <Reveal key={w.t} delay={i * 100}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {reversed ? [graphicBlock, textBlock] : [textBlock, graphicBlock]}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-20 pt-14 border-t" style={{ borderColor: "rgba(10,45,111,0.08)" }}>
            <div className="text-[12px] font-semibold uppercase tracking-wide mb-6" style={{ color: ROYAL }}>Plus everything else you'd expect</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {WHY_MORE.map((w) => (
                <div key={w.t} className="flex items-center gap-3">
                  <w.icon size={17} color={ROYAL} className="shrink-0" />
                  <span className="text-[14px]" style={{ color: "#3a4150" }}>{w.t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CAREER JOURNEY (signature element) ---------------- */
const JOURNEY = [
  { t: "Learn", d: "Concepts taught with real tools, not just slides." },
  { t: "Practice", d: "Guided lab hours to build muscle memory." },
  { t: "Build Projects", d: "Portfolio-ready work you can show employers." },
  { t: "Get Certified", d: "Assessed, verified, and certificate-ready." },
  { t: "Interview Prep", d: "Mock interviews and resume polishing." },
  { t: "Career Success", d: "Placement support until you're hired." },
];

function CareerJourney() {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-[0.04]" style={{ background: ROYAL }} />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow="The Path" title="Your career journey, mapped step by step" sub="This is the actual sequence every learner moves through — nothing skipped, nothing rushed." />
        <div className="relative">
          <div className="hidden lg:block absolute top-[38px] left-[6%] right-[6%] h-[2px]" style={{ background: `linear-gradient(90deg, ${NAVY}, ${SKY})` }} />
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {JOURNEY.map((j, i) => {
              const isLast = i === JOURNEY.length - 1;
              return (
                <Reveal key={j.t} delay={i * 90}>
                  <div className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center">
                    <div
                      className="relative z-10 w-[76px] h-[76px] shrink-0 rounded-2xl flex items-center justify-center font-bold text-white text-lg lg:mb-5"
                      style={{ background: isLast ? `linear-gradient(135deg, ${GOLD}, #c97f1f)` : `linear-gradient(135deg, ${DEEP}, ${NAVY})`, fontFamily: "Fraunces, serif", boxShadow: isLast ? "0 8px 20px -6px rgba(233,162,59,0.5)" : "0 4px 14px -4px rgba(10,45,111,0.35)" }}
                    >
                      {isLast ? <Award size={26} /> : `0${i + 1}`}
                    </div>
                    <div>
                      <div className="font-semibold text-[15px]" style={{ color: INK, fontFamily: "Fraunces, serif" }}>{j.t}</div>
                      <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "#727C8C" }}>{j.d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ADMISSIONS STRIP ---------------- */
function AdmissionsStrip({ setPage }) {
  const items = ["Free 2 Demo Classes", "Free Career Counselling", "15% Early Bird Discount", "Weekday & Weekend Batches", "Limited Seats"];
  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: `linear-gradient(120deg, ${DEEP}, ${NAVY})` }}>
      {/* angled top edge — bridges from the white section above instead of a hard flat cut */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ height: "32px" }}>
        <path d="M0,0 L1440,0 L1440,10 L0,32 Z" fill="#fff" />
      </svg>
      <div className="absolute -top-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-[0.15]" style={{ background: GOLD }} />
      <div className="absolute -bottom-16 right-1/5 w-72 h-72 rounded-full blur-3xl opacity-[0.12]" style={{ background: SKY }} />
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <Reveal>
          <h3 className="text-white font-bold text-[26px]" style={{ fontFamily: "Fraunces, serif" }}>Admissions Open — Classes Starting Soon</h3>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {items.map((it) => (
              <span key={it} className="flex items-center gap-1.5 text-[13.5px] text-white/85">
                <CheckCircle2 size={15} color={GOLD} /> {it}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Button variant="primary" onClick={() => setPage("admissions")}>Reserve Your Seat</Button>
        </Reveal>
      </div>
      {/* angled bottom edge — bridges into the white section below */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ height: "32px" }}>
        <path d="M0,8 L1440,0 L1440,40 L0,40 Z" fill="#fff" />
      </svg>
    </section>
  );
}

/* ---------------- WHO CAN JOIN ---------------- */
function WhoCanJoin() {
  const who = [
    { icon: GraduationCap, t: "School Students" },
    { icon: Users, t: "College Students" },
    { icon: Briefcase, t: "Job Seekers" },
    { icon: LineChart, t: "Working Professionals" },
    { icon: Sparkles, t: "Upskillers" },
    { icon: Target, t: "Career Switchers" },
    { icon: Rocket, t: "Entrepreneurs & Business Owners" },
    { icon: BookOpen, t: "Competitive Exam Aspirants" },
  ];
  return (
    <section className="py-24 px-6 lg:px-10 relative overflow-hidden" style={{ background: PAPER }}>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full blur-3xl opacity-[0.06]" style={{ background: GOLD }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <SectionHeading eyebrow="Who It's For" title="Wherever you're starting from, there's a track for you" />
        <div className="flex flex-wrap justify-center gap-3">
          {who.map((w, i) => (
            <Reveal key={w.t} delay={i * 50} className="inline-block">
              <div
                className="group flex items-center gap-2.5 rounded-full pl-4 pr-5 py-3 bg-white hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: "0 2px 10px -4px rgba(10,45,111,0.1)", border: "1px solid rgba(10,45,111,0.06)" }}
              >
                <w.icon size={17} color={ROYAL} className="shrink-0" />
                <span className="text-[14px] font-medium" style={{ color: INK }}>{w.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROGRAM CATEGORIES (shared data) ---------------- */
const PROGRAM_CATS = [
  {
    icon: Laptop, t: "Basic Computer", d: "MS Office, internet & digital literacy, typing fluency.",
    duration: "1–2 Months",
    outcomes: ["Confident daily computer use", "MS Word, Excel, PowerPoint", "Email & internet literacy"],
    careers: ["Office Assistant", "Data Entry Operator", "Admin Support"],
    courses: ["Basic Computer Course", "Awareness in Computer Concepts", "Course on Computer Concepts", "Advance Course on Computer Concepts", "Expert Computer Course", "Advance Computer Concepts and Programming"],
  },
  {
    icon: Code2, t: "Programming", d: "C, C++, Python, Java — the logic behind every application.",
    duration: "2–4 Months",
    outcomes: ["Strong programming fundamentals", "Problem-solving with code", "Portfolio of small projects"],
    careers: ["Junior Developer", "QA Engineer", "Trainee Programmer"],
    courses: ["Coding Foundation", "C Language Programming Course", "C++ Language Programming Course", "Programming with Python", "Data Structure and Algorithm", "Course in Software Development", "Java Programming (Basic to Advanced)"],
  },
  {
    icon: Globe, t: "Web Development", d: "HTML, CSS, JavaScript, PHP & MySQL — build and ship real websites.",
    duration: "3–5 Months",
    outcomes: ["Responsive site development", "Frontend + backend basics", "A live portfolio site"],
    careers: ["Web Developer", "Frontend Developer", "Freelance Web Builder"],
    courses: ["Web Development Starter", "Course in Web Technology", "PHP and MySQL Web Development", "Responsive Website Basics", "HTML5, CSS3 & JavaScript Essentials"],
  },
  {
    icon: Calculator, t: "Accounting", d: "Tally, GST, and practical bookkeeping for real businesses.",
    duration: "2–3 Months",
    outcomes: ["Tally Prime proficiency", "GST-ready invoicing", "Ledger & balance sheets"],
    careers: ["Accounts Assistant", "Billing Executive", "Bookkeeper"],
    courses: ["Professional Financial Accounting", "Tally Prime Course", "Certificate Course in Computer Basics and Accounting", "Course in Digital Accounting", "Office Automation, Accounting and Publishing Assistant", "Certificate Data Entry and Office Assistant"],
  },
  {
    icon: BrainCircuit, t: "Artificial Intelligence & Data", d: "AI concepts, prompt engineering, machine learning and data analysis.",
    duration: "3–4 Months",
    outcomes: ["Core AI/ML concepts", "Hands-on AI tools & prompt engineering", "Applied mini-projects"],
    careers: ["AI Associate", "Data Analyst", "Automation Analyst", "AI Tools Specialist"],
    courses: ["Computational Thinking and Artificial Intelligence", "Prompt Engineering", "Machine Learning with Python", "Data Analyst", "Artificial Intelligence Fundamentals", "AI Application Development", "AI Engineering & Deep Learning"],
  },
  { icon: Award, t: "Professional Diploma", d: "A structured, multi-skill diploma track for job-readiness.", duration: "6–12 Months", outcomes: ["Multi-domain competency", "Capstone project", "Placement-track eligible"], careers: ["Entry-level IT Roles", "Multi-skilled Executive"], courses: [] },
  { icon: Sparkles, t: "Emerging Technologies", d: "SQL, Cloud, Power BI, Git, DevOps, Cyber Security & more.", duration: "Varies", outcomes: ["Market-relevant tooling", "Cloud & DevOps basics", "Cyber hygiene practices"], careers: ["Cloud Support Associate", "DevOps Trainee", "Security Analyst"], courses: [] },
];

function ProgramsOverview({ setPage, goToEnquiry }) {
  return (
    <section className="py-24 px-6 lg:px-10" style={{ background: PAPER }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Programs" title="Career tracks across every in-demand skill" sub="New programs are introduced regularly based on market demand and emerging technologies." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROGRAM_CATS.map((p, i) => (
            <Reveal key={p.t} delay={i * 50}>
              <div
                className="group relative h-full rounded-2xl bg-white p-6 flex flex-col overflow-hidden hover:-translate-y-1.5 transition-all duration-300"
                style={{ boxShadow: "0 2px 16px -6px rgba(10,45,111,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 18px 36px -14px rgba(10,45,111,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 16px -6px rgba(10,45,111,0.08)"; }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" style={{ background: SKY }} />
                <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{ background: `linear-gradient(90deg, ${GOLD}, ${SKY})` }} />
                <div className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})`, boxShadow: "0 6px 16px -6px rgba(10,45,111,0.4)" }}>
                  <p.icon size={20} color="#fff" />
                </div>
                <div className="relative font-semibold text-[15.5px]" style={{ color: INK, fontFamily: "Fraunces, serif" }}>{p.t}</div>
                <p className="relative mt-2 text-[13px] leading-relaxed flex-1" style={{ color: "#727C8C" }}>{p.d}</p>
                <button onClick={() => goToEnquiry(p.t)} className="relative mt-4 flex items-center gap-1 text-[13px] font-semibold group/btn" style={{ color: ROYAL }}>
                  Enquire Now <ChevronRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT FORM (shared) ---------------- */
function ContactBlock({ dark = false, initialCourse = "" }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [course, setCourse] = useState(initialCourse);
  const address = "Ekta Vihar, Near City Heart School, Shahabad Markanda, Distt. Kurukshetra";
  // Exact GPS coordinates captured on-site (GPS Map Camera), more precise than an address search
  const LAT = 30.163771, LNG = 76.866365;
  const mapsLink = `https://maps.google.com/?q=${LAT},${LNG}`;

  const fieldStyle = {
    background: dark ? "rgba(255,255,255,0.08)" : "#fff",
    color: dark ? "#fff" : INK,
    border: dark ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(10,45,111,0.14)",
  };
  const focusClass = dark
    ? "focus:border-white/50 focus:ring-2 focus:ring-white/20"
    : "focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15";
  const labelClass = "block mb-1.5 text-[12px] font-semibold";

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Phone, t: "Call Us", lines: [["+91 90346 40741", "tel:+919034640741"], ["+91 94662 41741", "tel:+919466241741"]] },
            { icon: Mail, t: "Email Us", lines: [["admissions@ahujanextgen.in", "mailto:admissions@ahujanextgen.in"], ["ahujanextgen@gmail.com", "mailto:ahujanextgen@gmail.com"]] },
            { icon: MapPin, t: "Visit Us", lines: [[address, mapsLink]], external: true },
            { icon: Clock, t: "Working Hours", lines: [["Mon–Sat, 9:00 AM – 7:00 PM", null]] },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl p-5" style={{ background: dark ? "rgba(255,255,255,0.06)" : PAPER, border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(10,45,111,0.06)" }}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: dark ? "rgba(255,255,255,0.1)" : "rgba(21,101,192,0.1)" }}>
                  <c.icon size={16} color={dark ? SKY : ROYAL} />
                </div>
                <div className="font-semibold text-[13px]" style={{ color: dark ? "#fff" : INK }}>{c.t}</div>
              </div>
              <div className="space-y-1">
                {c.lines.map(([text, href], i) => (
                  href ? (
                    <a key={i} href={href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} className="block text-[13px] leading-relaxed hover:underline" style={{ color: dark ? "rgba(255,255,255,0.75)" : "#5B6474" }}>
                      {text}
                    </a>
                  ) : (
                    <div key={i} className="text-[13px] leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.75)" : "#5B6474" }}>{text}</div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl overflow-hidden h-48 relative" style={{ border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(10,45,111,0.08)" }}>
          <iframe
            title="Ahuja NextGen location map"
            src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-medium hover:underline"
          style={{ color: dark ? SKY : ROYAL }}
        >
          <MapPin size={13} /> Get directions on Google Maps
        </a>
      </div>

      <div className="rounded-2xl p-7" style={{ background: dark ? "rgba(255,255,255,0.06)" : "#fff", border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(10,45,111,0.08)", boxShadow: dark ? "none" : "0 4px 24px -8px rgba(10,45,111,0.1)" }}>
        {sent ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-10">
            <CheckCircle2 size={38} color={GOLD} />
            <div className="mt-4 font-semibold text-[16px]" style={{ color: dark ? "#fff" : INK }}>Thanks — we've got your enquiry.</div>
            <p className="mt-1 text-[13.5px]" style={{ color: dark ? "rgba(255,255,255,0.7)" : "#727C8C" }}>A career counsellor will call you within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setError(""); setLoading(true);
              const data = new FormData(e.target);
              const payload = Object.fromEntries(data.entries());
              payload.page = window.location.pathname;
              payload.submittedAt = new Date().toISOString();
              try {
                await submitLead(payload);
                setSent(true);
              } catch (err) {
                setError(`Couldn't reach the server (${err.message}). Please call us instead.`);
              } finally {
                setLoading(false);
              }
            }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={{ color: dark ? "rgba(255,255,255,0.7)" : "#5B6474" }}>Full Name</label>
                <input name="name" required placeholder="e.g. Priya Sharma" className={`h-12 w-full rounded-lg px-4 text-[13.5px] outline-none transition-all ${focusClass}`} style={fieldStyle} />
              </div>
              <div>
                <label className={labelClass} style={{ color: dark ? "rgba(255,255,255,0.7)" : "#5B6474" }}>Phone Number</label>
                <input name="phone" required placeholder="10-digit mobile number" className={`h-12 w-full rounded-lg px-4 text-[13.5px] outline-none transition-all ${focusClass}`} style={fieldStyle} />
              </div>
            </div>
            <div>
              <label className={labelClass} style={{ color: dark ? "rgba(255,255,255,0.7)" : "#5B6474" }}>Email Address</label>
              <input name="email" type="email" placeholder="you@example.com" className={`h-12 w-full rounded-lg px-4 text-[13.5px] outline-none transition-all ${focusClass}`} style={fieldStyle} />
            </div>
            <div>
              <label className={labelClass} style={{ color: dark ? "rgba(255,255,255,0.7)" : "#5B6474" }}>Course of Interest</label>
              <select name="course" value={course} onChange={(e) => setCourse(e.target.value)} className={`h-12 w-full rounded-lg px-4 text-[13.5px] outline-none transition-all ${focusClass}`} style={fieldStyle}>
                <option value="">Select a course</option>
                {PROGRAM_CATS.map((p) => (
                  p.courses.length > 0 ? (
                    <optgroup key={p.t} label={p.t}>
                      {p.courses.map((c) => <option key={c} value={c}>{c}</option>)}
                    </optgroup>
                  ) : (
                    <option key={p.t} value={p.t}>{p.t}</option>
                  )
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} style={{ color: dark ? "rgba(255,255,255,0.7)" : "#5B6474" }}>Message (optional)</label>
              <textarea name="message" placeholder="Anything specific you'd like to ask?" rows={3} className={`w-full rounded-lg px-4 py-3 text-[13.5px] outline-none resize-none transition-all ${focusClass}`} style={fieldStyle} />
            </div>
            {error && <p className="text-[12.5px]" style={{ color: "#c0392b" }}>{error}</p>}
            <Button type="submit" variant="primary" icon={false} disabled={loading} className="w-full !py-3.5">{loading ? "Sending…" : "Send Enquiry"}</Button>
            <p className="text-[11px] text-center" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#9AA3B0" }}>We typically respond within 24 hours.</p>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ setPage }) {
  return (
    <footer style={{ background: INK }} className="pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="Ahuja NextGen logo" className="w-10 h-10 rounded-lg object-contain" style={{ background: "#fff" }} />
            <span className="font-bold text-white" style={{ fontFamily: "Fraunces, serif" }}>AHUJA NEXTGEN</span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/65">Empowering minds. Shaping futures. A modern skill & technology academy for career-ready learners.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-white/70 border border-white/15 rounded-full px-3 py-1.5">
              <Shield size={12} color={GOLD} fill={GOLD} /> ISO 9001:2015 Certified
            </span>
            <a
              href="https://instagram.com/ahuja_nextgen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-white/70 border border-white/15 rounded-full px-3 py-1.5 hover:text-white hover:border-white/30 transition-colors"
            >
              <Instagram size={12} color={SKY} /> @ahuja_nextgen
            </a>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-[13px] uppercase tracking-wide mb-4">Quick Links</div>
          <div className="flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => <button key={l.id} onClick={() => setPage(l.id)} className="text-left text-[13.5px] text-white/55 hover:text-white transition-colors">{l.label}</button>)}
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-[13px] uppercase tracking-wide mb-4">Programs</div>
          <div className="flex flex-col gap-2.5">
            {PROGRAM_CATS.slice(0, 5).map((p) => <span key={p.t} className="text-[13.5px] text-white/55">{p.t}</span>)}
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-[13px] uppercase tracking-wide mb-4">Contact</div>
          <div className="flex flex-col gap-2.5 text-[13.5px] text-white/55">
            <a href="tel:+919034640741" className="hover:text-white transition-colors">+91 90346 40741</a>
            <a href="tel:+919466241741" className="hover:text-white transition-colors">+91 94662 41741</a>
            <a href="mailto:admissions@ahujanextgen.in" className="hover:text-white transition-colors">admissions@ahujanextgen.in</a>
            <a href="mailto:ahujanextgen@gmail.com" className="hover:text-white transition-colors">ahujanextgen@gmail.com</a>
            <a href="https://maps.google.com/?q=30.163771,76.866365" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ekta Vihar, Near City Heart School, Shahabad Markanda, Distt. Kurukshetra</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/60">
        <span>© {new Date().getFullYear()} Ahuja NextGen. All rights reserved.</span>
        <div className="flex gap-5">
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

function StatementBlock({ setPage }) {
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden" style={{ background: DEEP }}>
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `url(${GRAIN})`, backgroundSize: "128px 128px" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-[0.12]" style={{ background: ROYAL }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="text-6xl leading-none mb-4" style={{ color: GOLD, fontFamily: "Fraunces, serif" }}>"</div>
          <p
            className="font-medium text-white leading-snug"
            style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)" }}
          >
            We didn't set out to build another coaching class. We set out to build the bridge between where you are right now and the job you actually want.
          </p>
          <div className="mt-9">
            <Button variant="primary" onClick={() => setPage("admissions")}>Start Your Journey</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= PAGES ================= */

function HomePage({ setPage, goToEnquiry }) {
  return (
    <>
      <Hero setPage={setPage} />
      <WhyChoose />
      <CareerJourney />
      <AdmissionsStrip setPage={setPage} />
      <WhoCanJoin />
      <ProgramsOverview setPage={setPage} goToEnquiry={goToEnquiry} />
      <StatementBlock setPage={setPage} />
      <section className="py-24 px-6 lg:px-10" style={{ background: PAPER }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Get In Touch" title="Talk to a career counsellor, free" />
          <ContactBlock />
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  const values = [
    { t: "Practical First", d: "We teach by doing — every module ends in something you built, not just notes." },
    { t: "Industry-Anchored", d: "Curriculum reviewed against what employers are actually hiring for, today." },
    { t: "Personal Attention", d: "Small batches so no learner is a face in the crowd." },
    { t: "Integrity", d: "Honest guidance about what a course can and can't do for your career." },
  ];
  return (
    <div>
      <PageHero eyebrow="About Us" title="A modern academy, built around real careers" sub="AHUJA NEXTGEN began with a simple observation: most institutes teach syllabi, not skills. We set out to close that gap." />
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start mb-24">
          <Reveal>
            <Pill>Our Story</Pill>
            <h3 className="mt-4 text-2xl font-bold" style={{ color: INK, fontFamily: "Fraunces, serif" }}>Why we started</h3>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#5B6474" }}>
              We saw too many capable students graduate with certificates but no real, demonstrable skill — and too many working professionals stuck because they never had access to structured, practical upskilling. AHUJA NEXTGEN was founded to fix both problems with one model: small batches, working professionals as trainers, and a curriculum that changes as fast as the industry does.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Pill>Vision & Mission</Pill>
            <h3 className="mt-4 text-2xl font-bold" style={{ color: INK, fontFamily: "Fraunces, serif" }}>Where we're headed</h3>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#5B6474" }}>
              <strong style={{ color: INK }}>Vision:</strong> To be the region's most trusted bridge between education and employment.<br /><br />
              <strong style={{ color: INK }}>Mission:</strong> Deliver practical, affordable, industry-oriented training that turns learners into hireable professionals — regardless of where they start from.
            </p>
          </Reveal>
        </div>

        <SectionHeading eyebrow="Core Values" title="What guides every batch we run" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="rounded-2xl p-6 h-full" style={{ background: PAPER }}>
                <div className="font-semibold text-[15px]" style={{ color: INK, fontFamily: "Fraunces, serif" }}>{v.t}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "#727C8C" }}>{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeading eyebrow="Facilities" title="A learning environment built for focus" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Laptop, t: "Modern Computer Lab", d: "Updated systems, one seat per learner during lab hours." },
            { icon: Users, t: "Smart Classrooms", d: "Projector-led sessions built for live demonstration." },
            { icon: Target, t: "Project-Based Learning", d: "Every course closes with a capstone build." },
            { icon: GraduationCap, t: "Experienced Faculty", d: "Trainers with real industry background, not just theory." },
            { icon: Clock, t: "Flexible Timings", d: "Morning, evening, and weekend batches." },
            { icon: Shield, t: "Safe, Structured Campus", d: "A focused environment for serious learners." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(10,45,111,0.08)" }}>
                <f.icon size={22} color={ROYAL} />
                <div className="mt-3 font-semibold text-[14.5px]" style={{ color: INK }}>{f.t}</div>
                <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "#727C8C" }}>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})` }}>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-[0.18]" style={{ background: GOLD }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 uppercase tracking-wide">{eyebrow}</span>
          <h1 className="mt-5 text-white font-bold leading-tight" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>{title}</h1>
          {sub && <p className="mt-4 text-[15.5px] text-white/75 max-w-2xl mx-auto leading-relaxed">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}

function ProgramsPage({ goToEnquiry }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <PageHero eyebrow="Programs & Courses" title="Every course maps to a real career outcome" sub="From first-time computer users to professionals adding emerging-tech skills — pick a track and see exactly where it leads." />
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {PROGRAM_CATS.map((p, i) => (
              <button
                key={p.t}
                onClick={() => setActive(i)}
                className="px-4 py-2 rounded-full text-[13px] font-semibold transition-colors"
                style={{ background: active === i ? ROYAL : PAPER, color: active === i ? "#fff" : "#5B6474" }}
              >
                {p.t}
              </button>
            ))}
          </div>

          <Reveal key={active}>
            <div className="rounded-3xl p-8 lg:p-10 grid lg:grid-cols-[auto,1fr] gap-8" style={{ background: PAPER }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})` }}>
                {React.createElement(PROGRAM_CATS[active].icon, { size: 28, color: "#fff" })}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold" style={{ color: INK, fontFamily: "Fraunces, serif" }}>{PROGRAM_CATS[active].t}</h3>
                  <span className="text-[12px] font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(233,162,59,0.15)", color: "#8a5a12" }}>{PROGRAM_CATS[active].duration}</span>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "#5B6474" }}>{PROGRAM_CATS[active].d}</p>

                {PROGRAM_CATS[active].courses.length > 0 && (
                  <div className="mt-6">
                    <div className="text-[12px] font-semibold uppercase tracking-wide mb-3" style={{ color: ROYAL }}>Courses in this Track</div>
                    <div className="flex flex-wrap gap-2">
                      {PROGRAM_CATS[active].courses.map((c) => (
                        <span key={c} className="text-[12.5px] font-medium px-3 py-1.5 rounded-full bg-white" style={{ color: INK, border: "1px solid rgba(10,45,111,0.12)" }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-wide mb-3" style={{ color: ROYAL }}>Learning Outcomes</div>
                    <ul className="space-y-2">
                      {PROGRAM_CATS[active].outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-[13.5px]" style={{ color: "#3a4150" }}>
                          <CheckCircle2 size={15} color={ROYAL} className="mt-0.5 shrink-0" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-wide mb-3" style={{ color: ROYAL }}>Career Opportunities</div>
                    <ul className="space-y-2">
                      {PROGRAM_CATS[active].careers.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-[13.5px]" style={{ color: "#3a4150" }}>
                          <Briefcase size={14} color={GOLD} className="mt-0.5 shrink-0" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="dark" icon={false} onClick={() => goToEnquiry(PROGRAM_CATS[active].t)} className="mt-7 !px-6 !py-3">Enquire Now</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10" style={{ background: PAPER }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Emerging Technologies" title="Market-driven skills, updated continuously" sub="New programs are introduced regularly based on market demand and emerging technologies." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Database, t: "SQL" },
              { icon: Cloud, t: "Cloud Computing" },
              { icon: BarChart3, t: "Power BI" },
              { icon: GitBranch, t: "Git & GitHub" },
              { icon: Briefcase, t: "Product Management" },
              { icon: Code2, t: "DevOps" },
              { icon: Lock, t: "Cyber Security" },
              { icon: Megaphone, t: "Digital Marketing" },
              { icon: Bot, t: "AI Tools & Automation" },
            ].map((e, i) => (
              <Reveal key={e.t} delay={i * 50}>
                <div className="rounded-xl bg-white p-5 flex items-center gap-3" style={{ boxShadow: "0 2px 12px -6px rgba(10,45,111,0.08)" }}>
                  <e.icon size={19} color={ROYAL} />
                  <span className="text-[13.5px] font-medium" style={{ color: INK }}>{e.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ background: `linear-gradient(160deg, ${DEEP}, ${NAVY})` }}>
            <div className="p-9 lg:p-11">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 uppercase tracking-wide">Foundation Classes</span>
              <h3 className="mt-4 text-white font-bold" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>Building Strong Foundations, Grades VI–VIII</h3>
              <p className="mt-3 text-[14px] text-white/75 leading-relaxed">Academic support in Mathematics, Science, and English — built for genuine concept clarity, not rote memorization.</p>
              <div className="mt-6 flex gap-3">
                {["Mathematics", "Science", "English"].map((s) => (
                  <span key={s} className="flex-1 text-center rounded-lg py-2.5 text-[13px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.12)" }}>{s}</span>
                ))}
              </div>
            </div>
            <div className="p-9 lg:p-11" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="text-[12px] font-semibold uppercase tracking-wide text-white/70 mb-4">Why Parents Choose Our Foundation Classes</div>
              <ul className="space-y-3">
                {[
                  "Academic support by experienced, dedicated teachers",
                  "Concept-based learning for strong fundamentals",
                  "Aligned with the latest school curriculum",
                  "Evening classes after school hours",
                  "Regular assessments & doubt-solving sessions",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-white/85">
                    <CheckCircle2 size={16} color={GOLD} className="mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CareerServicesPage() {
  const services = [
    { icon: Award, t: "Resume Building", d: "One-on-one help turning your projects and coursework into a resume that gets shortlisted." },
    { icon: MessageSquareText, t: "Interview Preparation", d: "Structured prep covering technical rounds, HR rounds, and common curveball questions." },
    { icon: Users, t: "Career Counselling", d: "Individual sessions to map your background to the right track and realistic timelines." },
    { icon: Briefcase, t: "Placement Guidance", d: "Introductions and guidance toward hiring partners and open roles matching your skill level." },
    { icon: Target, t: "Mock Interviews", d: "Practice interviews with feedback you can act on before the real one." },
    { icon: GraduationCap, t: "Professional Development", d: "Workshops on workplace etiquette, time management, and professional communication." },
    { icon: MessageSquareText, t: "Communication Skills", d: "Spoken English and presentation practice for interview and workplace confidence." },
    { icon: Sparkles, t: "Leadership Skills", d: "Foundational leadership and teamwork training for early-career professionals." },
  ];
  return (
    <div>
      <PageHero eyebrow="Career Services" title="Support that doesn't stop at certification" sub="A course teaches the skill. Our career services make sure that skill turns into an offer." />
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div className="rounded-2xl p-6 h-full" style={{ background: PAPER }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})` }}>
                  <s.icon size={19} color="#fff" />
                </div>
                <div className="font-semibold text-[14.5px]" style={{ color: INK }}>{s.t}</div>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "#727C8C" }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CareerJourney />
    </div>
  );
}

function AdmissionsPage({ initialCourse = "" }) {
  const steps = ["Book a free demo class", "Meet a career counsellor", "Choose your program", "Submit documents & enrol", "Start learning"];
  const faqs = [
    { q: "Are the demo classes really free?", a: "Yes — every applicant gets two free demo classes before committing to a program." },
    { q: "What documents do I need?", a: "A valid photo ID, latest educational certificate, and two passport-size photographs." },
    { q: "Do you offer scholarships?", a: "Merit and need-based fee concessions are available; ask your counsellor during enrolment." },
    { q: "Can working professionals attend?", a: "Yes, weekend and evening batches are designed specifically for working professionals." },
  ];
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div>
      <PageHero eyebrow="Admissions" title="Your seat is closer than you think" sub="Free counselling, transparent fees, and a simple five-step process." />
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Process" title="Five steps from enquiry to enrolled" center={false} />
          <div className="grid sm:grid-cols-5 gap-4 mb-20">
            {steps.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-white" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})`, fontFamily: "Fraunces, serif" }}>{i + 1}</div>
                  <p className="mt-3 text-[13px] leading-snug" style={{ color: "#5B6474" }}>{s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <Reveal>
              <div className="rounded-2xl p-7 h-full" style={{ background: PAPER }}>
                <div className="font-semibold text-[15px] mb-4" style={{ color: INK }}>Documents Required</div>
                {["Valid Photo ID (Aadhaar/School ID)", "Latest Educational Certificate", "2 Passport-size Photographs"].map((d) => (
                  <div key={d} className="flex items-center gap-2 text-[13.5px] py-1.5" style={{ color: "#3a4150" }}><CheckCircle2 size={15} color={ROYAL} /> {d}</div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl p-7 h-full text-white" style={{ background: `linear-gradient(135deg, ${DEEP}, ${NAVY})` }}>
                <div className="font-semibold text-[15px] mb-4">Current Offers</div>
                {["15% Early Bird Discount", "2 Free Demo Classes", "Free Career Counselling", "Merit-based Scholarships"].map((d) => (
                  <div key={d} className="flex items-center gap-2 text-[13.5px] py-1.5 text-white/90"><Star size={14} fill={GOLD} color={GOLD} /> {d}</div>
                ))}
              </div>
            </Reveal>
          </div>

          <SectionHeading eyebrow="FAQ" title="Common admissions questions" center={false} />
          <div className="space-y-3 mb-20">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-xl border overflow-hidden" style={{ borderColor: "rgba(10,45,111,0.1)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span className="font-medium text-[14px]" style={{ color: INK }}>{f.q}</span>
                  <ChevronDown size={18} color={ROYAL} style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                </button>
                {openFaq === i && <p className="px-5 pb-4 text-[13.5px] leading-relaxed" style={{ color: "#727C8C" }}>{f.a}</p>}
              </div>
            ))}
          </div>

          <SectionHeading eyebrow="Fee Enquiry" title="Get exact fees for your chosen program" center={false} />
          {initialCourse && (
            <div className="mb-5 flex items-center gap-2 text-[13.5px] font-medium rounded-lg px-4 py-3" style={{ background: "rgba(21,101,192,0.08)", color: ROYAL }}>
              <CheckCircle2 size={16} /> Pre-selected from your click: <strong>{initialCourse}</strong>
            </div>
          )}
          <ContactBlock initialCourse={initialCourse} />
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Let's talk about your next step" sub="Call, message, or drop by — a real counsellor, not a chatbot, will get back to you." />
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <ContactBlock />
        </div>
      </section>
    </div>
  );
}

/* ---------------- WHATSAPP FLOATING BUTTON ---------------- */
function WhatsAppButton() {
  const phone = "919034640741"; // primary WhatsApp number, country code + number, no spaces or +
  const message = encodeURIComponent("Hi! I'm interested in courses at Ahuja NextGen. Please share more details.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 rounded-full pl-4 pr-5 py-3.5 text-white font-semibold text-[14px] shadow-2xl hover:-translate-y-1 transition-transform duration-200"
      style={{ background: "#25D366", boxShadow: "0 10px 28px -6px rgba(37,211,102,0.6)" }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} fill="#fff" color="#25D366" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

/* ================= APP ================= */
export default function App() {
  const [page, setPage] = useState("home");
  const [enquiryCourse, setEnquiryCourse] = useState("");
  const [demoOpen, setDemoOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  // Every "Enquire Now" button in the app calls this — it carries the exact
  // course/track clicked straight into the Admissions enquiry form, pre-selected.
  const goToEnquiry = (courseName) => {
    setEnquiryCourse(courseName);
    setPage("admissions");
  };

  const pages = {
    home: <HomePage setPage={setPage} goToEnquiry={goToEnquiry} />,
    about: <AboutPage />,
    programs: <ProgramsPage goToEnquiry={goToEnquiry} />,
    career: <CareerServicesPage />,
    admissions: <AdmissionsPage initialCourse={enquiryCourse} />,
    contact: <ContactPage />,
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-white relative">
      {/* Uniform film-grain texture over the entire site — one consistent premium detail instead of scattered per-section effects */}
      <div
        className="fixed inset-0 pointer-events-none z-[999]"
        style={{ backgroundImage: `url(${GRAIN})`, backgroundSize: "128px 128px", opacity: 0.035, mixBlendMode: "multiply" }}
      />
      <Navbar page={page} setPage={setPage} onOpenDemo={() => setDemoOpen(true)} />
      {pages[page]}
      <Footer setPage={setPage} />
      <WhatsAppButton />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
