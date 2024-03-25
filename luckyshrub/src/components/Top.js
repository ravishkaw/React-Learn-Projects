import { topCards } from "./datalist";

const Top = () => {
  return (
    <>
      <section>
        <article id="promotion">
          <h1>Summer Maintenance Package</h1>
          <p>
            Sign up for our summer maintenance package and enjoy a 10% discount
            on regular garden maintenance services for the entire season. Sit
            back, relax, and let our experts take care of your garden.
          </p>
        </article>
      </section>

      <br />

      <section>
        {topCards.map((data) => {
          const { id, title, content } = data;
          return (
            <article className="card" key={id}>
              <h3>{title}</h3>
              <p>{content}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default Top;
