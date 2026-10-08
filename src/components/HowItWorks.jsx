import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  ["01", "Enquire", "Submit the enquiry form."],
  ["02", "Free Counselling", "Our academic counsellor understands your requirements."],
  ["03", "Choose Your Program", "Select 1:1, 5:1 or 20:1."],
  ["04", "Start Learning", "Live classes + mentoring + assessments."]
];

export default function HowItWorks() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">SIMPLE PROCESS</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">How Medora Works</h2>
          <p className="mt-3 text-sm text-slate-500">Four simple steps to start your child's learning journey.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map(([num, title, text], i) => (
            <div key={num} className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between"><span className="text-3xl font-black text-blue-100">{num}</span><CheckCircle2 className="text-emerald-500" size={20}/></div>
              <h3 className="mt-4 text-sm font-black text-slate-900">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              {i < 3 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden rounded-full bg-white p-1 text-blue-400 shadow md:block" size={28}/>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
