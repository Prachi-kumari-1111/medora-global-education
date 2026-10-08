import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <button onClick={() => navigate("/")} className="text-left"><div className="text-2xl font-black">MEDORA</div><div className="text-[9px] font-bold tracking-[.25em] text-cyan-300">GLOBAL EDUCATION</div></button>
          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-400">Global Learning. Personalised Teaching. Better Results.</p>
          <div className="mt-5 flex gap-2">{[Instagram, Facebook, Linkedin].map((I,i)=><a key={i} href="#" onClick={e=>e.preventDefault()} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-slate-300 hover:bg-blue-700 hover:text-white"><I size={15}/></a>)}</div>
        </div>
        <div><h3 className="text-xs font-black uppercase tracking-widest">Quick Links</h3><div className="mt-4 grid gap-3 text-xs text-slate-400">{[["Home","/"],["Programs","/programs"],["Classes","/classes"],["Learning Models","/learning-models"],["Success Stories","/success-stories"]].map(([a,b])=><button key={b} onClick={()=>navigate(b)} className="text-left hover:text-white">{a}</button>)}</div></div>
        <div><h3 className="text-xs font-black uppercase tracking-widest">Support</h3><div className="mt-4 grid gap-3 text-xs text-slate-400"><a href="#" onClick={e=>e.preventDefault()} className="hover:text-white">Privacy Policy</a><a href="#" onClick={e=>e.preventDefault()} className="hover:text-white">Terms & Conditions</a><a href="#" onClick={e=>e.preventDefault()} className="hover:text-white">Refund & Cancellation Policy</a><button onClick={()=>navigate("/about")} className="text-left hover:text-white">About Us</button></div></div>
        <div><h3 className="text-xs font-black uppercase tracking-widest">Contact Us</h3><div className="mt-4 grid gap-3 text-xs text-slate-400"><a href="mailto:info@medoraglobaleducation.com" className="flex items-center gap-2 hover:text-white"><Mail size={14}/>info@medoraglobaleducation.com</a><a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white"><Phone size={14}/>+91 98765 43210</a><div className="flex items-center gap-2"><MapPin size={14}/>Jaipur, India</div></div></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[10px] text-slate-500">© 2026 Medora Global Education. All rights reserved.</div>
    </footer>
  );
}
