/**
 * ABOUT SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance\n * - Split layout: text left, visual right
 * - Generous whitespace and typography focus
 * - Minimal decoration, maximum impact
 */

import { aboutContent } from '@/lib/content';

const ABOUT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663615859972/c5NaTdaTnTqEWfFDhijioZ/hero-cinematic-dark-1-VcgUS7ENsYF4Yzggs2JjkJ.webp';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-background py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-foreground">{aboutContent.headline}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutContent.story}
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-primary pl-6">
              <p className="text-base leading-relaxed text-foreground">
                {aboutContent.vision}
              </p>
            </div>

            {/* Stats or Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Projekter Gennemført</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Klienttilfredshed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <p className="text-sm text-muted-foreground">Års Erfaring</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 overflow-hidden md:h-full">
            <img
              src={ABOUT_IMAGE}
              alt="About"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
