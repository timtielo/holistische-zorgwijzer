export interface Testimonial {
  name: string;
  age: number;
  image: string;
  condition: string;
  text: string;
  impact: string;
  process: string;
  result: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah de Vries",
    age: 34,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
    condition: "Klacht",
    text: "...",
    impact: "...",
    process: "...",
    result: "..."
  },
  {
    name: "Emma Jansen",
    age: 28,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    condition: "Klacht",
    text: "...",
    impact: "...",
    process: "...",
    result: "..."
  },
  {
    name: "Tim Tielkemeijer",
    age: 22,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    condition: "Onverklaarbare vermoeidheid",
    text: "Na 3 maanden voelde ik mij beter dan ooit tevoren, energie was terug, ik was lang niet meer zo verkouden en ik werd ineens een stuk leniger in mijn spieren.",
    impact: "Ik ging van elke dag wedstrijdzwemmen en middelbare school naar slapen-school-slapen. Ik voelde mij onverschillig en zou het nu beschrijven als enorme brain fog. Vergeetachtig, moe, niet helemaal aanwezig zijn. Daarnaast was ik enorm vaak verkouden.",
    process: "Bij de eerste behandeling was ik enorm sceptisch. De behandelaar was enorm lief en vriendelijk. Toch vond ik het allemaal redelijk vaag en had ik er niet enorm veel vertrouwen in.",
    result: "Na enkele weken begon ik mij beter te voelen. Mijn energie kwam merkbaar terug. Na 3 maanden voelde ik mij beter dan ooit tevoren, energie was terug, ik was lang niet meer zo verkouden en ik werd ineens een stuk leniger in mijn spieren."
  }
];

// Export just the first 3 for homepage to keep it concise
export const homepageTestimonials = testimonials.slice(0, 3);