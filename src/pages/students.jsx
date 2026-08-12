import students from "../data/Students";

function Students() {
  return (
    <main className="students-page">

      <section className="students-hero">
        <div className="students-content">
          <h1>Student Activities</h1>
          <p>
            Discover the achievements, activities, and competitions
            of Benha National University students.
          </p>
        </div>
      </section>

      <section className="students-section">

        <h2>Student Activities & Achievements</h2>

        <div className="students-grid">

          {students.map((student) => (
            <article className="student-card" key={student.id}>

              <div className="student-images">
                {student.images.map((image, index) => (
                  <img
                    key={index}
                    src={`/${image}`}
                    alt={student.title}
                  />
                ))}
              </div>

              <div className="student-card-content">

                <h3>{student.title}</h3>

                {student.date && (
                  <p className="student-date">
                    {student.date}
                  </p>
                )}

              </div>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Students;