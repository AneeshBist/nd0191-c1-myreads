# MyReads Project

This project is basic representation of a library where the user selects books and mark them as per his use:
it has two Pages : 
Structure: 
    1. Main Page - this is the main page that user sees which is conatining shelves  
        a. Currently Reading - the books which user is reading currently
        b. Want To Read - the books which a user is willing to read
        c. Read - the Books Which the user has already read
    2. Search Page - This page conatins an input area where the user can search books as per needs

# Fucntionality & Usage
    1. each book has an arrow in green circle at lower right corner of the book as select menu
    2. the arrow dropdown shows the shelf in which the book is currently residing - The Current Shelf is select by default
    3. to change a book shelf or mark the book differently,
        a. User has to click on the new shelf and it shall be removed from current shelf and should reflect in new shelf.
        b. if User seelects "none" from option, the book is removed from the three shelves and will not appear in Main Page
    4. for the search page, 
        a. if search match the books which are already present in 3 shelves of Main Page - the shelf of that book is selected by default  
        b. if a book is being shown in search page is not present in Main Page - then "none" is selecteed by default
        c. changes made in search page by selecting different shelf of a book would reflect in Shelves of the Main Page

# Testing
    Testing can be done by user by changing shelves. Few scenarios are as follows:
    1. test_1: on Main page "Currently Reading", click on the books's arrow(dropdown) and change it to "read".
            result_1: the book is removed from "Currently Reading" shelf and moved to "Read"
    2. test_21:  on Main page "Want To Read", click on the books's arrow(dropdown) and change it to "none".
            result_21: the book is removed from the main page
       test_22: now go to Search Page, search for the same book which was recenlty moved to "none".
            result_22: the book is displayed in search page as default value "none"
    3. test_31: on Search Page, search for a book eg.,"react"
            result_31: it displays books related to the search. if book is already present on main page, it will have the shelf selected by default.
                 If it is not present in search page, book displays "none" as default.
       test_31: on Search Page displaying books with a search, select a book and change it's shelf to "Read"
            result_31: go back to Main Page, the book will be reflected on "Read" shelf
    User can create multiple scenarios like these stated above and test accordingly...

## Author
Aneesh Bist - First Project - Implemented for OLX Udacity Front-end Developer Scholarship

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- install react router dom with `npm install react-router-dom`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of app. This is thw main handler of the application. all changes are done via inverse data flow - File MODIFIED
    ├── BookShelves.js # This is the main page of app containing different kind of shelves. - File ADDED
    ├── BookSearch.js # This is the main search page shows books as per searched results - File ADDED
    ├── BookShelf.js # This creates shelves within the BookShelf main page: Currently Reading, Want To Read, Read - File ADDED
    ├── Book.js # This Creates Books within the application and handles the shelf change operation - File ADDED
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only. DOM Routing Added - File MODIFIED
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
