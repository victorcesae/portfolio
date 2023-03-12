import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  amaranzero,
  carrent,
  selfdriving,
  tripguide,
  laravel,
  materialui,
  php,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Laravel Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "Vtex Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Next.JS",
    icon: nextjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: materialui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Amara NZero Brasil",
    icon: amaranzero,
    iconBg: "#fff",
    date: "Março 2021 - Atual",
    points: [
      "Desenvolvimento e manutenção de aplicações web utilizando React.js e outras tecnologias relacionadas.",
      "Desenvolvimento de API's para comunicação WMS - ERP.",
      "Implementando Intranet.",
      "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores.",
    ],
  },
];

const projects = [
  {
    name: "Template NextJs",
    description:
      "Template facilitador para iniciar projetos nextjs, typescript, next-auth, tailwindcss, react-query, react-toastify, nextjs-progressbar e etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/victorcesae/template-nextjs",
  },
  {
    name: "Self Driving Car",
    description:
      "Estudo das redes neurais, criando um carro capaz de desviar dos obstáculos baseado no aprendizado.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javacript",
        color: "green-text-gradient",
      },
    ],
    image: selfdriving,
    source_code_link: "https://github.com/victorcesae/self-driving-car",
  },
  {
    name: "Projeto Final Hiring Coders",
    description:
      "Projeto desenvolvido para a última etapa do Hiring Coders com objetivo de criar uma loja VTEX com funcionalidades administrativas para facilitar na sugestões de itens combinados.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "awsservices",
        color: "black-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/victorcesae/HCFinalProjectDreamscape",
  },
];

export { services, technologies, experiences, projects };
