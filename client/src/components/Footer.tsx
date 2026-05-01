/**
 * FOOTER SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Minimal footer with social links
 * - Clean typography
 * - Subtle separators
 */

import { socialLinks, contactInfo } from '@/lib/content';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  vimeo: <ExternalLink className="h-5 w-5" />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand / About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Kinematiske Historier
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
              Folg
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
