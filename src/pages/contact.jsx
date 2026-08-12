import contact from "../data/contact";

function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with Benha National University.
          </p>
        </div>
      </section>

      <section className="contact-info">

        <div className="contact-general">
          <h2>General Contact</h2>

          <p>
            Email:{" "}
            <a href="mailto:info@bnu.edu.eg">
              info@bnu.edu.eg
            </a>
          </p>

          <p>{contact.address}</p>
        </div>

        <div className="college-contacts">
          <h2>College Contacts</h2>

          {contact.collegeEmails.map((item, index) => (
            <div className="college-contact" key={index}>
              <h3>{item.college}</h3>

              <a
                href={`mailto:${item.email}`}
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>

      </section>

      <section className="map-section">
        <h2>Our Location</h2>

        <iframe
          title="Benha National University Location"
          src={`https://www.google.com/maps?q=${contact.mapLocation.lat},${contact.mapLocation.lng}&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>

    </main>
  );
}

export default Contact;