const Books = (props) => {
  const { title, author, img, index, getBook, id } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p className="number">{index + 1}</p>
      <button onClick={() => getBook(id)}>Show</button>
    </article>
  );
};

export default Books;
