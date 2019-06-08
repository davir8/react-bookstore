import React, { Component } from 'react';
import {
  func, shape, arrayOf, number, string,
} from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Creators as BooksActions } from '../../store/ducks/books';

import Header from '../../components/Header';
import { Container } from './styles';

class List extends Component {
  static propTypes = {
    getBookRequest: func.isRequired,
    books: shape({
      data: arrayOf(
        shape({
          id: string,
          title: string,
          description: string,
          authors: arrayOf(string),
          thumbnail: string,
          averageRating: number,
          price: number,
        }),
      ).isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getBookRequest('design');
  }

  render() {
    const { data } = this.props.books;
    return (
      <>
        <Header />
        <Container>
          <ul>
            {data.map(book => (
              <li key={book.id}>
                <Link to={`/detail/${book.id}`}>
                  <img src={book.thumbnail} alt="logo" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
