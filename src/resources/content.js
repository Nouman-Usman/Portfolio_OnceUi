import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Nouman",
  lastName: "Usman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "noumanmughal0123@gmail.com",
  location: "Asia/Pakistan", 
  languages: ["English", "Urdu"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s AI Engineering Newsletter</>,
  description: (
    <>
      I occasionally write about AI engineering, technology trends, and share insights on building intelligent systems and scalable AI solutions.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Nouman-Usman",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nouman-usman/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an AI Engineer`,
  headline: <>AI Engineer</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">AI LMS</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Nouman, an AI Engineer specializing in building intelligent workflows and scalable AI solutions.
      <br />
      <strong className="text-primary">Enhancing user interfaces</strong> and driving innovation through
      <strong className="text-primary"> artificial intelligence</strong>.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nouman is a Pakistan-based AI Engineer passionate about building intelligent systems and scalable AI solutions. His work focuses on applying machine learning, deep learning, and automation to solve real-world problems and drive innovation in technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior AI Engineer",
        achievements: [
          <>
            Developed and deployed machine learning models that improved product recommendations, increasing user engagement by 25%.
          </>,
          <>
            Led the integration of AI-driven analytics, enabling data-driven decision-making across teams.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "AI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "AI Engineer",
        achievements: [
          <>
            Built and maintained NLP pipelines for automated customer support, reducing response times by 40%.
          </>,
          <>
            Collaborated with cross-functional teams to launch AI-powered features, contributing to a 20% increase in customer satisfaction.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Engineering and Technology",
        description: <>Studied Computer Science with a focus on artificial intelligence and data science.</>,
      },
      {
        name: "Build the Future",
        description: <>Completed courses in machine learning, deep learning, and AI product development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python & ML Frameworks",
        description: <>Expert in Python, TensorFlow, PyTorch, and scikit-learn for building and deploying AI models.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "AI Model",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Engineering",
        description: <>Experience with data pipelines, ETL processes, and cloud platforms (AWS, GCP) for scalable AI solutions.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Data Engineering",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "JavaScript & Next.js",
        description: <>Building intelligent web apps with Next.js, Node.js, and integrating AI APIs.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Web App",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
