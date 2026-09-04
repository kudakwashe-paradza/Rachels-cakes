

import { useMemo, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { X, Cake } from 'lucide-react';

type Page = 'home' | 'about' | 'creations' | 'contact';

interface Props {
  onNavigate: (page: Page) => void;
}

type Category = 'All' | 'Wedding' | 'Birthday' | 'Cupcakes' | 'Macarons';

interface Creation {
  id: number;
  category: Exclude<Category, 'All'>;
  image: string;
}

const creations: Creation[] = [
  { id: 1, category: 'Birthday', image: '/sophia.png' },
  { id: 2, category: 'Wedding', image: '/green and white.jpg' },
  { id: 3, category: 'Birthday', image: '/white and pink.jpg' },
  { id: 4, category: 'Birthday', image: '/white and pink2.jpg' },
  { id: 5, category: 'Birthday', image: '/spongebob.jpg' },
  { id: 6, category: 'Birthday', image: '/lion king.jpg' },
  { id: 7, category: 'Birthday', image: '/white.jpeg' },
  { id: 8, category: 'Wedding', image: '/white chocolate.jpg' },
  { id: 9, category: 'Birthday', image: '/Elsa.jpg' },
  { id: 10, category: 'Birthday', image: '/white2.jpg' },
  { id: 11, category: 'Birthday', image: '/orange nad white.jpg' },
  { id: 12, category: 'Birthday', image: '/car.jpg' },
  { id: 13, category: 'Birthday', image: '/blue.jpg' },
  { id: 14, category: 'Birthday', image: '/pink.jpg' },
  { id: 15, category: 'Wedding', image: '/wedding.jpg' },
  { id: 16, category: 'Wedding', image: '/wedding orange.jpg' },
  { id: 17, category: 'Birthday', image: '/barbie.jpg' },
  { id: 18, category: 'Birthday', image: '/Spiderman.jpg' },
  { id: 19, category: 'Birthday', image: '/sophia2.jpg' },
  { id: 20, category: 'Wedding', image: '/White and green better view.jpg' },
  { id: 21, category: 'Birthday', image: '/elsa2.jpg' },
];

const categories: Category[] = ['All', 'Wedding', 'Birthday', 'Cupcakes', 'Macarons'];

export default function Creations({ onNavigate }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<Category>('All');
  const [selected, setSelected] = useState<Creation | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? creations : creations.filter((c) => c.category === active)),
    [active]
  );

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream-100">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="reveal section-eyebrow">The gallery</span>
            <h1 className="reveal font-display text-5xl md:text-6xl text-cocoa-900 mt-2 leading-[1.05]">
              Browse the creations
            </h1>
            <p className="reveal mt-6 text-lg text-cocoa-700 leading-relaxed max-w-2xl">
              A collection of cakes, cupcakes and sweet treats I've had the joy
              of making. Every design can be tailored to your colours, theme and
              celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="pb-24">
        <div className="container-page">
          {/* Filters */}
          <div className="reveal flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-blush-500 text-white shadow-md shadow-blush-500/30'
                    : 'bg-white text-cocoa-600 border border-cream-200 hover:border-blush-300 hover:text-blush-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid — key={active} forces a clean remount + fade-in when the filter changes,
              instead of relying on the reveal/IntersectionObserver which only scans on
              initial mount and won't re-trigger for cards that come back into the array. */}
          <div key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className="animate-fade-in group text-left overflow-hidden rounded-3xl bg-white shadow-sm border border-cream-200 hover:shadow-xl hover:shadow-blush-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${(i % 6) * 60}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={c.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={c.category}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-cocoa-700">
                    {c.category}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-cocoa-500 py-16">No creations in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-100">
        <div className="container-page text-center">
          <Cake className="reveal w-10 h-10 text-blush-500 mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="reveal font-display text-4xl text-cocoa-900 mb-4">
            Don't see exactly what you want?
          </h2>
          <p className="reveal text-cocoa-600 max-w-lg mx-auto mb-8">
            These are just a start. Every cake is designed from scratch around
            your celebration — tell me your idea and we'll make it real.
          </p>
          <button onClick={() => onNavigate('contact')} className="reveal btn-primary">
            Request a custom cake
          </button>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-cocoa-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-cream-50 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-cocoa-700 hover:bg-blush-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selected.image}
              className="w-full max-h-[70vh] object-contain bg-cocoa-900/5"
              alt={selected.category}
            />
            <div className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blush-100 text-blush-700 text-xs font-medium mb-3">
                {selected.category}
              </span>
              <button onClick={() => onNavigate('contact')} className="btn-primary text-sm">
                Order something like this
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
