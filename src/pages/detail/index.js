import React, { Component } from 'react';
import {
  func, shape, arrayOf, number, string,
} from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import Header from '../../components/Header';

import { Container } from './styles';

class Detail extends Component {
  static propTypes = {
    getOneBookRequest: func.isRequired,
    book: shape({
      id: string,
      title: string,
      description: string,
      authors: arrayOf(string),
      thumbnail: string,
      averageRating: number,
      price: number,
    }).isRequired,
  };

  state = {};

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getOneBookRequest({ id });
  }

  render() {
    const { book } = this.props;
    console.log(book);
    return (
      <>
        <Header goBack />
        <Container>
          <h1>teste</h1>
        </Container>
      </>
    );
  }
}

Detail.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  book: state.books.selected,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
