import React, { Component } from 'react';
import { shape, func, bool } from 'prop-types';
import { debounce } from 'lodash';
import { MdMenu, MdKeyboardBackspace, MdSearch } from 'react-icons/lib/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router-dom';
import { Creators as BooksActions } from '../../store/ducks/books';

import { Container } from './styles';

class Header extends Component {
  state = {
    search: '',
  };

  handleSearch = debounce(() => {
    const { search } = this.state;

    this.props.getBooksRequest({ search });
  }, 300);

  render() {
    const { search } = this.state;
    const { history, goBack } = this.props;
    return (
      <Container>
        <div className="actions">
          <button type="button" onClick={() => (goBack ? history.goBack() : {})}>
            {goBack ? <MdKeyboardBackspace /> : <MdMenu />}
          </button>
        </div>
        <span>Design Books</span>

        {goBack ? (
          <div className="empty" />
        ) : (
          <div className="search">
            <MdSearch />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
                this.handleSearch();
              }}
              placeholder="search"
            />
          </div>
        )}
      </Container>
    );
  }
}

Header.propTypes = {
  history: shape({
    goBack: func,
  }).isRequired,
  goBack: bool,
};

Header.defaultProps = {
  goBack: false,
};

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Header));
