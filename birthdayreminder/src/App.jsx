import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={clearList}>
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
