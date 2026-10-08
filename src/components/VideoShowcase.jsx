import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const videos = [
  ["/videos/learning-motion.mp4", "Learning in motion", "Live learning designed around the student.", "1:1 • Live • Personalised"],
  ["/videos/mentor-motion.mp4", "Mentor support", "A simple loop of assessment, guidance and review.", "Assess • Guide • Review"],
  ["/videos/global-motion.mp4", "Global classroom", "One learning experience across time zones and borders.", "India • UAE • UK • USA"]
];

export default function VideoShowcase() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f7faff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">LEARNING IN MOTION</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A glimpse of the Medora experience.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Slow, cinematic motion blocks add life to the page without making the website feel heavy or distracting.</p>
          </div>
          <button onClick={() => navigate('/programs')} className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 md:self-auto">Explore programs <ArrowRight size={15}/></button>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {videos.map(([src, title, text, tag]) => (
            <article key={src} className="group overflow-hidden rounded-[28px] border border-white bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <video src={src} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.16em] text-white backdrop-blur-md"><Play size={11} fill="currentColor"/> Slow motion</div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white"><div><p className="text-base font-black">{title}</p><p className="mt-1 text-[10px] text-white/70">{tag}</p></div></div>
              </div>
              <div className="p-5"><p className="text-xs leading-5 text-slate-500">{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
