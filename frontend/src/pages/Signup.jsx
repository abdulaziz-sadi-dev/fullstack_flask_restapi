import { Link } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Eye, EyeOff, GraduationCap, Lock, Mail, ShieldCheck, Terminal, User } from "lucide-react";
import Footer from "../components/footer";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup:", data);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <main
        className="relative flex flex-1 items-center justify-center px-4 py-10 sm:py-16"
        style={{
          backgroundImage:
            "radial-gradient(1200px 500px at 50% -10%, oklch(0.92 0.05 220 / 0.7), transparent 60%)",
        }}
      >
        <div className="w-full max-w-6xl overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_30px_80px_-30px_rgba(11,27,59,0.25)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Brand panel */}
            <aside
              className="relative flex flex-col justify-between overflow-hidden bg-brand p-8 text-brand-foreground sm:p-12"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground text-brand">
                    <Terminal className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <span className="font-display text-lg font-semibold tracking-tight text-brand-foreground/80">
                    CS Mastery
                  </span>
                </div>

                <h1 className="mt-14 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                  Master the Logic of Tomorrow.
                </h1>

                <p className="mt-6 max-w-md text-base leading-relaxed text-brand-foreground/75">
                  Join thousands of students mastering data representation, algorithm design, and
                  computer systems with the most systematic IGCSE resource available.
                </p>
              </div>

              <ul className="mt-16 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Cambridge Syllabus Aligned</p>
                    <p className="text-sm text-brand-foreground/65">Updated for the 2024–2026 exams (0478)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <GraduationCap className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">AI-Powered Tutoring</p>
                    <p className="text-sm text-brand-foreground/65">Instant feedback on pseudocode and logic</p>
                  </div>
                </li>
              </ul>
            </aside>

            {/* Form panel */}
            <section className="bg-card p-8 sm:p-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Start your journey to an A* grade today.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <User className="h-4 w-4 text-muted-foreground" />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name", { required: "Full name is required" })}
                    className="h-11 w-full rounded-lg border border-border bg-field px-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="student@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-11 w-full rounded-lg border border-border bg-field px-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Must be at least 8 characters",
                        },
                      })}
                      className="h-11 w-full rounded-lg border border-border bg-field px-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("terms", {
                      required: "You must agree to the terms",
                    })}
                    className="mt-0.5 size-4 rounded border-border accent-accent"
                  />
                  <span>
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-xs text-red-500">{errors.terms.message}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-brand text-base font-semibold text-brand-foreground transition hover:bg-brand-light disabled:opacity-60"
                >
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                  {!isSubmitting && (
                    <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                  )}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-foreground hover:underline"
                >
                  Login here
                </Link>
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Or sign up with
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition hover:bg-field"
                >
                  <GoogleIcon className="h-4 w-4" />
                  Google
                </button>
                <button
                  type="button"
                  className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground transition hover:bg-field"
                >
                  <GraduationCap className="h-4 w-4" />
                  School Portal
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.5-1.74 4.4-5.5 4.4-3.3 0-6-2.74-6-6.1s2.7-6.1 6-6.1c1.88 0 3.14.8 3.86 1.48L18.6 5.1C16.96 3.57 14.7 2.6 12 2.6 6.84 2.6 2.7 6.74 2.7 12s4.14 9.4 9.3 9.4c5.36 0 8.92-3.77 8.92-9.08 0-.61-.07-1.08-.16-1.55H12z"
      />
    </svg>
  );
}
