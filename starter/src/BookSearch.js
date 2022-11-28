import { useState,useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";

const BookSearch = ({mainPageBooks,onUpdatingShelf}) => {

    const [showAllBooks, setShowAllBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [clearSearch, setClearSearch] = useState(false);
    
    const updateSearch = (searchTxt) => {
        setSearch(searchTxt.trimStart());
     }
     
    useEffect(()=>{
        let mounted = true;
        if(mounted && search!=="" && search !== null){ 
            const getShowAllBooks = async ()=> {
            const results = await BooksAPI.search(search,30);
            if(results && results.length!== undefined){
                results.forEach((rBook)=>{
                    let sameBook = mainPageBooks.filter((mBook)=>mBook.id === rBook.id);
                    rBook.shelf = sameBook[0] ? sameBook[0].shelf : null;
                });
                setShowAllBooks(results);
                setClearSearch(false);
            }else{
                    setClearSearch(true);
            } ;
        }       
        getShowAllBooks();
       return ()=> mounted=false;
    }},[search,mainPageBooks,clearSearch])

    const showSearchedBooks = search==="" || showAllBooks.length===undefined || clearSearch ? [] : (showAllBooks);
        
    return (       
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                Close
                </Link>
                <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={search}
                    onChange={(event)=>updateSearch(event.target.value)}
                />
                </div>
            </div>            
            {showSearchedBooks === null || showSearchedBooks === undefined  ? null : (
            <div className="search-books-results">                
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            showSearchedBooks.map((book,key)=>(
                                <Book book={book} key={key} onUpdatingShelf={onUpdatingShelf}/>
                            )
                            )
                        }
                    </ol>
                </div>
            </div>     
            )}
        </div>   
    )
}

export default BookSearch;