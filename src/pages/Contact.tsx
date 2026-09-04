

'use client';

import { useState, FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShoppingBag, MessageCircle } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Njolwe street, Winterpark' },
  { icon: Phone, label: 'Phone', value: '(555) 014-2278' },
  { icon: Mail, label: 'Email', value: 'hello@rachelscakes.com' },
  { icon: Clock, label: 'Hours', value: 'always available · 9am to 6pm' },
];

const occasions = ['Wedding', 'Birthday', 'Anniversary', 'Baby Shower', 'Other'];
const connectReasons = ['Workshop / lesson enquiry', 'Baker collaboration', 'General hello', 'Other'];

type Tab = 'order' | 'connect';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [tab, setTab] = useState<Tab>('order');
  const [orderSent, setOrderSent] = useState(false);
  const [connectSent, setConnectSent] = useState(false);

  const handleOrderSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setOrderSent(false), 6000);
  };

  const handleConnectSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConnectSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setConnectSent(false), 6000);
  };

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-cream-100">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="reveal section-eyebrow">We'd love to hear from you</span>
            <h1 className="reveal font-display text-5xl md:text-6xl text-cocoa-900 mt-2 leading-[1.05]">
              Let's connect
            </h1>
            <p className="reveal mt-6 text-lg text-cocoa-700 leading-relaxed max-w-2xl">
              Whether you're dreaming about a cake for your next big celebration or you'd simply like to say hello — this is the place. Pick the option that fits you best.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="reveal mt-10 inline-flex bg-white border border-cream-200 rounded-2xl p-1.5 gap-1 shadow-sm">
            <button
              onClick={() => setTab('order')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === 'order'
                  ? 'bg-blush-500 text-white shadow-md shadow-blush-500/30'
                  : 'text-cocoa-600 hover:text-cocoa-900 hover:bg-cream-100'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Place an Order
            </button>
            <button
              onClick={() => setTab('connect')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                tab === 'connect'
                  ? 'bg-cocoa-800 text-white shadow-md shadow-cocoa-800/20'
                  : 'text-cocoa-600 hover:text-cocoa-900 hover:bg-cream-100'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Connect With Rachel
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Order form */}
           <div className={`lg:col-span-3 ${tab === 'order' ? '' : 'hidden'}`}>
              <form
                onSubmit={handleOrderSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-cream-200 space-y-6"
              >
                <div>
                  <h2 className="font-display text-3xl text-cocoa-900">Request a cake</h2>
                  <p className="mt-2 text-cocoa-500 text-sm">
                    Fill in the details below and Rachel will get back to you in a business day.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Phone" name="phone" placeholder="+260 97 xxx xxxx" />
                  <Field label="Event date" name="date" type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cocoa-700 mb-2">
                    Occasion
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((o) => (
                      <label key={o} className="cursor-pointer">
                        <input type="radio" name="occasion" value={o} className="peer sr-only" />
                        <span className="inline-block px-4 py-2 rounded-full text-sm bg-cream-100 border border-cream-200 text-cocoa-600 peer-checked:bg-blush-500 peer-checked:text-white peer-checked:border-blush-500 transition-all">
                          {o}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cocoa-700 mb-2">
                    Tell me about your dream cake
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Colours, theme, number of guests, flavours you love…"
                    className="w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-cocoa-800 placeholder:text-cocoa-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Send your request
                </button>

                {orderSent && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-sage-100 text-sage-700 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm">
                      Thank you! Rachel will reply within two business days.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Connect form */}
            <div className={`lg:col-span-3 ${tab === 'connect' ? '' : 'hidden'}`}>
              <form
                onSubmit={handleConnectSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-cream-200 space-y-6"
              >
                <div>
                  <h2 className="font-display text-3xl text-cocoa-900">Say hello</h2>
                  <p className="mt-2 text-cocoa-500 text-sm">
                    Want to learn with rachel, collaborate, or simply connect? Rachel loves hearing from fellow cake enthusiasts and curious learners alike.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your name" name="connect_name" placeholder="Jane Doe" required />
                  <Field label="Email" name="connect_email" type="email" placeholder="jane@email.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cocoa-700 mb-2">
                    What's this about?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {connectReasons.map((r) => (
                      <label key={r} className="cursor-pointer">
                        <input type="radio" name="reason" value={r} className="peer sr-only" />
                        <span className="inline-block px-4 py-2 rounded-full text-sm bg-cream-100 border border-cream-200 text-cocoa-600 peer-checked:bg-cocoa-800 peer-checked:text-white peer-checked:border-cocoa-800 transition-all">
                          {r}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cocoa-700 mb-2">
                    Your message
                  </label>
                  <textarea
                    name="connect_message"
                    rows={5}
                    required
                    placeholder="Tell Rachel what's on your mind — she reads every message personally."
                    className="w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-cocoa-800 placeholder:text-cocoa-400 focus:outline-none focus:border-cocoa-400 focus:ring-2 focus:ring-cocoa-200 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cocoa-800 text-white font-medium shadow-md hover:bg-cocoa-900 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>

                {connectSent && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-sage-100 text-sage-700 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm">
                      Message received! Rachel will be in touch soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="reveal bg-cream-100 rounded-3xl p-8">
                <h3 className="font-display text-2xl text-cocoa-900 mb-6">Studio details</h3>
                <ul className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-blush-600" strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-cocoa-500 mb-0.5">{label}</p>
                        <p className="text-cocoa-800 font-medium">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {tab === 'order' ? (
                <div className="reveal bg-blush-500 rounded-3xl p-8 text-white">
                  <h3 className="font-display text-2xl mb-3">Good to know</h3>
                  <ul className="space-y-3 text-blush-100 text-sm leading-relaxed">
                    <li>• Please order at least one week ahead for best results.</li>
                    <li>• Wedding cakes benefit from 4–6 weeks notice.</li>
                    <li>• Delivery available within 25 miles of the studio.</li>
                    <li>• Tastings available for wedding bookings.</li>
                  </ul>
                </div>
              ) : (
                <div className="reveal bg-cocoa-800 rounded-3xl p-8 text-white">
                  <h3 className="font-display text-2xl mb-3">Open to connecting</h3>
                  <ul className="space-y-3 text-cream-200/80 text-sm leading-relaxed">
                    <li>• Rachel welcomes fellow bakers for skill-sharing and collabs.</li>
                    <li>• She responds to every message personally.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-cocoa-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3 text-cocoa-800 placeholder:text-cocoa-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200 transition-all"
      />
    </div>
  );
}
