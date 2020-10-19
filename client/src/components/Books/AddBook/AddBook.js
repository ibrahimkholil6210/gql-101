import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { graphql } from "@apollo/react-hoc";
import { gql } from "@apollo/client";
import { flowRight as compose } from "lodash";
import { getBooksQuery } from "../Books";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

class AddBooks extends Component {
  state = {
    name: "",
    genre: "",
    authorId: "",
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  render() {
    let renderOption = this.props.getAuthorsQuery.loading && (
      <option>Loding Opitons....</option>
    );

    if (!this.props.getAuthorsQuery.loading) {
      renderOption = this.props.getAuthorsQuery.authors.map((el) => (
        <option key={el.id} value={el.id}>
          {el.name}
        </option>
      ));
    }

    return (
      <Aux>
        <form className="AddBookFrom" onSubmit={this.formSubmitHandler}>
          <div className="FormGroup">
            <label htmlFor="name">Book Name</label>
            <input
              name="name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="FormGroup">
            <label htmlFor="genre">Book Genre</label>
            <input
              name="genre"
              onChange={(e) => this.setState({ genre: e.target.value })}
            />
          </div>
          <div className="FormGroup">
            <label htmlFor="Author">Author</label>
            <select
              name="author"
              onChange={(e) => this.setState({ authorId: e.target.value })}
            >
              {renderOption}
            </select>
          </div>
          <button>+</button>
        </form>
      </Aux>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBooks);
