export const heroContent = {
  name: 'Bhavya Kandhari',
  role: 'Software Engineer',
  availability: 'Open to Work',
  summary:
    'I build reliable, scalable, and performant systems that power seamless digital experiences.',
  links: {
    github: 'https://github.com/bkandh30',
    linkedIn: 'https://www.linkedin.com/in/kandharibhavya/',
    email: 'mailto:bhavya.kandhari.eng@gmail.com',
    resume: '/resume.pdf',
  },
} as const;

export const aboutSectionContent = {
  heading: 'About',
  intro: 'A quick snapshot of who I am and the types of systems I enjoy building.',
  paragraphs: [
    "I'm a software engineer with a focus on building reliable backend systems and developer tools that make complex infrastructure feel effortless. My work blends backend engineering, cloud systems, and AI-driven workflows—all aimed at improving developer experience and scalability.",
    "In May 2025, I graduated from Arizona State University with a Master's in Computer Science, where I explored distributed systems, cloud computing, and data processing at scale.",
    "Outside of academics, I'm currently at Liberty Mutual Insurance as a contractor supporting claims and policy workflows. I've also worked at Ernst & Young GDS India, where I helped develop an internal document management system to reduce operational overhead for multiple teams. During my graduate studies, I was fortunate to work with Professor Yinong Chen as a TA during the 7up and 9up Robotics Camps, teaching school students Robotics and IoT. I later worked under him as a Graduate Student Assitant for his CSE445 and CSE446 courses.",
    "Lately, I've been experimenting with Rust, Go, and TypeScript- pushing my craft toward building faster, more resilient systems.",
  ],
};

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  description: string;
  scope: string[];
}

export const experienceSectionContent: {
  heading: string;
  intro: string;
  items: ExperienceItem[];
} = {
  heading: 'Experience',
  intro: 'Roles where I shipped backend infrastructure, automation, and developer tooling.',
  items: [
    {
      id: 'liberty-engineer',
      company: 'Liberty Mutual Insurance',
      role: 'Software Engineer',
      dateRange: '2025 - Present',
      description:
        'Supporting claims and policy workflows by maintaining and optimizing reliable backend infrastructure.',
      scope: ['Backend Systems', 'Workflow Automation', 'Reliability'],
    },
    {
      id: 'asu-gsa',
      company: 'Ira A Fulton School of Engineering',
      role: 'Graduate Student Assitant',
      dateRange: '2024 - 2025',
      description:
        'Taught Robotics and IoT at youth camps and graded coursework for distributed systems and software engineering classes (CSE445 & CSE446).',
      scope: ['Distributed Systems', 'Cloud Computing', 'Robotics & IoT'],
    },
    {
      id: 'ey-engineer',
      company: 'Ernst & Young (EY)',
      role: 'Associate Software Engineer',
      dateRange: '2021 - 2023',
      description:
        'Developed an internal document management system that significantly reduced operational overhead for multiple enterprise teams.',
      scope: ['Interal Tools', 'Operational Efficiency', 'Backend Engineering'],
    },
  ],
};

type SkillGroupIcon = 'code' | 'cloud' | 'layers' | 'database' | 'terminal';

interface SkillGroup {
  title: string;
  icon: SkillGroupIcon;
  skills: string[];
  span: string;
}

export const skillsSectionContent: {
  heading: string;
  intro: string;
  groups: SkillGroup[];
} = {
  heading: 'Skills',
  intro: 'The languages, frameworks, and platforms I use to deliver production systems.',
  groups: [
    {
      title: 'Languages',
      icon: 'code',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Golang', 'Rust', 'Python', 'SQL'],
      span: 'md:col-span-2',
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'layers',
      skills: [
        'HTML',
        'CSS',
        'Spring Boot',
        'Hibernate',
        'React.js',
        'Redux',
        'Next.js',
        'TailwindCSS',
        'Node.js',
        'Express.js',
        'FastAPI',
        'Warp',
      ],
      span: 'md:col-span-1',
    },
    {
      title: 'Cloud & DevOps',
      icon: 'cloud',
      skills: [
        'AWS',
        'Docker',
        'Git/GitHub',
        'Linux',
        'GitHub Actions',
        'Jenkins',
        'CI/CD',
        'Terraform',
      ],
      span: 'md:col-span-1',
    },
    {
      title: 'Databases & Tools',
      icon: 'database',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'ORM'],
      span: 'md:col-span-1',
    },
    {
      title: 'Testing & SDLC',
      icon: 'terminal',
      skills: [
        'JUnit',
        'Mockito',
        'Selenium',
        'Vitest',
        'Unit Testing',
        'Integration Testing',
        'Jira',
        'Scrum',
        'Agile',
      ],
      span: 'md:col-span-1',
    },
  ],
};

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
}

export const educationSectionContent: {
  heading: string;
  intro: string;
  items: EducationItem[];
} = {
  heading: 'Education',
  intro: 'Academic background and coursework that shaped my software engineering focus.',
  items: [
    {
      id: 'asu-masters',
      degree: 'Masters of Computer Science',
      institution: 'Arizona State University',
      location: 'Tempe, Arizona',
      dateRange: '2023 - 2025',
    },
    {
      id: 'amity-bachelors',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Amity University',
      location: 'Noida, India',
      dateRange: '2017 - 2021',
    },
  ],
};

export const footerContent = {
  technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
  fonts: ['Instrument Seriff', 'IBM Plex Sans', 'JetBrains Mono'],
} as const;
