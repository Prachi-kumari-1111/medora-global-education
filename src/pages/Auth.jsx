import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();

  const [screen, setScreen] = useState("choice");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem(
      "medora_user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      })
    );

    localStorage.setItem("medora_auth", "true");

    navigate("/", { replace: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("medora_user") || "null"
    );

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (
      savedUser.email !== form.email ||
      savedUser.password !== form.password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    localStorage.setItem("medora_auth", "true");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f5f9ff] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[38px] bg-white shadow-xl border border-slate-100 lg:grid lg:grid-cols-[1fr_0.82fr]">

        {/* LEFT SIDE */}
        <div className="relative min-h-[650px] overflow-hidden bg-[#18245c] text-white">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
            alt="Students learning"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/75 to-violet-900/90" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 sm:p-14">

            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 border border-white/20">
                <GraduationCap size={25} />
              </div>

              <div>
                <div className="text-lg font-extrabold tracking-tight">
                  MEDORA
                </div>
                <div className="text-[9px] font-bold tracking-[0.28em] text-cyan-300">
                  GLOBAL EDUCATION
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                PERSONALIZED GLOBAL LEARNING
              </div>

              <h1 className="text-5xl font-black leading-[1.02] sm:text-6xl">
                A smarter learning journey starts here.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                Access programs, classes, personalized learning models and
                expert academic support — all in one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <CheckCircle2 className="mb-4 text-cyan-300" size={22} />
                <div className="font-bold">Personalised learning</div>
                <div className="mt-1 text-sm text-white/70">
                  Built around every learner
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <ShieldCheck className="mb-4 text-cyan-300" size={22} />
                <div className="font-bold">Simple & secure access</div>
                <div className="mt-1 text-sm text-white/70">
                  Your learning space, your way
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-[650px] items-center bg-white p-8 sm:p-12 lg:p-16">

          {/* CHOICE SCREEN */}
          {screen === "choice" && (
            <div className="w-full max-w-xl mx-auto">

              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-700">
                Welcome to Medora
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
                Continue your
                <br />
                learning journey.
              </h2>

              <p className="mt-5 text-lg leading-7 text-slate-500">
                Choose how you want to continue with Medora Global Education.
              </p>

              <div className="mt-10 space-y-4">

                <button
                  onClick={() => setScreen("login")}
                  className="flex w-full items-center justify-between rounded-2xl bg-blue-600 px-6 py-5 text-left text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  <span className="flex items-center gap-4">
                    <LogIn size={23} />
                    <span className="text-lg font-semibold">Log in</span>
                  </span>
                  <ArrowRight size={22} />
                </button>

                <button
                  onClick={() => setScreen("signup")}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-5 text-left text-slate-900 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="flex items-center gap-4">
                    <UserPlus size={23} />
                    <span className="text-lg font-semibold">Sign up</span>
                  </span>
                  <ArrowRight size={22} />
                </button>

              </div>
            </div>
          )}

          {/* LOGIN SCREEN */}
          {screen === "login" && (
            <div className="w-full max-w-xl mx-auto">

              <button
                onClick={() => {
                  setScreen("choice");
                  setError("");
                }}
                className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-700"
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-700">
                Welcome back
              </p>

              <h2 className="mt-4 text-4xl font-black text-slate-950">
                Sign in to Medora.
              </h2>

              <p className="mt-4 text-lg text-slate-500">
                Access your programs, classes and personalized learning
                experience.
              </p>

              <form onSubmit={handleLogin} className="mt-9 space-y-6">

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={updateForm}
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 pr-14 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                >
                  Log in
                  <ArrowRight size={20} />
                </button>

              </form>

              <p className="mt-7 text-center text-sm text-slate-500">
                New to Medora?{" "}
                <button
                  onClick={() => {
                    setScreen("signup");
                    setError("");
                  }}
                  className="font-bold text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </p>

            </div>
          )}

          {/* SIGNUP SCREEN */}
          {screen === "signup" && (
            <div className="w-full max-w-xl mx-auto">

              <button
                onClick={() => {
                  setScreen("choice");
                  setError("");
                }}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-700"
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-700">
                Welcome to Medora
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Create your account.
              </h2>

              <p className="mt-3 text-slate-500">
                Join Medora and start your personalized learning journey.
              </p>

              <form onSubmit={handleSignup} className="mt-7 space-y-4">

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={updateForm}
                      placeholder="Create a password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 pr-14 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={updateForm}
                      placeholder="Confirm your password"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 pr-14 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                >
                  Create Account
                  <ArrowRight size={20} />
                </button>

              </form>

              <p className="mt-5 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setScreen("login");
                    setError("");
                  }}
                  className="font-bold text-blue-600 hover:underline"
                >
                  Log in
                </button>
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}