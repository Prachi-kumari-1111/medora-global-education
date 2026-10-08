import { ArrowRight, Check, UserRound, Users, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { learningModels } from "../data/content";

const icons = { "1:1": UserRound, "5:1": Users, "20:1": UsersRound };
const tones = { blue: "from-blue-50 to-white border-blue-100", violet: "from-violet-50 to-white border-violet-100", green: "from-emerald-50 to-white border-emerald-100" };

export default function LearningModels() {
  const navigate = useNavigate();
  return (
    <section id="learning-models" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-xs font-extrabold tracking-[.22em] text-blue-700">COMPARE FORMATS</p><h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Three ways to learn. One Medora standard.</h2></div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Every format includes live teaching, academic support and progress visibility.</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {learningModels.map(m => { const Icon = icons[m.id]; return (
            <article key={m.id} className={`group overflow-hidden rounded-[28px] border bg-gradient-to-br ${tones[m.tone]} shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft`}>
              <div className="relative h-52 overflow-hidden"><img src={m.image} alt={m.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent"/><div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-blue-700 shadow"><Icon size={21}/></div><div className="absolute bottom-4 left-4 text-white"><div className="text-sm font-black">{m.id} • {m.title}</div><div className="mt-1 text-[11px] font-semibold text-white/80">{m.ratio}</div></div></div>
              <div className="p-5"><p className="text-sm leading-6 text-slate-600">{m.description}</p><ul className="mt-4 grid gap-2">{m.bullets.map(b => <li key={b} className="flex items-center gap-2 text-xs font-semibold text-slate-600"><Check size={14} className="shrink-0 text-blue-600"/>{b}</li>)}</ul><button onClick={() => navigate('/contact')} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700">{m.cta}<ArrowRight size={14}/></button></div>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
}
