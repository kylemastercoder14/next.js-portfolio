import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Yow! My name is Kyle Andre, and I am passionate about creating
            digital content for the web. My interest in web development sparked in 2021 when I created my first project called Cafe 2628, a
            Cofee Shop Website built using Javascript and HTML.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in front-end and developing
            high-quality solutions that delight my clients and exceed their
            expectations.
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my Social media account, where I demonstrate how to build
            full-stack applications.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://spotify-clone-kylemastercoder.vercel.app/"
            >
              Spotify Clone,
            </Link>
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Mongo DB</li>
            <li className="about-grid-info-list-item">Laravel</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">Java</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/kyle.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
