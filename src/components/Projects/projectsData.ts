import reboot01MobileApp from '../../assets/reboot01MobileApp.png'

export type ProjectId = 'reboot01-mobile-app' | 'portfolio-experience'

export type Project = {
  id: ProjectId
  tag: string
  title: string
  summary: string
  stack: string
  description: string
  outcomes: string[]
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: 'reboot01-mobile-app',
    tag: 'Mobile - In Progress',
    title: 'Reboot01 Mobile App',
    summary: 'React Native app with a GraphQL data layer, Supabase backend, and Go services.',
    stack: 'React Native, GraphQL, Supabase, Go',
    description:
      'A real-world mobile app focused on reliable data flows, scalable APIs, and a smooth user experience.',
    outcomes: [
      'Building core flows with a production-ready data layer.',
      'Integrating Go middleware services for backend reliability.',
    ],
    image: reboot01MobileApp,
    imageAlt: 'Reboot01 mobile app screenshot',
  },
  {
    id: 'portfolio-experience',
    tag: 'Web - Live',
    title: 'Portfolio Experience',
    summary: 'Mobile-first portfolio with focused storytelling and clear navigation.',
    stack: 'React, TypeScript, Vite',
    description:
      'A clean, mobile-first experience that highlights skills, projects, and contact paths with clarity.',
    outcomes: [
      'Structured content for fast scanning and strong first impressions.',
      'Optimized layout to match the iPhone mockup experience.',
    ],
  },
]
