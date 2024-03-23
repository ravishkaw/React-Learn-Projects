import Books from "./Books";
import "./App.css";
import books from "./book";

function App() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Books {...book} key={book.id} index={index} getBook={getBook} />
          );
        })}
      </section>
    </>
  );
}

export default App;
