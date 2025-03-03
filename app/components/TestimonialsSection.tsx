"use client";

import { FaQuoteLeft, FaUniversity, FaHospital, FaLandmark } from "react-icons/fa";

const testimonials = [
  {
    quote: "Q's post-quantum document signing solution has been essential for our long-term data protection strategy. Their implementation of NIST-approved algorithms gives us confidence that our sensitive documents will remain secure even in the quantum era.",
    author: "Leila Taghizadeh",
    title: "Chief Information Security Officer",
    company: "Global Financial Services",
    icon: FaLandmark,
    logo: "text-yellow-400"
  },
  {
    quote: "The API integration was seamless. We were able to implement quantum-resistant signatures for all our legal documents in days, not months. The hybrid approach ensures compatibility while providing future-proof security.",
    author: "Michael Rodriguez",
    title: "Director of Legal Technology",
    company: "LegalTech Solutions",
    icon: FaUniversity,
    logo: "text-[#FF9900]"
  },
  {
    quote: "What impressed us most was how Q simplified post-quantum cryptography for our healthcare documents. The platform handles all the complexity while ensuring our patient records remain secure for decades to come.",
    author: "Emily Thompson",
    title: "VP of Compliance",
    company: "MedSecure Systems",
    icon: FaHospital,
    logo: "text-blue-400"
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-32 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how organizations are future-proofing their document security with Q
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900/50 rounded-2xl border border-gray-800/50 backdrop-blur-xl"
            >
              {/* Background Glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-gray-800/50 to-transparent rounded-2xl blur-sm"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <testimonial.icon className={`w-6 h-6 ${testimonial.logo}`} />
                    <span className="text-sm font-medium text-gray-400">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800/50">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-400">Trusted by 500+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
