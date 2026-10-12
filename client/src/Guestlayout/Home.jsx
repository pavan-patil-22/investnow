import React, { useState, useRef, useEffect, useCallback } from "react";
import HeroSection from "./HeroSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaChartPie,
  FaCoins,
  FaChartLine,
  FaBriefcase,
  FaMapMarkedAlt,
  FaArrowRight,
  FaUmbrella,
  FaGraduationCap,
  FaHome,
  FaUserTie,
  FaHandshake,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
const hxServices = [
  {
    title: "Mutual funds & SIPs",
    icon: <FaChartPie />,
    desc: "Disciplined wealth accumulation through systematic investment planning, built to compound over the long run.",
    path: "/services#mutual-funds",
    wide: true,
  },
  {
    title: "Loans & financing",
    icon: <FaMoneyCheckAlt />,
    desc: "Personal, business, and home loan guidance matched to your eligibility.",
    path: "/services#loans",
  },
  {
    title: "Insurance",
    icon: <FaShieldAlt />,
    desc: "Life, health, and motor cover to protect what you've built.",
    path: "/services#insurance",
  },
  {
    title: "Wealth management",
    icon: <FaCoins />,
    desc: "Multi-asset allocation across equity, debt, and gold.",
    path: "/services#wealth-management",
  },
  {
    title: "Stocks & equity",
    icon: <FaChartLine />,
    desc: "Neutral insights for long-term equity planning.",
    path: "/services#stocks-equity",
  },
  {
    title: "Portfolio management",
    icon: <FaBriefcase />,
    desc: "Regular reviews, risk alignment, and rebalancing so your portfolio stays on course.",
    path: "/services#portfolio-management",
  },
  {
    title: "Land links (Chalukya)",
    icon: <FaMapMarkedAlt />,
    desc: "Residential and agricultural land options, with legal title verification.",
    path: "/chalukya-developers",
    wide: true,
  },
];

const hxTimeline = [
  {
    step: "01",
    title: "Listen",
    text: "We start with what matters to you — not products. Goals, timelines, obligations.",
    icon: <FaEye />,
  },
  {
    step: "02",
    title: "Map",
    text: "A structured plan built around your income, risk profile, and life milestones.",
    icon: <FaBullseye />,
  },
  {
    step: "03",
    title: "Execute",
    text: "We coordinate with AMCs, insurers, lenders, and developers to open the right doors.",
    icon: <FaHandshake />,
  },
  {
    step: "04",
    title: "Review",
    text: "Regular checkpoints, rebalances, and course corrections as life moves.",
    icon: <FaChartLine />,
  },
];

const hxValues = [
  {
    title: "Experienced guidance",
    desc: "Knowledgeable consultants who work through your plan with you.",
    icon: <FaUserTie />,
  },
  {
    title: "Transparent approach",
    desc: "Clear talk on products, terms, eligibility, and risk.",
    icon: <FaEye />,
  },
  {
    title: "Goal-oriented planning",
    desc: "Strategies built around milestones like retirement or property.",
    icon: <FaBullseye />,
  },
  {
    title: "Relationship-focused",
    desc: "We value long-term clients over one-off transactions.",
    icon: <FaHandshake />,
  },
];

const hxGoals = [
  {
    title: "Wealth creation",
    icon: <FaChartLine />,
    text: "Long-term compounding through structured multi-asset planning.",
  },
  {
    title: "Retirement",
    icon: <FaUmbrella />,
    text: "Post-employment financial independence with a focus on regular income.",
  },
  {
    title: "Education",
    icon: <FaGraduationCap />,
    text: "Prepare financially for higher education, years before the fees arrive.",
  },
  {
    title: "Home & property",
    icon: <FaHome />,
    text: "Down-payment savings and loan eligibility checks.",
  },
  {
    title: "Business growth",
    icon: <FaBriefcase />,
    text: "Capital planning and commercial funding guidance.",
  },
  {
    title: "Family protection",
    icon: <FaShieldAlt />,
    text: "Health coverage and an emergency fund that holds.",
  },
];

const hxBandA = [
  "Mutual Funds",
  "Insurance",
  "Loans",
  "Wealth",
  "Equity",
  "SIPs",
  "Land",
  "Portfolio",
];
const hxBandB = [
  "Advisory",
  "Reviews",
  "Planning",
  "Protection",
  "Compounding",
  "Goals",
  "Rebalancing",
  "Clarity",
];

const hxStatement =
  "Money decisions never arrive one at a time. We bring investments, insurance, loans and land into a single plan, so each choice supports the next.";
const hxStatementHot = ["investments,", "insurance,", "loans", "land"];

const hxOrbs = [
  { label: "Invest", x: "-62%", y: "-62%", fx: "-13%", fy: "-13%" },
  { label: "Insure", x: "62%", y: "-62%", fx: "13%", fy: "-13%" },
  { label: "Borrow", x: "-62%", y: "62%", fx: "-13%", fy: "13%" },
  { label: "Land", x: "62%", y: "62%", fx: "13%", fy: "13%" },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */
const useHxReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
};

