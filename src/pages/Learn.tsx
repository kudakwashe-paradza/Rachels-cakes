import { BookOpen, Star, Users, Award, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Page = 'home' | 'about' | 'creations' | 'learn' | 'contact';

interface Props {
  onNavigate: (page: Page) => void;
}

const testimonials = [
  {
    name: 'Mrs N.',
    text: "Rachel is the most patient, encouraging teacher. In just one afternoon I went from never having piped icing in my life to decorating a cake I was genuinely proud of. Worth every penny.",
    stars: 5,
  },
  {
    name: 'Kudakwashe.',
    text: "This is rachels own daughter here. Growing up I can fully say she deserves more that five stars for the love, dedication and care she puts into these cakes. You wonr be dissapointed",
    stars: 5,
  },
  {
    name: 'Lindiwe T.',
    text: "I came in thinking baking was not for me. I left with a two-tiered cake and a completely new hobby. Rachel makes it feel fun and achievable.",
    stars: 5,
  },
];

const workshops = [
  {
    level: 'Beginner',
    title: 'Sweet Foundations',
    description:
      'The perfect starting point. Learn to bake a moist sponge from scratch, master a silky buttercream, and practise your first piping techniques.',
    duration: '3 hours',
    groupSize: 'Up to 6 people',
    price: 'K 750 per person',
    includes: ['All ingredients provided', 'Take your cake home', ],
    accent: 'bg-blush-50 border-blush-200',
    badge: 'bg-blush-500 text-white',
  },
  {
    level: 'Intermediate',
    title: 'Texture & Technique',
    description:
      'Go deeper into cake design. Explore fault lines, textured finishes, fondant work, and floral decorations that make cakes look truly professional.',
    duration: '4 hours',
    groupSize: 'Up to 4 people',
    price: 'K 1 100 per person',
    includes: ['All materials supplied', 'Cake to take home'],
    accent: 'bg-cream-50 border-cream-300',
    badge: 'bg-cocoa-700 text-white',
  },
  {
    level: 'Private 1-on-1',
    title: 'Your Session, Your Way',
    description:
      'A fully personalised lesson built around what you want to learn — whether that is a specific technique, a cake for an upcoming event, or a deep-dive into sugar flowers.',
    duration: 'Flexible (2–5 hours)',
    groupSize: 'Just you and Rachel',
    price: 'From K 1 800',
    includes: [, 'All materials', 'Unlimited follow-up questions'],
    accent: 'bg-white border-blush-300',
    badge: 'bg-blush-500 text-white',
  },
];

export default function Learn({ onNavigate }: Props) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-cream-100">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="pb-16">
              <span className="reveal section-eyebrow">Learn With Rachel</span>
              <h1 className="reveal font-display text-5xl md:text-6xl text-cocoa-900 mt-2 leading-[1.05]">
                Share the joy of baking — one cake at a time.
              </h1>
              <p className="reveal mt-6 text-lg text-cocoa-700 leading-relaxed">
                Rachel believes that baking is a skill anyone can learn and a joy everyone deserves to experience. She opens her kitchen for small-group workshops and private lessons — and she is equally passionate about learning from fellow bakers and growing her own craft.
              </p>
              <div className="reveal mt-8 flex flex-wrap gap-4">
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  Book a session
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-ghost"
                >
                  Connect with Rachel
                </button>
              </div>
            </div>
            <div className="reveal relative h-80 md:h-[420px] rounded-t-[2rem] overflow-hidden">
              <img
                src="img1.png"
                alt="Rachel decorating a cake in her kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="learner.png"
                alt="Rachel filming a tutorial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="reveal section-eyebrow">Rachel's philosophy</span>
                <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-2">
                  Forever a student, always a teacher.
                </h2>
              </div>
              <div className="reveal space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-100 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-blush-600" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cocoa-900">Always learning</h3>
                    <p className="mt-1 text-cocoa-600 leading-relaxed text-sm">
                      Rachel actively attends workshops, follows world-class cake artists, and experiments with new techniques in her own kitchen. Growth never stops.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-100 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blush-600" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cocoa-900">Teaching with patience</h3>
                    <p className="mt-1 text-cocoa-600 leading-relaxed text-sm">
                      Every student starts somewhere. Rachel's teaching style is warm, hands-on and completely judgement-free — beginners feel just as welcome.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blush-100 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-blush-600" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cocoa-900">Building community</h3>
                    <p className="mt-1 text-cocoa-600 leading-relaxed text-sm">
                      She loves connecting with other bakers — for collaborations, skill exchanges, and shared inspiration. If you make cakes too, she wants to hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-24 bg-cream-100">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal section-eyebrow">Workshop options</span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
              Find the session that suits you
            </h2>
            <p className="reveal mt-4 text-cocoa-600">
              All sessions are held in Rachel's home . Spaces are limited so every student gets real attention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workshops.map((w, i) => (
              <div
                key={w.title}
                className={`reveal flex flex-col rounded-3xl border p-8 ${w.accent} hover:-translate-y-1 hover:shadow-xl hover:shadow-blush-500/10 transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={`self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${w.badge} mb-6`}>
                  {w.level}
                </span>
                <h3 className="font-display text-2xl text-cocoa-900">{w.title}</h3>
                <p className="mt-3 text-cocoa-600 text-sm leading-relaxed flex-1">{w.description}</p>

                <div className="mt-6 space-y-2 text-sm text-cocoa-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blush-500 shrink-0" />
                    <span>{w.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blush-500 shrink-0" />
                    <span>{w.groupSize}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-1.5">
                  {w.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cocoa-700">
                      <ChevronRight className="w-3.5 h-3.5 text-blush-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-cream-200/70 flex items-center justify-between">
                  <p className="font-display text-xl text-blush-500">{w.price}</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-sm font-medium text-cocoa-700 hover:text-blush-500 transition-colors flex items-center gap-1"
                  >
                    Book now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal section-eyebrow">What students say</span>
            <h2 className="reveal font-display text-4xl md:text-5xl text-cocoa-900 mt-1">
              Real results, real joy
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal bg-white rounded-3xl p-8 border border-cream-200 shadow-sm hover:shadow-lg hover:shadow-blush-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-blush-400 text-blush-400" />
                  ))}
                </div>
                <p className="text-cocoa-700 leading-relaxed text-sm italic">"{t.text}"</p>
                <p className="mt-5 font-display text-lg text-cocoa-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-100">
        <div className="container-page">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-cocoa-800 px-8 py-16 md:py-20 text-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cocoa-700/60 animate-float-slow" />
            <div className="absolute -bottom-12 -left-8 w-52 h-52 rounded-full bg-cocoa-700/40 animate-float-slow" style={{ animationDelay: '1.5s' }} />
            <div className="relative z-10">
              <Award className="w-10 h-10 text-blush-400 mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="font-display text-4xl md:text-5xl text-cream-50">
                Ready to learn something sweet?
              </h2>
              <p className="mt-4 text-cream-200/80 max-w-xl mx-auto">
                Whether you're a complete beginner or a fellow baker who'd love to connect — Rachel would love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blush-500 text-white font-medium shadow-lg hover:bg-blush-600 hover:-translate-y-0.5 transition-all duration-300"
                >
                Learn with rachel
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-cream-200/40 text-cream-100 font-medium hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Just say hello
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
