import { Globe2, MapPin } from "lucide-react";
import { countries } from "../data/content";

export default function GlobalReach() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">COUNTRIES WE SERVE</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Learning Without Borders</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">We support students across 20+ countries with flexible online learning, curriculum-aware teaching and time-zone friendly schedules.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {countries.map(c => <span key={c} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-extrabold text-blue-700">{c}</span>)}
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 shadow-card">
            <div className="absolute inset-8 rounded-full border border-blue-200/60"/>
            <div className="absolute inset-16 rounded-full border border-blue-200/50"/>
            <div className="absolute inset-24 rounded-full border border-blue-200/40"/>
            <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue-700 text-white shadow-xl shadow-blue-200"><Globe2 size={42}/></div>
            {[
              ["India", "left-[20%] top-[23%]"], ["UAE", "right-[16%] top-[30%]"], ["UK", "left-[31%] top-[10%]"],
              ["USA", "left-[9%] bottom-[22%]"], ["Australia", "right-[15%] bottom-[18%]"], ["Canada", "right-[30%] top-[9%]"]
            ].map(([name, pos]) => <div key={name} className={`absolute ${pos} flex items-center gap-1 rounded-full bg-white px-2.5 py-1.5 text-[9px] font-black text-slate-700 shadow-card`}><MapPin size={11} className="text-blue-600"/>{name}</div>)}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 shadow"><div className="text-[9px] font-bold text-slate-400">GLOBAL LEARNING</div><div className="text-sm font-black text-slate-900">20+ Countries • One Platform</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
