import { useState } from "react";

// ==================== GOOGLE FORM CONFIG ====================
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeYWIcVuyDj_z9SXKXkshra26WRO7n5zyYZVXJjDkGoPJTZOg/formResponse";
const GOOGLE_FORM_ENTRY = "entry.1369534585";


// ==================== TRANSLATIONS ====================
const translations = {
  es: {
    badge: "🚀 Próximamente",
    brandName: "YOUR NEW FUTURE USA",
    headline1: "Estamos Construyendo",
    headline2: "Algo",
    headline3: "Grande",
    subheadline:
      "Si llegaste hasta aquí, es porque realmente estás interesado en comenzar tu camino hacia Estados Unidos. Y eso ya dice mucho.",
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
  },
  en: {
    badge: "🚀 Coming Soon",
    brandName: "YOUR NEW FUTURE USA",
    headline1: "We Are Building",
    headline2: "Something",
    headline3: "Big",
    subheadline:
      "If you made it here, it's because you're truly interested in starting your journey to the United States. And that already says a lot.",
    cards: [
      { icon: "📋", text: "Practical guides on E-2, EB-2 NIW, EB-1 Visas and more" },
      { icon: "🏢", text: "How to structure businesses in the U.S." },
      { icon: "📚", text: "Resources on insurance, company formation, and basic legal aspects" },
      { icon: "🔗", text: "Official sources and trusted websites" },
      { icon: "🎓", text: "Educational tools to prepare you before consulting lawyers" },
    ],
    emailLabel: "Be the first to know",
    emailPlaceholder: "Your email here",
    emailButton: "NOTIFY ME",
    calloutText: "Don't want to wait? Our first guide is already available:",
    calloutLink: "→ Destino E-2 Guide — Your E-2 Visa roadmap ($27)",
    calloutUrl: "https://destino-e2.yournewfutureusa.com",
    closingText:
      "Our goal is for you to have clarity, strategy and organization before taking any important step.",
    copyright: "© 2026 Your New Future USA",
  },
};

// ==================== LANGUAGE DETECTION ==================== // forzando commit
const detectLanguage = (): "es" | "en" => {
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
};

// ==================== COMPONENT ====================
const Index = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const t = translations[detectLanguage()];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const formData = new FormData();
    formData.append(GOOGLE_FORM_ENTRY, email);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",  // Google Forms requiere esto
        body: formData,
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12 sm:py-16">
      {/* Badge */}
      <div className="border border-accent text-accent text-xs font-heading font-semibold px-4 py-1.5 rounded-full mb-10">
        {t.badge}
      </div>

      {/* Brand Name */}
      <h1 className="font-heading font-bold text-2xl sm:text-3xl tracking-widest text-foreground text-center">
        {t.brandName}
      </h1>
      <div className="w-[60px] h-[2px] bg-primary mt-4 mb-10" />

      {/* Headline */}
      <div className="text-center mb-8">
        <h2
          className="font-heading font-extrabold text-foreground leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {t.headline1}
          <br />
          {t.headline2}
          <br />
          <span className="text-accent">{t.headline3}</span>
        </h2>
      </div>

      {/* Subheadline */}
      <p className="text-center font-body max-w-[600px] text-[hsl(var(--text-soft))] text-base sm:text-lg mb-14 leading-relaxed">
        {t.subheadline}
      </p>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[640px] mb-14">
        {t.cards.map((card, i) => (
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
          {t.emailLabel}
        </p>

        {status === "success" ? (
          // Mensaje de éxito
          <div className="text-center border border-accent bg-[hsl(var(--accent)/0.08)] rounded-lg px-6 py-4">
            <p className="text-accent font-heading font-bold text-sm">
              {detectLanguage() === "es"
                ? "✅ ¡Listo! Te avisaremos cuando estemos listos."
                : "✅ Done! We'll notify you when we're ready."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              required
              className="flex-1 bg-input border border-[hsl(var(--border))] text-foreground placeholder:text-[hsl(var(--text-faint))] rounded-lg px-4 py-3 font-body text-sm outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {t.emailButton}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-center text-red-400 text-xs mt-2">
            {detectLanguage() === "es"
              ? "Algo salió mal. Intenta de nuevo."
              : "Something went wrong. Please try again."}
          </p>
        )}
      </div>


      {/* Product Callout */}
      <div className="w-full max-w-[600px] border border-accent bg-[hsl(var(--accent)/0.08)] rounded-lg p-5 mb-14 text-center">
        <p className="font-body text-sm text-foreground mb-2">{t.calloutText}</p>
        <a
          href={t.calloutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-heading font-bold text-sm hover:underline"
        >
          {t.calloutLink}
        </a>
      </div>

      {/* Closing Text */}
      <p className="text-center font-body text-sm text-[hsl(var(--text-muted))] max-w-[520px] mb-8 leading-relaxed">
        {t.closingText}
      </p>

      {/* Copyright */}
      <div className="text-center space-y-1">
        <p className="font-body text-xs text-[hsl(var(--text-faint))]">
          {t.copyright}
        </p>
        <p className="font-body text-xs text-[hsl(var(--text-faint))]">
          {detectLanguage() === "es" ? "Desarrollado con ♥ por" : "Developed with ♥ by"}{" "}
          <a
            href="https://zenithwebcraft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--text-soft))] hover:text-accent transition-colors font-medium"
          >
            ZenithWebCraft
          </a>
        </p>
      </div>

    </div>
  );
};

export default Index;