/*
  Writes --p (0..1) straight onto the element, so scroll animation never
  re-renders React. CSS does the rest with calc().
  mode "full" : 0 when the element enters the viewport, 1 when it leaves
  mode "pin"  : 0 when a tall sticky section starts pinning, 1 when it ends
  mode "read" : 0 when the top is at 70% of the viewport, 1 at its bottom edge
*/
const useHxScrollVar = (ref, mode = "full") => {
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p;
      if (mode === "pin") p = -r.top / Math.max(1, r.height - vh);
      else if (mode === "read") p = (vh * 0.7 - r.top) / Math.max(1, r.height);
      else p = (vh - r.top) / (r.height + vh);
      p = Math.min(1, Math.max(0, p));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, mode]);
};

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */
const HxReveal = ({ children, delay = 0, className = "", style, ...rest }) => {
  const [ref, shown] = useHxReveal();
  return (
    <div
      ref={ref}
      className={`hx-reveal ${shown ? "hx-reveal--in" : ""} ${className}`}
      style={{ "--hx-rd": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

const HxHead = ({ eyebrow, lines, sub, center = false, className = "" }) => {
  const [ref, shown] = useHxReveal(0.3);
  return (
    <div
      ref={ref}
      className={`hx-head ${center ? "hx-head--center" : ""} ${shown ? "hx-head--in" : ""} ${className}`}
    >
      <span className="hx-eyebrow">
        <i className="hx-eyebrow__dot" />
        {eyebrow}
      </span>
      <h2 className="hx-h2">
        {lines.map((l, i) => (
          <span className="hx-line" key={l}>
            <span
              className={i === lines.length - 1 ? "hx-grad" : ""}
              style={{ "--d": `${i * 120}ms` }}
            >
              {l}
            </span>
          </span>
        ))}
      </h2>
      {sub && <p className="hx-sub">{sub}</p>}
    </div>
  );
};

const HxArrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 12h15M13 5l7 7-7 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Marquee band (always on, reacts to scroll velocity)                 */
/* ------------------------------------------------------------------ */
const HxBandRow = ({ words, rev = false }) => (
  <div className="hx-band__row">
    <div className={`hx-band__track ${rev ? "hx-band__track--rev" : ""}`}>
      {[...words, ...words, ...words, ...words].map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`hx-band__word ${i % 2 ? "hx-band__word--out" : ""}`}
        >
          {w}
          <i className="hx-band__gem" />
        </span>
      ))}
    </div>
  </div>
);

const HxBand = ({ innerRef }) => (
  <div className="hx-band" ref={innerRef} aria-hidden="true">
    <HxBandRow words={hxBandA} />
    <HxBandRow words={hxBandB} rev />
  </div>
);

/* ------------------------------------------------------------------ */
/* Section 1 — Statement (pinned, words fill in as you scroll)         */
/* ------------------------------------------------------------------ */
const HxStatementSection = () => {
  const rootRef = useRef(null);
  useHxScrollVar(rootRef, "pin");
  const words = hxStatement.split(" ");

  return (
    <section ref={rootRef} className="hx-state">
      <div className="hx-state__pin">
        <p className="hx-state__text" style={{ "--n": words.length }}>
          {words.map((w, i) => (
            <span
              key={i}
              className={`hx-state__word ${hxStatementHot.includes(w) ? "hx-state__word--hot" : ""}`}
              style={{ "--i": i }}
            >
              {w}{" "}
            </span>
          ))}
        </p>

        <div className="hx-merge" aria-hidden="true">
          <div className="hx-merge__ring" />
          {hxOrbs.map((o, i) => (
            <div
              key={o.label}
              className="hx-orb"
              style={{
                "--x": o.x,
                "--y": o.y,
                "--fx": o.fx,
                "--fy": o.fy,
                "--bob": `${i * 0.9}s`,
              }}
            >
              <span className="hx-orb__label">{o.label}</span>
            </div>
          ))}
          <div className="hx-merge__core">One plan</div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 2 — Services (pinned horizontal scroll)                     */
/* ------------------------------------------------------------------ */
const HxCard = ({ s, i }) => {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - y) * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 10).toFixed(2)}deg`);
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <HxReveal
      delay={80}
      className={`hx-card-wrap ${s.wide ? "hx-card-wrap--wide" : ""} ${i % 2 ? "hx-card-wrap--low" : ""}`}
    >
      <Link
        to={s.path}
        className="hx-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ "--bob": `${i * 0.6}s` }}
      >
        <span className="hx-card__glow" aria-hidden="true" />
        <span className="hx-card__bgnum" aria-hidden="true">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="hx-card__icon">{s.icon}</span>
        <span className="hx-card__body">
          <h3 className="hx-card__name">{s.title}</h3>
          <p className="hx-card__desc">{s.desc}</p>
        </span>
        <span className="hx-card__more">
          <span>Explore</span>
          <span className="hx-card__arrow">
            <HxArrow />
          </span>
        </span>
        {i === 0 && (
          <svg
            className="hx-card__spark"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="hx-card__spark-line"
              d="M0 52 Q 35 48, 60 34 T 120 20 T 200 4"
              pathLength="1"
            />
            <circle className="hx-card__spark-dot" cx="200" cy="4" r="3.5" />
          </svg>
        )}
      </Link>
    </HxReveal>
  );
};

const HxServicesSection = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  useHxScrollVar(rootRef, "pin");

  useEffect(() => {
    const measure = () => {
      const sec = rootRef.current;
      const track = trackRef.current;
      if (!sec || !track) return;
      if (window.innerWidth < 900) {
        sec.style.removeProperty("height");
        sec.style.setProperty("--hx-max", "0px");
        return;
      }
      const max = Math.max(0, track.scrollWidth - window.innerWidth);
      sec.style.setProperty("--hx-max", `${max}px`);
      sec.style.height = `${max + window.innerHeight}px`;
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // magnetic button
  const onMagMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onMagLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section ref={rootRef} className="hx-services">
      <div className="hx-services__pin">
        <div className="hx-services__track" ref={trackRef}>
          <div className="hx-services__intro">
            <HxHead
              eyebrow="What we offer"
              lines={["Seven ways we", "move money forward."]}
              sub="Mutual funds, insurance, loans, equity, and land — coordinated under one roof, so nothing slips between advisors."
            />
            <span className="hx-services__hint" aria-hidden="true">
              Keep scrolling
              <i />
            </span>
          </div>

          {hxServices.map((s, i) => (
            <HxCard key={s.title} s={s} i={i} />
          ))}

          <div className="hx-services__end">
            <Link
              to="/services"
              className="hx-mag"
              onMouseMove={onMagMove}
              onMouseLeave={onMagLeave}
            >
              <span className="hx-mag__ring" aria-hidden="true" />
              <span className="hx-mag__label">See all financial services</span>
              <span className="hx-mag__arrow">
                <HxArrow />
              </span>
            </Link>
          </div>
        </div>

        <div className="hx-services__meter" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 3 — Timeline (rail draws, steps light up with scroll)       */
/* ------------------------------------------------------------------ */
const HxTimelineSection = () => {
  const wrapRef = useRef(null);
  useHxScrollVar(wrapRef, "read");

  return (
    <section className="hx-tl">
      <div className="hx-tl__inner">
        <HxHead
          center
          eyebrow="How we work"
          lines={["Four steps.", "No guesswork."]}
        />

        <div className="hx-tl__wrap" ref={wrapRef}>
          <div className="hx-tl__rail" aria-hidden="true">
            <i className="hx-tl__fill" />
            <i className="hx-tl__head" />
          </div>

          <ol className="hx-tl__list">
            {hxTimeline.map((t, i) => (
              <li
                key={t.step}
                className={`hx-tl__item hx-tl__item--${i % 2 ? "r" : "l"}`}
                style={{ "--at": ((i + 0.5) / hxTimeline.length).toFixed(3) }}
              >
                <span className="hx-tl__num" aria-hidden="true">
                  {t.step}
                </span>
                <div className="hx-tl__card">
                  <span className="hx-tl__icon">{t.icon}</span>
                  <h3 className="hx-tl__name">{t.title}</h3>
                  <p className="hx-tl__text">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 4 — Goals (auto-advancing, ring is the timer)               */
/* ------------------------------------------------------------------ */
const HxGoalsSection = () => {
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const g = hxGoals[active];
  const r = 54;
  const c = 2 * Math.PI * r;
  const next = useCallback(
    () => setActive((a) => (a + 1) % hxGoals.length),
    [],
  );

  return (
    <section className="hx-goals">
      <div className="hx-goals__orb hx-goals__orb--a" aria-hidden="true" />
      <div className="hx-goals__orb hx-goals__orb--b" aria-hidden="true" />
      <div className="hx-goals__inner">
        <HxHead
          eyebrow="Goal-based planning"
          lines={["Six destinations.", "One route per goal."]}
        />

        <div
          className={`hx-goals__shell ${hold ? "is-hold" : ""}`}
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
        >
          <div className="hx-goals__rail">
            {hxGoals.map((x, i) => (
              <HxReveal key={x.title} delay={i * 60}>
                <button
                  type="button"
                  className={`hx-pill ${i === active ? "hx-pill--on" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="hx-pill__icon">{x.icon}</span>
                  <span className="hx-pill__label">{x.title}</span>
                  <span className="hx-pill__count">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hx-pill__bar" aria-hidden="true" />
                </button>
              </HxReveal>
            ))}
          </div>

          <HxReveal className="hx-stage" delay={160}>
            <div className="hx-stage__dots" aria-hidden="true" />
            <div className="hx-stage__inner" key={g.title}>
              <div className="hx-stage__ringwrap">
                <svg
                  viewBox="0 0 140 140"
                  className="hx-stage__ring"
                  aria-hidden="true"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r={r}
                    fill="none"
                    stroke="rgba(11,96,69,.12)"
                    strokeWidth="5"
                  />
                  <circle
                    className="hx-stage__arc"
                    cx="70"
                    cy="70"
                    r={r}
                    fill="none"
                    stroke="url(#hxArcGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    strokeDashoffset={c}
                    transform="rotate(-90 70 70)"
                    onAnimationEnd={next}
                  />
                  <defs>
                    <linearGradient id="hxArcGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0B6045" />
                      <stop offset="1" stopColor="#1E9E6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="hx-stage__orbit" aria-hidden="true" />
                <span className="hx-stage__icon">{g.icon}</span>
              </div>
              <div className="hx-stage__meta">
                <span className="hx-stage__kicker">
                  Goal {active + 1} of {hxGoals.length}
                </span>
                <h3 className="hx-stage__title">{g.title}</h3>
                <p className="hx-stage__text">{g.text}</p>
                <Link to="/financial-goals" className="hx-stage__link">
                  <span>Explore the journey</span>
                  <FaArrowRight size={11} />
                </Link>
              </div>
            </div>
          </HxReveal>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 5 — Values (always-orbiting, pauses on hover)               */
