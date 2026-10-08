import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Check, Laptop, UsersRound } from "lucide-react";
import { classes, classSubjects } from "../data/content";

export default function ClassPicker() {
  const [selected, setSelected] = useState("Class 8");
  const navigate = useNavigate();
  const subjects = useMemo(() => classSubjects[selected] || [], [selected]);

  return (
    <section id="classes" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">CHOOSE YOUR CLASS</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Find the <span className="text-blue-700">Right Class</span> for Your Child</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Pick a class to see the subjects, academic focus and available formats.</p>
        </div>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-[1.38fr_.92fr]">
          <div className="grid content-start grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7">
            {classes.map(item => (
              <button key={item} onClick={() => setSelected(item)} className={`h-[112px] rounded-2xl border p-3 text-center transition duration-300 ${selected === item ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-100 -translate-y-0.5" : "border-slate-100 bg-white text-slate-600 shadow-card hover:-translate-y-1 hover:border-blue-200"}`}>
                <span className={`mx-auto mb-2 grid h-9 w-9 place-items-center rounded-xl ${selected === item ? "bg-white/15" : "bg-blue-50 text-blue-700"}`}><BookOpen size={16}/></span>
                <span className="text-[10px] font-extrabold leading-tight">{item}</span>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 shadow-card sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div><p className="text-[10px] font-extrabold tracking-widest text-blue-700">SELECTED CLASS</p><h3 className="mt-1 text-2xl font-black text-slate-950">{selected}</h3></div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm"><Laptop size={20}/></span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {subjects.map(s => <div key={s} className="flex min-h-10 items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-slate-700"><Check size={14} className="shrink-0 text-emerald-500"/>{s}</div>)}
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Learning formats</p>
              <div className="mt-2 grid gap-2">
                {[['1:1','Personalised'],['5:1','Small Group'],['20:1','Group Batch']].map(([ratio,label]) => <div key={ratio} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5"><span className="flex items-center gap-2 text-[11px] font-bold text-slate-700"><UsersRound size={14} className="text-blue-700"/>{ratio} {label}</span><span className="text-[9px] font-bold text-emerald-600">Available</span></div>)}
              </div>
            </div>
            <button onClick={() => navigate('/contact')} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800">Get Class Details <ArrowRight size={16}/></button>
          </div>
        </div>
      </div>
    </section>
  );
}
