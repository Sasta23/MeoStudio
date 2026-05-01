/**
 * SERVICES SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Minimal card design with hover lift effect
 * - Icon-based visual hierarchy
 * - Clean typography and generous spacing
 */

import { services } from '@/lib/content';
import { Film, Instagram, Building2, Package } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  film: <Film className="h-8 w-8" />,
  instagram: <Instagram className="h-8 w-8" />,
  building: <Building2 className="h-8 w-8" />,
  box: <Package className="h-8 w-8" />,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-card py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-foreground">Tjenester</h2>
          <p className="text-lg text-muted-foreground">
            Omfattende videoproduktionslosninger for dit brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden border border-border bg-background p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                {ICON_MAP[service.icon] || <Film className="h-6 w-6" />}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
