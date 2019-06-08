import React, { Component } from 'react';

import { MdMenu, MdSearch } from 'react-icons/lib/md';

import { withRouter } from 'react-router-dom';
import { Container } from './styles';

class Header extends Component {
  state = {
    search: '',
  };

  render() {
    const { search } = this.state;
    return (
      <Container>
        <div className="actions">
          <button type="button">
            <MdMenu />
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

export default withRouter(Header);
