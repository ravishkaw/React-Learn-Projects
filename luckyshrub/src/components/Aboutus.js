import { teams } from "./datalist";

const Aboutus = () => {
  return (
    <>
      <h1 id="about_us" className="topic">
        About Us
      </h1>
      <section>
        <article className="about">
          <p>
            Welcome to Lucky Shrub, a medium-sized garden design firm based in
            Tucson, Arizona. With our passion for plants and dedication to
            creating stunning outdoor spaces, we specialize in garden design and
            creation, maintenance, and landscaping. <br />
            At Lucky Shrub, we believe that a well-designed garden has the power
            to transform any space into an oasis you can be proud of. Whether
            you have a small urban balcony or a sprawling backyard, our expert
            team is here to bring your vision to life.
          </p>
        </article>
      </section>

      <section>
        <article className="about">
          <h4>Meet Our Team</h4>
          <p>
            {teams.map((team) => {
              const { id, name, details } = team;
              return (
                <span key={id}>
                  <b>{name}</b> {details} <br />
                </span>
              );
            })}
          </p>
        </article>
        <article className="about">
          <h4>One-Stop Shop for Garden Enthusiasts</h4>
          <p>
            In addition to our garden design services, Lucky Shrub operates a
            small plant nursery. Here, you'll find a handpicked selection of
            beautiful plants, both for indoor and outdoor spaces. Whether you're
            looking for a vibrant houseplant or colorful blooms for your garden,
            our nursery is your go-to destination.
            <br />
            We take pride in providing exceptional customer service and
            personalized attention to each project we undertake. With Lucky
            Shrub, you can trust that your garden is in the hands of passionate
            professionals who are committed to creating a space that exceeds
            your expectations.
            <br />
            Ready to transform your space into a botanical paradise? Contact us
            today and let's embark on a journey to bring your garden dreams to
            life!
          </p>
        </article>
      </section>
    </>
  );
};
export default Aboutus;
