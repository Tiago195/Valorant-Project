import React, { Component } from 'react';
import Header from '../../components/Header/index';
import fetch from '../../services/data/fetch'

export default class index extends Component {

  componentDidMount() {
    console.log(fetch().then((data) => console.log(data)))
  }

  render() {
    return (
      <>
        <Header pageAtual='inicio' />
      </>
    )
  }
}
