import { useState } from "react";
import { ArrowRight, CheckCircle2, Eye, EyeOff, GraduationCap, ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Auth({ mode="login" }) {
  const navigate=useNavigate();
  const location=useLocation();
  const signup=mode==='signup';
  const [show,setShow]=useState(false);
  const [form,setForm]=useState({name:'',email:'',password:''});
  const [error,setError]=useState('');

  const submit=(e)=>{
    e.preventDefault(); setError('');
    if(!form.email || !form.password || (signup && !form.name)) { setError('Please fill all required fields.'); return; }
    if(!form.email.includes('@')) { setError('Please enter a valid email address.'); return; }
    if(form.password.length<6) { setError('Password should be at least 6 characters.'); return; }
    const existing=JSON.parse(localStorage.getItem('medora_user')||'null');
    if(!signup && existing && existing.email && existing.email!==form.email){ setError('This email is not registered in this demo. Please sign up first.'); return; }
    localStorage.setItem('medora_auth','true');
    localStorage.setItem('medora_user',JSON.stringify({name:form.name||existing?.name||'Medora Learner',email:form.email}));
    navigate(location.state?.from?.pathname || '/', {replace:true});
  };

  return <div className="min-h-[calc(100vh-76px)] bg-[#f5f9ff] px-4 py-10 sm:px-6 lg:px-10">
    <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[34px] border border-white bg-white shadow-soft lg:grid-cols-[1fr_.82fr]">
      <div className="relative min-h-[300px] overflow-hidden bg-slate-950 p-8 text-white sm:p-12 lg:min-h-[690px]">
        <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200" className="absolute inset-0 h-full w-full object-cover opacity-55" alt="Student learning"/>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-950/65 to-violet-950/45"/>
        <div className="relative z-10 flex h-full flex-col justify-between"><div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 backdrop-blur"><GraduationCap/></span><div><p className="text-lg font-extrabold">MEDORA</p><p className="text-[8px] font-bold tracking-[.2em] text-cyan-200">GLOBAL EDUCATION</p></div></div><p className="mt-20 max-w-lg text-4xl font-extrabold leading-tight sm:text-5xl">A smarter learning journey starts here.</p><p className="mt-5 max-w-md text-sm leading-7 text-white/75">Access programs, classes, personalised learning models and counselling in one place.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><CheckCircle2 size={17} className="text-cyan-300"/><p className="mt-2 text-sm font-bold">Personalised learning</p></div><div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><ShieldCheck size={17} className="text-cyan-300"/><p className="mt-2 text-sm font-bold">Simple & secure access</p></div></div></div>
      </div>
      <div className="p-7 sm:p-10 lg:p-14"><p className="text-[10px] font-black uppercase tracking-[.25em] text-blue-700">{signup?'Create your account':'Welcome back'}</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">{signup?'Join Medora.':'Sign in to Medora.'}</h1><p className="mt-3 text-sm leading-6 text-slate-500">{signup?'Create a learner account now. Backend authentication can be connected later.':'Login is currently frontend-only and ready for backend integration later.'}</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          {signup && <label className="block text-xs font-bold text-slate-700">Full name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500" placeholder="Your name"/></label>}
          <label className="block text-xs font-bold text-slate-700">Email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500" placeholder="you@example.com"/></label>
          <label className="block text-xs font-bold text-slate-700">Password<div className="relative mt-2"><input type={show?'text':'password'} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 pr-12 outline-none focus:border-blue-500" placeholder="Minimum 6 characters"/><button type="button" onClick={()=>setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
          {error && <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{error}</p>}
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-800">{signup?'Create Account':'Log In'} <ArrowRight size={16}/></button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">{signup?'Already have an account? ':'New to Medora? '}<button onClick={()=>navigate(signup?'/login':'/signup')} className="font-bold text-blue-700">{signup?'Log in':'Sign up'}</button></p>
      </div>
    </div>
  </div>;
}
