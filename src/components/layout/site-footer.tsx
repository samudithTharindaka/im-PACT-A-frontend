import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Company", href: "#" },
      { label: "Solutions", href: "#solutions" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="text-lg font-semibold text-white">im~PACT-A</p>
          <p className="mt-2 text-sm text-zinc-500">
            © {new Date().getFullYear()} im~PACT-A. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
