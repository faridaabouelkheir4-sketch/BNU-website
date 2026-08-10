function Departments() {
  return (
    <main className="departments-page">

      {/* Page Header */}
      <section className="departments-hero">

        <div className="departments-content">

          <h1>Our Faculties</h1>

          <p>
            Explore the faculties and academic fields
            available at Benha National University.
          </p>

        </div>

      </section>


      {/* Faculties */}
      <section className="faculties-section">

        <h2>Faculties</h2>

        <div className="faculties-grid">

          <article className="faculty-card">
            <h3>Medicine</h3>
            <p>
              Faculty of Medicine and its academic programs.
            </p>
          </article>

          <article className="faculty-card">
            <h3>Dentistry</h3>
            <p>
              Faculty of Dentistry and its academic programs.
            </p>
          </article>

          <article className="faculty-card">
            <h3>Physical Therapy</h3>
            <p>
              Faculty of Physical Therapy and its academic programs.
            </p>
          </article>

          <article className="faculty-card">
            <h3>Engineering</h3>
            <p>
              Faculty of Engineering and its academic programs.
            </p>
          </article>

          <article className="faculty-card">
            <h3>Computer Science</h3>
            <p>
              Faculty of Computer Science and its academic programs.
            </p>
          </article>

          <article className="faculty-card">
            <h3>Economics & Business</h3>
            <p>
              Faculty of Economics and Business.
            </p>
          </article>

        </div>

      </section>
{/* Academic Departments */}
<section className="academic-departments">

  <h2>Academic Departments</h2>

  <div className="departments-grid">

    <article className="department-item">
      <h3>Department Name</h3>
      <p>
        Academic department information will be displayed here.
      </p>
    </article>

    <article className="department-item">
      <h3>Department Name</h3>
      <p>
        Academic department information will be displayed here.
      </p>
    </article>

    <article className="department-item">
      <h3>Department Name</h3>
      <p>
        Academic department information will be displayed here.
      </p>
    </article>

  </div>

</section>

    </main>
  );
}

export default Departments;