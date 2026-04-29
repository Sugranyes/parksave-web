import { Bluetooth, Clock, Bell, Navigation, ShieldCheck, Play, Coffee, Gift, ChevronRight, RefreshCw, History, Lock, QrCode, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrDownload from "@/assets/qr-download.png";

// ============= REUSABLE PHONE FRAME =============
const PhoneFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative mx-auto w-[280px] aspect-[9/19] rounded-[2.5rem] bg-[#0a0a0a] p-2 shadow-soft border border-border/60 ${className}`}>
    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 bg-[#0a0a0a] rounded-b-2xl z-20" />
    <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white">
      {children}
    </div>
  </div>
);

// ============= MAP MOCKUP =============
const MapMockup = () => (
  <div className="h-full w-full flex flex-col text-[10px]">
    {/* Status bar */}
    <div className="bg-[#1d8348] text-white px-3 pt-3 pb-1 flex justify-between text-[8px]">
      <span>14:32</span>
      <span>●●● ▮</span>
    </div>
    {/* Map area */}
    <div className="relative flex-1 bg-[#e8f5ed]" style={{
      backgroundImage: `
        linear-gradient(0deg, transparent 49%, #c8e6d2 49%, #c8e6d2 51%, transparent 51%),
        linear-gradient(90deg, transparent 49%, #c8e6d2 49%, #c8e6d2 51%, transparent 51%),
        linear-gradient(45deg, transparent 49%, #d4ebdc 49%, #d4ebdc 51%, transparent 51%)
      `,
      backgroundSize: '40px 40px, 40px 40px, 80px 80px',
    }}>
      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur rounded-full px-2 py-0.5 text-[8px] font-medium flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1d8348]" /> Actiu
      </div>
      {/* Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-red-500/30 animate-pulse-ring" style={{ width: 24, height: 24, marginLeft: -12, marginTop: -12 }} />
        <div className="relative h-6 w-6 -ml-3 -mt-6">
          <div className="h-6 w-6 bg-red-500 rounded-full border-2 border-white shadow-md" />
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500" />
        </div>
      </div>
    </div>
    {/* Bottom card */}
    <div className="bg-[#e8f5ed] p-2.5 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-[#1d8348] flex items-center justify-center text-white font-bold text-xs">P</div>
        <div className="flex-1">
          <p className="font-bold text-[10px] text-gray-900">Carrer Major, 23</p>
          <p className="text-[8px] text-gray-600">Avui · 14:32 · Cotxe</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['Desar', 'Navegar', 'Compartir'].map(t => (
          <button key={t} className="text-[8px] font-medium text-[#1d8348] border border-[#1d8348]/30 rounded-md py-1">{t}</button>
        ))}
      </div>
    </div>
    {/* Tab bar */}
    <div className="bg-white border-t border-gray-100 grid grid-cols-3 py-1.5">
      {[['Ubicació', true], ['Dispositius', false], ['Historial', false]].map(([label, active]) => (
        <div key={label as string} className={`text-center text-[8px] ${active ? 'text-[#1d8348] font-bold' : 'text-gray-400'}`}>
          ● {label}
        </div>
      ))}
    </div>
  </div>
);

// ============= DEVICES MOCKUP =============
const DevicesMockup = () => (
  <div className="h-full w-full flex flex-col bg-[#f5faf6] text-[10px]">
    <div className="bg-[#1d8348] text-white px-3 pt-3 pb-1 flex justify-between text-[8px]">
      <span>14:32</span>
      <span>●●● ▮</span>
    </div>
    <div className="bg-[#d4ebdc] px-3 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <Bluetooth className="h-3 w-3 text-[#1d8348]" />
        <span className="font-bold text-gray-900 text-[11px]">Dispositius</span>
      </div>
      <RefreshCw className="h-3 w-3 text-gray-700" />
    </div>
    <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
      {/* Toggle card */}
      <div className="bg-white rounded-xl p-2 flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-[#d4ebdc] flex items-center justify-center">
          <Bluetooth className="h-3.5 w-3.5 text-[#1d8348]" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-[10px] text-gray-900">Monitorització activa</p>
          <p className="text-[7px] text-gray-500 leading-tight">Guarda posició en desconnectar</p>
        </div>
        <div className="h-3.5 w-6 rounded-full bg-[#1d8348] relative">
          <div className="absolute right-0.5 top-0.5 h-2.5 w-2.5 bg-white rounded-full" />
        </div>
      </div>
      <p className="text-[8px] text-gray-500 px-1 pt-0.5">Dispositius emparellats</p>
      {['Cotxe família', 'Auriculars', 'Altaveu cuina', 'Smartwatch', 'Tablet'].map(name => (
        <div key={name} className="bg-white rounded-xl p-2 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gray-100 flex items-center justify-center">
            <Bluetooth className="h-3 w-3 text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-[10px] text-gray-900">{name}</p>
            <p className="text-[7px] text-gray-500">Toca per assignar vehicle</p>
          </div>
          <ChevronRight className="h-3 w-3 text-gray-400" />
        </div>
      ))}
    </div>
    <div className="bg-white border-t border-gray-100 grid grid-cols-3 py-1.5">
      {[['Ubicació', false], ['Dispositius', true], ['Historial', false]].map(([label, active]) => (
        <div key={label as string} className={`text-center text-[8px] ${active ? 'text-[#1d8348] font-bold' : 'text-gray-400'}`}>
          ● {label}
        </div>
      ))}
    </div>
  </div>
);

// ============= NOTIFICATION MOCKUP =============
const NotifMockup = () => (
  <div className="h-full w-full relative" style={{
    background: 'linear-gradient(135deg, #2d5a3d 0%, #1d8348 50%, #0d4a28 100%)'
  }}>
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.4), transparent 40%)'
    }} />
    <div className="relative h-full p-3 flex flex-col text-white">
      <div className="flex justify-between text-[8px] pt-1">
        <span>14:32</span>
        <span>●●● ▮</span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Lock className="h-3 w-3 mb-2 opacity-80" />
        <p className="font-display text-4xl font-light tracking-tight">14:32</p>
        <p className="text-[10px] opacity-80 mt-1">Dimecres, 29 d'abril</p>
      </div>
      {/* Notification card */}
      <div className="mt-auto bg-white/15 backdrop-blur-xl rounded-2xl p-3 border border-white/20">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded bg-white/90 flex items-center justify-center text-[#1d8348] text-[8px] font-bold">P</div>
            <span className="text-[8px] font-semibold">ParkSave</span>
          </div>
          <span className="text-[7px] opacity-70">fa 2 min</span>
        </div>
        <p className="font-bold text-[11px] leading-tight">Cotxe desat</p>
        <p className="text-[9px] opacity-80 mt-0.5">Carrer Major, 23</p>
        <div className="grid grid-cols-2 gap-1.5 mt-2.5">
          <button className="bg-white/10 border border-white/30 rounded-lg py-1.5 text-[9px] font-medium">Navegar</button>
          <button className="bg-white text-[#1d8348] rounded-lg py-1.5 text-[9px] font-bold">Obrir</button>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-hero text-foreground overflow-hidden">
      {/* NAV */}
      <header className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-amber-grad shadow-glow text-primary-foreground font-bold">
            P
          </span>
          ParkSave
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Funcions</a>
          <a href="#how" className="hover:text-foreground transition-colors">Com funciona</a>
          <a href="#download" className="hover:text-foreground transition-colors">Descarrega</a>
          <a
            href="https://github.com/Sugranyes/parkSave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            aria-label="Codi font a GitHub"
          >
            <Github className="h-4 w-4" /> Codi
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Codi font a GitHub">
            <a href="https://github.com/Sugranyes/parkSave" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm" className="rounded-full">
            <a href="https://buymeacoffee.com/sugrapps" target="_blank" rel="noopener noreferrer">
              <Coffee className="mr-1 h-4 w-4" /> Cafè
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="container grid lg:grid-cols-2 gap-12 items-center pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="animate-fade-up space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Automàtic via Bluetooth · Només Android
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gradient">
            Mai més oblidis on has aparcat.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            ParkSave detecta quan el teu cotxe es desconnecta del Bluetooth i guarda
            la ubicació exacta. Sense fer res. Quan el necessitis, obre l'app i tornes-hi.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-amber-grad text-primary-foreground hover:opacity-90 shadow-glow font-semibold">
              <a href="#download"><Play className="mr-1" /> Descarrega per Android</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="https://buymeacoffee.com/sugrapps" target="_blank" rel="noopener noreferrer">
                <Coffee className="mr-1" /> Buy me a coffee
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Gift className="h-4 w-4 text-accent" /> Totalment gratuïta</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> 100% privat</div>
            <div className="flex items-center gap-2"><Bluetooth className="h-4 w-4 text-accent" /> Funciona sol</div>
          </div>
        </div>

        {/* HERO VISUAL — main phone with floating accents */}
        <div className="relative animate-fade-up flex justify-center" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 -m-12 rounded-full bg-primary/20 blur-3xl" />
            <PhoneFrame className="relative z-10">
              <MapMockup />
            </PhoneFrame>
            {/* Floating notification card */}
            <div className="absolute -bottom-4 -left-12 z-20 hidden sm:block bg-card-grad backdrop-blur-xl border border-border rounded-2xl p-3 shadow-soft animate-pin-float w-56">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-lg bg-amber-grad flex items-center justify-center text-primary-foreground font-bold shadow-glow">P</div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Cotxe desat</p>
                  <p className="font-display font-semibold text-sm">Carrer Major, 23</p>
                </div>
              </div>
            </div>
            {/* Floating BT badge */}
            <div className="absolute -top-4 -right-6 z-20 hidden md:block">
              <div className="h-16 w-16 rounded-full bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center animate-pin-float">
                <Bluetooth className="h-7 w-7 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Funcions</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Pensat perquè no hi pensis.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Bluetooth, title: "Detecció automàtica", desc: "Quan el Bluetooth del cotxe es desconnecta, ParkSave guarda la teva posició a l'instant." },
            { icon: Navigation, title: "Tornar-hi és fàcil", desc: "Mapa i navegació integrada. Sempre saps cap on anar." },
            { icon: Clock, title: "Recordatori de pàrquing", desc: "Posa un temps màxim i rep un avís abans que caduqui el tiquet." },
            { icon: Bell, title: "Notificació immediata", desc: "En desconnectar, una notificació amb la ubicació exacta apareix al telèfon." },
            { icon: ShieldCheck, title: "Privadesa total", desc: "Les teves ubicacions es queden al teu telèfon. Mai a cap servidor." },
            { icon: History, title: "Historial complet", desc: "Consulta tots els llocs on has aparcat els darrers dies." },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card-grad border border-border rounded-2xl p-7 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-amber-grad group-hover:shadow-glow transition-all">
                <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS GALLERY */}
      <section className="container py-24">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">A dins l'app</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Senzill. Clar. Útil.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 items-end">
          {[
            { mockup: <NotifMockup />, label: "01 · Notificació", title: "T'avisa al moment de baixar" },
            { mockup: <MapMockup />, label: "02 · Ubicació", title: "El teu cotxe al mapa" },
            { mockup: <DevicesMockup />, label: "03 · Dispositius", title: "Tots els teus Bluetooth" },
          ].map(({ mockup, label, title }, i) => (
            <div key={label} className="space-y-6 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <PhoneFrame>{mockup}</PhoneFrame>
              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
                <p className="font-display font-semibold text-lg">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container py-24">
        <div className="bg-card-grad border border-border rounded-3xl p-10 md:p-16">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Com funciona</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Tres passos. Zero esforç.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Connecta el cotxe", d: "Empareja el teu telèfon amb el Bluetooth del vehicle. Una sola vegada." },
              { n: "02", t: "Aparca i baixa", d: "ParkSave detecta la desconnexió i registra la ubicació en silenci." },
              { n: "03", t: "Torna-hi sempre", d: "Obre l'app i segueix la ruta directa fins al teu cotxe." },
            ].map(({ n, t, d }) => (
              <div key={n} className="space-y-3">
                <div className="font-display text-5xl font-bold text-primary/30">{n}</div>
                <h3 className="font-display font-semibold text-xl">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="container py-24">
        <div className="relative overflow-hidden rounded-3xl bg-amber-grad p-12 md:p-20 text-center shadow-glow">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--night)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--night)) 0%, transparent 50%)'
          }} />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Descarrega-la. És gratis per sempre.
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Sense anuncis. Sense compte. Només l'app i el teu cotxe. Si t'agrada, convida'm a un cafè ☕
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold">
                <a href="https://github.com/Sugranyes/parkSave/releases/download/app/app-release.apk" target="_blank" rel="noopener noreferrer"><Play className="mr-1" /> Descarrega l'APK</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://github.com/Sugranyes/parkSave" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1" /> Veure a GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://buymeacoffee.com/sugrapps" target="_blank" rel="noopener noreferrer">
                  <Coffee className="mr-1" /> Buy me a coffee
                </a>
              </Button>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center gap-3 pt-8">
              <div className="bg-background rounded-2xl p-3 shadow-soft">
                <img
                  src={qrDownload}
                  alt="Codi QR per descarregar ParkSave per Android"
                  className="h-40 w-40 sm:h-48 sm:w-48"
                  loading="lazy"
                />
              </div>
              <p className="flex items-center gap-2 text-sm text-primary-foreground/90 font-medium">
                <QrCode className="h-4 w-4" /> Escaneja per descarregar
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border">
        <p>© 2026 ParkSave. Fet amb ☕ a Catalunya.</p>
      <footer className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border">
        <p>© 2026 ParkSave. Fet amb ☕ a Catalunya.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Sugranyes/parkSave"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="#" className="hover:text-foreground transition-colors">Privadesa</a>
          <a href="#" className="hover:text-foreground transition-colors">Termes</a>
          <a href="#" className="hover:text-foreground transition-colors">Contacte</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
