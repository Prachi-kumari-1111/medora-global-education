import { ArrowRight, BrainCircuit, GraduationCap, Sparkles, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { curricula, programs } from "../data/content";

const icons = [GraduationCap, BrainCircuit, Target, Sparkles];
const heroImage = "https://images.pexels.com/photos/8199165/pexels-photo-8199165.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function Programs() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative min-h-[76vh] overflow-hidden bg-slate-950 text-white">
        <img src={heroImage} alt="Students collaborating" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16">
          <div className="max-w-3xl reveal-up">
            <p className="text-[10px] font-black tracking-[.3em] text-cyan-300">MEDORA PROGRAMS</p>
            <h1 className="mt-4 text-5xl font-black leading-[.96] tracking-[-.04em] sm:text-6xl lg:text-7xl">Purpose-built programs for every learning stage.</h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">School support, foundation building, exam preparation and academic mentoring — each pathway has a clear goal and a measurable next step.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 hover:bg-cyan-50">Find the right program <ArrowRight size={17}/></button>
              <button onClick={() => navigate("/classes")} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-extrabold backdrop-blur-md hover:bg-white/15">Browse classes</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black tracking-[.28em] text-blue-700">PROGRAM COLLECTION</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Choose support with a reason.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">These programs are intentionally different — so families can choose the right academic outcome, not just another class.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => {
              const Icon = icons[i % icons.length];
              return (
                <article key={p.title} className="group overflow-hidden rounded-[30px] border border-slate-100 bg-slate-50 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative h-64 overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-blue-700">{p.tag}</span>
                    <div className="absolute bottom-5 left-5 right-5 text-white"><p className="text-[10px] font-black uppercase tracking-widest text-cyan-200">Medora pathway</p><h3 className="mt-1 text-2xl font-black">{p.title}</h3></div>
                  </div>
                  <div className="p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700"><Icon size={20}/></div>
                    <p className="mt-4 text-sm leading-7 text-slate-500">{p.description}</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">{p.points.map(point => <div key={point} className="rounded-xl bg-white px-3 py-2.5 text-xs font-bold text-slate-700">{point}</div>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div><p className="text-[10px] font-black tracking-[.28em] text-blue-700">CURRICULUM MATCH</p><h2 className="mt-3 text-4xl font-black text-slate-950">Your board. Your country. Your plan.</h2><p className="mt-4 text-sm leading-7 text-slate-500">Medora supports school systems across India and international destinations, with counselling before the program starts.</p><button onClick={() => navigate('/contact')} className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white hover:bg-blue-700">Talk to a counsellor <ArrowRight size={16}/></button></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{curricula.map(([name, country, flag]) => <div key={name} className="rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm transition hover:-translate-y-1"><div className="text-2xl">{flag}</div><div className="mt-2 text-xs font-black text-slate-800">{name}</div><div className="mt-1 text-[9px] text-slate-400">{country}</div></div>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
