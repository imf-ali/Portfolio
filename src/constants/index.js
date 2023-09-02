import {
  mobile,
  backend,
  web,
  cimage,
  cppimage,
  java,
  python,
  postgres,
  spring,
  bootstrap,
  k8s,
  jenkins,
  graffana,
  aws,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  rupeek,
  rocketchat,
  manas,
  webchat,
  weather,
  hivetalk,
  graphql,
  prisma
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

export const profileLinks = [
  {
    id: 'twitter',
    url: 'https://twitter.com/imf_ali',
    icon: 'logo-twitter'
  },
  {
    id: 'github',
    url: 'https://github.com/imf-ali',
    icon: 'logo-github'
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/imf-ali',
    icon: 'logo-linkedin'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'React Native Developer',
    icon: mobile
  }
];

const technologies = [
  {
    name: 'C',
    icon: cimage
  },
  {
    name: 'CPP',
    icon: cppimage
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Python',
    icon: python
  },
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'Spring',
    icon: spring
  },
  {
    name: 'GraphQl',
    icon: graphql
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Prisma',
    icon: prisma
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Bootstrap',
    icon: bootstrap
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Postgres',
    icon: postgres
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'docker',
    icon: docker
  },
  {
    name: 'K8s',
    icon: k8s
  },
  {
    name: 'Jenkins',
    icon: jenkins
  },
  {
    name: 'Graffana',
    icon: graffana
  },
  {
    name: 'AWS',
    icon: aws
  },
];

const experiences = [
  {
    title: 'Open Source Developer',
    company_name: 'Rocket.Chat',
    icon: rocketchat,
    iconBg: '#fff',
    date: 'December 2022 - Present',
    points: [
      'Top contributor of Rocket.chat for the session 2022-23.',
      'Contributed to the repo EmbeddedChat of Rocket.chat which is a full-stack React component node module of the RocketChat application that is fully configurable, extensible, and flexible for use.',
      'Worked on UI improvement, message parser, message markdown, media recording',
      'link-https://github.com/search?q=type%3Apr+author%3Aimf-ali+is%3Amerged+repo%3ARocketChat%2FEmbeddedChat&type=pullrequests'
    ]
  },
  {
    title: 'SDE Intern',
    company_name: 'Rupeek Fintech Private Limited',
    icon: rupeek,
    iconBg: '#fff',
    date: 'January 2022 - June 2022',
    points: [
      'Developed REST APIs to digitise the Loans Application Form in order to reduce manual effort and time spend by Loan Manager to fill the form.',
      'Developed the APIs in three different services, two of them using Node.js and one service using Spring Boot.',
      'Development the form UI using HTML and vanilla JavaScript.',
      'Amazon S3 is used to store the PDF of the form and PostgresSQL to store data regarding the Application Forms.',
      'Used Jenkins and Grafana to deploy the branch and analyze the deployed branch.'
    ]
  },
  {
    title: 'SDE I',
    company_name: 'Rupeek Fintech Private Limited',
    icon: rupeek,
    iconBg: '#fff',
    date: 'July 2022 - Present',
    points: [
      'Developed a new microservice to manage the assets and their life cycle from the point of appraisal till they are released back to the customers.',
      'Developed these APIs using Spring Boot, PostgreSQL and AWS.',
      'Developed REST APIs for the process of KYC, bank and nominee addition into the existing system.',
      'Developed these APIs using Spring Boot, Node.js, PostgreSQL and AWS.'
    ]
  },
];

const testimonials = [
  {
    testimonial:
      'test',
    name: 'test',
    designation: 'test',
    company: 'test',
    image: 'imgurl'
  },
];

const projects = [
  {
    name: 'Manas Education Center',
    description:
      'A website created for coaching of IIT JEE preparation. The website is made interactive with separate logins for admin and student. Admin gets to general notice and student specific notice. Users can also add their blogs.',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'docker',
        color: 'blue-text-gradient'
      },
      {
        name: 'aws',
        color: 'orange-text-gradient'
      }
    ],
    image: manas,
    source_code_link: 'https://github.com/imf-ali/Manas-Frontend'
  },
  {
    name: 'Weather App',
    description:
      'This is a personal project that I made which gives current weather forecast based on the query of a place. It uses Mapbox API to give the coordinates corresponding to the place. Then it uses the WeatherStack API to give the forecast of the place based on the coordinates.',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'css',
        color: 'blue-text-gradient'
      }
    ],
    image: weather,
    source_code_link: 'https://github.com/imf-ali/Node-weather-app'
  },
  {
    name: 'HiveTalk',
    description:
      'A full stack app like Reddit was created where users can create posts, upvote, downvote posts, edit, delete posts and authenticate users.',
    tags: [
      {
        name: 'GraphQL',
        color: 'green-text-gradient'
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient'
      },
      {
        name: 'ApolloServer',
        color: 'blue-text-gradient'
      },
      {
        name: 'PostgresQL',
        color: 'blue-text-gradient'
      },
      {
        name: 'Next.js',
        color: 'blue-text-gradient'
      }
    ],
    image: hivetalk,
    source_code_link: 'https://github.com/imf-ali/HiveTalk-backend'
  },
  {
    name: 'Web Chat',
    description:
      'A simple application where users can live chat. Users can create room and join it. People can also send their location.',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'html',
        color: 'pink-text-gradient'
      },
      {
        name: 'css',
        color: 'blue-text-gradient'
      }
    ],
    image: webchat,
    source_code_link: 'https://github.com/imf-ali/Web-Chat-App'
  }
];

export { services, technologies, experiences, testimonials, projects };
