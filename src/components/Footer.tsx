// 

import {  Mail, MapPin, Phone } from 'lucide-react';

type Page = 'home' | 'about' | 'creations' | 'learn' | 'contact';

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: Props) {
  const go = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cocoa-900 text-cream-100">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 border border-cream-200 shadow-sm">
                <img 
                  src="/logo2.png" 
                  alt="Rachel's Cakes Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-script text-2xl text-cream-50">Rachel's Cakes</span>
            </div>
            <p className="text-cream-200/80 text-sm leading-relaxed max-w-sm">
              Handcrafted celebration cakes, wedding cakes and sweet treats —
              baked fresh with love for every special moment in your life.
            </p>
            <div className="flex gap-3 mt-6">
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg text-cream-50 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Rachel', page: 'about' as Page },
                { label: 'Browse Creations', page: 'creations' as Page },
                { label: 'Learn With Me', page: 'learn' as Page },
                { label: 'Contact Us', page: 'contact' as Page },
              ].map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => go(page)}
                    className="text-cream-200/80 hover:text-blush-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-cream-50 mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blush-400 shrink-0" />
                <span>Njolwe Road,Winterpark,Lusaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blush-400 shrink-0" />
                <span>(260) 971-23456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blush-400 shrink-0" />
                <span>hello@rachelscakes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cocoa-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-200/60 text-xs">
            © {new Date().getFullYear()} Rachel's Cakes. Made with love and cream.
          </p>
          <p className="text-cream-200/60 text-xs">
            Baking since 2014 · Orders by appointment
          </p>
        </div>
      </div>
    </footer>
  );
}
