import { useState } from "react";

function App() {

    const [books, setBooks] = useState([]);

    const getBooks = () => {

        fetch("http://localhost:2000/books")
            .then(response => response.json())
            .then(data => {
                setBooks(data);
            });
    };

    return (
        <div>

            <h1 className="flex justify-center align-middle text-6xl mt-9t ">Books</h1>

            <button onClick={getBooks} className="ml-155.5 border-2 p-4 rounded-2xl text-2xl mt-9">
                Get Books
            </button>
            <div className="flex flex-wrap gap-20 p-4 justify-center mt-29 rounded-2xl">
                {books.map(book => (
                  <div key={book.id} className="border-2 p-5 ">
                      <img src={book.img} width="100" className="ml-4 w-70"/>
                        <h3 className="flex justify-center align-middle mt-5 text-2xl text-black font-bold">{book.id} - {book.name}</h3>
                        <p className="flex justify-center align-middle mt-5 text-2xl text-red-600">Price: ₹{book.price}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default App;