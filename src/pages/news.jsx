import { Link } from "react-router-dom";
import News from "../data/News";
import { sortByDateNewestFirst } from "../data/utils";

function NewsPage() {
  const sortedNews = sortByDateNewestFirst(News);

  return (
    <main className="news-page">

      <section className="news-hero">
        <div className="news-hero-content">
          <h1>University News</h1>
          <p>
            Stay up to date with the latest news and achievements
            of Benha National University.
          </p>
        </div>
      </section>

      <section className="news-section">

        <h2>Latest News</h2>

        <div className="news-grid">

          {sortedNews.map((item) => (
            <article className="news-card" key={item.id}>

              <img
                src={`/${item.image}`}
                alt={item.title}
              />

              <div className="news-card-content">

                <p className="news-date">
                  {item.date}
                </p>

                <h3>{item.title}</h3>

                <Link to={`/news/${item.id}`}>
                  Read More
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default NewsPage;