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
    tag: 'Mobile - Live',
    title: 'Reboot Coding Institute',
    summary: 'Mobile app for Reboot Coding Institute students. Live data, push notifications, audit booking, and more. Live on Google Play.',
    stack: 'React Native, GraphQL, Supabase, Go',
    description:
      'A real-world mobile app focused on reliable data flows, scalable APIs, and a smooth user experience.',
    outcomes: [
      'Shipped to production with a full GraphQL data layer and Go backend service.',
      'Live on Google Play with real users across the Reboot01 student community.',
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
