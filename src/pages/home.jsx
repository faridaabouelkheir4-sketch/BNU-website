import Card from "../components/card";

function Home() {
  return (
    <main>

      {/* Hero / Main News */}
      <section className="hero">
        <div className="hero-content">

          <h1>
            Welcome to Benha National University
          </h1>

          <p>
            Discover education, innovation and opportunities
            at Benha National University.
          </p>

          <button>
            Discover More
          </button>

        </div>
      </section>


      {/* Latest News */}
      <section className="news-section">

        <h2>Latest News</h2>

        <div className="news-grid">

          <Card
            title="University News"
            description="Latest news and announcements from the university."
          />

          <Card
            title="Student Activities"
            description="Discover the latest student activities and events."
          />

          <Card
            title="University Events"
            description="Explore upcoming university events."
          />

        </div>

      </section>


      {/* Colleges */}
      <section className="colleges-section">

  <h2>Our Colleges</h2>

  <div className="colleges-grid">

    <article className="college-item">
      <h3>Medicine</h3>
    </article>

    <article className="college-item">
      <h3>Dentistry</h3>
    </article>

    <article className="college-item">
      <h3>Physical Therapy</h3>
    </article>

    <article className="college-item">
      <h3>Engineering</h3>
    </article>

    <article className="college-item">
      <h3>Computer Science</h3>
    </article>

    <article className="college-item">
      <h3>Economics & Business</h3>
    </article>

    <article className="college-item">
      <h3>Veterinary Medicine</h3>
    </article>

    <article className="college-item">
      <h3>Visual Arts & Design</h3>
    </article>

    <article className="college-item">
      <h3>Energy Sciences</h3>
    </article>

  </div>

</section>


{/* Electronic Services */}
<section className="services-section">

  <h2>Electronic Services</h2>

  <div className="services-grid">

    <article className="service-item">
      <h3>Students</h3>
      <p>Student electronic services</p>
    </article>

    <article className="service-item">
      <h3>Faculty</h3>
      <p>Faculty electronic services</p>
    </article>

    <article className="service-item">
      <h3>Staff</h3>
      <p>Staff electronic services</p>
    </article>

  </div>

</section>

      {/* Statistics */}
<section className="statistics-section">

  <h2>University Statistics</h2>

  <div className="statistics-grid">

    <article className="statistic-item">
      <strong>10</strong>
      <span>Colleges</span>
    </article>

    <article className="statistic-item">
      <strong>25</strong>
      <span>Programs</span>
    </article>

    <article className="statistic-item">
      <strong>Students</strong>
      <span>University Students</span>
    </article>

    <article className="statistic-item">
      <strong>Faculty</strong>
      <span>Faculty Members</span>
    </article>

  </div>

</section>

    </main>
  );
}

export default Home;