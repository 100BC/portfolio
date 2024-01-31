import type { WorkExperience } from '$lib/types';

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
        `Optimized code to elongate battery life through efficient state management`,
        `Guaranteed data integrity across multiple devices using the service at the same time`,
        'Modernized the UI to allow seamless registration of the service, reducing user frustration',
        'Coached a Junior Developer on Software Development best practices',
        'Successfully launched the service in beta, earning positive feedback from clients and end-users',
      ],
    },
    {
      task: `Developed a ticket-sharing feature to meet the requirement of a prospective client`,
      subTasks: [
        'Completed the task half a sprint before the set deadline, resulting in the successful acquisition of a major new client',
        'In the first quarter after the release the feature was used thousands of times across all clients indicating continued growth',
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
  tech: ['React.js', 'Next.js', 'TypeScript', 'JSX', 'SCSS'],
} satisfies WorkExperience;

export const contract = {
  title: 'Contract Work',
  role: 'Web Developer',
  time: '2020 - present',
  location: 'Remote',
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
  location: 'Edmonton AB',
  duties: [
    `Assisted in refactoring the mobile application to approximately 60% of its original size`,
    `Improved the sign up process through UI/UX improvements`,
    `Created a text message sign up verification process via AWS Lambda`,
  ],
  tech: ['React Native', 'JavaScript', 'AWS Lambda'],
} satisfies WorkExperience;
