import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleDollarSign,
  Compass,
  HeartHandshake,
  Menu,
  Play,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const steps = [
  { number: "01", title: "Make your exchange list", text: "Tell us what you can teach and what you’re curious to learn next.", icon: BookOpen },
  { number: "02", title: "Meet your match", text: "Our reciprocal matching finds people whose skills complete yours.", icon: HeartHandshake },
  { number: "03", title: "Learn in the open", text: "Trade time, make progress, and grow together — no money involved.", icon: Sparkles },
];

const skills = [
  { name: "Python", category: "Programming", people: "1.2k", tone: "bg-[#e8d6c7]", icon: "⌘" },
  { name: "UI / UX", category: "Design", people: "986", tone: "bg-[#dce4d5]", icon: "✦" },
  { name: "Spanish", category: "Languages", people: "742", tone: "bg-[#f3d8ae]", icon: "あ" },
  { name: "Photography", category: "Creative", people: "621", tone: "bg-[#ded1df]", icon: "◌" },
];

const people = [
  { name: "Amara Nwosu", role: "Product designer · Lagos", teaches: "Figma, UX research", learns: "Python", color: "#c8d9c0", initials: "AN", match: 98 },
  { name: "Luca Moretti", role: "Developer · Milan", teaches: "Python, React", learns: "Photography", color: "#e8c2ac", initials: "LM", match: 94 },
  { name: "Maya Chen", role: "Illustrator · Taipei", teaches: "Procreate, Illustration", learns: "Spanish", color: "#d8c9dd", initials: "MC", match: 91 },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-[#2f2926]" aria-label="SwapSkill home">
      <span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#c8664b] text-white shadow-[0_7px_18px_rgba(200,102,75,.26)]">
        <span className="font-display text-[22px] leading-none">↗</span>
      </span>
      <span className="font-display text-[23px] font-semibold tracking-[-.04em]">SwapSkill</span>
    </Link>
  );
}

function AppButton({ children, onClick, variant = "primary" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "ghost" }) {
  return (
    <Button
      onClick={onClick}
      className={`btn-press h-12 rounded-full px-6 text-[14px] font-semibold ${variant === "primary" ? "bg-[#c8664b] text-white shadow-[0_10px_22px_rgba(200,102,75,.22)] hover:bg-[#a94e39]" : "border border-[#e8ddd2] bg-transparent text-[#594b42] hover:bg-[#fffdf9]"}`}
    >
      {children}
    </Button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleStart = () => {
    toast.success("Your swap journey starts here", { description: "Create a profile to find your first reciprocal match." });
  };

  return (
    <div className="paper-noise min-h-screen overflow-hidden bg-[#f7f1e9] text-[#2f2926]">
      <header className="relative z-30 border-b border-[#e8ddd2]/80 bg-[#f7f1e9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#75675e] md:flex">
            <a href="#how" className="ink-link hover:text-[#2f2926]">How it works</a>
            <a href="#skills" className="ink-link hover:text-[#2f2926]">Explore skills</a>
            <a href="#community" className="ink-link hover:text-[#2f2926]">Community</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <button onClick={() => startLogin()} className="text-[13px] font-semibold text-[#594b42] transition-colors hover:text-[#c8664b]">Log in</button>
            <AppButton onClick={handleStart}>Start swapping <ArrowRight className="ml-2 h-4 w-4" /></AppButton>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#e8ddd2] bg-[#fffdf9] md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {menuOpen && (
          <div className="animate-rise border-t border-[#e8ddd2] bg-[#fffdf9] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-[#594b42]">
              <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Explore skills</a>
              <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
              <button className="w-fit font-semibold text-[#c8664b]" onClick={() => startLogin()}>Log in / sign up <ArrowRight className="ml-1 inline h-4 w-4" /></button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div className="relative z-10 animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7cdbf] bg-[#fbe9df] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[.13em] text-[#a94e39]">
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-[#c8664b]" /> The community for curious people
            </div>
            <h1 className="max-w-[670px] font-display text-[58px] font-semibold leading-[.97] tracking-[-.055em] text-[#2f2926] sm:text-[78px] lg:text-[92px]">Learn, teach<br /><em className="font-normal text-[#c8664b]">& exchange</em> skills.</h1>
            <p className="mt-8 max-w-[470px] text-[18px] leading-8 text-[#75675e]">Teach what you know, learn what you want — all through skill exchanges that make both people better.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <AppButton onClick={handleStart}>Start swapping <ArrowRight className="ml-2 h-4 w-4" /></AppButton>
              <Link href="/discover" className="btn-press inline-flex h-12 items-center rounded-full border border-[#e8ddd2] bg-[#fffdf9] px-6 text-[14px] font-semibold text-[#594b42] hover:bg-white">Explore skills <Compass className="ml-2 h-4 w-4 text-[#c8664b]" /></Link>
            </div>
            <div className="mt-11 flex items-center gap-4 text-[12px] text-[#85766d]">
              <div className="flex -space-x-2">
                {people.map((person) => <span key={person.initials} className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f7f1e9] text-[10px] font-bold text-[#594b42]" style={{ background: person.color }}>{person.initials}</span>)}
              </div>
              <span><strong className="text-[#2f2926]">12,400+</strong> curious people swapping skills</span>
            </div>
          </div>

          <div className="relative min-h-[480px] animate-rise [animation-delay:120ms] lg:min-h-[570px]">
            <div className="absolute right-[2%] top-[2%] h-[420px] w-[87%] rotate-[4deg] rounded-[48%_52%_44%_56%/45%_40%_60%_55%] bg-[#e8c2ac] opacity-75 lg:h-[520px]" />
            <div className="absolute bottom-[2%] left-[2%] h-[315px] w-[46%] -rotate-[12deg] rounded-[55%_45%_50%_50%/43%_54%_46%_57%] bg-[#d5ddca] opacity-85 lg:h-[370px]" />
            <div className="absolute right-[1%] top-[12%] z-10 w-[83%] max-w-[460px] rounded-[30px] border border-white/70 bg-[#fffdf9]/95 p-5 shadow-[0_30px_70px_rgba(88,54,39,.18)] backdrop-blur-sm lg:right-[6%] lg:p-6">
              <div className="flex items-center justify-between border-b border-[#eee4db] pb-4"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#a0958d]">Your next exchange</span><span className="rounded-full bg-[#dce4d5] px-2.5 py-1 text-[10px] font-semibold text-[#4e6647]">98% match</span></div>
              <div className="flex items-center gap-4 py-5"><div className="grid h-14 w-14 place-items-center rounded-[19px] bg-[#d6e0ce] text-sm font-bold text-[#4e6647]">AN</div><div><div className="font-display text-[21px] font-semibold">Amara Nwosu</div><div className="mt-0.5 text-[12px] text-[#85766d]">Product designer · Lagos</div></div><div className="ml-auto text-right"><div className="text-[#e6a24f]">★★★★★</div><div className="text-[10px] text-[#a0958d]">4.9 · 24 swaps</div></div></div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-[18px] bg-[#f7f1e9] p-3.5"><div><div className="mb-1 text-[10px] font-semibold uppercase tracking-[.11em] text-[#a0958d]">You teach</div><div className="font-semibold text-[#594b42]">Illustration</div></div><div className="grid h-8 w-8 place-items-center rounded-full bg-[#c8664b] text-white"><ArrowRight className="h-4 w-4" /></div><div className="text-right"><div className="mb-1 text-[10px] font-semibold uppercase tracking-[.11em] text-[#a0958d]">You learn</div><div className="font-semibold text-[#594b42]">Figma</div></div></div>
              <button onClick={() => toast.success("Swap request drafted", { description: "Amara will see your exchange note when you send it." })} className="btn-press mt-4 flex h-11 w-full items-center justify-center rounded-full bg-[#c8664b] text-[13px] font-semibold text-white hover:bg-[#a94e39]">Send a swap request <ArrowUpRight className="ml-2 h-4 w-4" /></button>
            </div>
            <div className="absolute bottom-[10%] left-[2%] z-20 flex max-w-[235px] -rotate-[5deg] items-center gap-3 rounded-[18px] border border-white/60 bg-[#fffdf9]/95 p-3.5 shadow-[0_18px_40px_rgba(88,54,39,.13)] backdrop-blur-sm"><div className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#f3d8ae] text-[#936333]"><CircleDollarSign className="h-5 w-5" /></div><div><div className="font-semibold text-[#594b42]">+ 3 Skill Credits</div><div className="text-[11px] text-[#a0958d]">From your last session</div></div></div>
            <div className="animate-float absolute right-[3%] top-[1%] z-20 grid h-20 w-20 -rotate-12 place-items-center rounded-full bg-[#5c4557] text-center text-[11px] font-semibold leading-4 text-[#fffdf9] shadow-[0_18px_35px_rgba(92,69,87,.25)]">Teach<br />what you<br />know ✦</div>
          </div>
        </section>

        <section id="how" className="border-y border-[#e8ddd2] bg-[#fffdf9]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
            <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#c8664b]">01 / The ritual</p><h2 className="mt-4 max-w-[530px] font-display text-[42px] leading-[1.04] tracking-[-.045em] sm:text-[56px]">A better way to<br /><em className="font-normal text-[#c8664b]">get better.</em></h2></div><p className="max-w-[320px] text-[14px] leading-6 text-[#85766d]">No listings. No price tags. Just people meeting at the exact intersection of what they know and what they want to discover.</p></div>
            <div className="grid gap-5 md:grid-cols-3">{steps.map((step, index) => { const Icon = step.icon; return <div key={step.number} className="card-lift rounded-[24px] border border-[#e8ddd2] bg-[#f7f1e9] p-6 lg:p-8"><div className="flex items-start justify-between"><span className="font-mono text-[11px] text-[#c8664b]">{step.number}</span><div className="grid h-11 w-11 place-items-center rounded-full bg-[#fffdf9] text-[#c8664b]"><Icon className="h-5 w-5" /></div></div><h3 className="mt-12 font-display text-[26px] leading-tight">{step.title}</h3><p className="mt-3 text-[14px] leading-6 text-[#85766d]">{step.text}</p><div className="mt-7 h-1 w-12 rounded-full bg-[#c8664b]" style={{ opacity: 1 - index * .22 }} /></div>; })}</div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex items-end justify-between gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#c8664b]">02 / Browse the exchange</p><h2 className="mt-4 font-display text-[42px] leading-none tracking-[-.045em] sm:text-[56px]">What are you<br /><em className="font-normal text-[#c8664b]">curious about?</em></h2></div><Link href="/discover" className="ink-link hidden text-[13px] font-semibold text-[#594b42] sm:block">See all skills <ArrowUpRight className="ml-1 inline h-4 w-4" /></Link></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <Link href="/discover" key={skill.name} className={`card-lift group rounded-[24px] ${skill.tone} p-5`}><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-full bg-white/65 font-display text-[22px] text-[#594b42]">{skill.icon}</span><ArrowUpRight className="h-4 w-4 text-[#75675e] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div className="mt-16 font-display text-[25px] font-semibold">{skill.name}</div><div className="mt-1 flex items-center justify-between text-[11px] text-[#75675e]"><span>{skill.category}</span><span>{skill.people} swapping</span></div></Link>)}</div>
        </section>

        <section id="community" className="bg-[#5c4557] text-[#fffdf9]">
          <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#e8c2ac]">03 / People make the place</p><h2 className="mt-4 max-w-[660px] font-display text-[42px] leading-[1.04] tracking-[-.045em] sm:text-[57px]">The best thing you’ll<br /><em className="font-normal text-[#e8c2ac]">learn</em> is someone’s story.</h2></div><p className="max-w-[300px] text-[14px] leading-6 text-[#e1d7df]">A community built around generosity, curiosity, and the belief that everybody has something worth sharing.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{people.map((person) => <div key={person.name} className="card-lift rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full text-[12px] font-bold text-[#594b42]" style={{ background: person.color }}>{person.initials}</div><div><div className="font-semibold">{person.name}</div><div className="text-[11px] text-[#d8c9dd]">{person.role}</div></div><span className="ml-auto rounded-full bg-[#d6e0ce] px-2.5 py-1 text-[10px] font-bold text-[#4e6647]">{person.match}% match</span></div><div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 text-[12px]"><div><div className="mb-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#d8c9dd]">Can teach</div><div className="text-[#fffdf9]">{person.teaches}</div></div><div><div className="mb-1 font-mono text-[9px] uppercase tracking-[.14em] text-[#d8c9dd]">Wants to learn</div><div className="text-[#fffdf9]">{person.learns}</div></div></div><button onClick={() => toast.success(`Say hello to ${person.name}`, { description: "Sign in to send a swap request." })} className="btn-press mt-5 flex w-full items-center justify-center rounded-full bg-[#fffdf9] py-2.5 text-[12px] font-semibold text-[#5c4557] hover:bg-[#f7f1e9]">View profile <ArrowRight className="ml-2 h-3.5 w-3.5" /></button></div>)}</div></div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><div className="grid items-center gap-12 rounded-[32px] bg-[#e8c2ac] px-7 py-12 sm:px-12 lg:grid-cols-[1fr_.75fr] lg:px-16 lg:py-16"><div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#a94e39]">Skill Credits</p><h2 className="mt-4 max-w-[500px] font-display text-[42px] leading-[1.04] tracking-[-.045em] sm:text-[55px]">Your time is<br /><em className="font-normal text-[#a94e39]">the currency.</em></h2><p className="mt-5 max-w-[450px] text-[15px] leading-7 text-[#6f4b3f]">Every hour you teach earns a Skill Credit. Spend it on an hour learning from somebody else. It’s simple, fair, and keeps the exchange moving.</p><AppButton onClick={handleStart}>See how credits work <ArrowRight className="ml-2 h-4 w-4" /></AppButton></div><div className="relative mx-auto w-full max-w-[360px]"><div className="rotate-[-5deg] rounded-[24px] border border-white/70 bg-[#fffdf9] p-5 shadow-[0_24px_45px_rgba(112,65,46,.17)]"><div className="flex justify-between"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#a0958d]">Your balance</span><CircleDollarSign className="h-5 w-5 text-[#c8664b]" /></div><div className="mt-4 font-display text-[53px] font-semibold tracking-[-.05em]">08.5 <span className="font-sans text-[15px] font-semibold tracking-normal text-[#85766d]">credits</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f1e7dd]"><div className="h-full w-[68%] rounded-full bg-[#c8664b]" /></div><div className="mt-2 flex justify-between text-[10px] text-[#a0958d]"><span>Next reward</span><span>1.5 hrs to go</span></div></div><div className="absolute -bottom-7 -right-3 rounded-[17px] bg-[#d6e0ce] px-4 py-3 text-[12px] font-semibold text-[#4e6647] shadow-[0_12px_24px_rgba(67,88,59,.15)]"><Check className="mr-1 inline h-4 w-4" /> Earn as you learn</div></div></div></section>

        <section className="border-t border-[#e8ddd2] bg-[#fffdf9]"><div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-[680px] text-center"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#c8664b]">A few good questions</p><h2 className="mt-4 font-display text-[42px] tracking-[-.045em] sm:text-[53px]">Before your first swap</h2></div><div className="mx-auto mt-10 max-w-[720px]">{["Do I need to be an expert to teach?", "How does the matching work?", "What exactly are Skill Credits?"].map((question, index) => <div key={question} className="border-b border-[#e8ddd2] py-5"><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="flex w-full items-center justify-between text-left font-display text-[20px] font-semibold"><span>{question}</span><ChevronDown className={`h-5 w-5 text-[#c8664b] transition-transform ${activeFaq === index ? "rotate-180" : ""}`} /></button>{activeFaq === index && <p className="animate-rise mt-3 max-w-[600px] text-[14px] leading-6 text-[#85766d]">{index === 0 ? "Not at all. Share what you know today — even if it’s just the shortcut, the beginner’s perspective, or the one thing you wish someone had told you." : index === 1 ? "We look at the skills you want to learn, the skills you can teach, and the overlap in goals, availability, language, and time zone." : "Credits keep the exchange fair. One hour of teaching earns one credit, which you can use to learn from another member."}</p>}</div>)}</div></div></section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 text-center lg:px-8 lg:py-28"><div className="mx-auto max-w-[700px]"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#c8664b] text-white"><Sparkles className="h-6 w-6" /></div><h2 className="mt-7 font-display text-[48px] leading-[1.02] tracking-[-.05em] sm:text-[65px]">Your next skill<br /><em className="font-normal text-[#c8664b]">is out there.</em></h2><p className="mx-auto mt-5 max-w-[450px] text-[15px] leading-7 text-[#85766d]">Join a generous community of people who are learning in public, one exchange at a time.</p><div className="mt-8 flex justify-center"><AppButton onClick={handleStart}>Find your people <ArrowRight className="ml-2 h-4 w-4" /></AppButton></div></div></section>
      </main>

      <footer className="border-t border-[#e8ddd2] bg-[#f7f1e9]"><div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-8 text-[12px] text-[#85766d] sm:flex-row sm:items-center sm:justify-between lg:px-8"><Logo /><div className="flex flex-wrap gap-x-6 gap-y-2"><a href="#how" className="hover:text-[#2f2926]">How it works</a><a href="#skills" className="hover:text-[#2f2926]">Explore skills</a><a href="#community" className="hover:text-[#2f2926]">Community</a><span>© 2025 SwapSkill</span></div><div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Built for curious people</div></div></footer>
    </div>
  );
}
