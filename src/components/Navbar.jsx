import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Programs", "/programs"],
  ["Classes", "/classes"],
  ["Learning Models", "/learning-models"],
  ["Success Stories", "/success-stories"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthed =
    localStorage.getItem("medora_auth") === "true";

  const logout = () => {
    localStorage.removeItem("medora_auth");
    setOpen(false);
    navigate("/");
  };

  const goTo = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl">

      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="grid h-11 w-11 place-items-center rounded-[13px] bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-100">
            <GraduationCap size={23} />
          </span>

          <span>
            <span className="block text-[17px] font-extrabold leading-none tracking-tight text-slate-950">
              MEDORA
            </span>

            <span className="mt-1 block text-[8px] font-bold tracking-[0.2em] text-blue-700">
              GLOBAL EDUCATION
            </span>
          </span>
        </NavLink>

        {/* ================= DESKTOP LINKS ================= */}
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `whitespace-nowrap text-[13px] font-medium transition ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ================= DESKTOP AUTH ================= */}
        <div className="hidden items-center gap-3 lg:flex">

          {!isAuthed ? (
            <>
              <button
                onClick={() => goTo("/login")}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
              >
                Log in
              </button>

              <button
                onClick={() => goTo("/signup")}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                Sign up
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              className="rounded-full bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Log out
            </button>
          )}

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 shadow-lg lg:hidden">

          <nav className="mx-auto flex max-w-[1400px] flex-col pt-3">

            {links.map(([label, path]) => {
              const active = location.pathname === path;

              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                  }`}
                >
                  {label}
                </NavLink>
              );
            })}

            {/* MOBILE AUTH */}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">

              {!isAuthed ? (
                <>
                  <button
                    onClick={() => goTo("/login")}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Log in
                  </button>

                  <button
                    onClick={() => goTo("/signup")}
                    className="w-full rounded-xl bg-blue-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <button
                  onClick={logout}
                  className="w-full rounded-xl bg-red-50 px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-100"
                >
                  Log out
                </button>
              )}

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}