const Book = ({book,onUpdatingShelf}) => {
    const handleShelfChange = (event) => {
        onUpdatingShelf(book,event.target.value);   
    }

    return (
            
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                    <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`,
                              
                          }}
                        ></div>
                    <div className="book-shelf-changer">
                        <select onChange={handleShelfChange} value={book.shelf?book.shelf:"none"}>
                            <option disabled>
                               {book.shelf ? "Move to..." : "Add to..."}
                            </option>
                            <option value="currentlyReading">
                               Currently Reading
                            </option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                                                       
                        </select>
                    </div>
                    
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(" & ") : ""}</div>
                </div>
            </li>
    )
}

export default Book;