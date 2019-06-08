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
    getAllBooksRequest: func.isRequired,
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
    this.props.getAllBooksRequest({ search: 'design', page: 0 });
  }

  handleGetMore = () => {
    const { total, page, loading } = this.props.books;

    if (loading) {
      return;
    }

    if (total - page < 0) {
      console.log('voce chegou ao final dos resultados');
      return;
    }
    this.props.getAllBooksRequest({ search: 'design', page });
  };

  render() {
    const { data, total } = this.props.books;
    console.log(this.props.books);
    return (
      <>
        <Header />
        <div>
          <span>{total}</span>
          <button type="button" onClick={this.handleGetMore}>
            click
          </button>
        </div>
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
