import { useEffect, useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowDown, ArrowRight, Check, Clock3, Instagram, MapPin, Menu, Minus, Navigation, Phone, Plus, Scissors, Star, X } from 'lucide-react';
import { business, faqs, gallery, images, services } from './data';

const queryClient = new QueryClient();

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('hair');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showBooking, setShowBooking] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox !== null || showBooking ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, lightbox, showBooking]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    if (!name || phone.length < 10) {
      setFormError('Please add your name and a 10-digit phone number.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-20 px-5 py-4 transition-colors duration-300 md:px-10 ${scrolled ? 'bg-[#17423e]/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <nav className="mx-auto flex max-w-[1360px] items-center justify-between">
          <button type="button" onClick={() => scrollToId('top')} className="group flex items-center gap-3 text-left" data-testid="button-logo">
            <span className="flex h-10 w-10 items-center justify-center border border-[hsl(var(--primary-foreground)/.35)] text-[hsl(var(--primary-foreground))]"><Scissors size={17} strokeWidth={1.5} /></span>
            <span className="text-[hsl(var(--primary-foreground))]"><span className="block display-font text-2xl leading-none">Lavish</span><span className="eyebrow mt-1 block text-[10px] tracking-[.24em] opacity-75">Unisex Salon</span></span>
          </button>
          <div className="hidden items-center gap-7 text-sm text-[hsl(var(--primary-foreground)/.78)] lg:flex">
            <button type="button" onClick={() => scrollToId('top')} data-testid="link-home">Home</button>
            <button type="button" onClick={() => scrollToId('experience')} data-testid="link-experience">About</button>
            <button type="button" onClick={() => scrollToId('menu')} data-testid="link-menu">Services</button>
            <button type="button" onClick={() => scrollToId('journal')} data-testid="link-journal">Gallery</button>
            <button type="button" onClick={() => scrollToId('reviews')} data-testid="link-reviews">Reviews</button>
            <button type="button" onClick={() => scrollToId('visit')} data-testid="link-visit">Contact</button>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setShowBooking(true)} className="hidden border border-[hsl(var(--primary-foreground)/.55)] px-5 py-3 text-xs font-semibold tracking-[.12em] text-[hsl(var(--primary-foreground))] transition hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] sm:block" data-testid="button-book-header">BOOK A VISIT</button>
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation" className="flex h-11 w-11 items-center justify-center border border-[hsl(var(--primary-foreground)/.4)] text-[hsl(var(--primary-foreground))] lg:hidden" data-testid="button-open-menu"><Menu size={19} /></button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[730px] overflow-hidden bg-[#17423e] text-[#f4eddf] md:min-h-[800px]">
          <img src={images.hero} alt="Hair styling in a warm, sunlit salon" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45 mix-blend-luminosity" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,52,48,.96)_0%,rgba(15,52,48,.72)_43%,rgba(15,52,48,.17)_100%)]" />
          <div className="mx-auto flex min-h-[730px] max-w-[1360px] items-end px-5 pb-16 md:min-h-[800px] md:items-center md:px-10 md:pb-0">
            <div className="max-w-3xl">
              <p className="eyebrow reveal text-[#dcc9aa]">{business.category} · Indore</p>
              <h1 className="display-font reveal reveal-delay-1 mt-5 max-w-2xl text-[clamp(4.4rem,11vw,9.8rem)] leading-[.81] tracking-[-.045em]">Come as you<br /><em className="text-[#d69b83]">are.</em></h1>
              <p className="reveal reveal-delay-2 mt-9 max-w-md text-base leading-7 text-[#efe8d9]/80 md:text-lg">A considered salon for hair, skin and grooming. The kind of place where your appointment becomes the best part of the day.</p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-5">
                <button type="button" onClick={() => setShowBooking(true)} className="group inline-flex items-center gap-7 bg-[#d69b83] px-6 py-4 text-sm font-semibold text-[#17423e] transition hover:bg-[#ecd0bd]" data-testid="button-book-hero">ENQUIRE FOR A VISIT <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
                <button type="button" onClick={() => scrollToId('experience')} className="inline-flex items-center gap-3 text-sm text-[#f4eddf]/85" data-testid="button-discover"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f4eddf]/40"><ArrowDown size={15} /></span> Discover Lavish</button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-5 hidden max-w-[180px] text-right md:block"><p className="eyebrow text-[#dcc9aa]">A little more you</p><p className="mt-2 text-sm leading-5 text-[#f4eddf]/70">Good hair days, made here.</p></div>
        </section>

        <section id="experience" className="bg-[#f4eddf] px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-[1.05fr_.95fr] md:items-end md:gap-24">
            <div><p className="eyebrow text-[#b86652]">01 / The Lavish feeling</p><h2 className="display-font mt-5 max-w-xl text-5xl leading-[.97] text-[#17423e] md:text-7xl">The luxury is<br /><em>feeling seen.</em></h2></div>
            <div className="max-w-lg"><p className="text-xl leading-8 text-[#17423e]">No two people need the same thing from a salon. That’s why we begin with a conversation, not a catalogue.</p><p className="mt-6 leading-7 text-[#53615b]">We pay attention to the details that make a difference: the way a cut grows out, the tone that works with your skin, the five quiet minutes at the basin. Lavish is warm, personal and quietly exacting — always with room for you to be yourself.</p><button type="button" onClick={() => setShowBooking(true)} className="group mt-8 inline-flex items-center gap-4 text-sm font-semibold text-[#17423e]" data-testid="button-start-conversation">START A CONVERSATION <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button></div>
          </div>
          <div className="mx-auto mt-20 max-w-[1240px] border-t border-[#d5c8b5] pt-8"><div className="grid gap-8 md:grid-cols-3"><div><p className="display-font text-4xl text-[#b86652]">{business.rating}/5</p><p className="eyebrow mt-2 text-[#53615b]">Rated by {business.reviews} reviews</p></div><div><p className="display-font text-4xl text-[#b86652]">04</p><p className="eyebrow mt-2 text-[#53615b]">Ways to feel looked after</p></div><div><p className="display-font text-4xl text-[#b86652]">∞</p><p className="eyebrow mt-2 text-[#53615b]">Ways to be yourself</p></div></div></div>
        </section>

        <section id="menu" className="bg-[#e6d4bd] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow text-[#b86652]">02 / Take your time</p><h2 className="display-font mt-5 text-5xl leading-none text-[#17423e] md:text-7xl">The menu</h2></div><p className="max-w-sm leading-6 text-[#53615b]">Simple choices, considered thoroughly. Every service starts with a consultation and ends with a little more confidence.</p></div>
            <div className="mt-14 grid gap-8 md:grid-cols-[.8fr_1.2fr]">
              <div className="flex flex-row gap-2 md:flex-col md:gap-0">{services.map((service) => <button type="button" key={service.id} onClick={() => setActiveService(service.id)} className={`group flex flex-1 items-center justify-between border-t border-[#c7b79f] py-5 text-left transition md:flex-none ${activeService === service.id ? 'text-[#17423e]' : 'text-[#53615b]/60'}`} data-testid={`button-service-${service.id}`}><span className="flex items-center gap-4"><span className={`mono-font text-xs ${activeService === service.id ? 'text-[#b86652]' : ''}`}>{service.number}</span><span className="display-font text-3xl md:text-5xl">{service.name}</span></span><ArrowRight size={18} className="hidden transition-transform group-hover:translate-x-1 md:block" /></button>)}</div>
              <div className="border-t border-[#17423e] pt-6 md:pl-10"><p className="max-w-md text-xl leading-7 text-[#17423e]">{services.find((s) => s.id === activeService)?.detail}</p><div className="mt-8">{services.find((s) => s.id === activeService)?.items.map(([item, price]) => <div className="flex items-center justify-between border-b border-[#c7b79f] py-4 text-sm" key={item}><span>{item}</span><span className="mono-font text-xs text-[#b86652]">{price}</span></div>)}</div><p className="mt-6 text-xs italic text-[#53615b]">Call for current pricing and availability.</p></div>
            </div>
          </div>
        </section>

        <section id="journal" className="bg-[#f4eddf] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1240px]"><div className="flex items-end justify-between"><div><p className="eyebrow text-[#b86652]">03 / From the studio</p><h2 className="display-font mt-5 text-5xl leading-none text-[#17423e] md:text-7xl">A glimpse<br /><em>inside.</em></h2></div><span className="eyebrow hidden text-[#53615b] md:block">Scroll to explore →</span></div>
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">{gallery.map((item, index) => <button type="button" key={item.src} onClick={() => setLightbox(index)} className={`group relative overflow-hidden text-left ${index === 0 ? 'col-span-2 aspect-[1.5] md:col-span-7 md:row-span-2 md:aspect-auto' : index === 1 ? 'col-span-1 aspect-square md:col-span-5' : 'col-span-1 aspect-square md:col-span-3'}`} data-testid={`button-gallery-${index}`}><img src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#17423e]/80 to-transparent px-4 pb-4 pt-10 text-xs text-[#f4eddf]"><span>{item.label}</span><span className="opacity-0 transition group-hover:opacity-100"><Plus size={16} /></span></span></button>)}</div>
          </div>
        </section>

        <section id="reviews" className="bg-[#17423e] px-5 py-24 text-[#f4eddf] md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-[.7fr_1.3fr] md:gap-24"><div><p className="eyebrow text-[#d69b83]">04 / Good company</p><div className="mt-8 flex text-[#d69b83]" aria-label={`${business.rating} out of 5 stars`}><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div><p className="display-font mt-5 text-6xl">{business.rating}<span className="text-3xl text-[#d69b83]">/5</span></p><p className="mt-2 text-sm text-[#f4eddf]/65">from {business.reviews} reviews</p></div><div><h2 className="display-font text-4xl leading-[1.05] md:text-6xl">A good salon<br /><em>speaks for itself.</em></h2><p className="mt-7 max-w-lg leading-7 text-[#f4eddf]/70">See what Lavish clients are saying on Google, then call us to check availability for your next visit.</p><div className="mt-9 flex flex-wrap gap-4"><a href={business.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#d69b83] px-5 py-4 text-sm font-semibold text-[#17423e] transition hover:bg-[#ecd0bd]" data-testid="link-read-reviews">READ OUR REVIEWS <ArrowRight size={16} /></a><a href={business.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-[#f4eddf]/35 px-5 py-4 text-sm transition hover:border-[#f4eddf]" data-testid="link-google-maps">GOOGLE MAPS <Navigation size={15} /></a></div><div className="mt-16 grid gap-6 border-t border-[#f4eddf]/20 pt-7 text-sm text-[#f4eddf]/70 md:grid-cols-3"><p><span className="mb-2 block text-2xl text-[#f4eddf]">01</span>Personalised styling</p><p><span className="mb-2 block text-2xl text-[#f4eddf]">02</span>Professional attention</p><p><span className="mb-2 block text-2xl text-[#f4eddf]">03</span>Room to be yourself</p></div></div></div>
        </section>

        <section id="visit" className="bg-[#e6d4bd] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-[1fr_1fr] md:items-center md:gap-24"><div><p className="eyebrow text-[#b86652]">05 / Come find us</p><h2 className="display-font mt-5 text-5xl leading-[.95] text-[#17423e] md:text-7xl">Your chair<br /><em>is waiting.</em></h2><div className="mt-10 space-y-5 text-[#53615b]"><p className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0 text-[#b86652]" /><span>{business.address.map((line) => <span className="block" key={line}>{line}</span>)}</span></p><p className="flex items-start gap-3"><Clock3 size={18} className="mt-1 shrink-0 text-[#b86652]" /><span>{business.hours}</span></p><p className="flex items-start gap-3"><Phone size={18} className="mt-1 shrink-0 text-[#b86652]" /><a href={business.phoneHref} className="hover:underline">{business.phoneDisplay}</a></p></div><div className="mt-9 flex flex-wrap gap-4"><button type="button" onClick={() => setShowBooking(true)} className="inline-flex items-center gap-5 bg-[#17423e] px-6 py-4 text-sm font-semibold text-[#f4eddf] transition hover:bg-[#245d56]" data-testid="button-book-visit">ENQUIRE FOR A VISIT <ArrowRight size={16} /></button><a href={business.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#17423e]/30 px-5 py-4 text-sm text-[#17423e] transition hover:border-[#17423e]" data-testid="link-directions"><Navigation size={15} /> GET DIRECTIONS</a><a href={business.phoneHref} className="inline-flex items-center gap-2 border border-[#17423e]/30 px-5 py-4 text-sm text-[#17423e] transition hover:border-[#17423e]" data-testid="link-call-now"><Phone size={15} /> CALL NOW</a></div></div><div className="relative aspect-[4/3] overflow-hidden bg-[#17423e]"><img src={images.studio} alt="The calm interior of Lavish Unisex Salon" className="h-full w-full object-cover opacity-90" /><div className="absolute bottom-5 left-5 bg-[#f4eddf] px-4 py-3 text-[#17423e]"><p className="eyebrow text-[#b86652]">Navlakha Square</p><p className="mt-1 text-sm">Find your way to Lavish.</p></div></div></div>
        </section>

        <section className="bg-[#f4eddf] px-5 py-24 md:px-10 md:py-28"><div className="mx-auto max-w-[820px]"><p className="eyebrow text-[#b86652]">Questions, answered</p><h2 className="display-font mt-5 text-5xl text-[#17423e] md:text-6xl">Before you visit</h2><div className="mt-10">{faqs.map(([question, answer], index) => <div className="border-t border-[#d5c8b5]" key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg text-[#17423e]" aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><p className="min-h-0 overflow-hidden pb-6 pr-8 text-sm leading-6 text-[#53615b]">{answer}</p></div></div>)}</div></div></section>
      </main>

      <footer className="bg-[#17423e] px-5 py-12 text-[#f4eddf] md:px-10"><div className="mx-auto max-w-[1240px]"><div className="flex flex-col justify-between gap-10 border-b border-[#f4eddf]/20 pb-12 md:flex-row md:items-end"><div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border border-[#f4eddf]/40"><Scissors size={17} /></span><span><span className="display-font block text-3xl">{business.shortName}</span><span className="eyebrow block text-[10px] tracking-[.24em] text-[#d69b83]">{business.category}</span></span></div><p className="mt-6 max-w-xs text-sm leading-6 text-[#f4eddf]/65">A personal destination for hair, beauty and grooming in Indore.</p><p className="mt-4 max-w-sm text-xs leading-5 text-[#f4eddf]/45">{business.addressInline}</p></div><div className="flex flex-wrap gap-8 text-sm text-[#f4eddf]/75"><a href={business.instagramHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d69b83]" data-testid="link-instagram"><Instagram size={17} /> Instagram</a><a href={business.phoneHref} className="flex items-center gap-2 hover:text-[#d69b83]" data-testid="link-call"><Phone size={16} /> {business.phoneDisplay}</a></div></div><div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#f4eddf]/45 md:flex-row"><span>© 2026 {business.name}, Indore</span><span>Come as you are. Leave a little more you.</span><button type="button" onClick={() => scrollToId('top')} className="inline-flex items-center gap-2 text-left uppercase tracking-[.15em] transition hover:text-[#f4eddf]" data-testid="button-back-to-top">Back to top ↑</button></div></div></footer>

      {menuOpen && <div className="fixed inset-0 z-50 bg-[#17423e] p-6 text-[#f4eddf]"><div className="flex items-center justify-between"><span className="display-font text-3xl">Lavish</span><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation" className="flex h-11 w-11 items-center justify-center border border-[#f4eddf]/35" data-testid="button-close-menu"><X size={20} /></button></div><div className="mt-24 flex flex-col gap-7">{[['top', 'Home'], ['experience', 'About'], ['menu', 'Services'], ['journal', 'Gallery'], ['reviews', 'Reviews'], ['visit', 'Contact']].map(([id, label], index) => <button type="button" key={id} onClick={() => { setMenuOpen(false); scrollToId(id); }} className="display-font flex items-center justify-between border-b border-[#f4eddf]/20 pb-5 text-4xl text-left" data-testid={`mobile-link-${id}`}><span><span className="mono-font mr-4 text-xs text-[#d69b83]">0{index + 1}</span>{label}</span><ArrowRight size={21} /></button>)}</div><button type="button" onClick={() => { setMenuOpen(false); setShowBooking(true); }} className="mt-12 w-full bg-[#d69b83] px-5 py-4 text-sm font-semibold text-[#17423e]" data-testid="button-mobile-book">ENQUIRE FOR A VISIT</button><div className="absolute bottom-7 left-6 right-6 flex justify-between text-xs text-[#f4eddf]/50"><span>UG-06, BCM City, Indore</span><span>Call for hours</span></div></div>}

      {lightbox !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102f2c]/95 p-5" role="dialog" aria-modal="true" aria-label="Gallery image"><button type="button" onClick={() => setLightbox(null)} aria-label="Close image" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-[#f4eddf]/30 text-[#f4eddf]" data-testid="button-close-lightbox"><X size={20} /></button><div className="max-w-5xl"><img src={gallery[lightbox].src} alt={gallery[lightbox].alt} className="max-h-[78vh] w-auto object-contain" /><div className="mt-4 flex items-center justify-between text-sm text-[#f4eddf]/70"><span>{gallery[lightbox].label}</span><span>{lightbox + 1} / {gallery.length}</span></div></div></div>}

      {showBooking && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#102f2c]/70 p-0 md:items-center md:p-5" role="dialog" aria-modal="true" aria-label="Enquire for a visit"><div className="max-h-[95dvh] w-full max-w-xl overflow-y-auto bg-[#f4eddf] p-6 text-[#17423e] md:p-10"><div className="flex items-start justify-between"><div><p className="eyebrow text-[#b86652]">A good place to begin</p><h2 className="display-font mt-3 text-5xl">Enquire for<br /><em>a visit.</em></h2></div><button type="button" onClick={() => { setShowBooking(false); setSubmitted(false); }} aria-label="Close booking form" className="flex h-10 w-10 items-center justify-center border border-[#17423e]/20" data-testid="button-close-booking"><X size={19} /></button></div>{submitted ? <div className="mt-12 border-t border-[#d5c8b5] pt-8"><div className="flex h-12 w-12 items-center justify-center bg-[#17423e] text-[#f4eddf]"><Check size={22} /></div><h3 className="display-font mt-6 text-4xl">We’ve got your note.</h3><p className="mt-4 max-w-sm leading-6 text-[#53615b]">Your enquiry is ready to connect to our future booking channel. For now, call us on <a href={business.phoneHref} className="font-semibold text-[#b86652]">{business.phoneDisplay}</a> if you’d like to make it real today.</p><button type="button" onClick={() => { setShowBooking(false); setSubmitted(false); }} className="mt-8 bg-[#17423e] px-5 py-3 text-sm font-semibold text-[#f4eddf]" data-testid="button-close-success">BACK TO LAVISH</button></div> : <form onSubmit={handleSubmit} className="mt-10 space-y-6"><div><label htmlFor="name" className="eyebrow block text-[#53615b]">Your name</label><input id="name" name="name" required className="mt-2 w-full border-b border-[#b9aa96] bg-transparent py-3 outline-none placeholder:text-[#53615b]/50 focus:border-[#17423e]" placeholder="What should we call you?" data-testid="input-name" /></div><div><label htmlFor="phone" className="eyebrow block text-[#53615b]">Mobile number</label><input id="phone" name="phone" required type="tel" pattern="[0-9+() -]{10,}" className="mt-2 w-full border-b border-[#b9aa96] bg-transparent py-3 outline-none placeholder:text-[#53615b]/50 focus:border-[#17423e]" placeholder="07314 007355" data-testid="input-phone" /></div><div className="grid gap-6 sm:grid-cols-2"><div><label htmlFor="date" className="eyebrow block text-[#53615b]">Preferred date</label><input id="date" name="date" type="date" className="mt-2 w-full border-b border-[#b9aa96] bg-transparent py-3 outline-none focus:border-[#17423e]" data-testid="input-date" /></div><div><label htmlFor="time" className="eyebrow block text-[#53615b]">Preferred time</label><input id="time" name="time" type="time" className="mt-2 w-full border-b border-[#b9aa96] bg-transparent py-3 outline-none focus:border-[#17423e]" data-testid="input-time" /></div></div><div><label htmlFor="service" className="eyebrow block text-[#53615b]">Preferred service</label><select id="service" name="service" className="mt-2 w-full border-b border-[#b9aa96] bg-transparent py-3 outline-none" data-testid="select-service"><option>Haircut and Styling</option><option>Hair Spa</option><option>Hair Color</option><option>Facials</option><option>Beard Grooming</option><option>Manicure and Pedicure</option><option>Not sure yet</option></select></div><div><label htmlFor="message" className="eyebrow block text-[#53615b]">Message</label><textarea id="message" name="message" rows={2} className="mt-2 w-full resize-none border-b border-[#b9aa96] bg-transparent py-3 outline-none placeholder:text-[#53615b]/50 focus:border-[#17423e]" placeholder="A look, a question, anything we should know..." data-testid="input-message" /></div>{formError && <p className="text-sm text-[#b86652]" role="alert" data-testid="text-form-error">{formError}</p>}<button type="submit" className="group flex w-full items-center justify-between bg-[#17423e] px-5 py-4 text-sm font-semibold text-[#f4eddf]" data-testid="button-submit-enquiry">SEND ENQUIRY <ArrowRight size={17} /></button><p className="text-center text-xs text-[#53615b]">No payment or commitment — just a first hello.</p></form>}</div></div>}
    </div>
  );
}

export default function AppShell() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><ErrorBoundary><App /></ErrorBoundary><Toaster /></TooltipProvider></QueryClientProvider>;
}