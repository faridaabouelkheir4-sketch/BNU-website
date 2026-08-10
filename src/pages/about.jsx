function About() {
  return (
    <main className="about-page">

      {/* About University */}
      <section className="about-hero">

        <div className="about-content">

          <h1>About Benha National University</h1>

          <p>
            Benha National University is a modern educational institution
            dedicated to providing high-quality education and developing
            students' knowledge, skills, and creativity.
          </p>

        </div>

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

    <p>
      To provide an inspiring educational environment that
      supports learning, innovation, scientific research,
      and prepares qualified graduates for the future.
    </p>

  </div>

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

    </main>
  );
}

export default About;