/* ------------------------------------------------------------------ */
const HxValuesSection = () => {
  const rootRef = useRef(null);
  useHxScrollVar(rootRef, "full");

  return (
    <section ref={rootRef} className="hx-values">
      <div className="hx-values__inner">
        <HxHead
          center
          eyebrow="Why us"
          lines={["Trusted by families who", "plan decades ahead."]}
        />

        <div className="hx-orbit">
          <div className="hx-orbit__stage">
            <span
              className="hx-orbit__ring hx-orbit__ring--scroll"
              aria-hidden="true"
            />
            <span
              className="hx-orbit__ring hx-orbit__ring--spin"
              aria-hidden="true"
            />
            <span
              className="hx-orbit__ring hx-orbit__ring--still"
              aria-hidden="true"
            />

            {hxValues.map((v, i) => (
              <article
                key={v.title}
                className="hx-node"
                style={{ "--a": `${45 + i * 90}deg` }}
              >
                <div className="hx-node__card">
                  <span className="hx-node__icon">{v.icon}</span>
                  <div className="hx-node__body">
                    <strong>{v.title}</strong>
                    <small>{v.desc}</small>
                  </div>
                </div>
              </article>
            ))}

            <div className="hx-core">
              <span className="hx-core__pulse" />
              <span className="hx-core__pulse hx-core__pulse--b" />
              <svg viewBox="0 0 60 60" aria-hidden="true">
                <path
                  className="hx-core__shield"
                  d="M30 8l18 7v14c0 12-8 21-18 26-10-5-18-14-18-26V15z"
                  fill="none"
                  stroke="#0B6045"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  pathLength="1"
                />
                <path
                  className="hx-core__tick"
                  d="M22 30l6 6 12-14"
                  fill="none"
                  stroke="#0B6045"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                />
              </svg>
              <span className="hx-core__label">INVESTNOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const Home = () => {
  const barRef = useRef(null);
  const bandRef = useRef(null);

  // page progress bar + band skew from scroll velocity
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let last = window.scrollY;
    let v = 0;
    let raf = 0;
    const tick = () => {
      const y = window.scrollY;
      v += (y - last - v) * 0.1;
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? (y / max).toFixed(4) : 0})`;
      }
      if (bandRef.current && !reduce) {
        const sk = Math.max(-8, Math.min(8, -v * 0.4));
        bandRef.current.style.setProperty("--hx-skew", `${sk.toFixed(2)}deg`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hx-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Figtree:wght@400;500;600;700&display=swap');

        @property --hx-t   { syntax: '<angle>'; inherits: true;  initial-value: 0deg; }
        @property --hx-ang { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

        /* ===================================================
           HOME PAGE — scoped under .hx-* namespace
           White surfaces, green ink + accents. Green is never
           used as a section background.
           =================================================== */
        .hx-page {
          --hx-ink:#0E1A15;
          --hx-g1:#073B2A;
          --hx-g2:#0B6045;
          --hx-g3:#1E9E6E;
          --hx-gold:#D4AF37;
          --hx-white:#FFFFFF;
          --hx-mist:#F5F7F6;
          --hx-muted:#5B6B63;
          --hx-line: rgba(7,59,42,.12);
          --hx-shadow: 0 1px 2px rgba(7,59,42,.05), 0 18px 40px -22px rgba(7,59,42,.22);
          background: var(--hx-white);
          color: var(--hx-ink);
          font-family:'Figtree',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
          overflow-x: clip;
        }
        .hx-page h1, .hx-page h2, .hx-page h3, .hx-page h4 {
          font-family:'Bricolage Grotesque','Figtree',sans-serif; margin:0;
        }
        .hx-page a:focus-visible, .hx-page button:focus-visible {
          outline: 2px solid var(--hx-g2); outline-offset: 3px;
        }

        /* ---------- Scroll progress ---------- */
        .hx-progress {
          position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60;
          pointer-events: none;
        }
        .hx-progress i {
          display:block; height:100%; transform-origin:left; transform: scaleX(0);
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
        }

        /* ---------- Reveal ---------- */
        .hx-reveal {
          opacity: 0;
          transform: translateY(28px) scale(.98);
          filter: blur(6px);
          transition: opacity .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms),
                      transform .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms),
                      filter .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms);
        }
        .hx-reveal--in { opacity: 1; transform: none; filter: none; }

        /* ---------- Section heads ---------- */
        .hx-head { max-width: 760px; }
        .hx-head--center { margin: 0 auto; text-align: center; }
        .hx-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          font-size:14px; font-weight:600; color: var(--hx-g2);
          margin-bottom: 18px;
          opacity:0; transform: translateY(8px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .hx-head--in .hx-eyebrow { opacity:1; transform:none; }
        .hx-eyebrow__dot {
          position:relative; width:8px; height:8px; border-radius:50%; background: var(--hx-g3);
        }
        .hx-eyebrow__dot::after {
          content:""; position:absolute; inset:-5px; border-radius:50%;
          border:1px solid var(--hx-g3); animation: hxPing 2.2s ease-out infinite;
        }
        @keyframes hxPing { 0%{transform:scale(.4);opacity:.9} 100%{transform:scale(1.6);opacity:0} }

        .hx-h2 {
          font-size: clamp(34px, 4.8vw, 62px);
          font-weight: 700; line-height: 1.04; letter-spacing: -.03em;
          color: var(--hx-ink); text-wrap: balance;
        }
        .hx-line { display:block; overflow:hidden; padding-bottom:.14em; margin-bottom:-.14em; }
        .hx-line > span {
          display:inline-block; transform: translateY(115%);
          transition: transform 1s cubic-bezier(.2,.8,.2,1) var(--d,0ms);
        }
        .hx-head--in .hx-line > span { transform: none; }
        .hx-grad {
          background: linear-gradient(90deg, var(--hx-g1) 0%, var(--hx-g3) 45%, var(--hx-g1) 90%);
          background-size: 220% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: hxShine 7s linear infinite;
        }
        @keyframes hxShine { to { background-position: -220% 0; } }
        .hx-sub {
          margin: 24px 0 0; font-size: 17px; line-height: 1.7; color: var(--hx-muted); max-width: 52ch;
          opacity:0; transform: translateY(12px);
          transition: opacity .8s ease .35s, transform .8s ease .35s;
        }
        .hx-head--center .hx-sub { margin-inline: auto; }
        .hx-head--in .hx-sub { opacity:1; transform:none; }

        /* =======================  BAND  ======================= */
        .hx-band {
          position: relative; background: var(--hx-white);
          padding: 30px 0; overflow: hidden;
          border-bottom: 1px solid var(--hx-line);
        }
        .hx-band__row {
          transform: skewX(var(--hx-skew, 0deg));
          transition: transform .15s linear;
          overflow: hidden;
        }
        .hx-band__row + .hx-band__row { margin-top: 10px; }
        .hx-band__track {
          display:inline-flex; align-items:center; gap: 34px; white-space:nowrap;
          animation: hxSlide 48s linear infinite;
          will-change: transform;
        }
        .hx-band__track--rev { animation-direction: reverse; animation-duration: 62s; }
        .hx-band:hover .hx-band__track { animation-play-state: paused; }
        .hx-band__word {
          display:inline-flex; align-items:center; gap:34px;
          font-family:'Bricolage Grotesque',sans-serif; font-weight:700;
          font-size: clamp(28px, 4.4vw, 58px); letter-spacing:-.03em; line-height:1.1;
          color: var(--hx-g1);
        }
        .hx-band__word--out { color: transparent; -webkit-text-stroke: 1.2px var(--hx-g2); }
        .hx-band__gem {
          width:12px; height:12px; flex-shrink:0; background: var(--hx-g3);
          transform: rotate(45deg); animation: hxGem 3.2s ease-in-out infinite;
        }
        @keyframes hxGem { 0%,100%{transform:rotate(45deg) scale(1)} 50%{transform:rotate(225deg) scale(.6)} }
        @keyframes hxSlide { to { transform: translateX(-25%); } }

        /* =======================  STATEMENT  ======================= */
        .hx-state { position: relative; height: 260vh; background: var(--hx-white); }
        .hx-state__pin {
          position: sticky; top: 0; height: 100vh;
          max-width: 1240px; margin: 0 auto; padding: 0 5%;
          display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px; align-items: center;
        }
        .hx-state__text {
          margin: 0; font-family:'Bricolage Grotesque',sans-serif; font-weight: 600;
          font-size: clamp(26px, 3.5vw, 48px); line-height: 1.16; letter-spacing: -.025em;
          color: var(--hx-ink); text-wrap: balance;
        }
        .hx-state__word {
          --k: clamp(0, calc(var(--p, 0) * var(--n) * 1.25 - var(--i) + .4), 1);
          opacity: calc(.14 + .86 * var(--k));
          display: inline;
        }
        .hx-state__word--hot { color: var(--hx-g2); }

        .hx-merge {
          --e: clamp(0, calc(var(--p, 0) * 1.9), 1);
          position: relative; width: min(440px, 80vw); aspect-ratio: 1; margin: 0 auto;
        }
        .hx-merge__ring {
          position:absolute; inset: 2%; border-radius:50%;
          border: 1px dashed rgba(11,96,69,.35);
          animation: hxSpin 50s linear infinite;
        }
        .hx-orb {
          position:absolute; left:50%; top:50%; width: 50%; aspect-ratio: 1;
          margin: -25% 0 0 -25%; border-radius: 50%;
          border: 1.5px solid rgba(11,96,69,.6);
          background: radial-gradient(circle at 30% 28%, rgba(30,158,110,.22), rgba(11,96,69,.04) 70%);
          mix-blend-mode: multiply;
          transform: translate(
            calc((1 - var(--e)) * var(--x) + var(--fx)),
            calc((1 - var(--e)) * var(--y) + var(--fy))
          );
          animation: hxBob 6s ease-in-out var(--bob, 0s) infinite;
          display:grid; place-items:center;
        }
        @keyframes hxBob { 0%,100%{translate:0 0} 50%{translate:0 -9px} }
        .hx-orb__label {
          font-family:'Bricolage Grotesque',sans-serif; font-weight:600; font-size: 15px;
          color: var(--hx-g1);
          transform: translate(calc(var(--fx) * 1.8), calc(var(--fy) * 1.8));
          transition: transform .2s linear;
        }
        .hx-merge__core {
          position:absolute; left:50%; top:50%;
          transform: translate(-50%,-50%) scale(calc(.6 + .4 * var(--e)));
          opacity: calc(var(--e) * var(--e));
          font-family:'Bricolage Grotesque',sans-serif; font-weight:700; font-size: 20px;
          color: var(--hx-g1); background: var(--hx-white);
          padding: 10px 18px; border-radius: 999px; border: 1px solid var(--hx-g2);
          box-shadow: 0 10px 30px -12px rgba(11,96,69,.45);
          white-space: nowrap;
        }

        /* =======================  SERVICES  ======================= */
        .hx-services { position: relative; background: var(--hx-mist); }
        .hx-services__pin { position: relative; }
        .hx-services__track {
          display: flex; flex-direction: column; gap: 22px; padding: 100px 5% 110px;
        }
        .hx-services__intro { max-width: 640px; margin-bottom: 18px; }
        .hx-services__hint { display:none; }
        .hx-services__meter { display:none; }

        .hx-card-wrap { display:block; }
        .hx-card {
          --rx: 0deg; --ry: 0deg; --mx: 50%; --my: 0%;
          position: relative; overflow: hidden; isolation: isolate;
          display: flex; flex-direction: column; justify-content: space-between; gap: 28px;
          min-height: 330px; padding: 30px;
          background: var(--hx-white); border-radius: 26px;
          border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          color: var(--hx-ink); text-decoration: none;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform .25s ease-out, box-shadow .45s ease, border-color .35s ease;
        }
        .hx-card:hover {
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-8px);
          border-color: transparent;
          box-shadow: 0 2px 4px rgba(7,59,42,.06), 0 40px 70px -30px rgba(7,59,42,.38);
        }
        .hx-card::before {
          content:""; position:absolute; inset:0; border-radius: inherit; padding: 1.6px; z-index: 2;
          pointer-events:none;
          background: conic-gradient(from var(--hx-ang), transparent 0 55%, var(--hx-g3) 78%, var(--hx-g1) 90%, transparent 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .4s ease;
          animation: hxAng 3.4s linear infinite;
        }
        .hx-card:hover::before { opacity: 1; }
        @keyframes hxAng { to { --hx-ang: 360deg; } }
        .hx-card__glow {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background: radial-gradient(380px circle at var(--mx) var(--my), rgba(30,158,110,.16), transparent 60%);
          opacity:0; transition: opacity .35s ease;
        }
        .hx-card:hover .hx-card__glow { opacity: 1; }
        .hx-card__bgnum {
          position:absolute; right: 18px; top: -14px; z-index:0;
          font-family:'Bricolage Grotesque',sans-serif; font-weight:800;
          font-size: 150px; line-height:1; letter-spacing:-.05em;
          color: transparent; -webkit-text-stroke: 1px rgba(11,96,69,.16);
          transform: translateX(calc(var(--p, 0) * -60px));
          transition: -webkit-text-stroke-color .4s ease, transform .4s ease;
        }
        .hx-card:hover .hx-card__bgnum { -webkit-text-stroke-color: rgba(11,96,69,.4); transform: translateY(8px); }
        .hx-card__icon {
          position: relative; z-index:1;
          width: 58px; height: 58px; border-radius: 18px; font-size: 24px;
          display:grid; place-items:center;
          color: var(--hx-g2); background: var(--hx-white);
          border: 1px solid rgba(11,96,69,.28);
          animation: hxBob 5s ease-in-out var(--bob, 0s) infinite;
          transition: color .35s ease, border-color .35s ease, box-shadow .35s ease, background .35s ease;
        }
        .hx-card:hover .hx-card__icon {
          color: var(--hx-white); background: var(--hx-g2); border-color: var(--hx-g2);
          box-shadow: 0 14px 28px -10px rgba(11,96,69,.55);
        }
        .hx-card__body { position: relative; z-index:1; display:block; }
        .hx-card__name { font-size: 25px; font-weight: 700; letter-spacing: -.02em; margin-bottom: 10px; }
        .hx-card__desc { margin:0; font-size: 15.5px; line-height: 1.6; color: var(--hx-muted); max-width: 40ch; }
        .hx-card__more {
          position: relative; z-index:1;
          display:inline-flex; align-items:center; gap:10px; width: fit-content;
          font-size: 14.5px; font-weight: 700; color: var(--hx-g2);
        }
        .hx-card__arrow {
          width: 34px; height: 34px; border-radius:50%; display:grid; place-items:center;
          border:1px solid rgba(11,96,69,.35); color: var(--hx-g2);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), background .3s ease, color .3s ease;
        }
        .hx-card__arrow svg { width: 14px; height: 14px; }
        .hx-card:hover .hx-card__arrow { transform: translateX(6px); background: var(--hx-g2); color: var(--hx-white); }

        .hx-card__spark { position:absolute; left: 30px; right: 30px; bottom: 82px; width: calc(100% - 60px); height: 54px; z-index:1; pointer-events:none; }
        .hx-card__spark-line {
          fill:none; stroke: var(--hx-g3); stroke-width: 1.8; stroke-linecap: round;
          stroke-dasharray: 1; stroke-dashoffset: 1; animation: hxDraw 4.5s ease-in-out infinite;
        }
        .hx-card__spark-dot { fill: var(--hx-g2); animation: hxDot 4.5s ease-in-out infinite; }
        @keyframes hxDraw { 0%{stroke-dashoffset:1} 55%,85%{stroke-dashoffset:0} 100%{stroke-dashoffset:-1} }
        @keyframes hxDot { 0%,45%{opacity:0} 60%,85%{opacity:1} 100%{opacity:0} }

        .hx-services__end { display:flex; align-items:center; justify-content:center; padding: 24px 0 0; }
        .hx-mag {
          position: relative; display:inline-flex; align-items:center; gap: 14px;
          padding: 16px 22px 16px 28px; border-radius: 999px;
          background: var(--hx-white); color: var(--hx-g1);
          border: 1.5px solid var(--hx-g2);
          font-weight: 700; font-size: 15.5px; text-decoration: none;
          transition: transform .25s ease-out, box-shadow .4s ease, color .3s ease;
          overflow: hidden; isolation: isolate;
        }
        .hx-mag::before {
          content:""; position:absolute; inset:0; z-index:-1; border-radius: inherit;
          background: var(--hx-g2); transform: translateY(101%);
          transition: transform .5s cubic-bezier(.2,.8,.2,1);
        }
        .hx-mag:hover { color: var(--hx-white); box-shadow: 0 22px 40px -18px rgba(11,96,69,.6); }
        .hx-mag:hover::before { transform: none; }
        .hx-mag__ring {
          position:absolute; inset:-1.5px; border-radius:inherit; pointer-events:none;
          border: 1.5px solid var(--hx-g3); animation: hxPing 2.6s ease-out infinite;
        }
        .hx-mag__arrow { width: 34px; height: 34px; border-radius:50%; display:grid; place-items:center; border:1px solid currentColor; }
        .hx-mag__arrow svg { width: 14px; height: 14px; transition: transform .3s ease; }
        .hx-mag:hover .hx-mag__arrow svg { transform: translateX(4px); }

        @media (min-width: 900px) {
          .hx-services__pin {
            position: sticky; top: 0; height: 100vh; overflow: hidden;
            display: flex; align-items: center;
          }
          .hx-services__track {
            flex-direction: row; align-items: center; gap: 28px;
            width: max-content; padding: 0 8vw 0 5vw;
            transform: translate3d(calc(var(--p, 0) * var(--hx-max, 0px) * -1), 0, 0);
            will-change: transform;
          }
          .hx-services__intro { flex: 0 0 min(560px, 44vw); margin: 0 40px 0 0; }
          .hx-services__hint {
            display:inline-flex; align-items:center; gap: 14px; margin-top: 36px;
            font-size: 14px; font-weight: 600; color: var(--hx-g2);
          }
          .hx-services__hint i { position:relative; display:block; width: 64px; height: 1.5px; background: rgba(11,96,69,.25); overflow:hidden; }
          .hx-services__hint i::after {
            content:""; position:absolute; inset:0; width: 40%; background: var(--hx-g2);
            animation: hxHint 1.8s ease-in-out infinite;
          }
          @keyframes hxHint { 0%{transform:translateX(-100%)} 100%{transform:translateX(260%)} }
          .hx-card-wrap { flex: 0 0 360px; }
          .hx-card-wrap--wide { flex-basis: 470px; }
          .hx-card-wrap--low { transform: translateY(0); margin-top: 70px; }
          .hx-card-wrap:not(.hx-card-wrap--low) { margin-bottom: 70px; }
          .hx-card { min-height: 380px; }
          .hx-services__end { flex: 0 0 340px; padding: 0; }
          .hx-services__meter {
            display:block; position:absolute; left: 5vw; right: 5vw; bottom: 34px; height: 2px;
            background: rgba(11,96,69,.14); border-radius: 2px; overflow:hidden;
          }
          .hx-services__meter i {
            display:block; height:100%; background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
            transform-origin:left; transform: scaleX(var(--p, 0));
          }
        }

        /* =======================  TIMELINE  ======================= */
        .hx-tl { position: relative; background: var(--hx-white); padding: 130px 5% 140px; overflow: hidden; }
        .hx-tl::before {
          content:""; position:absolute; inset:-40px 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(11,96,69,.14) 1px, transparent 0);
          background-size: 30px 30px;
          mask-image: radial-gradient(ellipse at 50% 35%, #000 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 35%, #000 20%, transparent 70%);
          animation: hxDrift 24s linear infinite; pointer-events:none;
        }
        @keyframes hxDrift { to { background-position: 30px 30px; } }
        .hx-tl__inner { position: relative; max-width: 1120px; margin: 0 auto; }
        .hx-tl__wrap { position: relative; margin-top: 80px; }
        .hx-tl__rail { position:absolute; left:50%; top: 0; bottom: 0; width: 2px; transform: translateX(-50%); background: var(--hx-line); }
        .hx-tl__fill {
          position:absolute; inset:0; transform-origin: top; transform: scaleY(var(--p, 0));
          background: linear-gradient(to bottom, var(--hx-g1), var(--hx-g3));
        }
        .hx-tl__head {
          position:absolute; left:50%; top: calc(var(--p, 0) * 100%);
          width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius:50%;
          background: var(--hx-white); border: 3px solid var(--hx-g2);
          box-shadow: 0 0 0 6px rgba(30,158,110,.16);
          animation: hxBeat 1.8s ease-in-out infinite;
        }
        @keyframes hxBeat { 50% { box-shadow: 0 0 0 11px rgba(30,158,110,.05); } }
        .hx-tl__list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap: 56px; position:relative; z-index:1; }
        .hx-tl__item {
          --on: clamp(0, calc((var(--p, 0) - var(--at) + .12) * 9), 1);
          display:grid; grid-template-columns: 1fr 96px 1fr; align-items:center; gap: 20px;
        }
        .hx-tl__item--l { --dir: -1; }
        .hx-tl__item--r { --dir: 1; }
        .hx-tl__num {
          grid-column: 2; grid-row: 1; justify-self:center; position: relative;
          width: 84px; height: 84px; border-radius: 50%; display:grid; place-items:center;
          background: var(--hx-white); border: 1px solid var(--hx-line); color: var(--hx-g1);
          font-family:'Bricolage Grotesque',sans-serif; font-size: 26px; font-weight: 700;
          box-shadow: 0 0 0 calc(var(--on) * 9px) rgba(30,158,110,.12);
          transform: scale(calc(.9 + .1 * var(--on)));
        }
        .hx-tl__num::before {
          content:""; position:absolute; inset:-1px; border-radius:50%;
          border: 2px solid var(--hx-g2); opacity: var(--on);
        }
        .hx-tl__num::after {
          content:""; position:absolute; inset:-9px; border-radius:50%;
          border: 1px dashed rgba(11,96,69,.4); animation: hxSpin 20s linear infinite;
          opacity: calc(.25 + .75 * var(--on));
        }
        .hx-tl__item--l .hx-tl__card { grid-column: 1; grid-row: 1; text-align: right; }
        .hx-tl__item--r .hx-tl__card { grid-column: 3; grid-row: 1; text-align: left; }
        .hx-tl__card {
          position: relative; padding: 28px 30px; border-radius: 24px;
          background: var(--hx-white); border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          opacity: calc(.2 + .8 * var(--on));
          transform: translateX(calc((1 - var(--on)) * var(--dir) * 56px));
          filter: blur(calc((1 - var(--on)) * 3px));
          transition: border-color .3s ease, box-shadow .4s ease;
          overflow: hidden;
        }
        .hx-tl__card::after {
          content:""; position:absolute; left:0; right:0; bottom:0; height:3px;
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
          transform: scaleX(0); transform-origin: left; transition: transform .6s cubic-bezier(.2,.8,.2,1);
        }
        .hx-tl__item--l .hx-tl__card::after { transform-origin: right; }
        .hx-tl__card:hover { border-color: rgba(11,96,69,.5); box-shadow: 0 30px 50px -26px rgba(7,59,42,.35); }
        .hx-tl__card:hover::after { transform: scaleX(1); }
        .hx-tl__icon {
          display:inline-grid; place-items:center; width: 44px; height: 44px; border-radius: 14px; font-size: 18px;
          color: var(--hx-g2); border: 1px solid rgba(11,96,69,.3); margin-bottom: 14px;
          transition: transform .5s cubic-bezier(.2,.8,.2,1), background .3s ease, color .3s ease;
        }
        .hx-tl__card:hover .hx-tl__icon { transform: rotate(-10deg) scale(1.1); background: var(--hx-g2); color: var(--hx-white); }
        .hx-tl__name { font-size: 25px; font-weight: 700; letter-spacing: -.02em; margin-bottom: 8px; }
        .hx-tl__text { margin:0; color: var(--hx-muted); line-height: 1.65; font-size: 15.5px; }

        /* =======================  GOALS  ======================= */
        .hx-goals { position: relative; background: var(--hx-mist); padding: 130px 5%; overflow: hidden; }
        .hx-goals__orb {
          position:absolute; border-radius:50%; filter: blur(70px); pointer-events:none; opacity:.55;
          background: radial-gradient(circle, rgba(30,158,110,.28), transparent 65%);
        }
        .hx-goals__orb--a { width: 560px; height: 560px; left:-200px; top: 10%; animation: hxFloatA 18s ease-in-out infinite alternate; }
        .hx-goals__orb--b { width: 480px; height: 480px; right:-160px; bottom: -120px; animation: hxFloatB 22s ease-in-out infinite alternate; }
        @keyframes hxFloatA { to { transform: translate(90px,-50px) scale(1.1); } }
        @keyframes hxFloatB { to { transform: translate(-80px,-60px) scale(1.15); } }
        .hx-goals__inner { position:relative; max-width: 1180px; margin: 0 auto; }
        .hx-goals__shell { display:grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: stretch; margin-top: 60px; }
        .hx-goals__rail { display:flex; flex-direction:column; gap: 10px; }

        .hx-pill {
          position: relative; overflow: hidden; width: 100%;
          display:grid; grid-template-columns: 42px 1fr auto; align-items:center; gap: 14px;
          padding: 14px 20px; background: var(--hx-white);
          border: 1px solid var(--hx-line); border-radius: 16px;
          font: inherit; text-align:left; color: var(--hx-ink); cursor:pointer;
          transition: transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .4s ease;
        }
        .hx-pill::before {
          content:""; position:absolute; inset:0; z-index:0;
          background: linear-gradient(90deg, rgba(30,158,110,.14), rgba(30,158,110,0));
          transform: scaleX(0); transform-origin:left; transition: transform .5s cubic-bezier(.2,.8,.2,1);
        }
        .hx-pill > * { position: relative; z-index: 1; }
        .hx-pill:hover { transform: translateX(6px); border-color: rgba(11,96,69,.45); }
        .hx-pill:hover::before { transform: scaleX(1); }
        .hx-pill--on { transform: translateX(14px); border-color: var(--hx-g2); box-shadow: 0 20px 36px -22px rgba(7,59,42,.4); }
        .hx-pill--on::before { transform: scaleX(1); }
        .hx-pill__icon {
          width: 42px; height: 42px; border-radius: 13px; display:grid; place-items:center;
          border: 1px solid rgba(11,96,69,.28); color: var(--hx-g2);
          transition: background .35s ease, color .35s ease, transform .4s ease;
        }
        .hx-pill--on .hx-pill__icon { background: var(--hx-g2); color: var(--hx-white); transform: rotate(-8deg); }
        .hx-pill__label { font-family:'Bricolage Grotesque',sans-serif; font-weight: 600; font-size: 18px; letter-spacing: -.01em; }
        .hx-pill__count { font-size: 13px; font-weight: 700; color: var(--hx-g2); opacity:.7; }
        .hx-pill__bar {
          position:absolute; left:0; bottom:0; height: 2.5px; width:100%; z-index: 2;
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
          transform: scaleX(0); transform-origin:left;
        }
        .hx-pill--on .hx-pill__bar { animation: hxTimer 5s linear forwards; }
        @keyframes hxTimer { to { transform: scaleX(1); } }
        .hx-goals__shell.is-hold .hx-pill__bar,
        .hx-goals__shell.is-hold .hx-stage__arc { animation-play-state: paused; }

        .hx-stage {
          position: relative; overflow: hidden; min-height: 460px; padding: 48px;
          display:flex; flex-direction:column; justify-content:center;
          background: var(--hx-white); border: 1px solid var(--hx-line); border-radius: 30px;
          box-shadow: 0 2px 4px rgba(7,59,42,.05), 0 40px 80px -40px rgba(7,59,42,.3);
        }
        .hx-stage__dots {
          position:absolute; inset:0; pointer-events:none;
          background-image: radial-gradient(circle at 1px 1px, rgba(11,96,69,.16) 1px, transparent 0);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse at 100% 0%, #000 0%, transparent 65%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, #000 0%, transparent 65%);
          animation: hxDrift 18s linear infinite;
        }
        .hx-stage__inner {
          position:relative; display:grid; grid-template-columns: 150px 1fr; gap: 36px; align-items:center;
          animation: hxStageIn .7s cubic-bezier(.2,.8,.2,1) both;
        }
        @keyframes hxStageIn { from { opacity:0; transform: translateY(16px); filter: blur(4px); } to { opacity:1; transform:none; filter:none; } }
        .hx-stage__ringwrap { position:relative; width:150px; height:150px; display:grid; place-items:center; }
        .hx-stage__ring { position:absolute; inset:0; width:100%; height:100%; }
        .hx-stage__arc { animation: hxArc 5s linear forwards; }
        @keyframes hxArc { to { stroke-dashoffset: 0; } }
        .hx-stage__orbit {
          position:absolute; inset: 14px; border-radius:50%; border: 1px dashed rgba(11,96,69,.35);
          animation: hxSpin 14s linear infinite;
        }
        .hx-stage__orbit::after {
          content:""; position:absolute; top:-4px; left:50%; width:8px; height:8px; margin-left:-4px;
          border-radius:50%; background: var(--hx-g3);
        }
        .hx-stage__icon {
          position:relative; width: 62px; height: 62px; border-radius: 20px; font-size: 26px;
          display:grid; place-items:center; color: var(--hx-g2); background: var(--hx-white);
          border: 1px solid rgba(11,96,69,.3); box-shadow: 0 14px 26px -14px rgba(11,96,69,.5);
          animation: hxBob 4s ease-in-out infinite;
        }
        .hx-stage__kicker { font-size: 13.5px; font-weight: 700; color: var(--hx-g2); }
        .hx-stage__title { font-size: 36px; font-weight: 700; letter-spacing: -.025em; margin: 8px 0 12px; }
        .hx-stage__text { color: var(--hx-muted); line-height: 1.65; font-size: 16px; max-width: 42ch; margin: 0 0 24px; }
        .hx-stage__link {
          position:relative; display:inline-flex; align-items:center; gap: 9px;
          color: var(--hx-g2); font-weight: 700; font-size: 15px; text-decoration:none;
          padding-bottom: 4px; transition: gap .3s ease;
        }
        .hx-stage__link::after {
          content:""; position:absolute; left:0; right:0; bottom:0; height:1.5px; background: var(--hx-g2);
          transform: scaleX(.3); transform-origin:left; transition: transform .4s cubic-bezier(.2,.8,.2,1);
        }
        .hx-stage__link:hover { gap: 15px; }
        .hx-stage__link:hover::after { transform: scaleX(1); }

        /* =======================  VALUES / ORBIT  ======================= */
        .hx-values { position: relative; background: var(--hx-white); padding: 130px 5% 150px; overflow: hidden; }
        .hx-values__inner { max-width: 1180px; margin: 0 auto; }
        .hx-orbit { margin-top: 56px; display:flex; justify-content:center; }
        .hx-orbit__stage {
          --S: min(760px, 94vw);
          --R: calc(var(--S) * .36);
          position: relative; width: var(--S); aspect-ratio: 1;
          animation: hxT 50s linear infinite;
        }
        .hx-orbit__stage:hover { animation-play-state: paused; }
        @keyframes hxT { from { --hx-t: 0deg; } to { --hx-t: 360deg; } }

        .hx-orbit__ring {
          position:absolute; top:50%; left:50%; border-radius:50%; pointer-events:none;
          transform: translate(-50%,-50%);
        }
        .hx-orbit__ring--still { width: 72%; aspect-ratio:1; border: 1px solid rgba(11,96,69,.14); }
        .hx-orbit__ring--spin {
          width: 72%; aspect-ratio:1; border: 1.5px dashed rgba(11,96,69,.4);
          animation: hxSpinC 60s linear infinite reverse;
        }
        .hx-orbit__ring--scroll {
          width: 46%; aspect-ratio:1; border: 1px solid rgba(11,96,69,.3);
          border-top-color: var(--hx-g3); border-right-color: var(--hx-g3);
          transform: translate(-50%,-50%) rotate(calc(var(--p, 0) * 360deg));
        }
        @keyframes hxSpinC { to { transform: translate(-50%,-50%) rotate(360deg); } }

        .hx-node {
          position:absolute; left:50%; top:50%; width: 214px; z-index: 3;
          transform:
            translate(-50%,-50%)
            rotate(calc(var(--hx-t) + var(--a)))
            translateX(var(--R))
            rotate(calc((var(--hx-t) + var(--a)) * -1));
        }
        .hx-node__card {
          display:flex; align-items:center; gap: 12px; padding: 13px 16px; border-radius: 20px;
          background: var(--hx-white); border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .4s ease;
        }
        .hx-node__card:hover {
          transform: scale(1.08); border-color: var(--hx-g2);
          box-shadow: 0 26px 44px -22px rgba(7,59,42,.45);
        }
        .hx-node__icon {
          width: 38px; height: 38px; border-radius: 12px; flex-shrink:0; display:grid; place-items:center;
          color: var(--hx-g2); border: 1px solid rgba(11,96,69,.3); font-size: 15px;
          transition: background .3s ease, color .3s ease, transform .4s ease;
        }
        .hx-node__card:hover .hx-node__icon { background: var(--hx-g2); color: var(--hx-white); transform: rotate(-10deg); }
        .hx-node__body { display:flex; flex-direction:column; line-height:1.3; min-width:0; }
        .hx-node__body strong { font-family:'Bricolage Grotesque',sans-serif; font-weight: 700; font-size: 15px; }
        .hx-node__body small { font-size: 12px; color: var(--hx-muted); margin-top: 2px; }

        .hx-core {
          position:absolute; top:50%; left:50%; transform: translate(-50%,-50%);
          width: 150px; height: 150px; border-radius:50%; display:grid; place-items:center; z-index: 2;
          background: var(--hx-white); border: 1.5px solid var(--hx-g2);
          box-shadow: 0 24px 50px -22px rgba(11,96,69,.55);
        }
        .hx-core svg { width: 56px; height: 56px; margin-top: -10px; }
        .hx-core__shield, .hx-core__tick { stroke-dasharray: 1; stroke-dashoffset: 1; animation: hxDrawLoop 5s ease-in-out infinite; }
        .hx-core__tick { animation-delay: .5s; }
        @keyframes hxDrawLoop { 0%{stroke-dashoffset:1} 35%,80%{stroke-dashoffset:0} 100%{stroke-dashoffset:-1} }
        .hx-core__pulse {
          position:absolute; inset:-1.5px; border-radius:50%; border: 1.5px solid var(--hx-g3);
          animation: hxCorePulse 3s ease-out infinite;
        }
        .hx-core__pulse--b { animation-delay: 1.5s; }
        @keyframes hxCorePulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(1.9);opacity:0} }
        .hx-core__label { position:absolute; bottom: 24px; font-family:'Bricolage Grotesque',sans-serif; font-size: 11px; font-weight:700; letter-spacing: .18em; color: var(--hx-g2); }

        @keyframes hxSpin { to { transform: rotate(360deg); } }

        /* =======================  Responsive  ======================= */
        @media (max-width: 1024px) {
          .hx-goals__shell { grid-template-columns: 1fr; }
          .hx-stage { min-height: 400px; }
        }
        @media (max-width: 900px) {
          .hx-state__pin { grid-template-columns: 1fr; gap: 18px; align-content: center; }
          .hx-merge { width: min(300px, 70vw); }
          .hx-card-wrap--low { margin-top: 0; }
          .hx-card { min-height: 290px; }
          .hx-card__bgnum { font-size: 110px; transform: none; }

          .hx-tl { padding: 100px 6% 110px; }
          .hx-tl__rail { left: 32px; }
          .hx-tl__head { left: 32px; }
          .hx-tl__item { grid-template-columns: 64px 1fr; gap: 16px; align-items: start; }
          .hx-tl__num { grid-column: 1; width: 64px; height: 64px; font-size: 20px; }
          .hx-tl__item--l .hx-tl__card,
          .hx-tl__item--r .hx-tl__card { grid-column: 2; text-align: left; }
          .hx-tl__item--l, .hx-tl__item--r { --dir: 1; }
          .hx-tl__item--l .hx-tl__card::after { transform-origin: left; }
        }
        @media (max-width: 760px) {
          .hx-orbit__stage { width: 100%; aspect-ratio: auto; display:grid; gap: 12px; animation: none; }
          .hx-orbit__ring { display:none; }
          .hx-node { position: static; width: auto; transform: none; }
          .hx-core { position: relative; top:auto; left:auto; transform:none; margin: 0 auto 18px; order:-1; }
        }
        @media (max-width: 640px) {
          .hx-goals { padding: 90px 6%; }
          .hx-stage { padding: 30px 24px; }
          .hx-stage__inner { grid-template-columns: 1fr; justify-items: start; }
          .hx-stage__title { font-size: 28px; }
          .hx-values { padding: 90px 6% 100px; }
          .hx-pill--on { transform: translateX(8px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-page *, .hx-page *::before, .hx-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .hx-reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
          .hx-line > span { transform: none !important; }
          .hx-eyebrow, .hx-sub { opacity: 1 !important; transform: none !important; }
          .hx-stage__arc { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="hx-progress" aria-hidden="true">
        <i ref={barRef} />
      </div>

      {/* Hero (unchanged) */}
      <div className="hx-hero-slot">
        <HeroSection />
      </div>

      <HxBand innerRef={bandRef} />
      <HxStatementSection />
      <HxServicesSection />
      <HxTimelineSection />
      <HxGoalsSection />
      <HxValuesSection />

      <CTASection
        title="Plan today. Build tomorrow."
        subtitle="Financial solutions designed around your goals, priorities, and future security."
        primaryBtnText="Explore Our Services"
        primaryBtnLink="/services"
        secondaryBtnText="Talk to Us"
        secondaryBtnLink="/contact"
      />
    </div>
  );
};

export default Home;
