import Link from 'next/link'

const navigation = [
  { name: "Product", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link
              className="flex items-center text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-tertiary">
                Evercheap
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-secondary hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-secondary leading-6 text-primary shadow-sm ring-1 ring-secondary hover:ring-secondary hover:bg-tertiary"
            >
              Log in
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
