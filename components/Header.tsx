import Link from "next/link";

const navigation = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
  { href: "/auth/login", label: "Sign in" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="text-xl font-semibold tracking-tight text-slate-950"
        >
          OCA
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
