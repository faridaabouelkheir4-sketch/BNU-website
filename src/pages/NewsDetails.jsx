import { useParams, Link } from "react-router-dom";
import News from "../data/News";

function NewsDetails() {
  const { id } = useParams();

  const newsItem = News.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <main>
        <h1>News Not Found</h1>
        <Link to="/">Back to Home</Link>
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
          {newsItem.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {newsItem.links && (
          <div>
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
          </div>
        )}
      </article>
    </main>
  );
}

export default NewsDetails;