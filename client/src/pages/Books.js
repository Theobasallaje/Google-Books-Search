import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
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
    API.saveBook(book)
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
          this.setState({books:res.data.items})
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
                    <a target="_blank" href={book.volumeInfo.canonicalVolumeLink}>
                    {console.log(book.volumeInfo.canonicalVolumeLink)}
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
                      </strong>
                    </a>
                    <SaveBtn onClick={() => this.saveBook(book.volumeInfo)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 style={{textAlign: "center"}}>Enter a book to get results</h3>
            )}
      </Container>
    );
  }
}

export default Books;
