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
    id: 'general',
    title: 'Algemene Gezondheid',
    description: 'Laten we beginnen met een aantal algemene vragen over je gezondheid.',
    questions: [
      {
        id: 'energy',
        text: 'Hoe zou je je energieniveau beschrijven?',
        type: 'scale',
        description: '1 = Zeer laag, 10 = Optimaal',
        required: true
      },
      {
        id: 'sleep',
        text: 'Hoe is je slaapkwaliteit?',
        type: 'scale',
        description: '1 = Zeer slecht, 10 = Uitstekend',
        required: true
      }
    ]
  },
  {
    id: 'physical',
    title: 'Fysieke Gezondheid',
    description: 'Laten we kijken naar je fysieke klachten en gezondheid.',
    questions: [
      {
        id: 'physical_complaints_scale',
        text: 'Hoeveel fysieke klachten heb je?',
        type: 'scale',
        description: '1 = Weinig tot geen, 10 = Zeer veel',
        required: true
      },
      {
        id: 'physical_complaints',
        text: 'Welke fysieke klachten ervaar je?',
        type: 'multiChoice',
        options: [
          'Rugpijn',
          'Nekpijn',
          'Hoofdpijn',
          'Gewrichtspijn',
          'Spierklachten',
          'Vermoeidheid',
          'Maag- en darmklachten',
          'Ademhalingsproblemen',
          'Anders'
        ],
        required: true
      },
      {
        id: 'physical_complaints_other',
        text: 'Als je "Anders" hebt aangevinkt, kun je hier je klachten beschrijven:',
        type: 'text',
        required: false
      },
      {
        id: 'physical_complaints_duration',
        text: 'Hoe lang heb je al last van deze klachten?',
        type: 'text',
        description: 'Beschrijf hoe lang je al last hebt van deze klachten',
        required: true
      },
      {
        id: 'diet',
        text: 'Hoe zou je je voedingspatroon omschrijven?',
        type: 'text',
        description: 'Beschrijf je dagelijkse eetpatroon en eventuele dieetrestricties',
        required: true
      }
    ]
  },
  {
    id: 'mental',
    title: 'Mentale Gezondheid',
    description: 'Deze vragen helpen ons inzicht te krijgen in je mentale welzijn.',
    questions: [
      {
        id: 'stress_level',
        text: 'Hoeveel stress ervaar je?',
        type: 'scale',
        description: '1 = Weinig tot geen, 10 = Zeer veel',
        required: true
      },
      {
        id: 'mental_state',
        text: 'Hoe voel je je?',
        type: 'multiChoice',
        options: [
          'Somber',
          'Angstig',
          'Burn-out klachten',
          'Piekeren',
          'Slaapproblemen',
          'Concentratieproblemen',
          'Stemmingswisselingen',
          'Anders'
        ],
        required: true
      },
      {
        id: 'mental_state_other',
        text: 'Als je "Anders" hebt aangevinkt, kun je hier beschrijven hoe je je voelt:',
        type: 'text',
        required: false
      },
      {
        id: 'mental_complaints_duration',
        text: 'Hoe lang ervaar je deze gevoelens al?',
        type: 'text',
        description: 'Beschrijf wanneer deze gevoelens zijn begonnen en hoe ze zich hebben ontwikkeld',
        required: true
      }
    ]
  },
  {
    id: 'treatments',
    title: 'Eerdere Behandelingen',
    description: 'Vertel ons meer over behandelingen die je al hebt geprobeerd.',
    questions: [
      {
        id: 'previous_treatments',
        text: 'Welke behandelingen heb je al geprobeerd voor deze problemen?',
        type: 'multiChoice',
        options: [
          'Huisarts',
          'Fysiotherapie',
          'Psycholoog/Psychiater',
          'Acupunctuur',
          'Chiropractor',
          'Osteopaat',
          'Natuurgeneeskunde',
          'Voedingsdeskundige',
          'Mindfulness/Meditatie',
          'Anders'
        ],
        required: true
      },
      {
        id: 'treatments_other',
        text: 'Als je "Anders" hebt aangevinkt, welke andere behandelingen heb je geprobeerd?',
        type: 'text',
        required: false
      }
    ]
  },
  {
    id: 'personal',
    title: 'Persoonlijke Informatie',
    description: 'Tot slot hebben we nog wat gegevens van je nodig om contact met je op te kunnen nemen.',
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
        id: 'phone',
        text: 'Wat is je telefoonnummer?',
        type: 'text',
        description: 'Optioneel',
        required: false
      }
    ]
  }
];