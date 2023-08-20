import React from "react";
import "../styles/home.scss";
import Graphics from "../assets/vectorimg.png";

const Home = () => {
  return (
    <>
      <section className="homep" id="home">
        <div className="moto">
          <h2>
            TechAssist <span> Hub</span>
          </h2>
          <p>"Your Tech Solutions Hub: Expert Support at Your Fingertips!"</p>
        </div>
      </section>
      <section className="sub-home">
        <h2>Why Choose Us?</h2>
        <div>
          <img src={Graphics} alt="Graphics" />
          <p>
            TechAssist Hub: Your Trusted Destination for Expert Tech Support.
            Unlock the Power of Technology with Seamless Solutions. Instant
            Help, Hassle-Free Solutions, and Unparalleled Expertise. Simplifying
            Tech Challenges, One Click at a Time. Elevate Your Tech Experience
            with Our Dedicated Support. Your Tech Assistance Partner, Always
            Here for You!
          </p>
        </div>
      </section>
      <section id="about">
        <div>
          <p>What is our Experties?</p>
          <article>
            TechAssist Hub's expertise lies in providing comprehensive and
            reliable tech support solutions across a wide range of domains. Our
            team of skilled professionals possesses a deep understanding of
            various technologies, software, hardware, and IT infrastructure.
            From troubleshooting software issues to configuring network setups,
            we have the expertise to tackle diverse challenges. Our experts
            excel in diagnosing and resolving complex technical problems
            promptly, ensuring minimal downtime and maximum productivity for our
            valued clients. We stay up-to-date with the latest industry trends,
            best practices, and emerging technologies to offer cutting-edge
            solutions tailored to meet individual needs. Whether it's assisting
            individuals with their personal devices or supporting businesses
            with IT-related concerns, our expertise covers it all. We pride
            ourselves on delivering exceptional customer service, fostering
            strong relationships with our clients, and empowering them to
            harness the full potential of their technological assets. At
            TechAssist Hub, our unwavering commitment to excellence, continuous
            learning, and adaptability sets us apart. Trust us as your go-to
            technology partner, and we'll help you navigate the ever-changing
            tech landscape with confidence and ease. Your satisfaction is our
            top priority, and our expertise is the cornerstone of our success in
            providing top-notch tech support services.
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
