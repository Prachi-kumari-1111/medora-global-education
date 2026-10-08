import { benefits } from "../data/content";

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[.22em] text-blue-700">WHY MEDORA</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Why Choose Medora Global Education?</h2>
          <p className="mt-3 text-sm text-slate-500">More than just classes — a complete learning experience.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-xl">{icon}</div>
              <h3 className="mt-4 text-sm font-black text-slate-900">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
