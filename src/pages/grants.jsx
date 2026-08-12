import grants from "../data/grants";

function Grants() {
  const excellence = grants.excellenceGrants;

  return (
    <main className="grants-page">

      <section className="grants-hero">
        <h1>Grants & Discounts</h1>
        <p>
          Benha National University grants and tuition fee reductions.
        </p>
      </section>

      {/* New Students */}
      <section className="grant-section">
        <h2>{excellence.newStudents.title}</h2>

        <p>{excellence.newStudents.description}</p>
      </section>

      {/* Continuing Students */}
      <section className="grant-section">
        <h2>{excellence.continuingStudents.title}</h2>

        <p>{excellence.continuingStudents.description}</p>

        <h3>Discounts by Rank</h3>

        <ul>
          {excellence.continuingStudents.discountByRank.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.rank}:</strong> {item.discount}
              </li>
            )
          )}
        </ul>

        <h3>Grants by Cohort Size</h3>

        <ul>
          {excellence.continuingStudents.grantsByCohortSize.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.cohortSize}:</strong>{" "}
                {item.grantsAwarded} grants
              </li>
            )
          )}
        </ul>
      </section>

      {/* Sports Excellence */}
      <section className="grant-section">
        <h2>{excellence.sportsExcellence.title}</h2>

        <h3>International Competitions</h3>

        <ul>
          {excellence.sportsExcellence.international.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.medal}:</strong> {item.discount}
              </li>
            )
          )}
        </ul>

        <h3>Arab and African Competitions</h3>

        <ul>
          {excellence.sportsExcellence.arabAndAfrican.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.medal}:</strong> {item.discount}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Distinguished Students */}
      <section className="grant-section">
        <h2>Distinguished & Creative Students</h2>

        <p>{excellence.distinguishedAndCreative}</p>
      </section>

      {/* Tuition Fee Reductions */}
      <section className="grant-section">
        <h2>Tuition Fee Reductions</h2>

        {grants.tuitionFeeReductions.map((item, index) => (
          <article className="grant-card" key={index}>
            <h3>{item.category}</h3>

            <p>{item.description}</p>

            <strong>Discount: {item.discount}</strong>
          </article>
        ))}
      </section>

      {/* Social Support */}
      <section className="grant-section">
        <h2>Social Support</h2>

        <p>{grants.socialSupport}</p>
      </section>

      {/* General Rules */}
      <section className="grant-section">
        <h2>General Rules</h2>

        <ul>
          {grants.generalRules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Grants;