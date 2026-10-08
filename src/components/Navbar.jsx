import { useState } from "react";
import { Menu, X, GraduationCap, LogIn, UserPlus } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const links = [
  ["Home", "/"], ["Programs", "/programs"], ["Classes", "/classes"],
  ["Learning Models", "/learning-models"], ["Success Stories", "/success-stories"],
  ["About Us", "/about"], ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useLocation();
  const isAuthed = localStorage.getItem("medora_auth") === "true";

  const logout = () => {
    localStorage.removeItem("medora_auth");
    localStorage.removeItem("medora_user");
    setOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-[13px] bg-gradient-to-br from-blue-700 to-cyan-400 text-white shadow-lg shadow-blue-100">
            <GraduationCap size={22}/>
          </span>
          <span>
            <span className="block text-[18px] font-extrabold leading-none tracking-tight text-slate-950">MEDORA</span>
            <span className="block mt-1 text-[8px] font-bold tracking-[.2em] text-blue-700">GLOBAL EDUCATION</span>
          </span>
        </NavLink>

        {isAuthed && <nav className="hidden items-center gap-5 xl:flex">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={({isActive}) =>
              `text-[12px] font-medium transition ${isActive ? "text-blue-700" : "text-slate-600 hover:text-blue-700"}`
            }>{label}</NavLink>
          ))}
        </nav>}

        <div className="hidden items-center gap-2 sm:flex">
          {!isAuthed ? <>
            <button onClick={() => navigate("/login")} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"><LogIn size={14}/> Log in</button>
            <button onClick={() => navigate("/signup")} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"><UserPlus size={14}/> Sign up</button>
          </> : <>
            <button onClick={() => navigate("/contact")} className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700">Book Free Counselling</button>
            <button onClick={logout} className="rounded-full px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-red-600">Log out</button>
          </>}
        </div>

        <button className="rounded-xl p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>

      {open && <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
        <div className="flex flex-col gap-1">
          {isAuthed && links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({isActive}) => `rounded-xl px-4 py-3 text-left text-sm font-semibold ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-blue-50"}`}>{label}</NavLink>)}
          {!isAuthed ? <>
            <button onClick={() => {setOpen(false); navigate('/login')}} className="mt-2 rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-bold">Log in</button>
            <button onClick={() => {setOpen(false); navigate('/signup')}} className="rounded-xl bg-blue-700 px-4 py-3 text-left text-sm font-bold text-white">Sign up</button>
          </> : <>
            <button onClick={() => {setOpen(false); navigate('/contact')}} className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white">Book Free Counselling</button>
            <button onClick={logout} className="rounded-xl px-4 py-3 text-left text-sm font-bold text-red-600">Log out</button>
          </>}
        </div>
      </div>}
    </header>
  );
}
