import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Auth({ mode = "login" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const signup = mode === "signup";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    // =========================
    // SIGN UP
    // =========================
    if (signup) {
      if (
        !form.name.trim() ||
        !email ||
        !form.phone.trim() ||
        !password ||
        !form.confirmPassword
      ) {
        setError("Please fill all required details.");
        return;
      }

      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setError("Password should be at least 6 characters.");
        return;
      }

      if (password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const existingUser = JSON.parse(
        localStorage.getItem("medora_user") || "null"
      );

      if (existingUser && existingUser.email === email) {
        setError("This email is already registered. Please log in.");
        return;
      }

      // Save complete user information
      const user = {
        name: form.name.trim(),
        email,
        phone: form.phone.trim(),
        password,
      };

      localStorage.setItem("medora_user", JSON.stringify(user));
      localStorage.setItem("medora_auth", "true");

      navigate("/", { replace: true });
      return;
    }

    // =========================
    // LOGIN
    // =========================

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("medora_user") || "null"
    );

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (savedUser.email !== email) {
      setError("This email is not registered. Please sign up first.");
      return;
    }

    if (savedUser.password !== password) {
      setError("Incorrect password. Please try again.");
      return;
    }

    // Login successful
    localStorage.setItem("medora_auth", "true");

    const redirectTo = location.state?.from?.pathname || "/";

    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#f5f9ff] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1230px] overflow-hidden rounded-[38px] border border-white bg-white shadow-2xl lg:grid-cols-[1fr_.82fr]">

        {/* LEFT SIDE */}
        <div className="relative min-h-[650px] overflow-hidden bg-slate-900 p-8 text-white sm:p-12">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"
            alt="Student learning"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/75 to-violet-900/80" />

          <div className="relative z-10 flex h-full flex-col justify-between">

            <div>
              <div className="mb-16 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-md">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <div className="text-lg font-extrabold tracking-tight">
                    MEDORA
                  </div>
                  <div className="text-[9px] font-bold tracking-[.25em] text-cyan-300">
                    GLOBAL EDUCATION
                  </div>
                </div>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                PERSONALIZED GLOBAL LEARNING
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-[1.05] sm:text-6xl">
                A smarter learning journey starts here.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
                Access programs, classes, personalized learning models and
                expert academic support — all in one place.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <CheckCircle2 className="mb-4 text-cyan-300" size={22} />
                <div className="font-bold">Personalised learning</div>
                <div className="mt-1 text-sm text-blue-100">
                  Built around every learner
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <ShieldCheck className="mb-4 text-cyan-300" size={22} />
                <div className="font-bold">Simple & secure access</div>
                <div className="mt-1 text-sm text-blue-100">
                  Your learning space, your way
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 sm:p-12 lg:p-16">

          {signup ? (
            <button
              onClick={() => navigate("/login")}
              className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Back to login
            </button>
          ) : null}

          <div className="mb-8">
            <div className="text-[10px] font-black uppercase tracking-[.25em] text-blue-600">
              {signup ? "Welcome to Medora" : "Welcome back"}
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              {signup ? "Create your account." : "Sign in to Medora."}
            </h2>

            <p className="mt-4 text-base leading-6 text-slate-500">
              {signup
                ? "Join Medora and start your personalized learning journey."
                : "Access your programs, classes and personalized learning experience."}
            </p>
          </div>

          <form onSubmit={submit} className="space-y-5">

            {/* NAME - ONLY SIGNUP */}
            {signup && (
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Full Name
                </span>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </label>
            )}

            {/* EMAIL */}
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Email
              </span>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>

            {/* PHONE - ONLY SIGNUP */}
            {signup && (
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Phone Number
                </span>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </label>
            )}

            {/* PASSWORD */}
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Password
              </span>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 pr-12 outline-none transition focus:border-blue-500 focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </label>

            {/* CONFIRM PASSWORD - ONLY SIGNUP */}
            {signup && (
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Confirm Password
                </span>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="Confirm your password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 pr-12 outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </label>
            )}

            {/* ERROR */}
            {error && (
              <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              {signup ? (
                <>
                  <UserPlus size={19} />
                  Create Account
                  <ArrowRight size={18} />
                </>
              ) : (
                <>
                  Log in
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* SWITCH LOGIN / SIGNUP */}
          <div className="mt-7 text-center text-sm text-slate-500">
            {signup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="font-bold text-blue-600 hover:underline"
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                New to Medora?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  className="font-bold text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}