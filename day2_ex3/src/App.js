import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div>
      <h2>Header</h2>

      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/company">
            Company
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Products(props) {
  const { bookFacade } = props;
  let { path, url } = useRouteMatch();
  const allTitles = bookFacade.getBooks().map((book) => (
    <li key={book.id}>
      {book.title} <Link to={`${url}/${book.id}`}>Details</Link>
    </li>
  ));

  return (
    <div>
      <h2>Products</h2>
      <ul>{allTitles}</ul>
      <p>
        <Details />
      </p>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={bookFacade}></Details>
        </Route>
      </Switch>
    </div>
  );
}

function Company() {
  return (
    <div>
      <h2>Company</h2>
    </div>
  );
}

function AddBook(props) {
  const { bookFacade } = props;
  const initialBook = { id: "", title: "", info: "" };
  const [book, setBook] = useState(initialBook);

  const onChange = (evt) => {
    const value = evt.target.value;
    const id = evt.target.id;
    setBook({ ...book, [id]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (book.title === "" || book.info === "") {
      return;
    }
    window.alert(JSON.stringify(book));
    bookFacade.addBook(book);
    setBook({ ...initialBook });
  };

  return (
    <div>
      <form>
        <h4>Here you can add a book</h4>
        <label>
          Title:
          <input id="title" value={book.title} onChange={onChange} />
        </label>
        <br></br>
        <label>
          Info:
          <input id="info" value={book.info} onChange={onChange} />
        </label>
        <button onClick={handleSubmit} className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}

function Details(props) {
  const { bookFacade } = props;
  let { bookId } = useParams();
  const book = bookFacade.findBook(bookId);
  console.log(book);
  return (
    <div>
      <h2>Book details for selected book will go here</h2>
      <p>{book.info}</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>This path does not exist</h2>
    </div>
  );
}

function App(props) {
  const { bookFacade } = props;
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade} />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
