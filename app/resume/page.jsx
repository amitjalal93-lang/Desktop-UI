export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">Amit Jalal</h1>
          <p className="mt-2 text-lg text-slate-600">
            Frontend Developer • React • Next.js • Tailwind
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
            >
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition"
            >
              Open in New Tab
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-slate-300" />

        {/* Resume Preview Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-700">
              Resume Preview
            </h2>
            <p className="text-sm text-slate-500">
              Scroll to view the full resume
            </p>
          </div>

          <div className="w-full h-[75vh]">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-500 mt-10">
          © {new Date().getFullYear()} Amit Jalal • All rights reserved
        </p>
      </div>
    </main>
  );
}
