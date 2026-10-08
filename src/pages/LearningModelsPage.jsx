import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningModels from "../components/LearningModels";

const image = "https://images.pexels.com/photos/32094079/pexels-photo-32094079.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function LearningModelsPage() {
  const navigate = useNavigate();
  return <>
    <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 text-white">
      <img src={image} alt="Interactive online classroom" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/10" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16"><div className="max-w-3xl reveal-up"><p className="text-[10px] font-black tracking-[.3em] text-violet-200">LEARNING MODELS</p><h1 className="mt-4 text-5xl font-black leading-[.96] tracking-[-.04em] sm:text-6xl lg:text-7xl">Choose how your child learns best.</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Three formats, three different classroom experiences — personal attention, small-group interaction or a structured group batch.</p><button onClick={() => navigate('/contact')} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-slate-950 hover:bg-violet-50">Get model guidance <ArrowRight size={17}/></button></div></div>
    </section>
    <LearningModels />
  </>;
}
