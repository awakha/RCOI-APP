// 4. Библиотека с избранными книгами.
// 1 часть задания:
// Сверстай форму в которой будет инпут для ввода название книги, для ввода автора, года издания и жанра. Все введенные данные должны быть собраны в один объект и добавлены в массив с избранными книгами при нажатии на кнопку "добавить".
// 2 часть задания:
// Внизу формы сверстайте список избранных книг, которые будут браться из вашего массива. Все данных из массива должны выводиться. Оформите их всех в теги и стилизуйте. Компонент книги должен быть создан отдельно, а все необходимые ему данные должны передаваться через пропсы

import { useState } from "react";
import Book from "./components/Book.tsx";

const Library = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);

  const handleAdd = () => {
    const newBook = {
      title,
      author,
      year,
      genre,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setYear("");
    setGenre("");
  };
  return (
    <div>
      <p>Введите название</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Введите автора</p>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <p>Введите год издания</p>
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <p>Введите жанр</p>
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <div>
        <button onClick={handleAdd}>Добавить</button>
      </div>
      <div className="books-container">
        <h2>Избранные книги:</h2>
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            year={book.year}
            genre={book.genre}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
