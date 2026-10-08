import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { countries } from "../data/content";

const initial = { parentName: "", studentName: "", whatsapp: "", email: "", country: "India", studentClass: "Class 8", curriculum: "CBSE", model: "1:1", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-900 via-slate-950 to-violet-950 shadow-soft lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative min-h-[620px] overflow-hidden p-7 sm:p-10">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85" alt="Students learning together" className="absolute inset-0 h-full w-full object-cover opacity-30"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-blue-950/30"/>
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold tracking-[.22em] text-cyan-300">FREE COUNSELLING</p>
                <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight sm:text-5xl">Let's Start Your Child's Learning Journey</h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-blue-100">Book a free counselling session and get a personalised learning plan based on your child's goals, curriculum and schedule.</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[["2,000+", "Students"], ["20+", "Countries"], ["95%", "Parent Satisfaction"]].map(([a,b]) => <div key={b} className="rounded-2xl bg-white/10 p-4 backdrop-blur"><div className="text-xl font-black">{a}</div><div className="mt-1 text-[9px] font-bold text-blue-200">{b}</div></div>)}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 text-slate-900 sm:p-10">
            {sent ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 size={34}/></div>
                <h3 className="mt-5 text-2xl font-black">Enquiry Received!</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Thank you for contacting Medora Global Education. Our academic counsellor will connect with you soon.</p>
                <button onClick={() => { setSent(false); setForm(initial); }} className="mt-6 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white">Submit Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="flex items-center justify-between gap-3">
                  <div><p className="text-xs font-extrabold tracking-widest text-blue-700">BOOK A FREE COUNSELLING SESSION</p><h3 className="mt-2 text-2xl font-black">Tell us about your learner</h3></div>
                  <ShieldCheck className="hidden text-emerald-500 sm:block"/>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    ["parentName", "Parent Name", "text"], ["studentName", "Student Name", "text"],
                    ["whatsapp", "WhatsApp Number", "tel"], ["email", "Email", "email"]
                  ].map(([name, label, type]) => <label key={name} className="block"><span className="text-[10px] font-extrabold text-slate-500">{label} *</span><input required name={name} value={form[name]} onChange={update} type={type} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/></label>)}

                  <label><span className="text-[10px] font-extrabold text-slate-500">Country *</span><select name="country" value={form.country} onChange={update} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm">{countries.map(c => <option key={c}>{c}</option>)}</select></label>
                  <label><span className="text-[10px] font-extrabold text-slate-500">Class *</span><select name="studentClass" value={form.studentClass} onChange={update} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm">{Array.from({length:12},(_,i)=><option key={i}>Class {i+1}</option>)}<option>Foundation</option><option>Special Programs</option></select></label>
                  <label><span className="text-[10px] font-extrabold text-slate-500">Curriculum *</span><select name="curriculum" value={form.curriculum} onChange={update} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm">{["CBSE","ICSE","State Board","UK Curriculum","UAE Schools","US Curriculum","Australian Curriculum","Other"].map(c=><option key={c}>{c}</option>)}</select></label>
                  <label><span className="text-[10px] font-extrabold text-slate-500">Preferred Learning Model *</span><select name="model" value={form.model} onChange={update} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm"><option>1:1</option><option>5:1</option><option>20:1</option></select></label>
                </div>
                <label className="mt-4 block"><span className="text-[10px] font-extrabold text-slate-500">Message / Requirement</span><textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Tell us about your child's learning requirement..." className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/></label>
                <button type="submit" className="mt-5 w-full rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-100 transition hover:bg-blue-800">Book a Free Counselling Session</button>
                <p className="mt-3 text-center text-[10px] text-slate-400">By submitting, you agree to be contacted by the Medora team.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
