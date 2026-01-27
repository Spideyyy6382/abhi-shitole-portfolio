import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Abhijeet Shitole portfolio',
  description: "Example site built with Abhijeet Shitole's portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Abhijeet Shitole.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">RajYug Solutions</strong> helping build a modern website building.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">FootBall</strong>,
        Clicking <strong className="text-stone-100">Pictures</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Nature</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate full-stack developer who enjoys building reliable, user-focused web applications. I primarily work with modern JavaScript technologies and am comfortable across both frontend and backend development. I value clean code, clear architecture, and continuous learning, and I enjoy turning ideas into practical, scalable solutions.`,

  aboutItems: [
    {label: 'Location', text: 'Pune, India', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Games, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Pune', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'RajYug Solutions', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 3,
      },
      {
        name: 'Marathi',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'tailwindcss',
        level: 7,
      },
      {
        name: 'HTML5',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'JAVA',
        level: 4,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Uploading in process ',
    url: '#',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2024',
    location: "SVPM's College of Commerce, Science and Computer Education, ",
    title: 'Bachelor of Computer Application',
    content: <p>Enjoyed My time at university</p>,
  },
  {
    date: 'March 2026',
    location: 'Sinhgad Institute of Management, Pune',
    title: 'Master of Computer Application',
    content: <p>Enjoyed My time at university</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 - 2024',
    location: 'Personal Projects & Practice',
    title: 'Junior Developer',
    content: (
      <p>
        Focused on learning core web development concepts by fixing bugs, improving existing codebases, and implementing
        small features. Gained hands-on experience with JavaScript, basic frontend frameworks, debugging techniques, and
        version control using Git. Developed a strong foundation in problem-solving and writing maintainable code.
      </p>
    ),
  },
  {
    date: '2024 - Present',
    location: 'RajYug Solutions',
    title: 'Full Stack Developer',
    content: (
      <p>
        Designed and developed a full-stack web application from scratch, handling both frontend and backend
        responsibilities. Implemented REST APIs, authentication, database integration, and deployment workflows. Focused
        on scalability, usability, and maintainable code while continuously improving features based on project
        requirements.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Abhijeet Shitole',
      text: 'I Am highly dependable and detail-oriented. While working together, I consistently delivered clean, well-structured code and took full ownership of my tasks. My ability to understand requirements quickly and turn them into working solutions really stood out.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'abhijeet0822@gmail.com',
      href: 'abhijeet0822@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pune, India',
      href: 'https://maps.app.goo.gl/6BoGZptUTakWj5iTA',
    },
    {
      type: ContactType.Instagram,
      text: '@im.abhi_shitole',
      href: 'https://www.instagram.com/im.abhi_shitole/',
    },
    {
      type: ContactType.Github,
      text: 'AbhijeetShitole',
      href: 'https://github.com/Spideyyy6382',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Spideyyy6382'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/abhijeet-shitole-641a6631b/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/im.abhi_shitole/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
