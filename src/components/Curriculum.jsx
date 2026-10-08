import { ArrowRight, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { curricula } from "../data/content";

export default function Curriculum() {
  const navigate = useNavigate();
  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">GLOBAL CURRICULUM</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">One Platform. <span className="text-blue-700">Multiple Curriculums.</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">We support learners from India and around the world.</p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {curricula.map(([name, country, flag]) => (
            <div key={name} className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-card transition hover:-translate-y-1 hover:border-blue-100">
              <div className="text-2xl">{flag}</div>
              <div className="mt-2 text-xs font-black text-slate-800">{name}</div>
              <div className="mt-1 text-[9px] font-semibold text-slate-400">{country}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-violet-50 p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm"><Globe2 size={20}/></span>
            <p className="text-sm font-bold text-slate-700">Tell us your child's curriculum and we'll recommend the right learning plan.</p>
          </div>
          <button onClick={() => navigate("/contact")} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white hover:bg-blue-800">
            Talk to an Academic Counsellor <ArrowRight size={15}/>
          </button>
        </div>
      </div>
    </section>
  );
}
