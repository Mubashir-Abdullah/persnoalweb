import "../style/education.css";

function EducationBox({ university, role, degree, description }: { university: string; role: string; degree: string; description: string; }) {
  return (
    <section className="box-con-edu">
      <div>
        <h2 className="uni-name">{university}</h2>
        <span>{role}</span>
      </div>
      <div className="computer">
        <h3>{degree}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

function Education() {
  const educationData = [
    {
      university: "University of Karachi",
      role: "Student",
      degree: "Bachelor in Computer Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam repellendus itaque laborum totam asperiores eos accusantium amet iste, in id perferendis sapiente modi fugiat aliquam molestias commodi maiores facilis.",
    },
    {
      university: "University of Karachi",
      role: "Student",
      degree: "Bachelor in Computer Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam repellendus itaque laborum totam asperiores eos accusantium amet iste, in id perferendis sapiente modi fugiat aliquam molestias commodi maiores facilis.",
    },
    {
      university: "University of Karachi",
      role: "Student",
      degree: "Bachelor in Computer Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magnam repellendus itaque laborum totam asperiores eos accusantium amet iste, in id perferendis sapiente modi fugiat aliquam molestias commodi maiores facilis.",
    },
  ];

  return (
    <main className="edu-main">
      <header className="edu-text">
        <h1>Education</h1>
        <p>
          Trusted by Professionals for Exceptional Quality and Service. Our clients from various industries trust us to deliver top-notch quality and results.
        </p>
      </header>
      {educationData.map((item, index) => (
        <EducationBox
          key={index}
          university={item.university}
          role={item.role}
          degree={item.degree}
          description={item.description}
        />
      ))}
    </main>
  );
}

export default Education;
