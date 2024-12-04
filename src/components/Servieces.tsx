import "../style/servieces.css";
import { GiSoundOn } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Blog, E-Commerce" },
  { icon: <GiSoundOn />, title: "Sound Design", description: "Audio Editing, Effects" },
  { icon: <FaLaptopCode />, title: "Frontend Development", description: "React, Next.js" },
  { icon: <FaLaptopCode />, title: "Backend Development", description: "Node.js, APIs" },
  { icon: <GiSoundOn />, title: "Audio Engineering", description: "Mixing, Mastering" },
  { icon: <FaLaptopCode />, title: "Full Stack Development", description: "Complete Web Solutions" },
];

function Services() {
  return (
    <section className="main">
      <div className="ser-container">
        {/* Top Section */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>

        {/* Service Boxes */}
        <div className="boxes-con">
          {services.map((service, index) => (
            <article className="box" key={index} aria-label={`Service: ${service.title}`}>
              <div className="ser-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span>{service.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
