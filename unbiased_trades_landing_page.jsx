export default function UnbiasedTradesLandingPage() {
  const playbooks = [
    {
      title: "Daily Trade Plan",
      description:
        "Get the structured morning game plan with bias, key levels, and execution framework.",
      button1: "View PDF",
      button2: "Download Playbook",
    },
    {
      title: "Oil + VWAP System",
      description:
        "Learn how macro pressure, institutional control, and key levels combine into real-time trade ideas.",
      button1: "View PDF",
      button2: "Download Playbook",
    },
    {
      title: "Premarket Execution Guide",
      description:
        "A beginner-friendly breakdown of how to prepare before the open and trade with structure.",
      button1: "View PDF",
      button2: "Download Playbook",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom,rgba(234,179,8,0.15),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm tracking-wide text-yellow-300">
                Trade UnBiased.
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Real-time market structure. <span className="text-yellow-300">Not signal spam.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                UnBiased Trades is built around oil, VWAP, and key levels — turning macro pressure and institutional behavior into structured trade ideas you can actually understand.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#downloads"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 text-center font-medium text-black shadow-lg shadow-yellow-400/20 transition hover:scale-[1.02]"
                >
                  Get the Playbooks
                </a>
                <a
                  href="#discord"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition hover:bg-white/10"
                >
                  Join the Discord
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">Oil</p>
                  <p className="mt-1">Macro pressure</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">VWAP</p>
                  <p className="mt-1">Institutional control</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">Levels</p>
                  <p className="mt-1">Reaction zones</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur">
              <div className="rounded-[1.5rem] border border-yellow-400/20 bg-neutral-950 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Live Alert Style</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black p-5">
                  <p className="text-lg font-semibold">🚨 SPY | Pressure Alert</p>
                  <div className="mt-4 space-y-2 text-sm text-white/80">
                    <p>🛢️ Oil: 79.12 (+0.41%)</p>
                    <p>📉 SPY: 678.44 (-0.23%)</p>
                    <p>📍 VWAP: 679.10</p>
                  </div>
                  <div className="mt-5 rounded-xl bg-white/5 p-4 text-sm text-white/80">
                    <p className="font-medium text-white">Plan Language</p>
                    <p className="mt-2">Price is below VWAP and oil pressure is aligned, which supports bearish continuation.</p>
                  </div>
                  <div className="mt-5 text-sm text-white/80">
                    <p><span className="font-medium text-white">Entry:</span> Watch for price to stay below VWAP.</p>
                    <p><span className="font-medium text-white">Invalidation:</span> A move back above VWAP.</p>
                    <p><span className="font-medium text-white">Target:</span> Next downside level.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="downloads">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Download Hub</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Playbooks and PDFs</h2>
          </div>
          <p className="max-w-2xl text-white/70">
            Use this section for your free guides, premium previews, daily plan PDFs, and strategy breakdown downloads.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {playbooks.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs tracking-wide text-blue-200">
                PDF Resource
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              <div className="mt-8 flex flex-col gap-3">
                <button className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left font-medium transition hover:bg-white/10">
                  {item.button1}
                </button>
                <button className="rounded-2xl bg-yellow-400 px-4 py-3 text-left font-medium text-black transition hover:scale-[1.01]">
                  {item.button2}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Step 1</p>
              <h3 className="mt-3 text-2xl font-semibold">Understand the setup</h3>
              <p className="mt-3 text-white/70">Use the guides to learn what oil, VWAP, and key levels are actually telling you.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Step 2</p>
              <h3 className="mt-3 text-2xl font-semibold">Watch the alerts play out</h3>
              <p className="mt-3 text-white/70">See how the structure lines up in real time instead of guessing off random candles.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Step 3</p>
              <h3 className="mt-3 text-2xl font-semibold">Join the full system</h3>
              <p className="mt-3 text-white/70">Get daily plans, premium execution ideas, and the Discord workflow all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="discord">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-yellow-300">Discord Access</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Plug into the UnBiased system</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Join the Discord to access daily plans, real-time alerts, psychology breakdowns, and the structure behind how the market actually moves.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="font-medium text-white">Free Access</p>
                <p className="mt-2 text-sm text-white/70">Daily market plan, alert feed, and psychology breakdowns.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="font-medium text-white">Premium Access</p>
                <p className="mt-2 text-sm text-white/70">Execution plans, watchlists, premium notes, and deeper breakdowns.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-yellow-200">Call to Action</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Start with the free playbooks</h3>
            <p className="mt-3 text-white/80">
              Download the guides, see the system, then join the Discord for the live workflow.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#downloads"
                className="rounded-2xl bg-black px-5 py-3 text-center font-medium text-white transition hover:bg-neutral-900"
              >
                Browse Downloads
              </a>
              <a
                href="https://discord.gg/yuP7xVaV4"
                className="rounded-2xl border border-black/20 bg-white/80 px-5 py-3 text-center font-medium text-black transition hover:bg-white"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/50 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>UnBiased Trades</p>
          <p>@unbiasedtrades313</p>
        </div>
      </footer>
    </div>
  );
}
