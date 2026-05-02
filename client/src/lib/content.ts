/**
 * CONTENT MANAGEMENT SYSTEM
 * 
 * This file contains all editable content for the portfolio website.
 * Update this file to change portfolio videos, services, text content, and contact information.
 * 
 * IMPORTANT: This is the single source of truth for all content.
 * Changes here will automatically reflect across the entire website.
 */

export interface PortfolioVideo {
  id: string;
  title: string;
  category: 'cinematic' | 'social' | 'real-estate' | 'product';
  thumbnail: string;
  videoUrl: string;
  duration: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/**
 * PORTFOLIO VIDEOS
 * 
 * To add a new video:
 * 1. Add a new object to the array below
 * 2. Use a unique id (e.g., 'video-001')
 * 3. Provide thumbnail URL (can be from YouTube, Vimeo, or uploaded)
 * 4. Provide videoUrl (YouTube embed URL or direct video link)
 * 5. Set category: 'cinematic', 'social', 'real-estate', or 'product'
 * 
 * Example YouTube embed URL: https://www.youtube.com/embed/VIDEO_ID
 * Example Vimeo embed URL: https://player.vimeo.com/video/VIDEO_ID
 */
export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 'video-001',
    title: 'Restaurant Ambiance',
    category: 'cinematic',
    thumbnail: '/Videos/toriB.png',
    videoUrl: '/Videos/Torii.mp4',
    duration: '2:45',
    description: 'Cinematic showcase of a fine dining restaurant experience',
  },
  {
    id: 'video-002',
    title: 'Cafe Morning Routine',
    category: 'cinematic',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '1:30',
    description: 'Intimate morning moments in a cozy cafe setting',
  },
  {
    id: 'video-003',
    title: 'Product Launch',
    category: 'product',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '1:15',
    description: 'High-end product showcase with cinematic lighting',
  },
  {
    id: 'video-004',
    title: 'Real Estate Tour',
    category: 'real-estate',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:20',
    description: 'Luxury property walkthrough with drone footage',
  },
  {
    id: 'video-005',
    title: 'Instagram Reel - Coffee',
    category: 'social',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '0:15',
    description: 'Quick social media content for coffee brand',
  },
  {
    id: 'video-006',
    title: 'Wedding Highlights',
    category: 'cinematic',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:00',
    description: 'Emotional wedding day highlights',
  },
];

/**
 * SERVICES
 * 
 * To add or modify services:
 * 1. Add/edit objects in the array below
 * 2. Use descriptive titles and descriptions
 * 3. Icons are simple text identifiers (e.g., 'film', 'instagram', 'building', 'box')
 */
export const services: Service[] = [
  {
    id: 'service-001',
    title: 'Kinematiske Videoer',
    description: 'Højtklasses kinematiske produktioner for mærker, restauranter og events. Fuld produktion fra koncept til slutredigering.',
    icon: 'film',
  },
  {
    id: 'service-002',
    title: 'Sociale Medier Indhold',
    description: 'Optimerede kort videoer til Instagram, TikTok og andre sociale platforme. Engagerende indhold, der driver engagement.',
    icon: 'instagram',
  },
  {
    id: 'service-003',
    title: 'Fast Ejendoms Videoer',
    description: 'Professionelle ejendomsvisninger med dronefilmning, 3D-overgange og overbevisende storytelling for luksus fast ejendom.',
    icon: 'building',
  },
  {
    id: 'service-004',
    title: 'Produkt Videoer',
    description: 'Fremvise dine produkter med professionel belysning, motion graphics og overbevisende fortaellinger.',
    icon: 'box',
  },
];

/**
 * ABOUT SECTION
 * 
 * Update the about text to reflect your personal story and vision
 */
export const aboutContent = {
  headline: 'Premium Videografi for Mærker, der Betyder Noget',
  story: 'Baseret i Odense, Danmark, skaber jeg kinematiske videoer, der fortæller overbevisende historier. Med fokus på luksusmærker, restauranter og fast ejendom kombinerer jeg teknisk præcision med kreativ vision for at levere videoer, der fascinerer og konverterer.',
  vision: 'Min mission er at løfte dit brand gennem visuelt storytelling. Hver frame er skabt med intention, hver transition meningsfuld, og hvert projekt er en afspejling af din unikke vision.',
};

/**
 * CONTACT INFORMATION
 * 
 * Update with your actual contact details
 */
export const contactInfo = {
  email: 'MeoStudioDK.gmail.com',
  phone: '+45 20 93 60 09',
  location: 'Odense, Danmark',
  instagram: 'https://www.instagram.com/meostudiodk/',
  linkedin: 'https://linkedin.com',
  tiktok : 'https://www.tiktok.com/@mheo722'
};

/**
 * HERO SECTION
 * 
 * Update headline and tagline
 */
export const heroContent = {
  headline: 'Meo Studio',
  tagline: 'Premium videoproduktion for produkter, der kræver excellence',
  ctaPrimary: 'Se Mit Arbejde',
  ctaSecondary: 'Kontakt Mig',
};

/**
 * SOCIAL MEDIA LINKS
 * 
 * Add or remove social links as needed
 */
export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: contactInfo.instagram,
    icon: 'instagram',
  },
  {
    platform: 'Tik Tok',
    url: contactInfo.tiktok,
    icon: 'tiktok',
  },
  {
    platform: 'LinkedIn',
    url: contactInfo.linkedin,
    icon: 'linkedin',
  },
];
