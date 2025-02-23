import React from 'react';
import { Brain, Battery, Leaf } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 group hover:bg-primary-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mt-8 text-xl font-bold text-gray-900">
        {title}
      </h3>
      <p className="mt-4 text-base text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Mentaal Welzijn",
      description: "Van stress en burnout tot slaapproblemen - wij kijken naar het complete plaatje."
    },
    {
      icon: <Battery className="h-10 w-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Energie & Vitaliteit",
      description: "Ontdek de oorzaken van vermoeidheid en herstel je natuurlijke energie."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />,
      title: "Natuurlijke Aanpak",
      description: "Integrale behandelmethoden die aansluiten bij jouw lichaam en geest."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Waarom Kiezen voor Ons
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Een Holistische Benadering van Gezondheid
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}