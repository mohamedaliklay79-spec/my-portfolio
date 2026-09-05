import "./Contact.css";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=zidmohamedalitunise@gmail.com&su=Portfolio%20Contact&body=Hi%20Mohamed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.";

const WHATSAPP_URL = "https://wa.me/21628554295";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h3 className="contact-eyebrow">Contact</h3>

        <p className="contact-text">
          Feel free to reach out — I'm open to opportunities and
          collaboration.
        </p>

        <div className="contact-links">
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/mohamedaliklay79-spec"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-ali-1294a241a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
