import "../style/hero.css";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-box">
        {/* Left Section */}
        <div className="hero-left">
          <Image
            src="/profile.jpeg"
            width={200}
            height={200}
            alt="Profile Picture of Mubashir"
            className="hero-image"
          />
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <header>
            <h1>I&apos;m Mubashir, Front-end Developer</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dicta, eos sunt alias, modi perferendis cupiditate sit nulla fuga at sapiente illo libero magni aperiam, similique quis reprehenderit qui fugit?
          </p>
          <button type="button" className="hero-button" aria-label="Hire Mubashir">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
