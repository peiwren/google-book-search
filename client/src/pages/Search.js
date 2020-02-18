//Cited: week 20 class activites and a few youtubes & gitrepos
import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";
import { Inputform, SearchButton } from "../components/Inputform";

class Search extends Component {
  // Set state for list of books retrieved from googlebooks api
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Take the name and value properties off of event.target
    const { name, value } = event.target;

    // Update the appropriate state
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    //Prevent its default behavior when submitted, get book update the books state
    event.preventDefault();

    // Call the api and get searched book when search button is clicked
    API.searchBooks(this.state.bookSearch)
      .then(res => {
        this.setState({ books: res.data.items }, function() {
          console.log(this.state.books);
        });
      })
      .catch(err => console.log(err));
  };

  // Render the search form
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-12 sm-12">
                      <Inputform
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Book"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col size="xs-12 sm-12">
                      <SearchButton
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </SearchButton>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>

          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.books.map(book => {
                  return (
                    <BookListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      link={book.volumeInfo.infoLink}
                      description={book.volumeInfo.description}
                      // if no imageLinks then use placeholder image
                      image={
                        book.volumeInfo.imageLinks === undefined
                          ? "https://juniorleagueofasheville.org/wp-content/uploads/2013/07/ICS.png"
                          : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
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

export default Search;
