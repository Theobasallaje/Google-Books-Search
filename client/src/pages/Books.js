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
      <>
        <div className="flex mb-4">
          <Jumbotron>
            <h1>Google Book Search</h1>
          </Jumbotron>
        </div>
        <div className="mt-0 mb-4">
          <form>
            <Input
              type="search"
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title"
            />
            <FormBtn
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
        </div>
      </>
      // <Container fluid>
      //   <Row>
      //     <Col size="md-12">
      //       <Jumbotron>
      //         <h1>Google Book Search</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.title}
      //           onChange={this.handleInputChange}
      //           name="title"
      //           placeholder="Title"
      //         />
      //         <FormBtn
      //           onClick={this.handleFormSubmit}
      //         >
      //           Search
      //         </FormBtn>
      //       </form>

      //       <div className="max-w-sm w-full lg:max-w-full lg:flex">
      //         <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png")` }} title="Woman holding a mug">
      //         </div>
      //         <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      //           <div className="mb-8">
      //             <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      //             <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      //           </div>
      //           <div className="flex items-center">
      //               <div className="text-sm">
      //                 <p className="text-gray-900 leading-none">Jonathan Reinink</p>
      //                 <p className="text-gray-600">Aug 18</p>
      //               </div>
      //             </div>
      //           </div>
      //         </div>

      //     </Col>
      //   </Row>
      //     {this.state.books.length ? (
      //       <List>
      //         {this.state.books.map((book, i) => (
      //           <ListItem key={i}>
      //             <div style={{ textAlign: "center" }}>
      //               <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.canonicalVolumeLink}>
      //                 {console.log(book.volumeInfo.canonicalVolumeLink)}
      //                 <strong>
      //                   {book.volumeInfo.title}
      //                   {book.volumeInfo.authors === undefined ? ''
      //                     : book.volumeInfo.authors.length < 1 ? ''
      //                       : book.volumeInfo.authors.length > 1 ? ` by ${book.volumeInfo.authors.join(", ")}`
      //                         : ` by ${book.volumeInfo.authors}`}
      //                 </strong>
      //               </a>
      //             </div>
      //             <div style={{ textAlign: "center" }}>
      //               <img
      //                 alt={book.volumeInfo.imageLinks.thumbnail.length > 0 ? `image of ${book.volumeInfo.title} book` : 'No image found'}
      //                 src={`${book.volumeInfo.imageLinks.thumbnail}`}
      //               />
      //             </div>
      //             <div>
      //               {book.volumeInfo.description === undefined ?
      //                 ''
      //                 : <p>{`${book.volumeInfo.description}`}</p>}
      //             </div>

      //             <SaveBtn onClick={(event) => {
      //               this.saveBook(book);
      //               this.setState({ saved: true })
      //               event.target.classList.add("btn-danger");
      //               event.target.innerHTML = "saved";
      //             }}
      //             />
      //           </ListItem>
      //         ))}
      //       </List>
      //     ) : (
      //         <h3 style={{ textAlign: "center" }}>Enter a book to get results</h3>
      //       )}
      // </Container>
    );
  }
}

export default Books;
