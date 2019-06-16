import React, { Component } from 'react';
import {
  shape, arrayOf, number, string, func, bool,
} from 'prop-types';

import { MdFavoriteBorder } from 'react-icons/lib/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StarRatings from 'react-star-ratings';

import { Creators as BookDetailsActions } from '../../store/ducks/bookDetails';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, Button } from './styles';

class Detail extends Component {
  static propTypes = {
    bookDetails: shape({
      data: shape({
        id: string,
        title: string,
        description: string,
        authors: arrayOf(string),
        thumbnail: string,
        averageRating: number,
        price: number,
        pageCount: number,
      }).isRequired,
      loading: bool.isRequired,
    }).isRequired,
    getBookDetailsRequest: func.isRequired,
    match: shape({
      params: shape({
        id: string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    this.loadBookDetails();
  }

  loadBookDetails = () => {
    const { id } = this.props.match.params;

    this.props.getBookDetailsRequest(id);
  };

  render() {
    const { data, loading } = this.props.bookDetails;
    return (
      <>
        <Header goBack />
        {loading ? (
          <Container loading>
            <Loading />
          </Container>
        ) : (
          <Container>
            <div className="bookContainer">
              <div className="image">
                <img src={data.thumbnail} alt="thumbnail" />
              </div>
              <div className="info">
                <div>
                  <h1>{data.title}</h1>
                  <div className="authors">
                    <span>By </span>
                    {data.authors
                      && data.authors.map(author => <span key={author}>{author}, </span>)}
                  </div>
                </div>
                <div className="price">
                  <strong>$ {data.price}</strong>
                  <StarRatings
                    rating={data.averageRating}
                    starRatedColor="#353535"
                    starEmptyColor="rgba(142, 142, 142, 0.7)"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing={0}
                    name="rating"
                  />
                </div>
                <span className="pages">{data.pageCount} pages</span>
                <div className="actions">
                  <Button>BUY</Button>
                  <Button secondary>
                    <MdFavoriteBorder />
                  </Button>
                </div>
              </div>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
          </Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  bookDetails: state.bookDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(BookDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
