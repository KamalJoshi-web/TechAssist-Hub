import React from "react";
import "../styles/footer.scss";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>
          TechAssist <span>Hub</span>
        </h2>
        <p>All Right Reversed</p>
      </div>
      <div>
        <h5>Social Handle</h5>
        <div>
          <a href="https://www.youtube.com/@ReactLearnerWeb" target="_blank">
            <FaYoutube size={33} color="#CD201F" />
          </a>
          <a href="https://www.youtube.com/@ReactLearnerWeb" target="_blank">
            <FaLinkedin size={33} color="#0A66C2" />
          </a>
          <a
            href="https://github.com/KamalJoshi-web?tab=repositories"
            target="_blank"
          >
            <FaGithub size={33} color="hsl(0, 1%, 14%)" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
