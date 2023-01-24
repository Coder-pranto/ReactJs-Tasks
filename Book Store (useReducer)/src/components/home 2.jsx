import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const bookData = [
  {
    id: uuidv4(),
    name: 'Srikanta',
  },
  {
    id: uuidv4(),
    name: 'Pak Sar Jamin Sad Bad',
  },
  {
    id: uuidv4(),
    name: 'Pather Panchali',
  },
  {
    id: uuidv4(),
    name: 'Professor Shonku',
  },
];

export default function Home() {

  const [bookname, setBookname] = useState('');

  const reducer = (state, action) => {
    //action.type, action.payload
    if (action.type === 'Add') {
       const allBooks = [...state.books, action.payload ]
       return{
        ...state,
        books: allBooks,
        isModal: true,
        modaltext: 'New Book is added'

       }
    }
    if (action.type === 'Remove') {
      const filterBooks = state.books.filter((book) => book.id !== action.payload )
      return {
        books: filterBooks,
        isModal: true,
        modaltext: 'Book is removed'
      }

    }
  };

  const initialState = {
    books: bookData,
    isModal: false,
    modaltext: '',
  };

  const [bookState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newbook = { id: uuidv4(), name: bookname };
    dispatch({ type: 'Add', payload: newbook });
  };

  const removeBook = (book_id) => { 
    dispatch({ type: 'Remove', payload: book_id});
   }

  return (
    <div className="container mt-3 border border-warning p-3">
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Book Name 2</label>
          <input
            type="text"
            value={bookname}
            id="name"
            className="form-control "
            onChange={(e) => setBookname(e.target.value)}
          />
          <button className="btn btn-sm btn-primary mt-1">Submit</button>
        </div>
      </form>
      <div className="modaltext">
        {bookState.isModal && <p>{bookState.modaltext}</p>}
      </div>

      <div className="list">
        <h5 className="text-success mb-2">Book List: </h5>
        <ul className="list-group list-group-flush">
          {bookState.books.map((data, id) => (
            <li key={id} className="list-group-item">
              {data.name} <button className='btn btn-sm btn-danger' onClick={()=> removeBook(data.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
