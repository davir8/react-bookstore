import React from 'react';
import { shape, func } from 'prop-types';

import { IoIosBookOutline } from 'react-icons/lib/io';

import { Container } from './styles';
import Button from '../../components/Button';

const Home = ({ history }) => (
  <Container>
    <IoIosBookOutline />
    <h1>Welcome to Design Books, the bookstore for designers</h1>
    <span>Browse our books and get yours!!</span>
    <Button title="ACCESS LIBRARY" height={55} onClick={() => history.push('/list')} />
  </Container>
);

Home.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};
export default Home;
