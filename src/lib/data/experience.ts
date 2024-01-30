import type { WorkExperience } from '$lib/types';

export const igniter = {
  title: 'Igniter Tickets',
  role: 'Software Developer',
  time: 'Feb. 2022 - Nov. 2023',
  duties: [
    {
      task: `
      Led a small team to replace a legacy product resulting in a significant
      reduction of the company's operational costs by eliminating vendor lock-in
      and the improvement of UI/UX
      `,
      subTasks: [
        'Conducted a successful field test of the beta product, receiving positive feedback from the client',
        'Coached a Junior Developer on software development best practices',
      ],
    },
    `Completed the creation of a new client requested feature meeting the set deadline, leading to a new client acquisition in a key market`,
    `Enhanced the email delivery system, significantly improving the delivery rate`,
    `Resolved N+1 performance issues through extensive SQL query optimizations, reducing time to first byte on key pages by upwards of 300ms`,
    `Created tailored website themes to match the unique brand aesthetics for new clients`,
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
      task: `Collaborated with the tech lead to refactor the internal React portal`,
      subTasks: [
        `Improved performance by eliminating unnecessary re-rendering on state changes`,
        `Enhanced code readability by consolidating duplicate code into modular web components`,
        `Overhauled Material UI code to align accurately with documentation standards`,
        `Improved the user experience by combining numerous routes into one`,
      ],
    },
    `Spearheaded the creation of a sophisticated internal portal tailored for scientific research of the company's chemists and engineers`,
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
      task: `
      Assisted and then led the creation and design of a social media
      website for a startup, resulting in the successful launch of the
      Minimum Viable Product (MVP)
      `,
      subTasks: [`Coached a university intern on React best practices`],
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
    '<a href="https://www.jyoupsychology.ca">https://www.jyoupsychology.ca</a>',
    '<a href="https://www.bbrosfinishing.ca">https://www.bbrosfinishing.ca</a>',
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
