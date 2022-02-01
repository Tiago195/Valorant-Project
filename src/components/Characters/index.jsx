import React, { Component } from 'react';
import '../../services/data/colors.css';
import './index.css';

export default class index extends Component {
  render() {
    const { icon, name, callback } = this.props;
    return (
      <li className={`personagem ${name}`}
        onClick={ (event) => callback(event) }
      >
        <img src={icon} alt={name} />
      </li>
    );
  }
}
