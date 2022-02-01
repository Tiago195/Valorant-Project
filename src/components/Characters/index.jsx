import React, { Component } from 'react';
import '../../services/data/colors.css';
import './index.css';

export default class index extends Component {
  render() {
    const { icon, name, callback, id, toggle, toggleClick } = this.props;
    return (
      <li
        className={ `personagem ${name} ${toggle ? 'toggleON' : 'toggleOFF'}` }
        id={ id }
        onClick={ (event) => {
          callback(event)
          toggleClick(event)
        } }
      >
        <img src={ icon } alt={ name } />
      </li>
    );
  }
}
