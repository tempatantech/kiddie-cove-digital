'use client'

import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  BookOpen,
  Bot,
  Check,
  ChevronRight,
  CircleHelp,
  CloudSun,
  Droplets,
  Gauge,
  Home,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Menu,
  MessageCircle,
  Moon,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  UserRound,
  Users,
  Waves,
  Wifi,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Student onboarding', icon: UserRound },
  { label: 'Student offboarding', icon: LogOut },
  { label: 'Local alerts', icon: Bell, active: true },
  { label: 'Parent communications', icon: MessageCircle },
]

const telcoRows = [
  { name: 'Unifi Fibre', detail: '94 Mbps', status: 'Stable', color: 'bg-emerald-500' },
  { name: 'CelcomDigi', detail: '12 ms', status: 'Good', color: 'bg-emerald-500' },
  { name: 'Maxis', detail: '9 ms', status: 'Good', color: 'bg-emerald-500' },
  { name: 'U Mobile', detail: '104 ms', status: 'Slow', color: 'bg-amber-500' },
]

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-border bg-card shadow-sm ${className}`}>{children}</section>
}

function StatusDot({ color = 'bg-emerald-500' }: { color?: string }) {
  return <span className={`inline-block size-2 rounded-full ${color}`} aria-hidden="true" />
}

export function ManagementDashboard() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [broadcasted, setBroadcasted] = useState(false)
  const [panel, setPanel] = useState<string | null>(null)
  const [speedTested, setSpeedTested] = useState(false)

  const openPanel = (name: string) => setPanel(name)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-card px-4 py-5 transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-5" /></div>
            <div><p className="font-serif text-lg font-bold tracking-tight">Kiddie Cove</p><p className="text-xs text-muted-foreground">Management portal</p></div>
          </div>
          <div className="mt-9 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Workspace</div>
          <nav className="mt-3 flex flex-col gap-1" aria-label="Management navigation">
            {navItems.map((item) => { const Icon = item.icon; return <button key={item.label} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${item.active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}><Icon className="size-4" /><span className="flex-1">{item.label}</span>{item.active && <ChevronRight className="size-4" />}</button> })}
          </nav>
          <div className="mt-auto flex flex-col gap-1">
            <button className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"><Settings className="size-4" />Settings</button>
            <div className="mt-3 flex items-center gap-3 border-t border-border px-2 pt-4"><div className="flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">AD</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Aina D.</p><p className="truncate text-xs text-muted-foreground">Principal</p></div><MoreHorizontal className="size-4 text-muted-foreground" /></div>
          </div>
        </aside>
        {mobileOpen && <button className="fixed inset-0 z-20 bg-foreground/20 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation" />}

        <main className="lg:pl-64">
          <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-border bg-background/90 px-5 backdrop-blur-md sm:px-8">
            <div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="rounded-lg p-2 hover:bg-muted lg:hidden" aria-label="Open navigation"><Menu className="size-5" /></button><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Tuesday, 29 September 2026</p><h1 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">Good morning, Aina</h1></div></div>
            <div className="flex items-center gap-2 sm:gap-4"><button className="hidden rounded-lg border border-border bg-card p-2 text-muted-foreground hover:text-foreground sm:block" aria-label="Search"><Search className="size-4" /></button><button onClick={() => setDark(!dark)} className="rounded-lg border border-border bg-card p-2 text-muted-foreground hover:text-foreground" aria-label="Toggle dark mode">{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button><button className="relative rounded-lg border border-border bg-card p-2 text-muted-foreground hover:text-foreground" aria-label="Notifications"><Bell className="size-4" /><span className="absolute right-1 top-1 size-1.5 rounded-full bg-destructive" /></button><div className="hidden h-8 w-px bg-border sm:block" /><div className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">AD</div></div>
          </header>

          <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="font-serif text-xl font-bold">Local alerts &amp; wellbeing</h2><p className="mt-1 text-sm text-muted-foreground">The signals that keep your school day running smoothly.</p></div><div className="flex items-center gap-3"><span className="flex items-center gap-2 text-xs text-muted-foreground"><StatusDot /> All systems monitored</span><button onClick={() => setBroadcasted(!broadcasted)} className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"><MessageCircle className="size-4" />{broadcasted ? 'Broadcast sent' : 'Broadcast parents'}</button></div></div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[['Students present', '42', 'of 45 expected', Users, 'bg-secondary text-primary'], ['Open onboarding', '3', 'families to review', UserRound, 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'], ['Active alerts', '2', 'needs your attention', Bell, 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'], ['Monthly utilities', 'RM 1,284', '↓ 8% from August', Zap, 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300']].map(([label, value, note, Icon, color]) => <Card key={label as string} className="p-4"><div className="flex items-start justify-between"><div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-2 font-serif text-2xl font-bold">{value}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></div><div className={`flex size-9 items-center justify-center rounded-lg ${color}`}><Icon className="size-4" /></div></div></Card>)}
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[1.45fr_1fr]">
              <Card className="overflow-hidden"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Weather &amp; wellbeing</p><h3 className="mt-1 font-serif text-lg font-bold">Iskandar Puteri, Johor</h3></div><CloudSun className="size-8 text-primary" /><div className="text-right"><p className="font-serif text-3xl font-bold">32°</p><p className="text-xs text-muted-foreground">Feels like 38°</p></div></div><div className="grid gap-4 p-5 sm:grid-cols-3"><div className="rounded-xl bg-muted/60 p-4"><div className="flex items-center justify-between"><Activity className="size-4 text-primary" /><span className="text-xs text-muted-foreground">Now</span></div><p className="mt-4 text-2xl font-bold">54</p><p className="text-xs text-muted-foreground">AQI · Moderate</p><div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500"><div className="h-full w-[40%] rounded-full bg-foreground/70" /></div></div><div className="rounded-xl bg-muted/60 p-4"><Droplets className="size-4 text-sky-500" /><p className="mt-4 text-2xl font-bold">82%</p><p className="text-xs text-muted-foreground">Humidity</p><p className="mt-3 text-xs text-emerald-600">Comfortable indoors</p></div><div className="rounded-xl bg-muted/60 p-4"><Sun className="size-4 text-amber-500" /><p className="mt-4 text-2xl font-bold">7.2</p><p className="text-xs text-muted-foreground">UV index</p><p className="mt-3 text-xs text-amber-600">High · use shade</p></div></div><div className="mx-5 mb-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm dark:border-amber-900 dark:bg-amber-950/40"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" /><div><p className="font-semibold text-amber-900 dark:text-amber-200">Outdoor activity caution</p><p className="mt-0.5 text-xs text-amber-800/80 dark:text-amber-300/80">Shorten outdoor sessions today and keep water available.</p></div></div></Card>

              <Card className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">TNB · Medini / P706</p><h3 className="mt-1 font-serif text-lg font-bold">Energy snapshot</h3></div><div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"><Zap className="size-4" /></div></div><div className="mt-5 flex items-center justify-between rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/40"><div className="flex items-center gap-2"><StatusDot /><div><p className="text-sm font-semibold">Grid normal</p><p className="text-xs text-muted-foreground">No scheduled outages</p></div></div><Check className="size-4 text-emerald-600" /></div><div className="mt-5 flex items-end justify-between"><div><p className="text-xs text-muted-foreground">This month</p><p className="mt-1 font-serif text-2xl font-bold">RM 1,284</p></div><p className="text-right text-xs text-emerald-600">↓ RM 112<br /><span className="text-muted-foreground">vs last month</span></p></div><div className="mt-4 h-16 rounded-lg bg-muted/70 p-2"><div className="flex h-full items-end gap-1"><div className="h-[35%] flex-1 rounded-sm bg-primary/25" /><div className="h-[54%] flex-1 rounded-sm bg-primary/40" /><div className="h-[44%] flex-1 rounded-sm bg-primary/45" /><div className="h-[72%] flex-1 rounded-sm bg-primary/60" /><div className="h-[61%] flex-1 rounded-sm bg-primary/70" /><div className="h-[83%] flex-1 rounded-sm bg-primary" /><div className="h-[68%] flex-1 rounded-sm bg-primary/75" /></div></div><div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Lightbulb className="size-3.5 text-amber-500" />Switch AC-heavy use to off-peak ToU to save <span className="font-semibold text-emerald-600">RM 164 / month</span></div><button onClick={() => openPanel('ToU savings')} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-semibold hover:bg-muted">View usage insights <ArrowUpRight className="size-4" /></button></Card>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <Card className="p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><Waves className="size-4" /></div><div><p className="text-xs text-muted-foreground">Ranhill SAJ · Medini</p><h3 className="font-serif text-lg font-bold">Water supply</h3></div></div><span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">Maintenance tomorrow</span></div><div className="mt-5 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40"><AlertTriangle className="size-4 shrink-0 text-amber-600" /><div><p className="text-sm font-semibold">Scheduled maintenance</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Supply interruption in Medini, Iskandar Puteri from <b>10:00 PM</b> to approximately <b>6:00 AM</b>.</p><p className="mt-3 text-xs text-muted-foreground">Tomorrow · Zone Medini / Puteri Harbour</p></div></div><div className="mt-4 flex items-center justify-between text-sm"><span className="text-muted-foreground">Need a plumber?</span><button onClick={() => openPanel('Plumber directory')} className="flex items-center gap-1.5 font-semibold text-primary hover:underline"><Phone className="size-3.5" />Contact directory <ChevronRight className="size-3.5" /></button></div></Card>
              <Card className="p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300"><Wifi className="size-4" /></div><div><p className="text-xs text-muted-foreground">Connectivity watch</p><h3 className="font-serif text-lg font-bold">Telco alerts</h3></div></div><span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600"><StatusDot /> Mostly stable</span></div><div className="mt-4 flex flex-col gap-2">{telcoRows.map((row) => <div key={row.name} className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-muted"><StatusDot color={row.color} /><span className="flex-1 text-sm font-medium">{row.name}</span><span className="text-xs text-muted-foreground">{row.detail}</span><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${row.status === 'Slow' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}`}>{row.status}</span></div>)}</div><div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground"><span>School Unifi · Online (94 Mbps)</span><button onClick={() => setSpeedTested(true)} className="font-semibold text-primary">{speedTested ? 'Test complete' : 'Run speed test'} <ArrowUpRight className="inline size-3" /></button></div></Card>
            </div>

            <Card className="mt-5 p-5"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300"><ShieldCheck className="size-4" /></div><div><p className="text-xs text-muted-foreground">Student care</p><h3 className="font-serif text-lg font-bold">Quick actions</h3></div></div><button onClick={() => openPanel('Add student record')} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-muted"><Plus className="size-4" />Add student record</button></div><div className="mt-5 grid gap-3 sm:grid-cols-3"><button className="flex items-center gap-3 rounded-xl bg-muted/60 p-3 text-left hover:bg-muted"><BookOpen className="size-4 text-primary" /><span className="flex-1"><span className="block text-sm font-semibold">Review onboarding</span><span className="text-xs text-muted-foreground">3 profiles waiting</span></span><ChevronRight className="size-4 text-muted-foreground" /></button><button className="flex items-center gap-3 rounded-xl bg-muted/60 p-3 text-left hover:bg-muted"><CircleHelp className="size-4 text-primary" /><span className="flex-1"><span className="block text-sm font-semibold">Prepare offboarding</span><span className="text-xs text-muted-foreground">1 exit this month</span></span><ChevronRight className="size-4 text-muted-foreground" /></button><button className="flex items-center gap-3 rounded-xl bg-muted/60 p-3 text-left hover:bg-muted"><MessageCircle className="size-4 text-primary" /><span className="flex-1"><span className="block text-sm font-semibold">Message parents</span><span className="text-xs text-muted-foreground">WhatsApp broadcast</span></span><ChevronRight className="size-4 text-muted-foreground" /></button></div></Card>
          </div>
        </main>

        {panel && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/30 p-4 sm:items-center" role="dialog" aria-modal="true" aria-label={panel}>
            <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Management action</p><h2 className="mt-1 font-serif text-2xl font-bold">{panel}</h2></div><button onClick={() => setPanel(null)} className="rounded-lg p-2 text-muted-foreground hover:bg-muted" aria-label="Close panel">×</button></div>
              {panel === 'Add student record' ? <div className="mt-5 flex flex-col gap-3"><input className="rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Student name" /><input className="rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Parent WhatsApp number" /><button onClick={() => setPanel(null)} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Save dummy record</button></div> : panel === 'Plumber directory' ? <div className="mt-5 flex flex-col gap-3 text-sm"><div className="rounded-xl bg-muted p-4"><p className="font-semibold">Medini Plumbing Services</p><p className="mt-1 text-muted-foreground">24-hour response · +60 12 555 0188</p></div><div className="rounded-xl bg-muted p-4"><p className="font-semibold">Puteri Harbour Maintenance</p><p className="mt-1 text-muted-foreground">Office hours · +60 7 555 2480</p></div></div> : <div className="mt-5 flex flex-col gap-4"><p className="text-sm leading-relaxed text-muted-foreground">Dummy recommendation based on this month&apos;s simulated usage. Move air-conditioning and laundry loads to 2:00 PM–5:00 PM or after 10:00 PM to reduce estimated monthly cost.</p><div className="rounded-xl bg-secondary p-4"><p className="text-sm font-semibold">Estimated saving</p><p className="mt-1 font-serif text-3xl font-bold text-primary">RM 164 / month</p></div><button onClick={() => setPanel(null)} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Got it</button></div>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManagementDashboard
