import { Bluetooth, MapPin, Clock, Bell, Navigation, ShieldCheck, Play, Coffee, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-park.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero text-foreground overflow-hidden">
      {/* NAV */}
      <header className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-amber-grad shadow-glow">
            <MapPin className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </span>
          ParkMind
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Funcions</a>
          <a href="#how" className="hover:text-foreground transition-colors">Com funciona</a>
          <a href="#download" className="hover:text-foreground transition-colors">Descarrega</a>
        </nav>
        <Button variant="secondary" size="sm" className="rounded-full">Entrar</Button>
      </header>

      {/* HERO */}
      <section className="container grid lg:grid-cols-2 gap-12 items-center pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="animate-fade-up space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Automàtic via Bluetooth · Sense piles de feina
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gradient">
            Mai més oblidis on has aparcat.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            ParkMind detecta quan el teu cotxe es desconnecta del Bluetooth i guarda la
            ubicació exacta. Quan el necessitis, només has d'obrir l'app i seguir la fletxa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-amber-grad text-primary-foreground hover:opacity-90 shadow-glow font-semibold">
              <a href="#download"><Play className="mr-1" /> Descarrega per Android</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="https://www.buymeacoffee.com/parkmind" target="_blank" rel="noopener noreferrer">
                <Coffee className="mr-1" /> Convida'm a un cafè
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Gift className="h-4 w-4 text-accent" /> Totalment gratuïta</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> 100% privat</div>
            <div className="flex items-center gap-2"><Bluetooth className="h-4 w-4 text-accent" /> Només Android</div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-border/60">
            <img
              src={heroImg}
              alt="Cotxe aparcat al carrer amb pin de localització"
              width={1536}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

            {/* Floating card */}
            <div className="absolute bottom-6 left-6 right-6 bg-card-grad backdrop-blur-xl border border-border rounded-2xl p-5 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
                  <div className="relative h-12 w-12 rounded-full bg-amber-grad flex items-center justify-center shadow-glow">
                    <MapPin className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Cotxe aparcat</p>
                  <p className="font-display font-semibold">Carrer Balmes, 142</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">fa</p>
                  <p className="font-display font-bold text-primary">12 min</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative pin */}
          <div className="absolute -top-6 -right-6 hidden md:block animate-pin-float">
            <div className="h-20 w-20 rounded-full bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center">
              <Navigation className="h-8 w-8 text-accent" />
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
            { icon: Bluetooth, title: "Detecció automàtica", desc: "Quan el Bluetooth del cotxe es desconnecta, ParkMind guarda la teva posició a l'instant." },
            { icon: Navigation, title: "Tornar-hi és fàcil", desc: "Brúixola, mapa i ruta a peu integrades. Sempre saps cap on anar." },
            { icon: Clock, title: "Recordatori de pàrquing", desc: "Posa un temps màxim i rep un avís abans que caduqui el tiquet." },
            { icon: Bell, title: "Notes i fotos", desc: "Afegeix una foto del lloc o el número de plaça per al pàrquings grans." },
            { icon: ShieldCheck, title: "Privadesa total", desc: "Les teves ubicacions es queden al teu telèfon. Mai a cap servidor." },
            { icon: MapPin, title: "Historial intel·ligent", desc: "Reconeix els teus llocs habituals i aprèn dels teus hàbits." },
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
              { n: "02", t: "Aparca i baixa", d: "ParkMind detecta la desconnexió i registra la ubicació en silenci." },
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
              Descarrega ParkMind. Oblida't d'oblidar.
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Gratis. Sense anuncis. Sense compte. Només l'app i el teu cotxe.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold">
                <Apple className="mr-1" /> Descarrega per iOS
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="mr-1" /> Descarrega per Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border">
        <p>© 2026 ParkMind. Fet amb ☕ a Barcelona.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privadesa</a>
          <a href="#" className="hover:text-foreground transition-colors">Termes</a>
          <a href="#" className="hover:text-foreground transition-colors">Contacte</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
