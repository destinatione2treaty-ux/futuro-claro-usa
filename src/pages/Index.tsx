import { useState } from "react";

const translations = {
  badge: "🚀 Próximamente",
  brandName: "YOUR NEW FUTURE USA",
  headline1: "Estamos Construyendo",
  headline2: "Algo",
  headline3: "Grande",
  subheadline:
    "Si llegaste hasta aquí, es porque realmente estás interesado en comenzar tu camino hacia Estados Unidos. Y eso ya dice mucho.",
  cardsTitle: "",
  cards: [
    { icon: "📋", text: "Guías prácticas sobre Visas E-2, EB-2 NIW, EB-1 y más" },
    { icon: "🏢", text: "Cómo estructurar negocios en EE.UU." },
    { icon: "📚", text: "Recursos sobre seguros, apertura de empresas y aspectos legales básicos" },
    { icon: "🔗", text: "Fuentes oficiales y sitios de confianza" },
    { icon: "🎓", text: "Herramientas educativas para prepararte antes de hablar con abogados" },
  ],
  emailLabel: "Sé el primero en saberlo",
  emailPlaceholder: "Tu email aquí",
  emailButton: "NOTIFÍCAME",
  calloutText: "¿No quieres esperar? Ya tenemos disponible nuestra primera guía:",
  calloutLink: "→ Guía Destino E-2 — Tu hoja de ruta para la Visa E-2 ($27)",
  calloutUrl: "https://destino-e2.yournewfutureusa.com",
  closingText:
    "Nuestro objetivo es que tengas claridad, estrategia y organización antes de dar cualquier paso importante.",
  copyright: "© 2026 Your New Future USA",
};

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12 sm:py-16">
      {/* Badge */}
      <div className="border border-accent text-accent text-xs font-heading font-semibold px-4 py-1.5 rounded-full mb-10">
        {translations.badge}
      </div>

      {/* Brand Name */}
      <h1 className="font-heading font-bold text-2xl sm:text-3xl tracking-widest text-foreground text-center">
        {translations.brandName}
      </h1>
      <div className="w-[60px] h-[2px] bg-primary mt-4 mb-10" />

      {/* Headline */}
      <div className="text-center mb-8">
        <h2
          className="font-heading font-extrabold text-foreground leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {translations.headline1}
          <br />
          {translations.headline2}
          <br />
          <span className="text-accent">{translations.headline3}</span>
        </h2>
      </div>

      {/* Subheadline */}
      <p className="text-center font-body max-w-[600px] text-[hsl(var(--text-soft))] text-base sm:text-lg mb-14 leading-relaxed">
        {translations.subheadline}
      </p>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[640px] mb-14">
        {translations.cards.map((card, i) => (
          <div
            key={i}
            className="bg-card border border-border border-l-[3px] border-l-primary rounded-lg p-4 font-body text-sm text-foreground"
          >
            <span className="mr-2">{card.icon}</span>
            {card.text}
          </div>
        ))}
      </div>

      {/* Email Capture */}
      <div className="w-full max-w-[500px] mb-14">
        <p className="text-center font-heading font-semibold text-foreground mb-4 text-sm tracking-wide">
          {translations.emailLabel}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translations.emailPlaceholder}
            className="flex-1 bg-input border border-[hsl(var(--border))] text-foreground placeholder:text-[hsl(var(--text-faint))] rounded-lg px-4 py-3 font-body text-sm outline-none focus:ring-1 focus:ring-primary"
          />
          <button className="bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
            {translations.emailButton}
          </button>
        </div>
      </div>

      {/* Product Callout */}
      <div className="w-full max-w-[600px] border border-accent bg-[hsl(var(--accent)/0.08)] rounded-lg p-5 mb-14 text-center">
        <p className="font-body text-sm text-foreground mb-2">{translations.calloutText}</p>
        <a
          href={translations.calloutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-heading font-bold text-sm hover:underline"
        >
          {translations.calloutLink}
        </a>
      </div>

      {/* Closing Text */}
      <p className="text-center font-body text-sm text-[hsl(var(--text-muted))] max-w-[520px] mb-8 leading-relaxed">
        {translations.closingText}
      </p>

      {/* Copyright */}
      <p className="text-center font-body text-xs text-[hsl(var(--text-faint))]">
        {translations.copyright}
      </p>
    </div>
  );
};

export default Index;
