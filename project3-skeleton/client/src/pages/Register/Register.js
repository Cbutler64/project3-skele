import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
class Register extends Component {
  // Setting our component's initial state
  state = {
    users: [],
    username: "",
    realname: "",
    photo: "",
    gender: "",
    password: "",

  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ users: res.data, username: "", realname: "", photo: "", gender: "",
        password: "", })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.realname) {
      API.saveBook({
        username: this.state.username,
        realname: this.state.realname,
        photo: this.state.photo,
        gender: this.state.gender,
        password: this.state.password,
        
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sign up Here</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.realname}
                onChange={this.handleInputChange}
                name="realname"
                placeholder="realname (required)"
              />
              <Input
                value={this.state.photo}
                onChange={this.handleInputChange}
                name="photo"
                placeholder="photo (Optional)"
              />
              <Input
                value={this.state.gender}
                onChange={this.handleInputChange}
                name="gender"
                placeholder="gender (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
        
              <FormBtn
                disabled={!(this.state.realname && this.state.username)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            <Link to="/" className="nav-link">
            Login
          </Link>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Registered Users</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.username} by {book.realname}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
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

export default Register;
