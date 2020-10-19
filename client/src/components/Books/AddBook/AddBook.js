import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import { graphql } from "@apollo/react-hoc";
import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  query GetBooks {
    authors {
      name
      id
    }
  }
`;

class AddBooks extends Component {
  render() {
    let renderOption = this.props.data.loading && (
      <option>Loding Opitons....</option>
    );

    if (!this.props.data.loading) {
      renderOption = this.props.data.authors.map((el) => (
        <option key={el.id} value={el.name}>
          {el.name}
        </option>
      ));
    }

    return (
      <Aux>
        <form className="AddBookFrom">
          <div className="FormGroup">
            <label htmlFor="name">Book Name</label>
            <input name="name" />
          </div>
          <div className="FormGroup">
            <label htmlFor="genre">Book Genre</label>
            <input name="genre" />
          </div>
          <div className="FormGroup">
            <label htmlFor="Author">Author</label>
            <select name="author">{renderOption}</select>
          </div>
        </form>
      </Aux>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBooks);
