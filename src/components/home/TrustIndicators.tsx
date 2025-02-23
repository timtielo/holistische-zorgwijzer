import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  name: string;
  age: number;
  text: string;
  image: string;
  condition: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Lisa van der Berg",
    age: 34,
    text: "Na jaren van onverklaarbare vermoeidheid heeft de holistische aanpak me eindelijk geholpen de onderliggende oorzaken te begrijpen en aan te pakken.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    condition: "Chronische vermoeidheid"
  },
  {
    name: "Tim Tielkemeijer",
    age: 22,
    text: "Na een lange tijd van onverklaarbare vermoeidheid, ben ik weer terug de topsport in gerold en zijn mijn prestaties beter dan ooit.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    condition: "Vermoeidheid"
  },
  {
    name: "Emma Jansen",
    age: 28,
    text: "Eindelijk een aanpak die verder kijkt dan alleen symptomen. Mijn slaapproblemen zijn verbeterd en ik heb meer energie dan ooit.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    condition: "Slaapproblemen"
  }
];

export function TrustIndicators() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Wat Onze Cliënten Zeggen
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Echte verhalen van mensen die hun weg naar herstel hebben gevonden
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative group">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary-100/50 scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600">{testimonial.condition}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute text-primary-100 h-8 w-8 -left-1 -top-2 transform -scale-x-100" />
                  <p className="text-gray-600 relative z-10 pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  {testimonial.age} jaar
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ervaringen"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Lees Meer Ervaringen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}