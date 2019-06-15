import React, { Component } from 'react';
import {
  shape, arrayOf, number, string,
} from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import Header from '../../components/Header';

import { Container } from './styles';

class Detail extends Component {
  static propTypes = {
    book: shape({
      id: string,
      title: string,
      description: string,
      authors: arrayOf(string),
      thumbnail: string,
      averageRating: number,
      price: number,
      pageCount: number,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    const { book } = this.props;
    return (
      <>
        <Header goBack />
        <Container>
          <div className="bookContainer">
            <div className="image">
              <img src={book.thumbnail} alt="thumbnail" />
            </div>
            <div className="info">
              <h1>{book.title}</h1>
              <div>
                <span>By </span>
                {book.authors.map(author => (
                  <span>{author}, </span>
                ))}
              </div>
              <div className="price">
                <strong>$ {book.price}</strong>
              </div>
              <span>{book.pageCount} pages</span>
            </div>
          </div>
          <p>{book.description}</p>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  book: state.books.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
