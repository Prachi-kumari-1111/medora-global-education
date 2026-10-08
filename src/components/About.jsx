import { Eye, HeartHandshake, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[34px] shadow-soft">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=88" alt="Student learning with books" className="h-[420px] w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent"/>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur"><div className="text-[10px] font-black tracking-widest text-blue-700">OUR CORE PHILOSOPHY</div><div className="mt-1 text-lg font-black text-slate-900">LOOK • UNDERSTAND • MASTER</div></div>
          </div>
          <div>
            <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">WHO WE ARE</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">A learning partner for families everywhere.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Medora Global Education combines expert teaching, flexible learning formats and academic mentoring so students can build strong concepts without losing confidence or curiosity.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[['Our Vision','Make high-quality personalised learning accessible globally.',Eye],['Our Mission','Help every learner build clarity, confidence and consistency.',Target],['Our Values','Student-first teaching with transparent parent communication.',HeartHandshake]].map(([title,text,Icon]) => <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-700 shadow-sm"><Icon size={18}/></span><h3 className="mt-3 text-xs font-black">{title}</h3><p className="mt-1 text-[10px] leading-5 text-slate-500">{text}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
