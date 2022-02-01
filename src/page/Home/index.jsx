import React, { Component } from 'react';
import Header from '../../components/Header/index';
import './index.css';

export default class index extends Component {
  render() {
    return (
      <>
        <Header pageAtual='inicio' />
        <main className='main'>
          <ul className='list-personagens'>
            <li className='personagem'>teste</li>
          </ul>
          <section className='personagem-info'>
            teste
          </section>
        </main>
      </>
    )
  }
}
