import { services, reasons } from "./datalist";

const Services = () => {
  return (
    <>
      <h1 id="services" className="topic">
        Our Services
      </h1>

      <section>
        {services.map((service) => {
          const { id, title, content } = service;
          return (
            <article className="service" key={id}>
              <h2>{title}</h2>
              <p>{content}</p>
            </article>
          );
        })}
      </section>
      <section>
        <article className="service">
          <h2>Why Choose Us</h2>
          <ul>
            {reasons.map((reason) => {
              const { id, title, content } = reason;
              return (
                <li key={id}>
                  <strong>{title}</strong> {content}
                </li>
              );
            })}
          </ul>

          <p>
            <a href="#contact_us">Contact us</a> today to schedule a consultation
            and let us help you create the garden of your dreams. Together,
            we'll transform your space into an oasis you can be proud of.
          </p>
        </article>
      </section>
    </>
  );
};
export default Services;
