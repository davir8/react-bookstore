import React, { Component } from 'react';
import {
  func, shape, arrayOf, number, string,
} from 'prop-types';

import { MdAutorenew } from 'react-icons/lib/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, SubHeader } from './styles';

class List extends Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
    getBooksRequest: func.isRequired,
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
    this.props.getBooksRequest({ search: '' });
  }

  handleGetMore = (e) => {
    e.preventDefault();
    const { totalPage, currentPage, loading } = this.props.books;

    if (loading) {
      return;
    }

    if (totalPage - currentPage < 0) {
      this.props.getBooksFailure('End of results');
      console.log('End of results');
      return;
    }

    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      this.props.getBooksRequest({ search: '', totalPage, currentPage });
    }
  };

  navigateToDetails = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  render() {
    const { loading, data, error } = this.props.books;
    return (
      <>
        <Header />
        <SubHeader>
          <div className="info">
            <span>Total of books: {data.length}</span>
            {loading && <Loading />}
          </div>
          <button type="button" onClick={() => this.props.getBooksRequest({ search: '' })}>
            <MdAutorenew />
          </button>
        </SubHeader>
        <Container onScroll={this.handleGetMore}>
          <ul>
            {data.map(book => (
              <li key={book.id}>
                <button type="button" onClick={() => this.navigateToDetails(book.id)}>
                  <img src={book.thumbnail} alt="logo" />
                </button>
              </li>
            ))}
          </ul>
          {!!error && <p>{error}</p>}
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
