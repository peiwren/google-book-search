//Cited: week 20 class activites and a few youtubes & gitrepos
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";

class Save extends Component {
  // state for saved books
  state = {
    savedBooks: []
  };

  // loads saved books
  componentDidMount() {
    this.loadBooks();
  }

  // loads books from database
  loadBooks = event => {
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res.data }, function() {
          console.log(this.state.savedBooks);
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <h3>Saved Books</h3>
          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.savedBooks.map(book => {
                  return (
                    <BookListItem
                      key={book._id}
                      title={book.title}
                      authors={book.authors}
                      link={book.link}
                      description={book.description}
                      image={book.image}
                      id={book._id}
                      loadBooks={this.loadBooks}
                    />
                  );
                })}
              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Save;
