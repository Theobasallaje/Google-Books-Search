import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import './Books.scss';

class Books extends Component {
  state = {
    books: [],
    title: "",
    saved: false
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  saveBook = book => {
    var newBook = book.volumeInfo;
    newBook.id = book.id;
    API.saveBook(newBook)
      .then()
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getGoogleBooks({
        title: this.state.title
      })
        .then(res => {
          console.log(res);
          this.setState({ books: res.data.items });
          console.log(this.state.books);
          // this.loadBooks()
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <>
        <div className="mt-0 mb-4 bodyContainer">
          <div className='container googlePlayBooksLogoContainer'>
            <img
              className='googlePlayBooksLogo'
              src="/assets/google_play_books_image.png"
              alt="google play books image"
            />
          </div>
          <div className='searchBarAndButtonContainer'>
            <form className='container'>
              <Input
                className='searchBar'
                type="search"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Enter a book titile"
              />
              <FormBtn
                // className='searchButton'
                type="submit"
                onClick={this.handleFormSubmit}>
                Search
            </FormBtn>
            </form>
          </div>
          <div className='container'>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book, i) => (
                  <ListItem key={i}>
                    <div style={{ textAlign: "center" }}>
                      <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.canonicalVolumeLink}>
                        {console.log(book.volumeInfo.canonicalVolumeLink)}
                        <strong>
                          {/* {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")} */}
                          {book.volumeInfo.title}
                          {book.volumeInfo.authors === undefined ? ''
                            : book.volumeInfo.authors.length < 1 ? ''
                              : book.volumeInfo.authors.length > 1 ? ` by ${book.volumeInfo.authors.join(", ")}`
                                : ` by ${book.volumeInfo.authors}`}
                        </strong>
                      </a>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <img
                        alt={book.volumeInfo.imageLinks.thumbnail.length > 0 ? `image of ${book.volumeInfo.title} book` : 'No image found'}
                        src={`${book.volumeInfo.imageLinks.thumbnail}`}
                      />
                      {/* {book.volumeInfo.imageLinks === undefined ? 
                    <img src={`${book.volumeInfo.imageLinks.thumbnail}`}></img>
                    : null} */}
                    </div>
                    <div>
                      {book.volumeInfo.description === undefined ?
                        ''
                        : <p>{`${book.volumeInfo.description}`}</p>}
                    </div>

                    <SaveBtn onClick={(event) => {
                      this.saveBook(book);
                      this.setState({ saved: true })
                      // event.target.style.backgroundColor = "red";
                      // event.target.classList[1] = "btn-danger";
                      event.target.classList.remove("bg-blue-500", "hover:bg-blue-400", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "border-blue-700", "hover:border-blue-500", "rounded");
                      event.target.classList.add("bg-red-500", "hover:bg-red-400", "text-white", "font-bold", "py-2", "px-4", "border-b-4", "border-red-700", "hover:border-red-500", "rounded");
                      event.target.innerHTML = "saved";
                      // event.target.classList.add("btn-danger");
                    }}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3 className='searchResults' style={{ textAlign: "center" }}>Results will show below</h3> //FIXME: header is not actually being applied
              )}
          </div>
        </div>
      </>
    );
  }
}

export default Books;
