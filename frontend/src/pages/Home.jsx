import heroLaptop from "../assets/hero-laptop.jpg";
import logicChip from "../assets/logic-chip.jpg";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-brand/20">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/60">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="font-display font-semibold text-xl tracking-tight text-brand-dark">CS Mastery</span>
              <div className="hidden md:flex items-center gap-6">
                <a href="#syllabus" className="text-sm font-medium text-neutral-600 hover:text-brand transition-colors">
                  Syllabus
                </a>
                <a href="#resources" className="text-sm font-medium text-neutral-600 hover:text-brand transition-colors">
                  Resources
                </a>
                <a href="#papers" className="text-sm font-medium text-neutral-600 hover:text-brand transition-colors">
                  Past Papers
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="h-[34px] px-4 rounded-full bg-neutral-900 text-neutral-50 text-sm font-medium ring-1 ring-brand ring-offset-2 hover:bg-brand-dark transition-colors">
                Get Started
              </button>
              <button
                aria-label="Account"
                className="size-8 rounded-full ring-1 ring-black/5 grid place-items-center bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                <svg className="size-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div aria-hidden className="absolute -top-40 -right-40 size-[600px] rounded-full bg-brand/10 blur-3xl pointer-events-none" />
          <div aria-hidden className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent2/10 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand-dark text-xs font-semibold uppercase tracking-wider mb-6 ring-1 ring-brand/20">
                  <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                  Cambridge 0478 Syllabus
                </span>
                <h1 className="font-display text-4xl lg:text-6xl font-semibold leading-tight text-balance mb-6">
                  Master Computer Science 0478 with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8FFED1] to-[#00C9FF]">AI-Powered</span> Revision
                </h1>
                <p className="text-neutral-600 text-base md:text-lg max-w-[56ch] mb-10 text-pretty">
                  The systematic approach for your exams. Interactive chapters, rigorous question banks, and a personal AI tutor to clarify logic in seconds.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button className="h-[42px] pl-5 pr-6 flex items-center gap-2 rounded-full bg-neutral-900 text-neutral-50 text-sm font-medium ring-1 ring-neutral-900 hover:bg-neutral-800 transition-colors">
                    Get Started Free
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-move-right-icon lucide-move-right"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                      </svg>
                    </span>
                  </button>
                  <button className="h-[42px] px-6 rounded-full bg-neutral-100 text-neutral-900 text-sm font-medium ring-1 ring-black/5 hover:bg-neutral-200 transition-colors">
                    View Syllabus
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="size-9 rounded-full ring-2 ring-neutral-50 bg-brand/30 grid place-items-center text-[10px] font-bold text-brand-dark">
                      JD
                    </div>
                    <div className="size-9 rounded-full ring-2 ring-neutral-50 bg-accent2/30 grid place-items-center text-[10px] font-bold text-emerald-800">
                      MK
                    </div>
                    <div className="size-9 rounded-full ring-2 ring-neutral-50 bg-neutral-300 grid place-items-center text-[10px] font-bold text-neutral-700">
                      SL
                    </div>
                  </div>
                  <p className="text-sm font-medium text-neutral-500">
                    Joined by <span className="text-neutral-900 font-semibold">2,500+ students</span> this year
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src={heroLaptop}
                  alt="Laptop showing the CS Mastery code editor and AI tutor"
                  width={800}
                  height={1024}
                  className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-brand/20 ring-1 ring-black/5"
                />
                <div className="absolute -bottom-6 -left-6 p-4 bg-neutral-50 rounded-2xl ring-1 ring-black/5 shadow-xl max-w-[260px]">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 size-9 rounded-lg bg-[#04F0C8] flex items-center justify-center">
                      <svg className="size-4 text-neutral-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">AI Tutor Active</p>
                      <p className="text-[11px] leading-relaxed text-neutral-500 mt-1">Need help with logic gates? I can explain Chapter 3 right now.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-balance mb-4">Systematic Preparation Tools</h2>
              <p className="text-neutral-500 max-w-[56ch] mx-auto text-pretty">
                Everything you need to move from basic understanding to A* proficiency in the 0478 syllabus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Chapters */}
              <div className="lg:col-span-2 p-8 bg-neutral-50 rounded-3xl ring-1 ring-black/5 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Full Chapter 1–10 Coverage</h3>
                    <p className="text-sm text-neutral-500 max-w-[48ch]">
                      Comprehensive study material from Binary Systems to Automated Systems. Every syllabus point covered with academic precision.
                    </p>
                  </div>
                  <div className="shrink-0 size-11 rounded-xl bg-brand/10 grid place-items-center">
                    <svg className="size-5 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
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
                  <button className="flex-1 h-10 bg-brand/10 text-brand-dark text-xs font-semibold rounded-lg ring-1 ring-brand/20">Ch 1</button>
                  {["Ch 2", "Ch 3", "Ch 4", "Ch 5"].map((c) => (
                    <button
                      key={c}
                      className="flex-1 h-10 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exam Questions */}
              <div className="p-8 bg-neutral-900 text-neutral-50 rounded-3xl flex flex-col">
                <div className="shrink-0 size-11 rounded-xl bg-white/10 grid place-items-center mb-6">
                  <svg className="size-5 text-neutral-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9.247c.275-1.485 1.65-2.5 3.083-2.247 1.434.252 2.358 1.622 2.072 3.07-.286 1.447-1.69 2.422-3.115 2.146a2.508 2.508 0 01-.268-.07M12 17h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Structured Exam Questions</h3>
                <p className="text-sm text-neutral-400 mb-8">Practice with questions designed to match the Cambridge examiner&apos;s style and mark scheme.</p>
                <div className="mt-auto bg-neutral-800 rounded-2xl p-4">
                  <div className="flex justify-between text-[11px] mb-2 font-medium uppercase tracking-wider text-neutral-400">
                    <span>Active Session</span>
                    <span className="text-accent2">8/10 Correct</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent2 w-[80%]" />
                  </div>
                </div>
              </div>

              {/* AI Explainers */}
              <div className="p-8 bg-neutral-50 rounded-3xl ring-1 ring-black/5">
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
                <p className="text-sm text-neutral-500 mb-6">Stuck on a Trace Table? Ask our AI tutor to break down the logic step-by-step in plain English.</p>
                <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                  <p className="text-xs italic text-neutral-600">&ldquo;How does a two-pass assembler differ from a one-pass?&rdquo;</p>
                </div>
              </div>

              {/* Logic Gates */}
              <div className="lg:col-span-2 p-8 bg-brand/5 rounded-3xl ring-1 ring-brand/15 grid sm:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interactive Logic Gates</h3>
                  <p className="text-sm text-neutral-500 mb-6">Visualize current flow through AND, OR, NOT, NAND, NOR, and XOR gates in real-time labs.</p>
                  <a href="#lab" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:gap-2 transition-all">
                    Try Laboratory
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-move-right-icon lucide-move-right"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                      </svg>
                    </span>
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
        <section className="py-24 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance mb-6">Ready to Ace Your 0478 Exam?</h2>
            <p className="text-neutral-500 text-lg mb-10 text-pretty">
              Join thousands of students who have transformed their understanding of Computer Science with our systematic revision tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="h-[44px] px-8 rounded-full bg-neutral-900 text-neutral-50 text-sm font-semibold ring-1 ring-brand ring-offset-2 hover:bg-brand-dark transition-colors cursor-alias">
                Sign Up Free
              </button>
              <button className="h-[44px] px-8 rounded-full bg-neutral-100 text-neutral-900 text-sm font-semibold ring-1 ring-black/5 hover:bg-neutral-200 transition-colors cursor-pointer">
                View Pricing Plans
              </button>
            </div>
            <p className="mt-6 text-xs text-neutral-400">No credit card required. Cancel anytime.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-display font-semibold text-brand-dark">CS Mastery</p>
              <p className="text-xs text-neutral-400 mt-1">© 2024 CS Mastery. Cambridge IGCSE is a trademark of Cambridge University Press &amp; Assessment.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#privacy" className="text-xs font-medium text-neutral-500 hover:text-brand">
                Privacy Policy
              </a>
              <a href="#terms" className="text-xs font-medium text-neutral-500 hover:text-brand">
                Terms of Service
              </a>
              <a href="#syllabus" className="text-xs font-medium text-neutral-500 hover:text-brand">
                Syllabus Overview
              </a>
              <a href="#support" className="text-xs font-medium text-neutral-500 hover:text-brand">
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
