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
    description: `Those apps which needed more than just a front-end to be considered "completed", as well as, those APIs which functionality is better seen through an interface, both are showcased within this category`,
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
    description: `Since building user interfaces is already a complex and time consuming task to do, I leveraged on JSON files to serve as data "retrieved from an API", only when necessary that is! `,
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
    description: `Whenever the projects are big enough to be showcased by themselves, investing time on an User Interface is relegated to second place. Also, as a Electronics Engineer it's nice to see the hardware do as requested.`,
    image: "/assets/backend.png",
    id: 2,
    tools: ["Javascript", "NodeJs", "Express", "MongoDB", "OAuth 2.0"],
    route: "/projects/backend",
  },
];

export const fullstackProjects = [
  {
    title: "eCommerce",
    description: `The perfect tool to showcase/sell your products. A website with its own payment gateway and API that keeps record of every sale and customer, while authenticating its users using OAuth 2.0 standards.`,
    image: "/assets/ecommerce.png",
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
      "RESTful API",
    ],
    learning: `Excellent project for improving UI skills, while learning OAuth 2.0 and third party's APIs usage. React Context is used as state manager. Although I kept it simple taking advantage of Google Authentication/Maps APIs and Paypal for payments, the API also supports its own JWT system. A noSQL DB is implemented even though it is not the best solution, but helped for getting more familiar with the MERN Stack.`,
    src: "https://github.com/rjmata95/eCommerce",
    gif: "/assets/ecommerce.gif",
  },
  {
    title: "Live Form",
    description: `A Simple but useful app to keep track of people's information. One of the first projects I've ever made using the MERN stack. Stores the entered data within a noSQL DataBase making use of its own RESTful API`,
    image: "/assets/liveform.png",
    id: 1,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "Material-UI",
      "RESTful API",
    ],
    learning: `This was the first small project I have ever made using the MERN stack. Building a RESTful API for it to make use of was an enriching experience thanks to all the research I had to do in matter of standards. This serves as an upgrade to the similar app I did to learn DOM Manipulation with vanillaJS.`,
    src: "https://github.com/rjmata95/Live-Form",
    gif: "/assets/liveform.gif",
  },
];

export const frontendProjects = [
  {
    title: "Portfolio webpage",
    description: `The same webpage you are at right now. Serves as a tool to showcase my person as a Developer, which implies I just could not take some random template, fill and deploy it. Designed and developed by myself.`,
    image: "/assets/brownbg.jpg",
    id: 0,
    tools: [
      "Javascript",
      "CSS",
      "React",
      "NodeJs",
      "Material-UI",
      "Babel",
      "Webpack",
      "CI/CD",
    ],
    learning: `Since a portfolio website advertises your work and persona, UI and UX played an important role while developing this project. Taking care of the responsiveness and adding some animations were mandatory. On the same line, deployment is a must do for those who call themselves profesionals`,
    src: "https://github.com/rjmata95/portfolio",
    gif: "/assets/portfolio.gif",
  },
];

export const backendProjects = [
  {
    title: "Obstacle detection algorithm",
    description: `Making use of datasets captured through a 4 Layer LiDAR, an obstacle detection and clasification algorithm was designed, developed and validated. Such objective was set while working as an intern for the research lab CAR, in Spain. Its design is intended for its use in autonomous vehicles.`,
    image: "/assets/obstacleDetectionAlgorithm.png",
    id: 0,
    tools: ["MATLAB", "Statistics", "LiDAR", "ROS", "C++"],
    learning: `Learned to work with the available resources which represented a challenge due to its hardware limitations. Used MATLAB to implement and validate the algorithm, so it could be translated into C++ for its later use in a ROS based platform.`,
    src: "https://drive.google.com/file/d/14I51WM63pVmwIEVPitR45OZ4b13J4bHb/view?usp=sharing",
    gif: "/assets/portfolio.gif",
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
// export const gif = "/assets/test1.gif";
// export const reduced = "/assets/reduced.gif";

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
