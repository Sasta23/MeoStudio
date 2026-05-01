/**
 * PORTFOLIO SECTION
 * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Grid layout with varying video sizes (masonry-like)
 * - Hover effects: lift and glow
 * - Smooth transitions and depth
 * - Category filtering
 */

import { portfolioVideos, type PortfolioVideo } from '@/lib/content';
import { Play } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = ['all', 'cinematic', 'social', 'real-estate', 'product'] as const;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  const CATEGORY_LABELS: Record<string, string> = {
    all: 'Alle',
    cinematic: 'Kinematisk',
    social: 'Sociale Medier',
    'real-estate': 'Fast Ejendom',
    product: 'Produkt',
  };

  const filteredVideos =
    selectedCategory === 'all'
      ? portfolioVideos
      : portfolioVideos.filter((v) => v.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative bg-background py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-foreground">Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Et udvalg af nylige kinematiske projekter
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                  : 'border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative overflow-hidden bg-card cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              style={{
                aspectRatio: index % 5 === 0 ? '1/1.2' : '1/1',
                gridColumn: index % 5 === 0 ? 'span 1' : 'span 1',
              }}
            >
              {/* Video Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary">
                  <Play className="ml-1 h-6 w-6 fill-primary-foreground text-primary-foreground" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                <p className="text-sm text-gray-300">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-primary hover:text-primary/80 transition-colors"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full bg-black">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full"
                style={{ aspectRatio: '16/9' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Details */}
            <div className="bg-card p-6">
              <h3 className="mb-2 text-2xl font-semibold text-foreground">
                {selectedVideo.title}
              </h3>
              <p className="text-muted-foreground">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
