import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

const BookShelves = ({currentlyReadingList,wantToReadList,readList,onUpdatingShelf}) => {
    
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfName="Currently Reading" books={currentlyReadingList} onUpdatingShelf={onUpdatingShelf}/>
            <BookShelf shelfName="Want To Read" books={wantToReadList} onUpdatingShelf={onUpdatingShelf}/>
            <BookShelf shelfName="Read" books={readList} onUpdatingShelf={onUpdatingShelf}/>  
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
        </div>

    )

}

export default BookShelves;