function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-12">
        <section className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Servixos</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            React + Vite + Tailwind CSS + TypeScript
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Your project is ready. Run <code>npm install</code> then <code>npm run dev</code> to start building.
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
