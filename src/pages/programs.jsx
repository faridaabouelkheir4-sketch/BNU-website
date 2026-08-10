function Programs() {
  return (
    <main className="programs-page">

      {/* Page Header */}
      <section className="programs-hero">

        <div className="programs-content">

          <h1>Academic Programs</h1>

          <p>
            Explore the academic programs offered by
            Benha National University.
          </p>

        </div>

      </section>


      {/* Programs */}
      <section className="programs-section">

        <h2>Our Programs</h2>

        <div className="programs-grid">

          <article className="program-card">
            <h3>Medicine Program</h3>

            <p>
              Explore the academic and educational opportunities
              available in the field of medicine.
            </p>

            <button>Learn More</button>
          </article>


          <article className="program-card">
            <h3>Dentistry Program</h3>

            <p>
              Learn about the academic opportunities and
              study pathways in dentistry.
            </p>

            <button>Learn More</button>
          </article>


          <article className="program-card">
            <h3>Engineering Program</h3>

            <p>
              Discover engineering education and academic
              opportunities at the university.
            </p>

            <button>Learn More</button>
          </article>


          <article className="program-card">
            <h3>Computer Science Program</h3>

            <p>
              Explore programs related to computing,
              technology, and digital innovation.
            </p>

            <button>Learn More</button>
          </article>

        </div>

      </section>

    </main>
  );
}

export default Programs;