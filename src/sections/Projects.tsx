import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/CAFENA.png",
      projectName: "Cafe 2628",
      projectLink: "/",
      projectDescription:
        "Behind every great coffee shop is a unique blend of artistry and business savvy. From perfecting the art of latte foam to mastering inventory management, running a successful coffee shop takes dedication, creativity, and a passion for coffee.",
      projectTech: [
        "HTML",
        "Javascript",
        "SCSS",
        "MySql",
        "PHP",
        "GSAP",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/KLD.png",
      projectName: "KLD Management System",
      projectLink: "https://kld-website.vercel.app/",
      projectDescription:
        "KLD Management System is an online platform designed to provide information and resources for students, parents, teachers, and the community associated with a specific educational institution. It serves as a digital hub that acts as a central point for communication, collaboration, and access to various school-related services.",
      projectTech: [
        "HTML",
        "Laravel",
        "Bootstrap",
        "MySql",
        "Javascript",
        "Other Frameworks",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/chong.png",
      projectName: "Chong's Inasal Website",
      projectLink: "https://chongschickeninasal.000webhostapp.com/",
      projectDescription:
        "Chong's inasal food-ordering system is a digital platform that enables customers to browse menus, select food items, customize their orders, and place them for delivery or pickup from restaurants or food establishments. It provides a convenient and efficient way for customers to satisfy their culinary cravings without the need for physical menus or phone calls.",
      projectTech: [
        "HTML",
        "Bootstrap",
        "PHP",
        "MySql",
        "Javascript",
        "Jquery",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/SCHOOL-CLOTHING.png",
      projectName: "School Drop-out Clothing",
      projectLink: "/",
      projectDescription:
        "School Drop-out Clothing E-commerce Website is an online platform dedicated to showcasing and selling a wide variety of apparel and fashion items. It serves as a virtual storefront where customers can explore and purchase clothing and other fashion-related products conveniently from their own homes.",
      projectTech: [
        "HTML",
        "SCSS",
        "PHP",
        "MySql",
        "Javascript",
        "Slick.js",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/BRGY.png",
      projectName: "Barangay Information System",
      projectLink: "https://brgyzone1a.000webhostapp.com/",
      projectDescription:
        "Barangay Zone 1-A Information System is a digital platform that aims to streamline and manage information related to the administration, governance, and services provided by a specific barangay, which is the smallest administrative division in the Philippines.",
      projectTech: [
        "HTML",
        "Bootstrap",
        "PHP",
        "MySql",
        "Javascript",
        "Datatable",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/amira.png",
      projectName: "Amira's Food-ordering System",
      projectLink: "https://amirasbucotarthaus.000webhostapp.com/",
      projectDescription:
        "Amira's Food-ordering System is a robust and user-friendly digital platform designed to provide a seamless and convenient food ordering experience for customers. It offers a wide range of features and functionalities to enhance the ordering process, ensuring customer satisfaction and efficiency for both customers and the restaurant.",
      projectTech: [
        "HTML",
        "Bootstrap",
        "PHP",
        "MySql",
        "Javascript",
        "Vanilla",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/KLD-LOGIN.png",
      projectName: "KLD Student Portal System",
      projectLink: "/",
      projectDescription:
        "The KLD Student Portal System is an advanced digital platform designed to enhance the academic experience and streamline communication between students, faculty, and staff at KLD University. It provides a centralized hub for students to access important information, track their academic progress, and engage in various activities related to their studies.",
      projectTech: [
        "HTML",
        "Tailwind CSS",
        "Laravel",
        "MySql",
        "Javascript",
        "Microsoft Azure",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/WEATHER.png",
      projectName: "Weather Tracker",
      projectLink: "/",
      projectDescription:
        "The Weather Tracker is an innovative and user-friendly digital platform designed to provide accurate and up-to-date weather information for a specific location or multiple locations. It offers a range of features and functionalities to help users track and stay informed about current weather conditions, forecasts, and other meteorological data.",
      projectTech: [
        "HTML",
        "CSS",
        "GSAP",
        "Weather API",
        "Javascript",
        "Jquery",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
