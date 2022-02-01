import React, { Component } from 'react';
import Characters from '../Characters/index';
import './index.css';

export default class index extends Component {
  render() {
    const { data, callback } = this.props;
    return (
      <ul className='list-personagens'>
        {data.map(({killfeedPortrait, uuid, developerName}) => (
          <Characters
            callback={callback}
            key={uuid}
            icon={killfeedPortrait}
            name={developerName}
          />
        ))}
      </ul>
    );
  }
}
