import { Quote, Star } from "lucide-react";
import { successStories, testimonials } from "../data/content";

export default function Stories() {
  return (
    <>
      <section id="success-stories" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-xs font-extrabold tracking-[.22em] text-blue-700">SUCCESS STORIES</p><h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Progress you can see. Confidence you can feel.</h2><p className="mt-3 text-sm text-slate-500">Every learner's story is different — our goal is measurable, meaningful progress.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {successStories.map(([name,place,cls,model,quote,tags,image]) => <article key={name} className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"><div className="relative h-48 overflow-hidden"><img src={image} alt={`${name} learning journey`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"/><div className="absolute bottom-4 left-4 text-white"><div className="text-sm font-black">{name}</div><div className="text-[10px] text-white/75">{place}</div></div></div><div className="p-5"><p className="text-[10px] font-bold text-blue-700">{cls} • {model}</p><div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-600">“{quote}”</div><div className="mt-4 flex flex-wrap gap-2">{tags.map(t=><span key={t} className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-extrabold text-emerald-700">{t}</span>)}</div></div></article>)}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-xs font-extrabold tracking-[.22em] text-blue-700">PARENT VOICE</p><h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">What families say about the experience.</h2></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{testimonials.map(([name,role,place,quote])=><article key={name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card"><div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor"/>)}</div><Quote className="mt-5 text-blue-100" size={36}/><p className="mt-2 text-sm leading-6 text-slate-600">“{quote}”</p><div className="mt-5 flex items-center gap-3"><img src={`https://i.pravatar.cc/80?u=${encodeURIComponent(name)}`} alt={name} className="h-10 w-10 rounded-full"/><div><p className="text-xs font-black text-slate-900">{name}</p><p className="text-[9px] font-semibold text-slate-400">{role} • {place}</p></div></div></article>)}</div>
        </div>
      </section>
    </>
  );
}
