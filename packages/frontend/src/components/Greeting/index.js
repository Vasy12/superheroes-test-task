import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Greeting = () => {
  return <div></div>;
};

Greeting.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
