import { Link } from "react-router";
import { MoveRight, Terminal, User } from "lucide-react";
import Footer from "../components/footer";
import heroStudent from "../assets/hero-student.jpg";
import logicChip from "../assets/logic-chip.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-brand">
                <Terminal className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">CS Mastery</span>
            </span>
            <div className="hidden md:flex items-center gap-6">
              <a href="#syllabus" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
                Syllabus
              </a>
              <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
                Resources
              </a>
              <a href="#papers" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">
                Past Papers
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/signup"
              className="h-[34px] px-4 inline-flex items-center rounded-full bg-card-dark text-white text-sm font-medium ring-1 ring-accent ring-offset-2 hover:bg-brand transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              aria-label="Account"
              className="size-8 rounded-full ring-1 ring-border grid place-items-center bg-field hover:bg-muted-foreground/10 transition-colors"
            >
              <User className="size-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -right-40 size-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent2/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6 ring-1 ring-accent/20">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                Cambridge 0478 &amp; 9618
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-semibold leading-tight text-balance mb-6">
                Master IGCSE &amp; A Level Computer Science with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#00C9FF]">AI-Powered</span> Revision
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-[56ch] mb-10 text-pretty">
                The systematic approach for your exams. Interactive chapters, rigorous question banks, and a personal AI tutor to clarify logic in seconds.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/signup"
                  className="h-[42px] pl-5 pr-4 inline-flex items-center gap-2 rounded-full bg-card-dark text-white text-sm font-medium hover:bg-brand transition-colors"
                >
                  Get Started Free
                  <MoveRight className="size-4" strokeWidth={1.5} />
                </Link>
                <button className="h-[42px] px-6 rounded-full bg-field text-foreground text-sm font-medium ring-1 ring-border hover:bg-muted-foreground/10 transition-colors cursor-pointer">
                  View Syllabus
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="size-9 rounded-full ring-2 ring-background bg-accent/30 grid place-items-center text-[10px] font-bold text-brand-dark">
                    JD
                  </div>
                  <div className="size-9 rounded-full ring-2 ring-background bg-accent2/30 grid place-items-center text-[10px] font-bold text-emerald-800">
                    MK
                  </div>
                  <div className="size-9 rounded-full ring-2 ring-background bg-muted-foreground/20 grid place-items-center text-[10px] font-bold text-muted-foreground">
                    SL
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Joined by <span className="text-foreground font-semibold">2,500+ students</span> this year
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroStudent}
                alt="Student celebrating exam success at home"
                width={800}
                height={1024}
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-accent/20 ring-1 ring-black/5"
              />
              <div className="absolute -bottom-6 -left-6 p-4 bg-background rounded-2xl ring-1 ring-border shadow-xl max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 size-9 rounded-lg bg-accent flex items-center justify-center">
                    <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">AI Tutor Active</p>
                    <p className="text-[11px] leading-relaxed text-muted-foreground mt-1">Need help with logic gates? I can explain Chapter 3 right now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-field">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-balance mb-4">Systematic Preparation Tools</h2>
            <p className="text-muted-foreground max-w-[56ch] mx-auto text-pretty">
              Everything you need to move from basic understanding to A* proficiency across the 0478 (IGCSE) and 9618 (AS &amp; A Level) syllabuses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chapters */}
            <div className="lg:col-span-2 p-8 bg-background rounded-3xl ring-1 ring-border flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Full Chapter 1–10 Coverage</h3>
                  <p className="text-sm text-muted-foreground max-w-[48ch]">
                    Comprehensive study material from Binary Systems to Automated Systems. Every syllabus point covered with academic precision.
                  </p>
                </div>
                <div className="shrink-0 size-11 rounded-xl bg-accent/10 grid place-items-center">
                  <svg className="size-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 h-10 bg-accent/10 text-accent text-xs font-semibold rounded-lg ring-1 ring-accent/20 cursor-pointer">Ch 1</button>
                {["Ch 2", "Ch 3", "Ch 4", "Ch 5"].map((c) => (
                  <button
                    key={c}
                    className="flex-1 h-10 bg-field text-muted-foreground text-xs font-medium rounded-lg hover:bg-muted-foreground/10 transition-colors cursor-pointer"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Exam Questions */}
            <div className="p-8 bg-card-dark text-white rounded-3xl flex flex-col">
              <div className="shrink-0 size-11 rounded-xl bg-white/10 grid place-items-center mb-6">
                <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9.247c.275-1.485 1.65-2.5 3.083-2.247 1.434.252 2.358 1.622 2.072 3.07-.286 1.447-1.69 2.422-3.115 2.146a2.508 2.508 0 01-.268-.07M12 17h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Structured Exam Questions</h3>
              <p className="text-sm text-white/60 mb-8">Practice with questions designed to match the Cambridge examiner&apos;s style and mark scheme.</p>
              <div className="mt-auto bg-white/10 rounded-2xl p-4">
                <div className="flex justify-between text-[11px] mb-2 font-medium uppercase tracking-wider text-white/50">
                  <span>Active Session</span>
                  <span className="text-accent">8/10 Correct</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[80%]" />
                </div>
              </div>
            </div>

            {/* AI Explainers */}
            <div className="p-8 bg-background rounded-3xl ring-1 ring-border">
              <div className="flex items-center justify-between mb-6">
                <div className="size-11 rounded-xl bg-accent2/10 grid place-items-center">
                  <svg className="size-5 text-accent2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent2 bg-accent2/10 px-2 py-1 rounded">Live Assistant</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant AI Explainers</h3>
              <p className="text-sm text-muted-foreground mb-6">Stuck on a Trace Table? Ask our AI tutor to break down the logic step-by-step in plain English.</p>
              <div className="p-3 rounded-xl bg-field border border-border">
                <p className="text-xs italic text-muted-foreground">&ldquo;How does a two-pass assembler differ from a one-pass?&rdquo;</p>
              </div>
            </div>

            {/* Logic Gates */}
            <div className="lg:col-span-2 p-8 bg-accent/5 rounded-3xl ring-1 ring-accent/15 grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Interactive Logic Gates</h3>
                <p className="text-sm text-muted-foreground mb-6">Visualize current flow through AND, OR, NOT, NAND, NOR, and XOR gates in real-time labs.</p>
                <a href="#lab" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                  Try Laboratory
                  <MoveRight className="size-4" strokeWidth={1.5} />
                </a>
              </div>
              <img
                src={logicChip}
                alt="Glowing microchip with circuit traces"
                width={704}
                height={512}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">Ready to Ace Your Cambridge Exams?</h2>
          <p className="text-muted-foreground text-lg mb-10 text-pretty">
            Join thousands of students who have transformed their understanding of Computer Science with our systematic revision tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="h-[44px] px-8 inline-flex items-center rounded-full bg-card-dark text-white text-sm font-semibold ring-1 ring-accent ring-offset-2 hover:bg-brand transition-colors"
            >
              Sign Up Free
            </Link>
            <button className="h-[44px] px-8 rounded-full bg-field text-foreground text-sm font-semibold ring-1 ring-border hover:bg-muted-foreground/10 transition-colors cursor-pointer">
              View Pricing Plans
            </button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
