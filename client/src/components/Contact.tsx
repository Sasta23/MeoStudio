/**
 * CONTACT SECTION\n * 
 * Design Philosophy: Cinematic Dark Elegance
 * - Simple contact form with minimal design
 * - Contact information displayed prominently
 * - Call-to-action focused on conversion
 */

import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/content';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Der skete en fejl. Prøv igen senere.");
      }
    } catch (error) {
      console.error("Fejl:", error);
      alert("Kunne ikke oprette forbindelse til serveren.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-background py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-foreground">Lad os Skabe Noget Fantastisk</h2>
          <p className="text-lg text-muted-foreground">
            Klar til at bringe din vision til live? Tag kontakt i dag.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Tag Kontakt
              </h3>
              <p className="mb-8 text-muted-foreground">
                Har du et projekt i tankerne? Jeg ville elske at hore om det. Tag kontakt
                gennem en af kanalerne nedenfor.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold text-foreground">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold text-foreground">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Placering</p>
                  <p className="font-semibold text-foreground">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Navn
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Dit navn"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="din@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Emne
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Projektdetaljer"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Besked
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Fortæl mig om dit projekt..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              {submitted ? 'Besked Sendt!' : 'Send Besked'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
