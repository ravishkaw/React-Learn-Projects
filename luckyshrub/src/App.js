import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src="./resources/images/logo.png" alt="Logo" />
      </header>

      <nav>
        <ul>
          <li>
            <a href="#">Home Page</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about_us">About Us</a>
          </li>
          <li>
            <a href="#contact_us">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section>
          <article id="promotion">
            <h1>Summer Maintenance Package</h1>
            <p>
              Sign up for our summer maintenance package and enjoy a 10%
              discount on regular garden maintenance services for the entire
              season. Sit back, relax, and let our experts take care of your
              garden.
            </p>
          </article>
        </section>

        <br />

        <section>
          <article className="card">
            <h3>Our Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
            <a href="./services.html"> See our services </a>
          </article>

          <article className="card">
            <h3>What's New</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
          </article>

          <article className="card">
            <h3>Opening Hours</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <br />
              <br />
              Mon - Fri : 8 am - 10 pm
              <br />
              Sat - Sun : 9 am - 11 pm
            </p>
          </article>
        </section>

        <h1 className="topic">Our Services</h1>

        <section id="services">
          <article className="service">
            <h2>Garden Design and Creation</h2>
            <p>
              Our team of skilled professionals, led by Jason, our talented
              garden architect, specializes in creating stunning and
              personalized garden designs. Whether you're looking for a tranquil
              retreat or a vibrant outdoor space, we work closely with our
              clients to bring their vision to life. From conceptualization to
              installation, we take care of every detail to ensure a seamless
              and hassle-free experience.
            </p>
          </article>
          <article className="service">
            <h2>Maintenance and Landscaping</h2>
            <p>
              At Lucky Shrub, we understand that maintaining a beautiful garden
              requires time and effort. That's why our dedicated team of
              landscapers is here to help. We offer regular maintenance services
              to keep your garden in pristine condition throughout the year.
              From lawn mowing and pruning to fertilizing and pest control,
              we've got you covered. Our experts have the knowledge and skills
              to ensure your garden remains healthy and vibrant.
            </p>
          </article>
          <article className="service">
            <h2>Plant Nursery</h2>
            <p>
              As a one-stop shop for all your gardening needs, we also operate a
              small plant nursery. Our nursery offers a wide variety of indoor
              and outdoor plants, carefully selected for their beauty and
              durability. Whether you're a seasoned gardener or just starting
              out, our knowledgeable staff is here to assist you in choosing the
              perfect plants for your space. From colorful flowers to lush
              foliage, we have everything you need to create your dream garden.
            </p>
          </article>
        </section>
        <section>
          <article className="service">
            <h2>Why Choose Us</h2>
            <ul>
              <li>
                <strong>Expertise:</strong> With years of experience in the
                industry, our team brings a wealth of knowledge and expertise to
                every project.
              </li>
              <li>
                <strong>Personalized Approach:</strong> We believe in creating
                unique and customized designs that reflect the individual style
                and preferences of our clients.
              </li>
              <li>
                <strong>Attention to Detail:</strong> From the initial
                consultation to the final installation, we pay close attention
                to every detail to ensure the highest quality results.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> We prioritize customer
                satisfaction and strive to exceed expectations with our
                exceptional service and professionalism.
              </li>
              <li>
                <strong>One-Stop Shop:</strong> With our range of services and
                plant nursery, we provide a convenient and comprehensive
                solution for all your gardening needs.
              </li>
            </ul>

            <p>
              <a href="#contact">Contact us</a> today to schedule a consultation
              and let us help you create the garden of your dreams. Together,
              we'll transform your space into an oasis you can be proud of.
            </p>
          </article>
        </section>

        <h1 className="topic">About Us</h1>
        <section id="about_us">
          <article className="about">
            <p>
              Welcome to Lucky Shrub, a medium-sized garden design firm based in
              Tucson, Arizona. With our passion for plants and dedication to
              creating stunning outdoor spaces, we specialize in garden design
              and creation, maintenance, and landscaping. <br />
              At Lucky Shrub, we believe that a well-designed garden has the
              power to transform any space into an oasis you can be proud of.
              Whether you have a small urban balcony or a sprawling backyard,
              our expert team is here to bring your vision to life.
            </p>
          </article>
        </section>
        <section>
          <article className="about">
            <h4>Meet Our Team</h4>
            <p>
              <b>Jason - Garden Architect : </b> Jason, our talented garden
              architect, is the creative force behind every design at Lucky
              Shrub. With years of experience and a keen eye for detail, he
              meticulously crafts captivating outdoor spaces that reflect your
              style and preferences. Jason also manages our team of skilled
              landscapers, ensuring that every project is executed with
              precision and expertise. <br />
              <br />
              <b>Maria - Marketing Manager : </b> Maria is the marketing
              mastermind behind Lucky Shrub. With her strategic mindset and
              creative flair, she ensures that our brand reaches the right
              audience and communicates our values effectively. Maria also
              oversees our plant nursery, where she curates a collection of
              top-quality indoor and outdoor plants for our clients to enjoy.
            </p>
          </article>
          <article className="about">
            <h4>One-Stop Shop for Garden Enthusiasts</h4>
            <p>
              In addition to our garden design services, Lucky Shrub operates a
              small plant nursery. Here, you'll find a handpicked selection of
              beautiful plants, both for indoor and outdoor spaces. Whether
              you're looking for a vibrant houseplant or colorful blooms for
              your garden, our nursery is your go-to destination.
              <br />
              We take pride in providing exceptional customer service and
              personalized attention to each project we undertake. With Lucky
              Shrub, you can trust that your garden is in the hands of
              passionate professionals who are committed to creating a space
              that exceeds your expectations.
              <br />
              Ready to transform your space into a botanical paradise? Contact
              us today and let's embark on a journey to bring your garden dreams
              to life!
            </p>
          </article>
        </section>

        <h1 className="topic">Contact Us</h1>

        <section id="contact_us">
          <article className="contact">
            <h2>Get in Touch</h2>
            <p>
              We would love to hear from you! Whether you have questions about
              our services, need gardening advice, or want to discuss a specific
              project, feel free to reach out to us. Our friendly team is here
              to assist you.
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
      </main>

      <br />

      <footer>
        <div>
          <img src="./resources/images/logo.png" alt="footer-logo" />
        </div>
        <div>
          <hr />
          <p>© 2023 Ravishka Wijerathne. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
