const links = [
    {
        id: 1,
        link: "/about",
        name: "About"
    },
    {
        id: 2,
        link: "/experience",
        name: "Experience"
    },
    {
        id: 3,
        link: "/projects",
        name: "Projects"
    },
    {
        id: 4,
        link: "/contact",
        name: "Contact"
    }
];

const experience = [
    {
        id: 1,
        title: "Software Engineering at PUC Minas",
        date: "Jan 2023 - Dec 2026",
        description: "In this experience, I am learning to become a professional capable of dealing with code, collecting requirements from clients, managing projects and making secure and scalable software."
    },
    {
        id: 2,
        title: "Techlead in WebTech",
        date: "Jul 2023 - Jan 2024",
        description: "A PUC Minas extension project that aims to create a workspace for students and teachers to jointly create applications, tools and content for those interested in creating digital solutions and products. On that occasion, I was active in front-end development and took on the leadership of the team as techlead, developing projects in react.js."
    },
    {
        id: 3,
        title: "Monitor in Developing Web Interfaces",
        date: "Aug 2023 - Dec 2023",
        description: "I started my first internship in the area , and I was honored to be assigned as a Monitor for the Web Interface Development course. My work focused on the essential tools and languages, including HTML, CSS, JavaScript, Bootstrap and jQuery. Also, while acting as a monitor, I had the opportunity to teach a workshop for students on PUC's Information Technology courses. The workshop covered topics related to Git, Github and Gitflow."
    },
    {
        id: 4,
        title: "Hackathon of AlfaEngenharia",
        date: "Aug 2023",
        description: "I participated in the AlfaEngenharia Hackathon, a 12-hour event that aimed to develop a solution for the company's challenges. I was part of a team of 3 people, where we developed a web application that aimed to automate the company's internal processes. The application was developed in avaScript, HTML, CSS, Bootstrap and Node.js."
    }
]


const projects = [
    {
        id: 1,
        title: "Netflix interface with React.js and Tailwind",
        description: "This Netflix interface project deepened my knowledge of Tailwind CSS, React, and TypeScript, using Mobile First for a fully responsive experience. I integrated The Movie DB's free API for real movie and series data.",
        github: "https://github.com/bragap/netflix-react-tailwind",
        deploy: "https://netflix-react-tailwind-seven.vercel.app/",
        img_url: "/images/projects/netflix.png"
    },
    {
        id: 2,
        title: "E-commerce for the company De Pinho Multimídia",
        description: "This project was developed for a client who needed a website for his company. The site was developed using Javascript, Java and PostresSQL.",
        github: "https://github.com/bragap/de-pinho-multimidias",
        deploy: "https://plf-es-2024-1-ti3-8966100-de-pinho-multimidias.vercel.app/",
        img_url: "/images/projects/depinho.png"
    },
    {
        id: 3,
        title: "Digital Technologies Postgraduate PUC Minas Website",
        description: "This project was developed for the Digital Technologies Postgraduate course at PUC Minas. The site was developed using React.js and Node.js",
        github: "",
        deploy: "https://icei.pucminas.br/latosensu/",
        img_url: "/images/projects/puc.png"
    },
    {
        id: 4,
        title: "Foodie - Landing Page with React.js and Material Design",
        description: "This project was developed to practice my skills with React.js and Material Design. The project is a landing page for a fictional restaurant.",
        github: "https://github.com/bragap/landingpage-react-materialui",
        deploy: "https://landingpage-react-materialui.vercel.app/",
        img_url: "/images/projects/foodie.png"
    },
    {
        id: 5,
        title: "HealthAssist",
        description: "This project was developed for the discipline of Software Engineering at PUC Minas. The project is a web application that aims to assist in the management of health clinics.",
        github: "https://github.com/bragap/healthassist-faculdade-2p",
        deploy: "",
        img_url: "/images/projects/healthassist.png"
    },
    {
        id: 6,
        title: "Rocketseat - NLW Journey",
        description: "This project was developed during the NLW Journey event, promoted by Rocketseat. The project is a web application with React.js, Typescript and Tailwind.css",
        github: "https://github.com/bragap/rocketseat-nlw-journey",
        deploy: "",
        img_url: "/images/projects/nlw.png"
    }


];


export { links, experience, projects };