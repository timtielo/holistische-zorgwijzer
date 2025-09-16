export type QuestionType = 'scale' | 'choice' | 'text' | 'multiChoice';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  description?: string;
  required?: boolean;
}

export interface AssessmentSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const assessmentSections: AssessmentSection[] = [
  {
    id: 'personal',
    title: 'Persoonlijke Informatie',
    description: 'Laten we beginnen met wat basisgegevens.',
    questions: [
      {
        id: 'name',
        text: 'Wat is je naam?',
        type: 'text',
        required: true
      },
      {
        id: 'email',
        text: 'Wat is je e-mailadres?',
        type: 'text',
        required: true
      },
      {
        id: 'age',
        text: 'Wat is je leeftijd?',
        type: 'text',
        required: true
      }
    ]
  },
  {
    id: 'mental',
    title: 'Mentale Klachten',
    description: 'Vertel ons over je mentale gezondheid en welzijn.',
    questions: [
      {
        id: 'mental_complaints_specific',
        text: 'Welke mentale klachten ervaar je?',
        type: 'multiChoice',
        options: [
          'Burnout',
          'Stress',
          'Somberheid',
          'Mindfog/mentale mist',
          'Angst',
          'Concentratieproblemen',
          'Slaapproblemen',
          'Piekeren',
          'Anders'
        ],
        required: true
      },
      {
        id: 'mental_health_rating',
        text: 'Hoe beoordeel je je mentale gezondheid op dit moment?',
        type: 'scale',
        description: '1 = Zeer slecht, 5 = Uitstekend',
        required: true
      },
      {
        id: 'mental_complaints_other',
        text: 'Als je "Anders" hebt aangevinkt, kun je hier je klachten beschrijven:',
        type: 'text',
        required: false
      }
    ]
  },
  {
    id: 'physical',
    title: 'Fysieke Klachten',
    description: 'Vertel ons over je fysieke klachten en gezondheid.',
    questions: [
      {
        id: 'physical_complaints_specific',
        text: 'Welke fysieke klachten ervaar je?',
        type: 'multiChoice',
        options: [
          'Moeheid/vermoeidheid',
          'Schouderpijn',
          'Nekpijn',
          'Rugpijn',
          'Problemen met darmen',
          'Eczeem',
          'Allergieën',
          'Voedselallergieën',
          'Hoofdpijn',
          'Gewrichtspijn',
          'Anders'
        ],
        required: true
      },
      {
        id: 'physical_health_rating',
        text: 'Hoe beoordeel je je fysieke gezondheid op dit moment?',
        type: 'scale',
        description: '1 = Zeer slecht, 5 = Uitstekend',
        required: true
      },
      {
        id: 'physical_complaints_other',
        text: 'Als je "Anders" hebt aangevinkt, kun je hier je klachten beschrijven:',
        type: 'text',
        required: false
      }
    ]
  },
  {
    id: 'duration',
    title: 'Duur van Klachten',
    description: 'Vertel ons hoe lang je al last hebt van deze klachten.',
    questions: [
      {
        id: 'complaint_duration',
        text: 'Hoe lang heb je al last van deze klachten?',
        type: 'text',
        description: 'Bijvoorbeeld: 6 maanden, 2 jaar, sinds mijn jeugd',
        required: true
      }
    ]
  },
  {
    id: 'medical_history',
    title: 'Medische Geschiedenis',
    description: 'Vertel ons over je ervaringen met reguliere zorg.',
    questions: [
      {
        id: 'regular_care_experience',
        text: 'Ben je bij reguliere zorg geweest voor deze klachten?',
        type: 'text',
        description: 'Bijvoorbeeld: huisarts, specialist, ziekenhuis',
        required: true
      },
      {
        id: 'medication_usage',
        text: 'Gebruik je momenteel medicijnen?',
        type: 'text',
        description: 'Zo ja, welke medicijnen en waarvoor?',
        required: false
      },
      {
        id: 'treatment_results',
        text: 'Wat was het resultaat van eerdere behandelingen?',
        type: 'text',
        description: 'Hebben eerdere behandelingen geholpen? Waarom wel/niet?',
        required: false
      }
    ]
  }
];