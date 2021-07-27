import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMaterialUi,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiJava,
  SiC,
  SiMysql,
} from "react-icons/si";
import { School, Work } from "@material-ui/icons";

export const experiences = [
  {
    title: "FullStack",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/frontend-backend.png",
    id: 0,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "Jquery",
    ],
    route: "/projects/fullstack",
  },
  {
    title: "FrontEnd Focused",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/frontend.png",
    id: 1,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Jquery",
      "Bootstrap",
      "Material-UI",
    ],
    route: "/projects/frontend",
  },
  {
    title: "BackEnd Focused",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/backend.png",
    id: 2,
    tools: ["Javascript", "NodeJs", "Express", "MongoDB", "OAuth 2.0"],
    route: "/projects/backend",
  },
];

export const fullstackProjects = [
  {
    title: "eCommerce",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/brownbg.jpg",
    id: 0,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "OAuth",
      "GoogleMaps API",
      "Paypal API",
      "Material-UI",
    ],
    learning: `obcaecati ducimus? Saepe molestias repellendus iure labore ex
    dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam`,
    src: "https://github.com/rjmata95/form-live-reload",
    gif: "/assets/record2.gif",
  },
  {
    title: "Live Form",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/whitebg.jpg",
    id: 0,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "Material-UI",
    ],
    learning: `obcaecati ducimus? Saepe molestias repellendus iure labore ex
    dolor i fugit provident ut reiciendis incidunt. Fugit`,
    src: "https://www.w3schools.com/jsref/met_win_open.asp",
    gif: "/assets/test1.gif",
  },
];

export const frontendProjects = [
  {
    title: "Portfolio webpage",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/brownbg.jpg",
    id: 0,
    tools: ["Javascript", "CSS", "React", "NodeJs", "Material-UI"],
    learning: `obcaecati ducimus? Saepe molestias repellendus iure labore ex
    dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam`,
    src: "https://github.com/rjmata95/form-live-reload",
  },
];

export const backendProjects = [
  {
    title: "eCommerce",
    description: `molestias est, illo ea vero qui sint consectetur neque nesciunt error
        tempore obcaecati ducimus? Saepe molestias repellendus iure labore ex
        dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam ex cum`,
    image: "/assets/brownbg.jpg",
    id: 0,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "OAuth",
      "GoogleMaps API",
      "Paypal API",
      "Material-UI",
    ],
    learning: `obcaecati ducimus? Saepe molestias repellendus iure labore ex
    dolor i fugit provident ut reiciendis incidunt. Fugit asperiores magnam`,
    src: "https://github.com/rjmata95/form-live-reload",
  },
];

export const career = [
  {
    title: "Electronics Engineering",
    organization: "Simon Bolivar University. Venezuela",
    icon: <School />,
    date: "09.2012-07.2021",
    description:
      "Focused in projects management and software/hardware development",
    tools: [
      "C",
      "Java",
      "Matlab",
      "Simulink",
      "Arduino",
      "Assembly",
      "Verilog",
      "Git",
      "Calculus",
      "Linear Algebra",
      "Probabilistics",
      "Quantum Computing",
    ],
  },
  {
    title: "Internship in Quantum Communications",
    organization: "Siner Factory CA. Venezuela",
    icon: <School />,
    date: "06.2017-(6 weeks)",
    description: `Development of a Quantum Communication protocol simulation based on a state of art cryptographic communication protocol`,
    tools: ["Java", "Quantum Computing", "Client-Server Model"],
  },
  {
    title: "Internship in Autonomous Vehicles",
    organization: "CSIC, CAR. Spain",
    icon: <Work />,
    date: "09.2018-12.2018",
    description: `Design and development of an obstacle detection/tracking algorithm`,
    tools: ["Matlab", "Multilayer LIDAR", "Probabilistics"],
  },
  // {
  //   title: "Freelance Fullstack Developer",
  //   organization: "Gran Sabana Landscaping & Maintenance, Inc. United States",
  //   icon: <Work />,
  //   date: "08.2019-12.2019",
  //   description: `Development of software solutions for business webpage and management`,
  //   tools: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "React",
  //     "NodeJs",
  //     "MySQL",
  //     "REST API",
  //   ],
  // },
  {
    title: "Fullstack Developer",
    organization: "Acrabit. Chile",
    icon: <Work />,
    date: "11.2020-present",
    description: `Development of software solutions for businesses`,
    tools: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "NodeJs",
      "MySQL",
      "MongoDB",
      "REST API",
    ],
  },
];

export const avatar = "/assets/avatar.png";
export const bgvideo = "/assets/greenvideo.mp4";
export const bggif = "https://gph.is/g/EqW319n";
export const bg = "/assets/brownbg.jpg";
export const avatarWink = "/assets/avatarwink-nobg.png";
export const cvpdf = "/assets/ubuntu_commands.pdf";
export const gif = "/assets/test1.gif";

export const skills = [
  {
    label: "Javascript",
    icon: <SiJavascript />,
  },
  {
    label: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    label: "CSS3",
    icon: <SiCss3 />,
  },
  {
    label: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    label: "Material-UI",
    icon: <SiMaterialUi />,
  },
  {
    label: "ReactJS",
    icon: <SiReact />,
  },
  {
    label: "NodeJS",
    icon: <SiNodeDotJs />,
  },
  {
    label: "MySQL",
    icon: <SiMysql />,
  },
  {
    label: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    label: "Java",
    icon: <SiJava />,
  },
  {
    label: "C",
    icon: <SiC />,
  },
];
