import React, { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Coach T",
    role: "Profile Update",
    review:
      "'You never disappoint! I love the colour, the wording, the pictures — everything is absolutely stunning, professional and over the top.'",
  },
  {
    name: "Influencer D",
    role: "Followers & Audience Growth",
    review:
      "'After just one day of posting, I saw an increase of +14 followers. I am a satisfied customer.'",
  },
  {
    name: "Entrepreneur S",
    role: "Followers & Engagement",
    review:
      "'I see the growth and engagement. Thank you Broaden Defined!'",
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-20 px-6 bg-[#2d6a4f] transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full mb-4">
          Testimonials
        </div>

        <h2 className="text-5xl font-extrabold text-white mb-3">
          What Our Clients Say
        </h2>

        <p className="text-white/80">
          A glimpse at some of our amazing clients.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
          >

            {/* Review text */}
            <p className="text-white/90 italic mb-6 text-lg leading-relaxed">
              {t.review}
            </p>

            {/* Name + role */}
            <h3 className="font-semibold text-[#e1ad21] text-lg">
              {t.name}
            </h3>
            <p className="text-white/70 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
