import ThemeToggle from "./theme-toggle";

// Single-screen recruiter portfolio. Content lives in the consts below — edit here.
const CV_URL: string | null = "/cv.pdf";
const UPDATED = "Jul 2026";

const CONTACTS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/codelit/", external: true },
  { label: "GitHub", href: "https://github.com/CodeLit", external: true },
  { label: "Email", href: "mailto:vladimir@codelit.app", external: false },
  { label: "Telegram", href: "https://t.me/Lit32", external: true },
  { label: "WhatsApp", href: "https://wa.me/lit32", external: true },
].filter(Boolean) as { label: string; href: string; external: boolean }[];

const STATS = [
  { value: "3 yrs", label: "at Ecommpay" },
  { value: "4", label: "plugins from scratch" },
  { value: "15+", label: "payment methods" },
  { value: "8+", label: "platforms" },
];

const STACK = ["PHP", "TypeScript", "Node.js", "React", "Apex", "Docker"];

const LINE_ITEMS = [
  {
    code: "TXN-01",
    title: "Commercetools payment plugin",
    stack: "TypeScript · serverless · AWS Lambda / GCP / Azure",
    body: "Built from scratch — one payment integration running as serverless functions across three cloud runtimes.",
  },
  {
    code: "TXN-02",
    title: "Salesforce Commerce Cloud",
    stack: "Apex · OMS adapter",
    body: "Payment plugin from scratch on the Salesforce platform, with an order-management-system adapter.",
  },
  {
    code: "TXN-03",
    title: "WooCommerce plugin — lead developer",
    stack: "PHP · React · TypeScript · WooCommerce Blocks",
    body: "Three years as lead dev: 476 commits, including the React/TS WooCommerce Blocks checkout.",
  },
  {
    code: "TXN-04",
    title: "PrestaShop & Drupal Commerce",
    stack: "PHP",
    body: "Two more payment plugins from scratch across the PHP e-commerce ecosystem.",
  },
];

const linkClasses =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <div className="flex items-center justify-between gap-4 font-mono text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
        <span>
          Statement of Work &middot; No. 0001 &middot; Updated {UPDATED}
        </span>
        <ThemeToggle />
      </div>

      <p className="mt-12 font-mono text-xs tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
        Payee
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
        Vladimir Gelunov
      </h1>
      <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
        Senior Fullstack Engineer — payments &amp; fintech
      </p>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-900 dark:text-neutral-100">
        3 years at Ecommpay building payment gateway integrations. 4 plugins
        from scratch. 15+ payment methods. 8+ platforms.
      </p>

      <dl className="mt-9 grid gap-3 font-mono text-sm">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <dt className="flex flex-1 items-baseline gap-2 text-neutral-500 dark:text-neutral-400">
              {s.label}
              <span className="-translate-y-[0.3em] flex-1 border-b border-dotted border-neutral-300 dark:border-neutral-700" />
            </dt>
            <dd className="font-semibold text-neutral-900 dark:text-neutral-100">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      <hr className="mt-12 border-neutral-200 dark:border-neutral-800" />
      <p className="mt-10 font-mono text-xs tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
        Line items
      </p>

      <div className="mt-6 flex flex-col gap-7">
        {LINE_ITEMS.map((item) => (
          <article key={item.code} className="grid grid-cols-[3.6rem_1fr] gap-x-4">
            <span className="pt-0.5 font-mono text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              {item.code}
            </span>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {item.stack}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-9 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="font-mono text-neutral-900 dark:text-neutral-100">
          Components:
        </span>{" "}
        {STACK.join(" · ")}
      </p>

      <hr className="mt-12 border-neutral-200 dark:border-neutral-800" />

      <p className="mt-6 font-mono text-xs tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
        Contact
      </p>
      <nav className="mt-5 flex flex-wrap items-center gap-3">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-900 transition-colors hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-400 ${linkClasses}`}
          >
            {c.label}
          </a>
        ))}
        {CV_URL && (
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-auto rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85 dark:bg-neutral-100 dark:text-neutral-900 ${linkClasses}`}
          >
            CV &#8599;
          </a>
        )}
      </nav>

      <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
        This statement is not an invoice. No payment is due — only a reply.
      </p>
    </main>
  );
}
