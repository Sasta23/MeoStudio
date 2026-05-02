/**
 * FOOTER SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Minimal footer with social links
 * - Clean typography
 * - Subtle separators
 */

import { socialLinks, contactInfo } from '@/lib/content';
// Vi har fjernet Music2 herfra, da vi bruger en rå SVG i stedet
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  vimeo: <ExternalLink className="h-5 w-5" />,
  // Her er det officielle TikTok ikon som SVG
  tiktok: (
    <svg 
      className="h-5 w-5" 
      viewBox="0 0 24 24" 
      fill="currentColor" // Dette gør, at ikonet skifter farve ligesom de andre ved hover
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.15-.1-.3-.21-.45-.32-.03 2.13-.02 4.26-.03 6.39-.01 2.1-.48 4.31-1.95 5.86-1.55 1.7-3.95 2.28-6.09 2.03-2.12-.25-4.13-1.63-5.06-3.56-1.07-2.09-.91-4.83.56-6.73 1.25-1.7 3.42-2.58 5.48-2.31v4.11c-1.1-.21-2.34.11-3.04 1.05-.62.8-.57 1.95.12 2.64a2.76 2.76 0 0 0 3.73-.02c.73-.73.83-1.8.83-2.77V0h-.03z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand / About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Meo Studio
            </h3>
            <p className="text-sm text-muted-foreground">
              Premium videoproduktion baseret i Odense, Danmark. Skaber
              kinematisk indhold for mærker, der kræver excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Hurtige Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Tjenester
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Om
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Følg
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  title={link.platform}
                >
                  {ICON_MAP[link.icon] || <ExternalLink className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Kinematiske Historier. Alle rettigheder
            forbeholdt.
          </p>
          <p>
            Baseret i {contactInfo.location} • Skabt med præcision
          </p>
        </div>
      </div>
    </footer>
  );
}