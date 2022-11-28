import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { useState,useEffect } from "react";
import {Route,Routes} from 'react-router-dom';
import BookSearch from "./BookSearch";
import BookShelves from "./BookShelves";

function App() {

  //............ Handling Reading Lists...........
  const [mainPageBooks, setMainPageBooks] = useState([]);
  
  //......MAIN PAGE CONTENT.....
  useEffect(()=>{
    const getShowAllBooks = async ()=> {
      const results = await BooksAPI.getAll();
      setMainPageBooks(results);
      }
      getShowAllBooks();
  },[])


  //........Handle Update of Book Shelf
  const handleUpdates = (book,shelf) => {
    const updateShelf = async ()=> {
                await BooksAPI.update(book,shelf);          
            }
            updateShelf();
            updateMainPageBooks(book,shelf);
  }

  const updateMainPageBooks = (book,shelfName) => {
    const updateExistingList = mainPageBooks.filter((buk)=>buk.id !== book.id);
    book.shelf = shelfName;
    setMainPageBooks([...updateExistingList,book]);
  }

  
  
  return (

    <Routes>
      <Route exact path="/" element={
        <BookShelves 
        currentlyReadingList={mainPageBooks.filter((book)=> book.shelf === "currentlyReading")}
        wantToReadList={mainPageBooks.filter((book)=>book.shelf === "wantToRead")}
        readList={mainPageBooks.filter((book)=>book.shelf === "read")}
        onUpdatingShelf={handleUpdates}/>
      }/>
      <Route path="/search" element={
        <BookSearch 
            mainPageBooks={mainPageBooks} 
            onUpdatingShelf={handleUpdates}/>
      }/>
    </Routes>

  );
}

export default App;
