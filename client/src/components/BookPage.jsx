import { useEffect, useState } from "react";
import axios from "axios";

function BookPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/api/book").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <>
      <table
        style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Book name</th>
            <th>Description</th>
            <th>Writer</th>
            <th>Writer Country</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.description}</td>
              <td>{`${book.writer.firstname} ${book.writer.lastname}`}</td>
              {/* <td>{book.writer.country.name}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookPage;