import { Link, useNavigate } from "@tanstack/react-router";
import { Search, ShoppingBag, PackageSearch, Store } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { STORE_NAME } from "@/lib/store";
import kitWebLogo from "@/assets/kitweblogo.jpg";

export function SiteHeader() {
  const { count } = useCart();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  return (
    <header className="sticky top-0 z-40 border-b border-[#001e39] bg-[#002c53] text-white">
      <div className="border-b border-white/10 bg-[#002c53] text-xs text-white/90">
        <div className="container-x flex h-8 items-center justify-between">
          <span>Free island-wide delivery on orders over Rs. 100,000</span>
          <span className="hidden sm:inline">Cash on Delivery · Bank Transfer</span>
        </div>
      </div>
      <div className="container-x flex h-16 items-center gap-4 bg-[#002c53]">
        <Link to="/" className="flex shrink-0 items-center" aria-label={STORE_NAME}>
          <img
            src={kitWebLogo}
            alt="KIT Electronics"
            className="h-12 rounded-md object-contain object-center"
          />
        </Link>
        <form
          className="relative ml-4 hidden flex-1 md:block"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/shop", search: { q: q || undefined } });
          }}
        >
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#002c53]/60" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search TVs, laptops, phones, fridges…"
            className="h-11 w-full rounded-full border border-white/20 bg-white pl-11 pr-4 text-sm text-[#002c53] placeholder:text-[#002c53]/55 outline-none focus:border-white focus:ring-2 focus:ring-white/40"
          />
        </form>
        <nav className="ml-auto flex items-center gap-1 text-sm font-medium text-white">
          <Link
            to="/shop"
            className="hidden rounded-full px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex items-center gap-1.5"
          >
            <Store className="size-4" /> Shop
          </Link>
          <Link
            to="/track"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            <PackageSearch className="size-4" />{" "}
            <span className="hidden sm:inline">Track Order</span>
          </Link>
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-white transition-colors hover:bg-white/10"
            aria-label="Cart"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-white px-1 text-[10px] font-bold text-[#002c53]">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-ink-foreground">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <img
            src={kitWebLogo}
            alt="KIT Electronics"
            className="h-12 rounded-md object-contain object-center"
          />
          <p className="mt-2 text-sm opacity-70">
            Electronics, appliances and vehicles — with genuine warranties and live stock from our
            stores.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Shop</p>
          <ul className="mt-2 space-y-1 opacity-70">
            <li>
              <Link to="/shop">All products</Link>
            </li>
            <li>
              <Link to="/track">Track your order</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Staff</p>
          <ul className="mt-2 space-y-1 opacity-70">
            <li>
              <Link to="/admin">Admin panel</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
