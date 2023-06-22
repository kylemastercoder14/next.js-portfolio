import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Freelance",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "June 2021",
      end: "Present",
      shortDescription: [
        "I design, code, and modify websites according to client specifications using programming languages such as PHP, JavaScript, and C#.",
        "I monitor and maintain existing websites, ensuring they remain up-to-date, secure, and error-free. Implement requested changes, updates, and enhancements as per client requirements.",
        "I implement basic on-page SEO practices, such as optimizing website structure, meta tags, headings, and URLs to improve search engine visibility and rankings.",
      ],
    },
    {
      name: "GitCub",
      role: "P.R.O",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "October 2022",
      end: "Present",
      shortDescription: [
        "I create and execute public relations strategies and campaigns to enhance the organization's reputation and visibility. This includes drafting press releases, organizing media events, and coordinating with journalists in our school.",
        "I develop and implement crisis communication plans to effectively handle and mitigate any negative publicity or issues that may arise.",
        "I establish and nurture relationships with key stakeholders, including clients and other partners.",
      ],
    },
    {
      name: "Savemore",
      role: "Stock Clerk",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "June 2018",
      end: "December 2018",
      shortDescription: [
        "I receive and unload merchandise deliveries, verifying the accuracy of shipments against purchase orders. Stock shelves, displays, and storage areas with new products according to established guidelines and organizational standards.",
        "I monitor inventory levels and report any shortages or overstock situations to the management team.",
        "I provide friendly and helpful customer service by assisting shoppers in locating products, answering inquiries, and providing information about products and pricing.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
