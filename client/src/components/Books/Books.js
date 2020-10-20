import React, { Component } from "react";
import { graphql } from "@apollo/react-hoc";
import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  render() {
    let compWindow = this.props.data.loading && <h1>Loading...</h1>;
    if (!this.props.data.loading) {
      compWindow = (
        <ul>
          {this.props.data.books.map((el) => (
            <li key={el.id} onClick={(e) => this.props.clickHandler(el.id)}>
              {el.name}
            </li>
          ))}
        </ul>
      );
    }
    return <div>{compWindow}</div>;
  }
}

export default graphql(getBooksQuery)(BookList);
