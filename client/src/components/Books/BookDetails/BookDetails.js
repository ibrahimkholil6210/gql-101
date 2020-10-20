import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/react-hoc";

const getBookDetailsQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        age
        books {
          name
          genre
          id
        }
      }
    }
  }
`;

class BookDetails extends Component {
  render() {
    console.log(this.props);
    let bookDetailsMarkUp = !this.props.data.book && (
      <div className="BookDetailsArea">
        <h1>No Book Selected!</h1>
      </div>
    );

    if (this.props.data.loading && this.props.id !== "") {
      bookDetailsMarkUp = (
        <div className="BookDetailsArea">
          <h1>Loading...!</h1>
        </div>
      );
    }

    if (this.props.data.book) {
      bookDetailsMarkUp = (
        <div className="BookDetailsArea">
          <h1>{this.props.data.book.name}</h1>
          <p>{this.props.data.book.genre}</p>
          <p>{this.props.data.book.author.name}</p>
          <div className="AuthorBooksList">
            <ul>
              {this.props.data.book.author.books.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return bookDetailsMarkUp;
  }
}

export default graphql(getBookDetailsQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.id,
      },
    };
  },
})(BookDetails);
