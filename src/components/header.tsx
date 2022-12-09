import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";

const navigation = [
  { name: "Product", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Company", href: "#" },
];

import React from "react";

export default function Header() {
  const session = useSession();
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-400">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="/"
            >
              Evercheap
            </Link>
            <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none flex flex-col lg:flex-row list-none lg:ml-auto"
                type="button"
                // onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-secondary hover:text-primary"
                >
                  {item.name}
                </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link
                href="/login"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-white leading-6 text-secondary shadow-sm hover:ring-secondary hover:bg-tertiary"
            >
              {!session ? "Log in" : "Account"}
            </Link>
          </div>
          {/* <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          ></div> */}
        </nav>
      </div>
  );
}