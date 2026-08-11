import { Link, useParams } from "react-router-dom";
import News from "../data/News";

function NewsDetails() {
  const { id } = useParams();

  const newsItem = News.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <main>
        <h1>News Not Found</h1>
        <p>The news article you are looking for does not exist.</p>

        <Link to="/news">Back to News</Link>
      </main>
    );
  }

  return (
    <main>
      <article>
        <h1>{newsItem.title}</h1>

        <p>{newsItem.date}</p>

        <img
          src={`/${newsItem.image}`}
          alt={newsItem.title}
        />

        <div>
          {newsItem.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {newsItem.links && (
          <section>
            <h2>Useful Links</h2>

            {newsItem.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </section>
        )}

        <Link to="/news">Back to News</Link>
      </article>
    </main>
  );
}

export default NewsDetails;