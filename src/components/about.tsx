import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* Left Section */}
        <div>
          <Image
            src="/profile.jpeg"
            width={200}
            height={200}
            className="header-image"
            alt="Profile image of Muzaffar"
          />
          <div className="social-icon">
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="s-icon1" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="s-icon2" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="s-icon3" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right-div">
          <h1 className="title-hero">About Us</h1>
          <p className="des-hero">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
