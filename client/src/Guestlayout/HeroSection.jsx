import { useEffect, useRef, useState } from "react";
import LaserFlow from "./LaserFlow";

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
};

/* Tracks scroll progress of an element in [0, 1] across the viewport */
const useScrollProgress = (ref) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when top of element at bottom of viewport, 1 when bottom of element at top
      const total = vh + rect.height;
      const scrolled = vh - rect.top;
      setP(Math.min(1, Math.max(0, scrolled / total)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
};

/* 3D tilt on mouse move — returns ref + handlers */
const useTilt = (max = 8) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(2)}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
};

/* Magnetic button — nudges toward the cursor */
const useMagnetic = (strength = 0.25) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.setProperty("--tx", `${(x * strength).toFixed(2)}px`);
    el.style.setProperty("--ty", `${(y * strength).toFixed(2)}px`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
};

/* Words that rotate in the title on an interval */
const ROTATING = [
  "Build tomorrow.",
  "Protect tomorrow.",
  "Grow tomorrow.",
  "Fund tomorrow.",
];

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const rootRef = useRef(null);
  const cardRef = useRef(null); // surfaceRef for LaserFlow
  const reduced = useReducedMotion();
  const progress = useScrollProgress(rootRef);
  const [wordIdx, setWordIdx] = useState(0);
  // const [copied, setCopied] = useState(false); // not used, reserved

  const cardTilt = useTilt(6);
  const btnA = useMagnetic(0.2);
  const btnB = useMagnetic(0.2);

  // Rotate the italic accent
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING.length),
      2800,
    );
    return () => clearInterval(id);
  }, [reduced]);

  // Derived transforms from scroll
  const copyY = reduced ? 0 : (1 - progress) * 40; // parallax on copy
  const cardY = reduced ? 0 : (1 - progress) * -30; // opposite parallax on card
  const cardScale = reduced ? 1 : 0.94 + progress * 0.06; // gentle "settle in"
  const beamOpacity = reduced ? 1 : 0.65 + progress * 0.35;

  return (
    <section
      ref={rootRef}
      className="inv-hero"
      data-progress={progress.toFixed(3)}
    >
      {/* Ambient background layers */}
      <div className="inv-hero-bg" aria-hidden="true">
        <div className="inv-hero-grid" />
        <div className="inv-hero-glow inv-hero-glow--gold" />
        <div className="inv-hero-glow inv-hero-glow--emerald" />
        <div className="inv-hero-scan" />
      </div>

      {/* Laser beam */}
      <div
        className="inv-hero-beam"
        style={{ opacity: beamOpacity, transition: "opacity 400ms ease" }}
      >
        <LaserFlow
          surfaceRef={cardRef}
          beamPosition={0.6}
          color="#0B6045"
          intensity={2.2}
          flare={1.5}
          spread={2}
          spill={1}
          fog={0.15}
          dust={1.4}
          revealImage="/hero.png"
          revealRadius={220}
          revealOpacity={0.65}
          beamWidth={1.5}
          streaks={1.5}
          dots={1}
          pulse={1.5}
          speed={3}
          seed={3}
          mouseInteraction
          intro
          theme="light"
        />
      </div>

      {/* ---------------- Copy ---------------- */}
      <div
        className="inv-hero-copy"
        style={{ transform: `translateY(calc(-50% + ${copyY}px))` }}
      >
        <span className="inv-hero-kicker">
          <span className="inv-hero-kicker-line" />
          <span className="inv-hero-kicker-text">
            Wealth Growth &amp; Protection
          </span>
          <span className="inv-hero-kicker-line" />
        </span>

        <h1 className="inv-hero-title">
          <span className="inv-hero-title-line inv-hero-title-line--1">
            <span>Plan today.</span>
          </span>
          <span className="inv-hero-title-line inv-hero-title-line--2">
            <em key={wordIdx} className="inv-hero-title-accent">
              {ROTATING[wordIdx]}
            </em>
          </span>
        </h1>

        <p className="inv-hero-sub">
          Structured, ethical, and goal-oriented financial consultation — mutual
          funds, insurance, loans, and land, under one roof.
        </p>

        <div className="inv-hero-cta">
          <a
            href="/services"
            ref={btnA.ref}
            onMouseMove={btnA.onMouseMove}
            onMouseLeave={btnA.onMouseLeave}
            className="inv-btn inv-btn-primary"
          >
            <span className="inv-btn-label">Explore Services</span>
            <svg
              className="inv-btn-arrow"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="/contact"
            ref={btnB.ref}
            onMouseMove={btnB.onMouseMove}
            onMouseLeave={btnB.onMouseLeave}
            className="inv-btn inv-btn-ghost"
          >
            <span className="inv-btn-label">Talk to an Advisor</span>
            <svg
              className="inv-btn-arrow"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <ul className="inv-hero-trust">
          <li>
            <span className="dot" />
            GSTIN: 29AAICI5060P1ZX
          </li>
          <li>
            <span className="dot" />
            Kundapura, Karnataka
          </li>
          <li>
            <span className="dot" />
            Trusted by 500+ families
          </li>
        </ul>
      </div>

      {/* ---------------- Card ---------------- */}
      <div
        className="inv-hero-card-wrap"
        style={{ transform: `translateY(${cardY}px) scale(${cardScale})` }}
      >
        <div
          ref={(el) => {
            // bridge two refs
            cardTilt.ref.current = el;
            cardRef.current = el;
          }}
          onMouseMove={cardTilt.onMouseMove}
          onMouseLeave={cardTilt.onMouseLeave}
          className="inv-hero-card"
        >
          <img
            src="/hero.png"
            alt="InvestNow dashboard preview"
            className="inv-hero-card-img"
            onError={(e) =>
              console.error("hero.png failed to load — check public/hero.png")
            }
          />
          <div className="inv-hero-card-shine" />
          <div className="inv-hero-card-overlay" />
          <div className="inv-hero-card-corner inv-hero-card-corner--tl" />
          <div className="inv-hero-card-corner inv-hero-card-corner--tr" />
          <div className="inv-hero-card-corner inv-hero-card-corner--bl" />
          <div className="inv-hero-card-corner inv-hero-card-corner--br" />
        </div>
      </div>

     

      {/* -------------------------- Styles -------------------------- */}
      <style>{`
        .inv-hero {
          position: relative;
          width: 100%;
          min-height: 640px;
          height: clamp(560px, 78vh, 780px);
          overflow: hidden;
          background: #FBF8F1;
          isolation: isolate;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* ---------- Ambient background ---------- */
        .inv-hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }

        .inv-hero-grid {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(7, 59, 42, 0.06) 1px, transparent 0);
          background-size: 26px 26px;
          animation: invGridDrift 40s linear infinite;
        }
        @keyframes invGridDrift {
          from { background-position: 0 0; }
          to   { background-position: 260px 260px; }
        }

        .inv-hero-glow {
          position: absolute;
          width: 640px; height: 640px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
          mix-blend-mode: multiply;
        }
        .inv-hero-glow--gold {
          left: -180px; bottom: -220px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.35), transparent 65%);
          animation: invFloatA 18s ease-in-out infinite;
        }
        .inv-hero-glow--emerald {
          right: -200px; top: -180px;
          background: radial-gradient(circle, rgba(11, 96, 69, 0.22), transparent 65%);
          animation: invFloatB 22s ease-in-out infinite;
        }
        @keyframes invFloatA {
          0%,100% { transform: translate(0, 0) scale(1); }
          50%     { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes invFloatB {
          0%,100% { transform: translate(0, 0) scale(1); }
          50%     { transform: translate(-50px, 30px) scale(1.1); }
        }

        /* subtle horizontal scan sheen */
        .inv-hero-scan {
          position: absolute; inset: 0;
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 70%
          );
          background-size: 220% 100%;
          animation: invScan 9s ease-in-out infinite;
          opacity: 0.5;
        }
        @keyframes invScan {
          0%   { background-position: -40% 0; }
          100% { background-position: 140% 0; }
        }

        /* ---------- Laser overlay wrapper ---------- */
        .inv-hero-beam {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
        }

        /* ---------- Copy ---------- */
        .inv-hero-copy {
          position: absolute;
          z-index: 3;
          top: 50%;
          left: clamp(24px, 6vw, 96px);
          right: clamp(24px, 6vw, 96px);
          max-width: 620px;
          color: #17231E;
          transition: transform 400ms cubic-bezier(.2,.7,.2,1);
          will-change: transform;
        }

        /* Kicker */
        .inv-hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          letter-spacing: 0.02em;
          color: #997819;
          margin-bottom: 20px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) both;
        }
        .inv-hero-kicker-line {
          width: 26px; height: 1px;
          background: linear-gradient(90deg, #D4AF37, transparent);
          transform-origin: left center;
          animation: invLineGrow 1.1s cubic-bezier(.2,.7,.2,1) 200ms both;
        }
        .inv-hero-kicker-line:last-child {
          transform-origin: right center;
          background: linear-gradient(270deg, #D4AF37, transparent);
        }
        @keyframes invLineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        /* Title */
        .inv-hero-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: clamp(38px, 5.4vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
          color: #073B2A;
        }
        .inv-hero-title-line {
          display: block;
          overflow: hidden;
        }
        .inv-hero-title-line > span,
        .inv-hero-title-line > em { display: inline-block; }

        .inv-hero-title-line--1 > span {
          animation: invRise 900ms cubic-bezier(.2,.7,.2,1) 100ms both;
        }
        .inv-hero-title-line--2 > em {
          animation: invAccentIn 700ms cubic-bezier(.2,.7,.2,1) both,
                     invAccentPulse 3.4s ease-in-out infinite 700ms;
          color: #997819;
          font-style: italic;
          font-weight: 500;
        }
        @keyframes invRise {
          from { transform: translateY(105%); }
          to   { transform: translateY(0); }
        }
        @keyframes invAccentIn {
          0%   { transform: translateY(105%) rotate(-2deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0); opacity: 1; }
        }
        @keyframes invAccentPulse {
          0%, 100% { text-shadow: 0 0 0 rgba(212, 175, 55, 0); }
          50%      { text-shadow: 0 0 22px rgba(212, 175, 55, 0.35); }
        }

        /* Sub */
        .inv-hero-sub {
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.7;
          color: #5B6B63;
          max-width: 52ch;
          margin: 0 0 34px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 380ms both;
        }
        @keyframes invFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* CTA */
        .inv-hero-cta {
          display: flex; flex-wrap: wrap; gap: 14px;
          margin-bottom: 34px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 520ms both;
        }

        .inv-btn {
          --tx: 0px; --ty: 0px;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 3px;
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transform: translate3d(var(--tx), var(--ty), 0);
          transition:
            background-color 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.18s ease;
          overflow: hidden;
        }

        .inv-btn-label { position: relative; z-index: 2; }
        .inv-btn-arrow {
          width: 16px; height: 16px;
          position: relative; z-index: 2;
          transition: transform 0.3s ease;
        }
        .inv-btn:hover .inv-btn-arrow { transform: translateX(4px); }

        /* Ripple-like sheen */
        .inv-btn::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(160px circle at var(--rx,50%) var(--ry,50%),
            rgba(255,255,255,0.28), transparent 60%);
          opacity: 0; transition: opacity 0.3s ease;
          z-index: 1;
        }
        .inv-btn:hover::before { opacity: 1; }

        .inv-btn-primary {
          background: #073B2A;
          color: #FBF8F1;
          border-color: #073B2A;
          box-shadow: 0 0 0 0 rgba(11, 96, 69, 0.35);
        }
        .inv-btn-primary:hover {
          background: #0B6045;
          border-color: #0B6045;
          box-shadow:
            0 12px 28px -10px rgba(7, 59, 42, 0.35),
            0 0 0 8px rgba(11, 96, 69, 0.08);
        }

        .inv-btn-ghost {
          background: #FFFFFF;
          color: #073B2A;
          border-color: rgba(7, 59, 42, 0.22);
        }
        .inv-btn-ghost:hover {
          border-color: #D4AF37;
          color: #997819;
          background: rgba(212, 175, 55, 0.08);
          box-shadow: 0 10px 24px -12px rgba(212, 175, 55, 0.5);
        }

        /* Trust strip */
        .inv-hero-trust {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-wrap: wrap; gap: 22px;
          font-size: 12.5px; letter-spacing: 0.02em;
          color: #7A8A82;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 660ms both;
        }
        .inv-hero-trust li {
          display: inline-flex; align-items: center; gap: 8px;
          position: relative;
        }
        .inv-hero-trust .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #D4AF37;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.55);
          animation: invDotPulse 2.6s ease-in-out infinite;
        }
        .inv-hero-trust li:nth-child(2) .dot { animation-delay: .35s; }
        .inv-hero-trust li:nth-child(3) .dot { animation-delay: .7s; }
        @keyframes invDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.5); }
          50%      { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
        }

        /* ---------- Card ---------- */
        .inv-hero-card-wrap {
          position: absolute;
          left: 55%;
          right: 6%;
          top: 55%;
          bottom: -24px;
          z-index: 2;
          perspective: 1200px;
          transition: transform 500ms cubic-bezier(.2,.7,.2,1);
          will-change: transform;
        }

        .inv-hero-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: #FFFFFF;
          overflow: hidden;
          border: 1px solid rgba(7, 59, 42, 0.12);
          box-shadow:
            0 30px 70px -24px rgba(7, 59, 42, 0.28),
            0 10px 26px -14px rgba(7, 59, 42, 0.14);
          transform:
            rotateX(var(--rx, 0deg))
            rotateY(var(--ry, 0deg));
          transition: transform 350ms cubic-bezier(.2,.7,.2,1),
                      box-shadow 350ms ease;
          transform-style: preserve-3d;
        }
        .inv-hero-card:hover {
          box-shadow:
            0 40px 90px -28px rgba(7, 59, 42, 0.35),
            0 14px 34px -16px rgba(7, 59, 42, 0.18),
            0 0 0 6px rgba(212, 175, 55, 0.08);
        }

        .inv-hero-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.001);
          transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
        }
        .inv-hero-card:hover .inv-hero-card-img { transform: scale(1.04); }

        /* Shine that follows the pointer */
        .inv-hero-card-shine {
          position: absolute; inset: 0;
          background:
            radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%),
              rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 55%);
          mix-blend-mode: soft-light;
          opacity: 0; transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .inv-hero-card:hover .inv-hero-card-shine { opacity: 1; }

        .inv-hero-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 59, 42, 0.06) 0%,
            rgba(7, 59, 42, 0) 45%
          );
          pointer-events: none;
        }

        /* Corner gold L's — animate in */
        .inv-hero-card-corner {
          position: absolute;
          width: 26px; height: 26px;
          border: 2px solid #D4AF37;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(.2,.7,.2,1);
          pointer-events: none;
        }
        .inv-hero-card:hover .inv-hero-card-corner { opacity: 1; transform: scale(1); }
        .inv-hero-card-corner--tl { top: 12px; left: 12px; border-right: 0; border-bottom: 0; }
        .inv-hero-card-corner--tr { top: 12px; right: 12px; border-left: 0; border-bottom: 0; }
        .inv-hero-card-corner--bl { bottom: 12px; left: 12px; border-right: 0; border-top: 0; }
        .inv-hero-card-corner--br { bottom: 12px; right: 12px; border-left: 0; border-top: 0; }
        .inv-hero-card:hover .inv-hero-card-corner--tl { transition-delay: 0ms; }
        .inv-hero-card:hover .inv-hero-card-corner--tr { transition-delay: 60ms; }
        .inv-hero-card:hover .inv-hero-card-corner--br { transition-delay: 120ms; }
        .inv-hero-card:hover .inv-hero-card-corner--bl { transition-delay: 180ms; }

        /* ---------- Scroll hint ---------- */
        .inv-hero-scroll-hint {
          position: absolute;
          left: 50%; bottom: 22px;
          transform: translateX(-50%);
          z-index: 4;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          color: #7A8A82;
          font-size: 10.5px; letter-spacing: 0.32em; font-weight: 600;
          animation: invFadeUp 900ms ease 900ms both;
        }
        .inv-hero-scroll-line {
          width: 1px; height: 42px;
          background: linear-gradient(to bottom, transparent, #073B2A 40%, transparent);
          position: relative; overflow: hidden;
        }
        .inv-hero-scroll-line::after {
          content: "";
          position: absolute; left: 0; right: 0; height: 14px;
          background: #D4AF37;
          animation: invScrollDot 2.4s ease-in-out infinite;
        }
        @keyframes invScrollDot {
          0%   { top: -14px; }
          100% { top: 42px; }
        }
        .inv-hero-scroll-text { opacity: 0.75; }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .inv-hero {
            height: auto;
            min-height: 760px;
            padding: 90px 0 40px;
          }
          .inv-hero-copy {
            position: relative;
            top: auto; left: auto; right: auto;
            transform: none !important;
            max-width: 720px;
            margin: 0 auto;
            padding: 0 6vw;
          }
          .inv-hero-card-wrap {
            position: relative;
            left: auto; right: auto; top: auto; bottom: auto;
            margin: 56px auto 0;
            width: min(720px, 88vw);
            height: 400px;
            transform: none !important;
          }
          .inv-hero-scroll-hint { display: none; }
        }

        @media (max-width: 640px) {
          .inv-hero { min-height: 700px; padding-top: 72px; }
          .inv-hero-title { font-size: clamp(32px, 9vw, 44px); }
          .inv-hero-sub { font-size: 14.5px; margin-bottom: 26px; }
          .inv-hero-cta { flex-direction: column; align-items: stretch; gap: 10px; }
          .inv-btn { justify-content: center; width: 100%; }
          .inv-hero-trust { gap: 14px; font-size: 11.5px; }
          .inv-hero-card-wrap {
            margin-top: 44px;
            height: 300px;
            border-radius: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .inv-hero *, .inv-hero *::before, .inv-hero *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
