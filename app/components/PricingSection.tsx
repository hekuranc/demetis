"use client";

import { Button } from "@nextui-org/react";
import { FaCheck, FaFileSignature, FaKey, FaRocket } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    icon: FaFileSignature,
    price: "299",
    description: "For small businesses and startups",
    features: [
      "Up to 100 documents/month",
      "Post-quantum signatures",
      "Basic document encryption",
      "Email support",
      "90-day document storage"
    ],
    color: "cyan"
  },
  {
    name: "Business",
    icon: FaKey,
    price: "799",
    description: "For growing organizations with compliance needs",
    features: [
      "Up to 1,000 documents/month",
      "Advanced hybrid encryption",
      "Document lifecycle management",
      "24/7 priority support",
      "1-year document storage",
      "Audit logs and compliance reports",
      "API access with 1,000 calls/day"
    ],
    color: "primary",
    popular: true
  },
  {
    name: "Enterprise",
    icon: FaRocket,
    price: "Custom",
    description: "For large organizations with complex security needs",
    features: [
      "Unlimited documents",
      "Custom integration options",
      "Advanced key management",
      "Dedicated support team",
      "Unlimited document storage",
      "Custom compliance reporting",
      "Unlimited API access",
      "SLA guarantee"
    ],
    color: "white"
  }
];

export function PricingSection() {
  return (
    <section className="w-full py-32 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-primary-400 text-transparent bg-clip-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your document security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-gray-900/50 rounded-2xl border backdrop-blur-xl transition-transform duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                  : "border-gray-800/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                    <span className="text-xs font-medium text-cyan-400">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 mb-6">
                <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.popular ? "bg-cyan-500/10" : "bg-gray-800/50"
                }`}>
                  <plan.icon className={`w-6 h-6 text-${plan.color}-400`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-medium text-gray-400">$</span>
                  <span className="text-4xl font-bold text-white ml-1">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400 ml-2">/month</span>}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-cyan-500/10" : "bg-gray-800/50"
                    }`}>
                      <FaCheck className={`w-3 h-3 text-${plan.color}-400`} />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Need a custom solution?{" "}
            <button className="text-cyan-400 hover:text-cyan-300 font-medium">
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
