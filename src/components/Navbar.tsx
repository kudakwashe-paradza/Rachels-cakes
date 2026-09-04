import { useState, useEffect } from 'react';
import { Menu, X, Cake } from 'lucide-react';

type Page = 'home' | 'about' | 'creations' | 'learn' | 'contact';

interface Props {
  current: Page;
  onNavigate: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Rachel', page: 'about' },
  { label: 'Browse Creations', page: 'creations' },
  { label: 'Learn With Me', page: 'learn' },
  { label: 'Contact Us', page: 'contact' },
];

export default function Navbar({ current, onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >  
            <div>
              <img
                src="/logo2.png"
                alt="Rachel's Cakes"
                className="w-20 h-20 object-contain group-hover:scale-105 transition-transform"
              />        
            </div>
            <span className="font-script text-2xl text-cocoa-800 leading-none">
              Rachel's Cakes
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-3">
            {links.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => handleNav(page)}
                  className={`px-5 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                    current === page
                      ? 'bg-blush-500 text-white shadow-sm shadow-blush-500/30'
                      : 'text-cocoa-600 hover:text-cocoa-900 hover:bg-cream-200'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => handleNav('contact')}
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            Order Now
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-cocoa-700 hover:bg-cream-200 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6 border-t border-cream-200 mt-1 animate-fade-in">
            <ul className="flex flex-col gap-1 pt-4">
              {links.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      current === page
                        ? 'bg-blush-500 text-white'
                        : 'text-cocoa-700 hover:bg-cream-200'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary w-full text-sm"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}