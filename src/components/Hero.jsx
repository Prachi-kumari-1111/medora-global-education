import { ArrowRight, Globe2, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    eyebrow: "GLOBAL LEARNING • PERSONAL ATTENTION",
    title: "Learning that feels personal.\nResults that feel global.",
    text: "Live online education for Classes 1–12, foundation and academic mentoring — built around the learner, not just the syllabus.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=88",
    tag: "Smart learning, anywhere"
  },
  {
    eyebrow: "1:1 PERSONALISED LEARNING",
    title: "One learner.\nOne plan. Full attention.",
    text: "Focused live sessions, customised study plans and continuous academic support for students who need a more personal approach.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=88",
    tag: "Personalised pathway"
  },
  {
    eyebrow: "SMALL GROUP EXPERIENCE",
    title: "Small groups.\nBigger participation.",
    text: "Interactive learning that gives students the confidence to ask, practise, discuss and improve together.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=88",
    tag: "5:1 interactive learning"
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % heroSlides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-slate-950">
      {heroSlides.map((item, i) => (
        <img
          key={item.image}
          src={item.image}
          alt="Medora global learning"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${i === index ? "opacity-100 hero-zoom" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/58 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />
      <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl soft-pulse" />
      <div className="absolute bottom-0 right-[25%] h-72 w-72 rounded-full bg-violet-400/15 blur-3xl drift-soft" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1500px] items-center px-5 py-20 sm:px-8 lg:px-12">
        <div key={index} className="max-w-3xl text-white reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[.18em] text-white backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-300" /> {slide.eyebrow}
          </div>

          <h1 className="mt-7 whitespace-pre-line text-5xl font-extrabold leading-[.96] tracking-[-.045em] sm:text-6xl lg:text-[82px]">
            {slide.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => navigate('/contact')} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-cyan-50">
              Book Free Counselling <ArrowRight size={17} />
            </button>
            <button onClick={() => navigate('/programs')} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20">
              <Play size={14} fill="currentColor" /> Explore Programs
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-white/80">
            <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-md">{slide.tag}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <Globe2 size={14} className="text-cyan-300" /> India + Global Learners
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 right-5 hidden w-[270px] rounded-3xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-xl lg:block xl:right-10">
          <div className="flex items-center gap-2 text-xs font-extrabold"><CheckCircle2 size={16} className="text-emerald-300" /> Expert teachers</div>
          <p className="mt-2 text-[10px] text-white/65">Live, interactive and curriculum-aware support.</p>
        </div>

        <div className="absolute right-5 top-1/2 hidden w-[210px] -translate-y-1/2 rounded-3xl border border-white/20 bg-slate-950/30 p-4 text-white backdrop-blur-xl lg:block xl:right-10 float-soft">
          <p className="text-[9px] font-black uppercase tracking-[.18em] text-cyan-300">Medora approach</p>
          <p className="mt-2 text-sm font-extrabold">Learn • Practise • Progress</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-3/4 rounded-full bg-cyan-300" /></div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/15 bg-slate-950/35 p-2 backdrop-blur-md">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
