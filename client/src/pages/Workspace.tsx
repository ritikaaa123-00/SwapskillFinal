import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Home,
  LayoutGrid,
  LogOut,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  UserRound,
  Users,
  X,
} from "lucide-react";

const matches = [
  { name: "Amara Nwosu", role: "Product designer", location: "Lagos, Nigeria", initials: "AN", color: "#c8d9c0", teaches: "Figma + UX research", learns: "Python", match: 98, note: "You can help each other turn ideas into things people can use." },
  { name: "Luca Moretti", role: "Frontend developer", location: "Milan, Italy", initials: "LM", color: "#e8c2ac", teaches: "Python + React", learns: "Photography", match: 94, note: "A creative exchange between code and the camera." },
  { name: "Maya Chen", role: "Illustrator", location: "Taipei, Taiwan", initials: "MC", color: "#d8c9dd", teaches: "Procreate + illustration", learns: "Spanish", match: 91, note: "Practice, feedback, and a little more visual confidence." },
];

const nav: Array<{ label: string; icon: ComponentType<{ className?: string }>; href?: string; count?: number }> = [
  { label: "Overview", icon: Home },
  { label: "Discover", icon: Compass, href: "/discover" },
  { label: "My swaps", icon: HeartIcon },
  { label: "Messages", icon: MessageCircle, count: 3 },
  { label: "Sessions", icon: CalendarDays },
];

function HeartIcon({ className }: { className?: string }) { return <span className={className}>♡</span>; }

