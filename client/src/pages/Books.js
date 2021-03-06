import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

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
          this.setState({ books: res.data.items })
          console.log(this.state.books);
          // this.loadBooks()
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Book Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12"> */}
          {/* If you want search and results side by side cut the results stuff here */}
          {/* </Col> */}
        </Row>
        {/* <Jumbotron>
              <h1>Results</h1>
            </Jumbotron> */}
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
                  event.target.classList.add("btn-danger");
                  event.target.innerHTML = "saved";
                  // event.target.classList.add("btn-danger");
                }}
                />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3 style={{ textAlign: "center" }}>Enter a book to get results</h3>
          )}
      </Container>
    );
  }
}

export default Books;
