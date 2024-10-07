import type { WorkExperience } from '$lib/types';

export const stealthStartup = {
  title: 'Contracting',
  role: 'Full-Stack Developer',
  time: 'Apr. 2024 - Present',
  location: 'Remote',
  duties: [
    'Lead the development of a Minimum Viable Product (MVP) for a Fin-Tech Startup',
    'Developed a dashboard that streamlines requisition form submissions for a Fluid Systems Company',
    'Built an internationalization (i18n) capable intake form for a non-profit organization',
    'Creating homepages for local businesses',
  ],
  tech: [
    'Vue.js',
    'JavaScript',
    'Supabase',
    'PostgreSQL',
    'Sveltekit',
    'Docker',
    'Firebase',
  ],
} satisfies WorkExperience;

export const igniter = {
  title: 'Igniter Tickets',
  role: 'Software Developer',
  time: 'Feb. 2022 - Nov. 2023',
  location: 'Remote',
  duties: [
    {
      task: `
      Led a small team to engineer a device-agnostic scanner for mobile to replace a legacy product
      `,
      subTasks: [
        `Ensured efficient state management and data integrity across multiple concurrent devices`,
        'Coached a Junior Developer on Software Development best practices',
        'Successfully beta launched the product, earning positive feedback from clients and end-users',
      ],
    },
    {
      task: `Developed a ticket-sharing feature to meet the requirement of a prospective client`,
      subTasks: [
        'Completed the task ahead of schedule, securing the successful acquisition of the major client',
        'The feature achieved immediate widespread use, with thousands of instances across all clients',
      ],
    },
    'Addressed critical email delivery issues by increasing domain name trust, improving delivery success rate by 10%',
    'Reduced time-to-first-byte by upwards of 300ms on slow loading pages through SQL query optimization',
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
  location: 'Edmonton AB (Hybrid)',
  time: 'Oct. 2021 - Jan. 2022',
  duties: [
    {
      task: `Collaborated with the tech lead to refactor the internal portal, eliminating legacy code and tech debt`,
      subTasks: [
        `Implemented modular web components for a unified UI experience`,
        `Improved performance through proper React State management`,
        `Increased the satisfaction amongst the end-users through extensive UI/UX enhancements`,
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
  location: 'Remote',
  time: 'Feb. 2021 - Sept. 2021',
  duties: [
    {
      task: `Built a Minimum Viable Product (MVP) in a team of two from the ground up`,
      subTasks: [
        `Implemented Microsoft Azure Facial Recognition system for the on-boarding process`,
        `Successfully launched the MVP, attracting new customers, and securing additional funding`,
      ],
    },
    `Collaborated closely with the CEO to create new features based on Figma designs`,
  ],
  tech: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'JSX', 'SCSS'],
} satisfies WorkExperience;

export const trustScience = {
  title: 'Trust Science',
  role: 'Summer Intern',
  time: 'May 2018 - Aug. 2018',
  location: 'Edmonton AB',
  duties: [
    `Assisted in refactoring the mobile application to approximately 60% of its original size`,
    `Improved the sign up process through UI/UX improvements`,
    `Created a text message sign up verification process via AWS Lambda`,
  ],
  tech: ['React Native', 'JavaScript', 'AWS Lambda'],
} satisfies WorkExperience;
