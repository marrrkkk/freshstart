import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="px-3 pb-4 pt-10 sm:px-5 sm:pt-16">
      <div className="section-frame rounded-[2.25rem] border border-black/10 bg-[#171717] px-6 py-10 text-[#f6f0e3] sm:px-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/10">
                <Image src="/logo.png" alt="FreshStart logo" fill className="object-contain p-2 brightness-0 invert" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f6f0e3]/72">
                FreshStart PH
              </span>
            </Link>
            <p className="mt-8 max-w-xl text-4xl leading-none sm:text-5xl">
              Built for brands that want their website to feel like momentum.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e3]/45">
                Navigate
              </p>
              <div className="mt-5 grid gap-3">
                {nav.map((item) => (
                  <Link key={item.label} href={item.href} className="text-base text-[#f6f0e3]/72 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e3]/45">
                Reach out
              </p>
              <div className="mt-5 space-y-3 text-base text-[#f6f0e3]/72">
                <p>Lucena City, Philippines</p>
                <Link href="mailto:hello@freshstart.ph" className="block hover:text-white">
                  hello@freshstart.ph
                </Link>
                <Link href="tel:+639123456789" className="block hover:text-white">
                  +63 912 345 6789
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#f6f0e3]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} FreshStart PH. All rights reserved.</p>
          <p>Strategy, design, and development from one team.</p>
        </div>
      </div>
    </footer>
  );
}
