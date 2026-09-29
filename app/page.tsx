'use client'

import { useState } from 'react'
import {
  Activity,
  AirVent,
  Bell,
  BookOpenCheck,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CloudSun,
  Droplets,
  Gauge,
  Home as HomeIcon,
  Leaf,
  Lightbulb,
  Menu,
  MessageCircle,
  Moon,
  MoreHorizontal,
  Phone,
  Plus,
  Power,
  Search,
  Settings2,
  ShieldCheck,
  Sun,
  ThermometerSun,
  Users,
  UserRoundPlus,
  UserRoundX,
  Wifi,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Students', icon: Users, count: '24' },
  { label: 'Onboarding', icon: UserRoundPlus },
  { label: 'Offboarding', icon: UserRoundX },
  { label: 'Utilities & alerts', icon: Zap },
  { label: 'Parent communications', icon: MessageCircle, count: '3' },
]

const students = [
  { name: 'Aarav Lim', initials: 'AL', className: 'Little Sailors', status: 'Checked in', color: 'coral' },
  { name: 'Sofia Tan', initials: 'ST', className: 'Rock Pool', status: 'Checked in', color: 'teal' },
  { name: 'Adam Iskandar', initials: 'AI', className: 'Tide Pool', status: 'Away today', color: 'gold' },
  { name: 'Maya Chen', initials: 'MC', className: 'Little Sailors', status: 'Checked in', color: 'blue' },
]

function StatusDot({ tone = 'success' }: { tone?: 'success' | 'warning' | 'danger' }) {
  return <span className={`status-dot status-${tone}`} aria-hidden="true" />
}

function MetricCard({ icon: Icon, eyebrow, value, label, tone, detail }: { icon: typeof Activity; eyebrow: string; value: string; label: string; tone: string; detail: string }) {
  return (
    <article className="metric-card">
      <div className={`metric-icon ${tone}`}><Icon size={18} strokeWidth={2} /></div>
      <p className="eyebrow">{eyebrow}</p>
      <div className="metric-value">{value}</div>
      <p className="metric-label">{label}</p>
      <p className="metric-detail">{detail}</p>
    </article>
  )
}

