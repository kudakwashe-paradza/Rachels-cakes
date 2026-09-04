import { Cake, Heart, Sparkles, Calendar } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Page = 'home' | 'about' | 'creations' | 'learn' | 'contact';

interface Props {
  onNavigate: (page: Page) => void;
}

const heroImg = { 
  image: '/white.jpeg' 
};
const featureImgs = [
  'spongebob.jpg',
  'sophia.png',
  'White and green better view.jpg',
];

const teacherImgs = ['/woman.png'];

const features = [
  {
    icon: Heart,
    title: 'Made With Love',
    text: 'Every cake is baked from scratch using family recipes and the finest ingredients — never frozen, never rushed.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Designs',
    text: 'From elegant wedding tiers to playful birthday creations, each design is tailored to your story and celebration.',
  },
  {
    icon: Calendar,
    title: 'Fresh To Order',
    text: 'Baked fresh for your date. Place your order at least one week ahead so we can craft something truly special.',
  },
];

export default function Landing({ onNavigate }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg.image}
            alt="Elegant cream cake with gold and pearl details on marble"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/35 to-transparent" />
        </div>

        <div className="container-page relative z-10">
          <div className="max-w-xl">
            <span className="reveal section-eyebrow">Sweetly yours since 2014</span>
            <h1 className="reveal font-display text-5xl md:text-7xl leading-[1.05] text-cocoa-900 mt-2">
              Cakes that turn moments into <span className="text-blush-500">memories</span>.
            </h1>
            <p className="reveal mt-6 text-lg text-cocoa-700 leading-relaxed max-w-md">
              Handcrafted celebration cakes, wedding cakes and sweet treats —
              designed around you and baked fresh for every occasion.
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-4">
              <button onClick={() => onNavigate('creations')} className="btn-primary">
                Browse Creations
              </button>
              <button onClick={() => onNavigate('contact')} className="btn-ghost">
                Order a Custom Cake
              </button>
            </div>

            <div className="reveal mt-12 flex items-center gap-10 text-cocoa-700">
              <div>
                <p className="font-display text-5xl text-blush-500">10+</p>
                <p className="text-base mt-1">Years baking</p>
              </div>
              <div className="w-px h-14 bg-cream-300" />
              <div>
                <p className="font-display text-5xl text-blush-500">800+</p>
                <p className="text-base mt-1">Cakes delivered</p>
              </div>
              <div className="w-px h-14 bg-cream-300" />
              <div>
                <p className="font-display text-5xl text-blush-500">100%</p>
                <p className="text-base mt-1">Made by hand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / signature */}
      <section className="py-24 bg-cream-100">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <span className="reveal section-eyebrow">A note from Rachel</span>
            <p className="reveal font-display text-2xl md:text-3xl text-cocoa-800 leading-relaxed mt-3">
              "Baking is my love language. Every cake I make carries a little
              piece of my heart — and I hope you can taste it in every bite."
            </p>
            <p className="reveal mt-4 font-script text-3xl text-blush-500">— Rachel</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal section-eyebrow">Why Rachel's Cakes</span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
              Crafted with care, every single time
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal bg-white rounded-3xl p-8 shadow-sm shadow-cream-300/40 border border-cream-200 hover:shadow-xl hover:shadow-blush-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blush-100 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-blush-600" strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-2xl text-cocoa-900 mb-3">{f.title}</h3>
                <p className="text-cocoa-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured creations */}
      <section className="py-24 bg-cream-100">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="reveal section-eyebrow">A taste of the gallery</span>
              <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
                Featured creations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('creations')}
              className="reveal btn-ghost text-sm self-start md:self-auto"
            >
              View all creations
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureImgs.map((src, i) => (
              <div
                key={i}
                className="reveal group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-md shadow-cream-300/50"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={src}
                  alt="Featured cake creation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-cream-50 font-display text-xl">View in gallery</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn With Me teaser */}
      <section className="py-24">
        <div className="container-page">
          <div className="reveal grid gap-8 md:grid-cols-2 items-center bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-cream-200">
            <div className="p-10 md:p-14">
              <span className="section-eyebrow">Learn With Rachel</span>
              <h2 className="font-display text-4xl md:text-5xl text-cocoa-900 mt-2 leading-[1.1]">
                Want to bake like this?
              </h2>
              <p className="mt-5 text-cocoa-600 leading-relaxed">
                Rachel opens her kitchen for hands-on workshops and private lessons — perfect for beginners or anyone looking to elevate their skills. She also loves learning from other bakers and growing alongside a community of sweet makers.
              </p>
              <button
                onClick={() => onNavigate('learn')}
                className="mt-8 btn-primary"
              >
                Explore workshops
              </button>
            </div>
            <div className="h-72 md:h-full min-h-[320px]">
              <img
                src={teacherImgs[0]}
                alt="Rachel teaching cake decorating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24 bg-cream-100">
        <div className="container-page">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-blush-500 px-8 py-16 md:py-20 text-center shadow-2xl shadow-blush-500/30">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blush-400/40 animate-float-slow" />
            <div className="absolute -bottom-12 -left-8 w-52 h-52 rounded-full bg-blush-400/30 animate-float-slow" style={{ animationDelay: '1.5s' }} />
            <div className="relative z-10">
              <Cake className="w-10 h-10 text-white mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="font-display text-4xl md:text-5xl text-white">
                Ready to order your dream cake?
              </h2>
              <p className="mt-4 text-blush-100 max-w-xl mx-auto">
                Tell us about your celebration and we'll design something
                unforgettable — just for you.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blush-600 font-medium shadow-lg hover:bg-cream-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start your order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}