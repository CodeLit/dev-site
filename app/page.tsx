// Single-screen recruiter portfolio. Content lives in the consts below — edit here.
// TODO: add /public/cv.pdf, then set CV_URL to "/cv.pdf" to show the CV button.
const CV_URL: string | null = null;

const CONTACTS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codelit/", external: true },
  { label: "GitHub", href: "https://github.com/CodeLit", external: true },
  { label: "Email", href: "mailto:codelits@gmail.com", external: false },
  { label: "Telegram", href: "https://t.me/Lit32", external: true },
  { label: "WhatsApp", href: "https://wa.me/lit32", external: true },
  CV_URL && { label: "CV → PDF", href: CV_URL, external: false },
].filter(Boolean) as { label: string; href: string; external: boolean }[];

const STATS = [
  { value: "3 yrs", label: "at Ecommpay" },
  { value: "4", label: "plugins from scratch" },
  { value: "15+", label: "payment methods" },
  { value: "8+", label: "platforms" },
];

const STACK = ["PHP", "TypeScript", "Node.js", "React", "Apex", "Docker"];

const CASES = [
  {
    title: "Commercetools payment plugin",
    stack: "TypeScript · serverless · AWS Lambda / GCP / Azure",
    body: "Built from scratch — one payment integration running as serverless functions across three cloud runtimes.",
  },
  {
    title: "Salesforce Commerce Cloud",
    stack: "Apex · OMS adapter",
    body: "Payment plugin from scratch on the Salesforce platform, with an order-management-system adapter.",
  },
  {
    title: "WooCommerce plugin — lead developer",
    stack: "PHP · React · TypeScript · WooCommerce Blocks",
    body: "Three years as lead dev: 476 commits, including the React/TS WooCommerce Blocks checkout.",
  },
  {
    title: "PrestaShop & Drupal Commerce",
    stack: "PHP",
    body: "Two more payment plugins from scratch across the PHP e-commerce ecosystem.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <section className="flex min-h-[70vh] flex-col justify-center">
        <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
          Vladimir Gelunov
        </h1>
        <p className="mt-2 font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Senior Fullstack Engineer — payments &amp; fintech
        </p>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          3 years at Ecommpay building payment gateway integrations. 4 plugins
          from scratch. 15+ payment methods. 8+ platforms.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-mono text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {s.value}
              </dt>
              <dd className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        <nav className="mt-12 flex flex-wrap gap-3">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-md border border-zinc-300 px-4 py-2 font-mono text-sm text-zinc-800 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </section>

      <section className="mt-8 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          What I built
        </h2>
        <div className="mt-8 flex flex-col gap-10">
          {CASES.map((c) => (
            <article key={c.title}>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                {c.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {c.stack}
              </p>
              <p className="mt-3 max-w-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <ul className="flex flex-wrap gap-2">
          {STACK.map((t) => (
            <li
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
