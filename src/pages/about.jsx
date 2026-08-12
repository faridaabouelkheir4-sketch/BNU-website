import AboutBnu from "../data/aboutbnu";

function About() {
  const university = AboutBnu[0];
  const president = AboutBnu[1];

  return (
    <main className="about-page">

      {/* About University */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(/${university.image})`,
        }}
      >
        <div className="about-content">
          <h1>About {university.name}</h1>

          <p>{university.type}</p>

          <p>{university.location}</p>
        </div>
      </section>

      {/* University Information */}
      <section className="university-info">
        <h2>University Information</h2>

        <p>
          <strong>Established:</strong> {university.established}
        </p>

        <p>
          <strong>Total Colleges:</strong> {university.totalColleges}
        </p>

        <p>
          <strong>Total Programs:</strong> {university.programs.total}
        </p>

        <p>
          <strong>Fields:</strong> {university.programs.fields}
        </p>

        <p>
          <strong>Campus Area:</strong> {university.campus.area}
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">

        <div className="vision">
          <h2>Our Vision</h2>

          <p>
            To become a leading national university that provides
            innovative education and contributes to the development
            of society.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>

          <p>{university.mission}</p>
        </div>

      </section>

      {/* Founding Colleges */}
      <section className="colleges-section">

        <h2>Founding Colleges</h2>

        <ul>
          {university.foundingColleges.map((college, index) => (
            <li key={index}>{college}</li>
          ))}
        </ul>

      </section>

      {/* Added Colleges */}
      <section className="colleges-section">

        <h2>Added Colleges</h2>

        <p>{university.addedColleges.decree}</p>

        <ul>
          {university.addedColleges.colleges.map((college, index) => (
            <li key={index}>{college}</li>
          ))}
        </ul>

      </section>

      {/* Study Timeline */}
      <section className="study-timeline">

        <h2>Study Timeline</h2>

        {university.studyTimeline.map((item, index) => (
          <article key={index}>

            <h3>{item.year}</h3>

            <p>{item.colleges}</p>

            <p>{item.decree}</p>

          </article>
        ))}

      </section>

      {/* Campus */}
      <section className="campus-section">

        <h2>Campus</h2>

        <p>
          <strong>Area:</strong> {university.campus.area}
        </p>

        <ul>
          {university.campus.buildings.map((building, index) => (
            <li key={index}>{building}</li>
          ))}
        </ul>

      </section>

      {/* University Values */}
      <section className="values-section">

        <h2>Our Values</h2>

        <div className="values-grid">

          <article className="value-item">
            <h3>Excellence</h3>
            <p>
              We strive for excellence in education, research,
              and student development.
            </p>
          </article>

          <article className="value-item">
            <h3>Innovation</h3>
            <p>
              We encourage creativity, innovation, and new ideas.
            </p>
          </article>

          <article className="value-item">
            <h3>Integrity</h3>
            <p>
              We promote honesty, responsibility, and ethical values.
            </p>
          </article>

          <article className="value-item">
            <h3>Community</h3>
            <p>
              We contribute to the development of our community
              through education and research.
            </p>
          </article>

        </div>

      </section>

      {/* President */}
      <section className="president-section">

        <img
          src={`/${president.image}`}
          alt={president.name}
        />

        <div>
          <h2>{president.name}</h2>

          <h3>{president.title}</h3>

          <p>{president.message}</p>
        </div>

      </section>

    </main>
  );
}

export default About;