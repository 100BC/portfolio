import type { WorkExperience } from '$lib/types';

export const igniter = {
  title: 'Igniter Tickets',
  role: 'Software Developer',
  time: 'Feb. 2022 - Nov. 2023',
  duties: [
    {
      task: `
      Led a small team to engineer a device-agnostic service, to replace a legacy product, removing reliance on outdated hardware and vendor lock-in
      `,
      subTasks: [
        `Optimized code to elongate battery life, through efficient state management`,
        `Guaranteed data integrity across multiple devices using the service at the same time`,
        'Modernized the UI to allow seamless registration of the service, reducing support calls',
        'Successfully launched the service in beta, earning positive feedback from clients and end-users',
      ],
    },
    {
      task: `Developed a ticket-sharing feature to meet the requirement of a prospective client`,
      subTasks: [
        'Task was completed within the set deadline, resulting in the successful acquisition of the client and acquiring a significant market share',
      ],
    },
    'Addressed critical email delivery issues by increasing domain name trust, resulting in a 10% improvement of delivery success rate',
    'Improved time-to-first-byte by upwards of 300ms on slow loading pages through SQL query optimization',
  ],
  tech: [
    'Ruby on Rails',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'CouchDB',
    'SQL',
    'RSpec',
    'HTML',
    'SCSS',
    'Svelte',
    'Sveltekit',
    'CouchDB',
    'React.js',
    'Docker',
    'Gitlab CI/CD',
    'Google Cloud Platform',
  ],
} satisfies WorkExperience;

export const interfaceFluidics = {
  title: 'Interface Fluidics',
  role: 'React Developer',
  time: 'Oct. 2021 - Jan. 2022',
  duties: [
    {
      task: `Collaborated with the tech lead to refactor the internal portal, eliminating legacy code and tech debt`,
      subTasks: [
        `Implemented modular web components for a unified UI experience`,
        `Improved performance through proper React State management`,
        `Resulted in increased satisfaction amongst the end-users through extensive UI/UX enhancements`,
      ],
    },
  ],
  tech: [
    'React.js',
    'JavaScript',
    'TypeScript',
    'Material-UI',
    'JSX',
    'CSS',
    'GraphQL',
  ],
} satisfies WorkExperience;

export const buddytree = {
  title: 'Buddytree',
  role: 'Web Developer',
  time: 'Feb. 2021 - Sept. 2021',
  duties: [
    {
      task: `Collaborated with a fellow developer to build an Minimum Viable Product (MVP)`,
      subTasks: [
        'Developed a user-friendly website with the major features to showcase the product',
        `Implemented Microsoft Azure Facial Recognition system for the onboarding process`,
        `Successfully launched the MVP, attracting new customers, and securing additional funding`,
      ],
    },
    `Collaborated closely with the CEO to create new features based on Figma designs`,
  ],
  tech: ['React.js', 'Next.js', 'TypeScript', 'JSX', 'SCSS'],
} satisfies WorkExperience;

export const contract = {
  title: 'Contract Work',
  role: 'Web Developer',
  time: '2020 - present',
  duties: [
    {
      task: 'Developing websites for local businesses',
      subTasks: [
        '<a href="https://www.jyoupsychology.ca">https://www.jyoupsychology.ca</a>',
        '<a href="https://www.bbrosfinishing.ca">https://www.bbrosfinishing.ca</a>',
      ],
    },
  ],
  tech: [
    'React.js',
    'Next.js',
    'Firebase',
    'TypeScript',
    'HTML',
    'Svelte',
    'Sveltekit',
    'SCSS',
  ],
} satisfies WorkExperience;

export const trustScience = {
  title: 'Trust Science',
  role: 'Summer Intern',
  time: 'May 2018 - Aug. 2018',
  duties: [
    `Assisted in refactoring the mobile application to approximately 60% of its original size'`,
    `Improved the sign up process through UI/UX improvements`,
    `Created a text message sign up verification process via AWS Lambda`,
  ],
  tech: ['React Native', 'JavaScript', 'AWS Lambda'],
} satisfies WorkExperience;
