import { Link } from "react-router-dom";
import Colleges from "../data/Colleges";

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

          {Colleges.map((college) => (
            <article
              className="faculty-card"
              key={college.id}
            >
              <h3>{college.name}</h3>

              <p>
                Explore the faculty and its academic programs.
              </p>

              <Link to={`/departments/${college.id}`}>
                View Faculty
              </Link>
            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Departments;