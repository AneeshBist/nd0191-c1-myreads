import Book from "./Book";

const BookShelf = ({shelfName,books,onUpdatingShelf})=> {
   
    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{shelfName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book,key)=>(
                            <Book book={book} key={key} onUpdatingShelf={onUpdatingShelf}/>
                        ))
                    }
                </ol>
              </div>
            </div>
    )
}

export default BookShelf;