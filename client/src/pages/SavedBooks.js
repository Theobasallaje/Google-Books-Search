import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Saved Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book, i) => {
                  console.log(book)
                  return (
                    <ListItem key={i}>
                    <div style={{ textAlign: "center" }}>
                      <a target="_blank" rel="noopener noreferrer" href={book.canonicalVolumeLink}>
                        {console.log(book.canonicalVolumeLink)}
                        <strong>
                          {book.title} by {book.authors}
                        </strong>
                      </a>
                    </div>
                    <div style={{ textAlign: "center" }}>
                    {/* {book.volumeInfo.imageLinks === undefined ?  */}
                      <img 
                        alt={book.imageLinks[0].thumbnail.length > 0 ? `image of ${book.volumeInfo.title} book`: 'No image found'} 
                        src={`${book.imageLinks[0].thumbnail}`}
                      />
                      {/* :null} */}
                    </div>
                    <div>
                      <p>{`${book.description}`}</p>
                    </div>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                  )
                  
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
