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
            <select name="author">
              <option key={"je"}>Select Author</option>
            </select>
          </div>
        </form>
      </Aux>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBooks);
