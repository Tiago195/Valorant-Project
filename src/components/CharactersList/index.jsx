import React, { Component } from 'react';
import Characters from '../Characters/index';
import './index.css';

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      toggle: '5f8d3a7f-467b-97f3-062c-13acf203c006'
    }
  }

  toggleClick = ({ target }) => {
    const validation = target.id || target.alt
    this.setState({ toggle: validation })
  }

  render() {
    const { toggle } = this.state
    const { data, callback } = this.props;
    return (
      <ul className='list-personagens'>
        { data.map(({ killfeedPortrait, uuid, developerName }) => (
          <Characters
            toggle={ toggle === uuid || toggle === developerName }
            id={ uuid }
            callback={ callback }
            key={ uuid }
            toggleClick={ this.toggleClick }
            icon={ killfeedPortrait }
            name={ developerName }
          />
        )) }
      </ul>
    );
  }
}
