import React, { Component } from 'react';
import { shape, func, bool } from 'prop-types';

import { MdMenu, MdKeyboardBackspace, MdSearch } from 'react-icons/lib/md';

import { withRouter } from 'react-router-dom';
import { Container } from './styles';

class Header extends Component {
  state = {
    search: '',
  };

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
        Design Books
        <div className="search">
          <MdSearch />
          <input
            type="text"
            value={search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="search"
          />
        </div>
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

export default withRouter(Header);
