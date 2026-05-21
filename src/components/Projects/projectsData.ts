import reboot01MobileApp from '../../assets/reboot01MobileApp.png'

export type ProjectId = 'reboot01-mobile-app' | 'reboot-sis' | 'reboot-backend-service' | 'portfolio-experience'

export type Project = {
  id: ProjectId
  tag: string
  title: string
  cardTitle?: string[]
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
    title: 'Reboot Coding Institute Mobile App',
    cardTitle: ['Reboot Coding Institute', 'Mobile App'],
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
    id: 'reboot-sis',
    tag: 'Web - Live',
    title: 'Reboot SIS',
    summary: 'Internal Student Information System for Reboot Coding Institute. Cohort management, attendance, document requests, and a Gantt timeline — all in one dashboard.',
    stack: 'Next.js, TypeScript, Go, GraphQL, Prisma',
    description:
      'Full-stack web app bridging a Go backend, school GraphQL API, and BioTime attendance system for staff and students.',
    outcomes: [
      'Built and shipped a full internal SIS used by Reboot Coding Institute.',
      'Implemented Tamkeen document workflows, BioTime integration, and real-time audit streaming.',
    ],
  },
  {
    id: 'reboot-backend-service',
    tag: 'Backend - Live',
    title: 'Reboot Backend Service',
    summary: 'Production Go backend powering the Reboot Coding Institute mobile app and SIS. Student progress tracking, push notifications, and cohort timeline management.',
    stack: 'Go, Gin, PostgreSQL, Supabase, Docker',
    description:
      'Go backend service tracking student progress, managing cohort timelines, and delivering push notifications across all Reboot01 cohorts.',
    outcomes: [
      'Live in production serving multiple cohorts of 30–60 students.',
      'Dashboard endpoint aggregates 13 data sources in a single request.',
    ],
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