export default function Home() {
  const [dark, setDark] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('Overview')

  return (
    <div className={dark ? 'app-shell dark' : 'app-shell'}>
      <aside className={mobileOpen ? 'sidebar open' : 'sidebar'}>
        <div className="brand-row">
          <div className="brand-mark"><span /></div>
          <div><strong>Kiddie Cove</strong><small>Management</small></div>
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><ChevronRight size={18} /></button>
        </div>
        <div className="campus-switcher"><div className="campus-dot" /><div><span>Current campus</span><strong>Medini, Iskandar Puteri</strong></div><ChevronDown size={15} /></div>
        <p className="nav-label">Workspace</p>
        <nav aria-label="Management navigation">
          {navItems.map(({ label, icon: Icon, count }) => (
            <button key={label} className={activeNav === label ? 'nav-item active' : 'nav-item'} onClick={() => { setActiveNav(label); setMobileOpen(false) }}>
              <Icon size={18} /><span>{label}</span>{count && <b>{count}</b>}
            </button>
          ))}
        </nav>
        <p className="nav-label">Support</p>
        <nav>
          <button className="nav-item"><Settings2 size={18} /><span>Settings</span></button>
          <button className="nav-item"><BookOpenCheck size={18} /><span>Operations guide</span></button>
        </nav>
        <div className="sidebar-bottom"><div className="user-avatar">NA</div><div><strong>Nur Aisyah</strong><span>Principal</span></div><MoreHorizontal size={18} className="muted-icon" /></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <div className="breadcrumb"><span>Management</span><ChevronRight size={14} /><strong>{activeNav}</strong></div>
          <div className="top-actions"><button className="icon-button" aria-label="Search"><Search size={19} /></button><button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><i /></button><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? <Sun size={17} /> : <Moon size={17} />}</button></div>
        </header>

        <div className="page-wrap">
          <section className="welcome-row"><div><p className="eyebrow accent-text">Wednesday, 24 September 2025</p><h1>Good morning, Aisyah <span>●</span></h1><p className="subcopy">Here&apos;s what&apos;s happening around the Cove today.</p></div><button className="primary-button"><Plus size={17} /> Add student</button></section>

          <section className="metric-grid" aria-label="Daily summary">
            <MetricCard icon={Users} eyebrow="Students today" value="24" label="of 26 enrolled" tone="teal" detail="92% attendance" />
            <MetricCard icon={UserRoundPlus} eyebrow="Onboarding" value="3" label="families in progress" tone="coral" detail="2 need your review" />
            <MetricCard icon={Zap} eyebrow="Energy this month" value="RM 486" label="current bill estimate" tone="gold" detail="RM 74 potential saving" />
            <MetricCard icon={ShieldCheck} eyebrow="Cove conditions" value="Good" label="safe for outdoor play" tone="blue" detail="AQI 32 · UV 4 moderate" />
          </section>

          <div className="content-grid">
            <section className="panel today-panel"><div className="panel-header"><div><p className="eyebrow">Today at the Cove</p><h2>Attendance overview</h2></div><button className="text-button">View all <ChevronRight size={15} /></button></div><div className="attendance-bar"><div><strong>24</strong><span>checked in</span></div><div className="bar-track"><span /></div><div className="attendance-meta"><span><StatusDot /> 21 children</span><span><StatusDot tone="warning" /> 3 educators</span></div></div><div className="student-list">{students.map((student) => <div className="student-row" key={student.name}><div className={`student-avatar ${student.color}`}>{student.initials}</div><div className="student-info"><strong>{student.name}</strong><span>{student.className}</span></div><span className={student.status === 'Away today' ? 'student-status away' : 'student-status'}><StatusDot tone={student.status === 'Away today' ? 'warning' : 'success'} />{student.status}</span><button className="icon-button mini" aria-label={`More actions for ${student.name}`}><MoreHorizontal size={16} /></button></div>)}</div><button className="secondary-button full-button">Open attendance register <ChevronRight size={16} /></button></section>

            <section className="panel onboarding-panel"><div className="panel-header"><div><p className="eyebrow">Needs attention</p><h2>Onboarding queue</h2></div><span className="count-pill">3 open</span></div><div className="queue-list"><div className="queue-item"><div className="queue-icon coral-bg"><UserRoundPlus size={17} /></div><div><strong>Daniel Wong</strong><span>Documents pending</span></div><ChevronRight size={17} /></div><div className="queue-item"><div className="queue-icon gold-bg"><BookOpenCheck size={17} /></div><div><strong>Isabella Lim</strong><span>Tour completed · review</span></div><ChevronRight size={17} /></div><div className="queue-item"><div className="queue-icon blue-bg"><MessageCircle size={17} /></div><div><strong>Ravi Kumar</strong><span>Parent reply received</span></div><ChevronRight size={17} /></div></div><button className="secondary-button full-button">Manage onboarding <ChevronRight size={16} /></button></section>
          </div>

          <div className="content-grid lower-grid">
            <section className="panel utilities-panel"><div className="panel-header"><div><p className="eyebrow">Medini utilities</p><h2>Keep the Cove running</h2></div><button className="text-button">Open utilities <ChevronRight size={15} /></button></div><div className="utility-grid"><div className="utility-card"><div className="utility-heading"><div className="utility-logo tnb"><Zap size={15} fill="currentColor" /></div><div><strong>Tenaga Nasional</strong><span>Electricity</span></div><StatusDot /></div><div className="utility-stat"><span>Current bill</span><strong>RM 412.60</strong></div><div className="utility-note"><Power size={14} /> 3-phase · TOU eligible</div></div><div className="utility-card"><div className="utility-heading"><div className="utility-logo saj"><Droplets size={15} /></div><div><strong>SAJ Ranhill</strong><span>Water supply</span></div><StatusDot /></div><div className="utility-stat"><span>Service status</span><strong>Operating normally</strong></div><div className="utility-note"><Phone size={14} /> Plumber contacts ready</div></div><div className="utility-card alert-card"><div className="utility-heading"><div className="utility-logo telco"><Wifi size={15} /></div><div><strong>Telco services</strong><span>Unifi Business</span></div><StatusDot tone="warning" /></div><div className="utility-stat"><span>Connection</span><strong>Minor disruption</strong></div><div className="utility-note warning-note"><CircleAlert size={14} /> Area alert · 9:30 AM</div></div></div></section>

            <section className="panel environment-panel"><div className="panel-header"><div><p className="eyebrow">Live conditions</p><h2>Outdoor comfort</h2></div><span className="live-tag"><i /> Live</span></div><div className="condition-grid"><div className="condition"><CloudSun size={19} /><span>Weather</span><strong>29°</strong><small>Partly cloudy</small></div><div className="condition"><Activity size={19} /><span>Air quality</span><strong>32 <em>Good</em></strong><small>Safe for play</small></div><div className="condition"><Sun size={19} /><span>UV index</span><strong>4 <em>Moderate</em></strong><small>Shade after 11 AM</small></div></div><div className="suggestion"><Lightbulb size={16} /><p><strong>Energy suggestion</strong> Raise AC to 24°C after nap time to save an estimated <b>RM 18 this week.</b></p><ChevronRight size={16} /></div></section>
          </div>

          <section className="quick-strip"><div className="quick-intro"><div className="whatsapp-icon"><MessageCircle size={20} /></div><div><strong>Parent communications</strong><span>3 unread updates waiting</span></div></div><div className="quick-actions"><button className="secondary-button"><MessageCircle size={16} /> Open WhatsApp inbox</button><button className="icon-button"><Phone size={18} /></button></div></section>
          <footer>© 2025 Kiddie Cove Management <span>•</span> Private internal workspace</footer>
        </div>
      </main>
    </div>
  )
}