function Brand() { return <Link href="/" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#c8664b] text-white shadow-[0_7px_18px_rgba(200,102,75,.22)]"><span className="font-display text-[22px] leading-none">↗</span></span><span className="font-display text-[23px] font-semibold tracking-[-.04em] text-[#2f2926]">SwapSkill</span></Link>; }

export default function Workspace() {
  const [, setLocation] = useLocation();
  const [mobileNav, setMobileNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");
  const [sent, setSent] = useState<string[]>([]);

  const sendSwap = (name: string) => {
    setSent((current) => [...current, name]);
    toast.success(`Swap request sent to ${name}`, { description: "We’ll let you know when they reply." });
  };

  return (
    <div className="min-h-screen bg-[#f7f1e9] text-[#2f2926]">
      <aside className={`fixed inset-y-0 left-0 z-40 w-[246px] border-r border-[#e8ddd2] bg-[#fffdf9] px-5 py-6 transition-transform duration-200 lg:translate-x-0 ${mobileNav ? "block translate-x-0" : "hidden lg:block"}`}>
        <div className="flex items-center justify-between"><Brand /><button className="lg:hidden" onClick={() => setMobileNav(false)}><X className="h-5 w-5 text-[#85766d]" /></button></div>
        <div className="mt-12 px-3 font-mono text-[10px] uppercase tracking-[.17em] text-[#a0958d]">Your workspace</div>
        <nav className="mt-3 space-y-1">{nav.map((item) => { const Icon = item.icon; return item.href ? <Link href={item.href} key={item.label} className="flex items-center gap-3 rounded-[13px] px-3 py-3 text-[13px] font-medium text-[#85766d] transition-colors hover:bg-[#f7f1e9] hover:text-[#2f2926]"><Icon className="h-[17px] w-[17px]" /><span>{item.label}</span>{item.count && <span className="ml-auto rounded-full bg-[#c8664b] px-1.5 py-0.5 text-[9px] font-bold text-white">{item.count}</span>}</Link> : <button key={item.label} onClick={() => { setActiveNav(item.label); toast.info(`${item.label} view selected`); }} className={`flex w-full items-center gap-3 rounded-[13px] px-3 py-3 text-left text-[13px] font-medium transition-colors ${activeNav === item.label ? "bg-[#fbe9df] text-[#a94e39]" : "text-[#85766d] hover:bg-[#f7f1e9] hover:text-[#2f2926]"}`}><Icon className="h-[17px] w-[17px]" /><span>{item.label}</span>{item.count && <span className="ml-auto rounded-full bg-[#c8664b] px-1.5 py-0.5 text-[9px] font-bold text-white">{item.count}</span>}</button>; })}</nav>
        <div className="mt-10 px-3 font-mono text-[10px] uppercase tracking-[.17em] text-[#a0958d]">Your progress</div>
        <nav className="mt-3 space-y-1"><button onClick={() => toast.info("Progress view is coming next") } className="flex w-full items-center gap-3 rounded-[13px] px-3 py-3 text-left text-[13px] font-medium text-[#85766d] hover:bg-[#f7f1e9]"><Sparkles className="h-[17px] w-[17px]" />Progress</button><button onClick={() => toast.info("Certificates unlock after your first completed path")} className="flex w-full items-center gap-3 rounded-[13px] px-3 py-3 text-left text-[13px] font-medium text-[#85766d] hover:bg-[#f7f1e9]"><BookOpen className="h-[17px] w-[17px]" />Certificates</button></nav>
        <div className="absolute bottom-6 left-5 right-5"><div className="rounded-[18px] bg-[#f7f1e9] p-3.5"><div className="flex items-center gap-2.5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d6e0ce] text-[10px] font-bold text-[#4e6647]">JD</div><div className="min-w-0"><div className="truncate text-[12px] font-semibold">Jordan Davis</div><div className="text-[10px] text-[#a0958d]">8.5 Skill Credits</div></div><button onClick={() => toast.info("Account menu opened")} className="ml-auto text-[#a0958d]"><MoreHorizontal className="h-4 w-4" /></button></div></div></div>
      </aside>
      {mobileNav && <button className="fixed inset-0 z-30 bg-[#2f2926]/20 lg:hidden" onClick={() => setMobileNav(false)} aria-label="Close navigation" />}

      <div className="lg:pl-[246px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#e8ddd2] bg-[#f7f1e9]/90 px-5 backdrop-blur-md lg:px-10"><div className="flex items-center gap-4"><button className="lg:hidden" onClick={() => setMobileNav(true)}><Menu className="h-5 w-5" /></button><div className="hidden items-center gap-2 rounded-full border border-[#e8ddd2] bg-[#fffdf9] px-3 py-2 text-[12px] text-[#a0958d] sm:flex"><Search className="h-3.5 w-3.5" /> Search your swaps</div><div className="font-display text-[20px] font-semibold sm:hidden">Overview</div></div><div className="flex items-center gap-3"><button onClick={() => toast.info("No new notifications")} className="relative grid h-9 w-9 place-items-center rounded-full border border-[#e8ddd2] bg-[#fffdf9] text-[#75675e]"><Bell className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#c8664b]" /></button><button onClick={() => toast.info("Your profile is looking good") } className="flex items-center gap-2 rounded-full bg-[#fffdf9] py-1 pr-3 pl-1"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#d6e0ce] text-[10px] font-bold text-[#4e6647]">JD</span><span className="hidden text-[12px] font-semibold sm:block">Jordan</span></button></div></header>
        <main className="mx-auto max-w-[1320px] px-5 py-9 lg:px-10 lg:py-12"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#c8664b]">Monday, 12 May 2025</p><h1 className="mt-3 font-display text-[43px] leading-none tracking-[-.045em] sm:text-[55px]">Good morning, Jordan<span className="text-[#c8664b]">.</span></h1><p className="mt-3 text-[14px] text-[#85766d]">You’re one good conversation away from your next breakthrough.</p></div><Button onClick={() => setLocation("/discover")} className="btn-press w-fit rounded-full bg-[#c8664b] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_22px_rgba(200,102,75,.22)] hover:bg-[#a94e39)"><Plus className="mr-2 h-4 w-4" /> Add a skill</Button></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3"><div className="rounded-[22px] bg-[#5c4557] p-5 text-white shadow-[0_16px_30px_rgba(92,69,87,.16)]"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#d8c9dd]">Skill credits</span><CircleDollarSign className="h-5 w-5 text-[#e8c2ac]" /></div><div className="mt-5 font-display text-[39px]">8.5 <span className="font-sans text-[13px] text-[#d8c9dd]">credits</span></div><div className="mt-3 flex items-center gap-2 text-[11px] text-[#d8c9dd]"><span className="rounded-full bg-[#d6e0ce] px-2 py-1 font-semibold text-[#4e6647]">+2.5 this month</span> Keep the exchange moving</div></div><div className="rounded-[22px] border border-[#e8ddd2] bg-[#fffdf9] p-5"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#a0958d]">Swap streak</span><Sparkles className="h-5 w-5 text-[#c8664b]" /></div><div className="mt-5 font-display text-[39px]">04 <span className="font-sans text-[13px] text-[#85766d]">weeks</span></div><div className="mt-3 text-[11px] text-[#85766d]">Your longest yet. Nice work, curious human.</div></div><div className="rounded-[22px] border border-[#e8ddd2] bg-[#d6e0ce] p-5"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-[#65755d]">Learning path</span><ChevronRight className="h-5 w-5 text-[#4e6647]" /></div><div className="mt-5 font-display text-[27px] text-[#34412f]">Product thinking</div><div className="mt-3 flex items-center gap-2 text-[11px] text-[#65755d]"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#b8c9ad]"><div className="h-full w-[64%] rounded-full bg-[#657d5a]" /></div><span>64%</span></div></div></div>
          <div className="mt-12 flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#c8664b]">Your people</p><h2 className="mt-2 font-display text-[32px] tracking-[-.035em]">Matches made for you</h2></div><Link href="/discover" className="hidden text-[12px] font-semibold text-[#a94e39] sm:block">See all matches <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link></div>
          <div className="mt-5 grid gap-4 xl:grid-cols-3">{matches.map((match) => <div key={match.name} className="card-lift rounded-[22px] border border-[#e8ddd2] bg-[#fffdf9] p-5"><div className="flex items-start gap-3"><div className="grid h-12 w-12 place-items-center rounded-full text-[11px] font-bold text-[#594b42]" style={{ background: match.color }}>{match.initials}</div><div className="min-w-0"><div className="font-semibold">{match.name}</div><div className="text-[11px] text-[#85766d]">{match.role} · {match.location}</div></div><div className="ml-auto rounded-full bg-[#dce4d5] px-2 py-1 text-[10px] font-bold text-[#4e6647]">{match.match}%</div></div><p className="mt-5 text-[13px] leading-5 text-[#75675e]">{match.note}</p><div className="mt-5 grid grid-cols-2 gap-2 rounded-[14px] bg-[#f7f1e9] p-3 text-[11px]"><div><div className="font-mono text-[9px] uppercase tracking-[.1em] text-[#a0958d]">Teaches</div><div className="mt-1 font-semibold text-[#594b42]">{match.teaches}</div></div><div><div className="font-mono text-[9px] uppercase tracking-[.1em] text-[#a0958d]">Wants</div><div className="mt-1 font-semibold text-[#594b42]">{match.learns}</div></div></div><div className="mt-4 flex gap-2"><button onClick={() => toast.info(`Opening ${match.name}'s profile`)} className="btn-press flex h-10 flex-1 items-center justify-center rounded-full border border-[#e8ddd2] text-[12px] font-semibold text-[#594b42] hover:bg-[#f7f1e9]">View profile</button><button disabled={sent.includes(match.name)} onClick={() => sendSwap(match.name)} className="btn-press flex h-10 flex-1 items-center justify-center rounded-full bg-[#c8664b] text-[12px] font-semibold text-white hover:bg-[#a94e39] disabled:bg-[#d6e0ce] disabled:text-[#4e6647]">{sent.includes(match.name) ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Sent</> : <>Send swap <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></>}</button></div></div>)}</div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_.65fr]"><div className="rounded-[22px] border border-[#e8ddd2] bg-[#fffdf9] p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.15em] text-[#c8664b]">Coming up</p><h2 className="mt-2 font-display text-[27px]">Your next sessions</h2></div><button onClick={() => toast.info("Calendar view opened")} className="grid h-9 w-9 place-items-center rounded-full border border-[#e8ddd2] text-[#85766d]"><CalendarDays className="h-4 w-4" /></button></div><div className="mt-6 divide-y divide-[#eee4db]"><div className="flex items-center gap-4 py-4"><div className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#fbe9df] text-center"><div className="font-mono text-[9px] uppercase text-[#c8664b]">May</div><div className="font-display text-[20px] leading-none text-[#a94e39]">14</div></div><div className="min-w-0"><div className="font-semibold">Portfolio review · Amara</div><div className="mt-1 text-[11px] text-[#85766d]">Wednesday · 6:00 PM · 60 min</div></div><button onClick={() => toast.success("Session details copied") } className="ml-auto text-[#a0958d]"><MoreHorizontal className="h-4 w-4" /></button></div><div className="flex items-center gap-4 py-4"><div className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#dce4d5] text-center"><div className="font-mono text-[9px] uppercase text-[#65755d]">May</div><div className="font-display text-[20px] leading-none text-[#4e6647]">17</div></div><div className="min-w-0"><div className="font-semibold">Python foundations · Luca</div><div className="mt-1 text-[11px] text-[#85766d]">Saturday · 11:30 AM · 45 min</div></div><button onClick={() => toast.success("Session details copied") } className="ml-auto text-[#a0958d]"><MoreHorizontal className="h-4 w-4" /></button></div></div></div><div className="rounded-[22px] bg-[#e8c2ac] p-6"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#fffdf9]/70 text-[#a94e39]"><Star className="h-5 w-5" /></div><h2 className="mt-10 font-display text-[29px] leading-tight text-[#6f4b3f]">You’re building<br />something good.</h2><p className="mt-3 text-[12px] leading-5 text-[#765549]">Complete one more session to unlock your “Generous guide” badge.</p><div className="mt-6 flex items-center gap-3"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#d99f84]"><div className="h-full w-[75%] rounded-full bg-[#a94e39]" /></div><span className="font-mono text-[10px] text-[#765549]">3 / 4</span></div></div></div>
        </main>
      </div>
    </div>
  );
}
