import { connect } from 'react-redux';
import React from 'react';
import { increment,decrement } from '../actions/numbers';
import Counter from '../components/Counter'
const HomePage = ({ isServer }) => {
  return <Counter />
};

HomePage.getInitialProps = ({ store, isServer}) => {
  store.dispatch(increment())
  store.dispatch(decrement())

  return { isServer};
};



export default connect()(HomePage);
