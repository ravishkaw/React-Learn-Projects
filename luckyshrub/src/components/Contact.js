const Contact = () => {
  return (
    <>
      <h1 className="topic">Contact Us</h1>

      <section id="contact_us">
        <article className="contact">
          <h2>Get in Touch</h2>
          <p>
            We would love to hear from you! Whether you have questions about our
            services, need gardening advice, or want to discuss a specific
            project, feel free to reach out to us. Our friendly team is here to
            assist you.
          </p>
        </article>
      </section>

      <section>
        <article className="contact">
          <h2>Contact Information</h2>
          <p>
            Phone: <strong>(123) 456-7890</strong>
          </p>
          <p>
            Email: <strong>info@luckyshrub.com</strong>
          </p>
          <h2>Visit Our Location</h2>
          <p>
            Address: <strong>123 Garden Street, Cityville, State, Zip</strong>
          </p>
        </article>

        <article className="contact">
          <h2>Contact Form</h2>
          <form action="#" method="POST">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="feedback-input"
              required
            />
            <br />
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="feedback-input"
              required
            />
            <br />
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="feedback-input"
              required
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </article>
      </section>
    </>
  );
}
export default Contact