const Book = ({ title, author, year, genre }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Автор: {author}</p>
      <p>Год:{year}</p>
      <p>Жанр:{genre}</p>
    </div>
  );
};
export default Book;
