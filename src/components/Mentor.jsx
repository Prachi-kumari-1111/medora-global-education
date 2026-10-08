import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = ["Academic Mentor", "Learning Assessment", "Personalised Study Plan", "Regular Progress Review", "Parent Feedback", "Continuous Improvement"];

export default function Mentor() {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] shadow-soft">
          <img src="https://images.pexels.com/photos/36769588/pexels-photo-36769588.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Students working together" className="h-[340px] w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent"/>
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 backdrop-blur"><div className="text-[10px] font-black tracking-widest text-blue-700">MEDORA MENTORING</div><div className="mt-1 text-lg font-black text-slate-900">Support beyond the classroom</div></div>
        </div>
        <div>
          <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">SPECIAL MENTOR SUPPORT</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">More Than Just Classes</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">We don't just teach. We guide, mentor and monitor every learner through a simple, measurable learning journey.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{steps.map((s,i)=><div key={s} className="flex items-center gap-2 rounded-2xl bg-white p-3 shadow-card"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[10px] font-black text-blue-700">{String(i+1).padStart(2,'0')}</span><span className="text-xs font-bold text-slate-700">{s}</span></div>)}</div>
          <button onClick={() => navigate('/contact')} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700">Talk to a Mentor <ArrowRight size={15}/></button>
        </div>
      </div>
    </section>
  );
}
