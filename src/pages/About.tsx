import { useReveal } from '@/hooks/useReveal';
import { Quote, Award, Heart, Clock } from 'lucide-react';

type Page = 'home' | 'about' | 'creations' | 'contact';

interface Props {
  onNavigate: (page: Page) => void;
}

const portrait =
  'woman2.png';
const kitchen =
  'woman2.png';

const milestones = [
  { year: '2014', text: 'Rachel bakes her first  cake  — and the word spreads fast.' },
  { year: '2017', text: 'Rachel opens her home studio, taking custom orders across the region.' },
  { year: '2020', text: 'Transitioned from hard icing and ventured into other styles .' },
  { year: '2024', text: 'Celebrates 800+ cakes delivered — each one made by hand, by Rachel herself.' },
  { year: '2026', text: 'Begins expanding and her daughter builds her, her own website to expand and reach more customers.' },
];

const values = [
  { icon: Heart, title: 'Passion', text: 'I treat every order as if it were for my own family table.' },
  { icon: Award, title: 'Quality', text: 'Real butter, real chocolate, real vanilla — no shortcuts, ever.' },
  { icon: Clock, title: 'Dedication', text: 'Small batches mean every cake gets the time and attention it deserves.' },
];

export default function About({ onNavigate }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream-100">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="reveal section-eyebrow">Meet Rachel</span>
            <h1 className="reveal font-display text-5xl md:text-6xl text-cocoa-900 mt-2 leading-[1.05]">
              The hands and heart behind every cake
            </h1>
            <p className="reveal mt-6 text-lg text-cocoa-700 leading-relaxed max-w-2xl">
              I'm Rachel — a self-taught baker who turned a tiny home oven and a
              well-loved family recipe book into a little cake studio known for
              handmade, heartfelt celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait + story */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="reveal relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-blush-200/60 -rotate-2" />
              <img
                src={portrait}
                alt="Rachel assembling a macaron-topped cake in her kitchen"
                className="relative rounded-[2rem] w-full aspect-[4/3] object-cover shadow-xl"
              />
            </div>
            <div>
              <span className="reveal section-eyebrow">My story</span>
              <h2 className="reveal font-display text-4xl text-cocoa-900 mt-1 mb-6">
                From a home oven to your celebrations
              </h2>
              <div className="reveal space-y-4 text-cocoa-700 leading-relaxed">
                <p>
                  It started with an interest born from an inate feeling, first single a cake then two, then three and here we are.
                  The moment people started comming for more I knew I was a goner, I knew
                  I'd found my calling.
                </p>
                <p>
                  A decade later, Rachel's Cakes is still a one-woman studio but now supported by my five beautiful girls. I
                  personally design, bake, fill and finish every single cake —
                  because I believe a celebration cake should feel as personal as
                  the occasion it's made for.
                </p>
                <p>
                  No production line, no frozen layers, no shortcuts. Just
                  butter, sugar, flour, and a whole lot of love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-100">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="reveal section-eyebrow">What I stand for</span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
              Three things I never compromise on
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal bg-white rounded-3xl p-8 text-center shadow-sm border border-cream-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-blush-600" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl text-cocoa-900 mb-3">{v.title}</h3>
                <p className="text-cocoa-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="reveal section-eyebrow">The journey</span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
              A decade of sweet milestones
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream-300 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`reveal relative flex md:items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200">
                      <p className="font-display text-2xl text-blush-500 mb-1">{m.year}</p>
                      <p className="text-cocoa-700 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-blush-500 ring-4 ring-cream-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-cream-100">
        <div className="container-page">
          <div className="reveal max-w-3xl mx-auto text-center">
            <Quote className="w-10 h-10 text-blush-400 mx-auto mb-6" strokeWidth={1.5} />
            <p className="font-display text-2xl md:text-3xl text-cocoa-800 leading-relaxed">
              “I don't just bake cakes. I make the centerpiece of your celebration —
              the one everyone gathers around, photographs, and remembers.”
            </p>
            <p className="mt-5 font-script text-3xl text-blush-500">Rachel</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="reveal font-display text-4xl text-cocoa-900 mb-4">
            Let's create something together
          </h2>
          <p className="reveal text-cocoa-600 max-w-lg mx-auto mb-8">
            Whether it's a wedding, a birthday, or just because — I'd love to be
            part of your story.
          </p>
          <button onClick={() => onNavigate('contact')} className="reveal btn-primary">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}
