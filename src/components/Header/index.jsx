import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

export default class index extends Component {
  render() {
    const { pageAtual } = this.props
    return (
      <header >
        <img
          src="https://seeklogo.com/images/V/valorant-logo-3D72D9117F-seeklogo.com.png"
          alt="Logo do valorant"
          width='50px'
        />
        <nav>
          <ul>
            <li><Link to="/" className={ `link ${pageAtual === 'inicio' ? 'select' : ''}` } >Inicio</Link></li>
            <li><Link to="/armas" className={ `link ${pageAtual === 'armas' ? 'select' : ''}` }>Armas</Link></li>
            <li><Link to="/sobre" className='link'>Sobre nos</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
