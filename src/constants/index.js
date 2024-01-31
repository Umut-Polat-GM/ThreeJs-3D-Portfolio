import {
    mobile,
    backend,
    creator,
    mui,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    // git,
    figma,
    docker,
    threejs,
    logo,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "MERN Stack Developer",
        icon: web,
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
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    // {
    //     name: "git",
    //     icon: git,
    // },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "mui",
        icon: mui,
    },
];

const experiences = [
    {
        title: "MERN Stack Developer",
        company_name: "Liberta Yazılım",
        icon: logo,
        iconBg: "#383E56",
        date: "May 2022 - Present",
        points: [
            "I am a seasoned MERN Developer with expertise in Webinar Development, API integration, web design.",
            "Proficiency in Chakra UI, Material UI, TypeScript, Redux, and React.js.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Sistem Yazılım",
        icon: logo,
        iconBg: "#E6DEDD",
        date: "May 2022 - Jan 2023",
        points: [
            "Opportunity to contribute to the development of their ERP system.",
            "Designing and implementing the responsive frontend interface of the application.",
            "Applying Clean code principles, ensuring that the frontend codebase was maintainable, scalable, and easy to understand.",
            "Identifying and resolving bugs, ensuring the smooth functioning of the application.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelancer",
        icon: logo,
        iconBg: "#383E56",
        date: "March 2021 - April 2022",
        points: [
            "Developing and maintaining websites using HTML, CSS, and JavaScript.",
            "Designing and implementing the frontend interface of the website.",
            "Ensuring that the website is responsive and cross-browser compatible.",
            "Optimizing website performance and improving the user experience.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "As a developer, integrating this tool into my workflow has been a game-changer, boosting productivity and streamlining my coding process.",
        name: "Zeliha Çelik",
        designation: "Data Scientist",
        company: "Business Intelligence Consultant",
        image: "https://media.licdn.com/dms/image/D4D03AQGvsqKCe8P-kw/profile-displayphoto-shrink_800_800/0/1683561919356?e=1712188800&v=beta&t=nTGY0YtnGX5U0ttfeQ1J85hguwDr6QNkKjUwEsp7Px4",
    },
    {
        testimonial:
            "The support from the development team is outstanding, ensuring a smooth experience and making it a go-to solution for any coding project.",
        name: "Muhammet Said Tunç",
        designation: "Penetration Tester",
        company: "ALLSAFE Siber Güvenlik",
        image: "https://media.licdn.com/dms/image/C4D03AQE3tYqNlGhC3g/profile-displayphoto-shrink_800_800/0/1607885063137?e=1712188800&v=beta&t=ByVFGmLVlyf9NHY5Bygi1fV_mEDVus5FVz3Ba9H-inc",
    },
    {
        testimonial:
            "Being a developer, I can confidently say that this product has elevated my coding experience, providing the functionalities I need with an elegant and efficient design.",
        name: "ismet yıldız",
        designation: "Software Developer",
        company: "Liberta Yazılım",
        image: "https://media.licdn.com/dms/image/D4D03AQFr55XbNHUoQw/profile-displayphoto-shrink_800_800/0/1692527864805?e=1712188800&v=beta&t=5Gwgxu-K_drQbmDPAO5Yhaa6s-tCCPtirDXeBgdMtTY",
    },
];

const projects = [
    {
        name: "Book Store",
        description:
            "MERN Stack application that allows users to search for books, add them to their cart, and place orders",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg",
        source_code_link: "https://github.com/Umut-Polat-GM/MERN-Stack-Book-Store",
    },
    {
        name: "TC Webinar Platform",
        description:
            "Webinar platform that allows users to create and attend webinars, and chat with other attendees.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: "https://kriterdergi.com/images/news/2021/07/03/nebimis1.jpg",
        source_code_link: "https://github.com/",
    },
    {
        name: "TC Management System",
        description:
            "A governorship management system that allows users to manage their meetings, view analytics and work follow.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
        ],
        image: "https://www.hatayekspres.com/images/haberler/2c6d2edb0d52e5ed6cd0626455ad69d0-1.jpg",
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
