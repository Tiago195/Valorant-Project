import React, { Component } from 'react';
import './index.css';
const AGENT__MOCK = require('../../services/data/data')
const { displayNome: { Breach } } = require('../../services/data/videos')


export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      indexState: 0
    }
  }

  handleClick = (index) => {
    this.setState({ indexState: index })
  }

  render() {
    const { indexState } = this.state
    const { role, displayName, abilities } = AGENT__MOCK
    return (
      <div className='modal__container'>
        <div className='conatainer__info-abilits'>
          <section className='info-abilits__name-type'>
            <div className='info-abilits__name-type--img'>
              <img src={ role.displayIcon } alt={ role.displayName } />
            </div>
            <div className='info-abilits__name-type--data'>
              <h2>{ displayName }</h2>
              <h3>{ role.displayName }</h3>
            </div>
          </section>
          <section className='info-abilits__img-abilits'>
            { abilities.map(({ displayIcon, displayName }, index) => (
              <div
                key={ displayName }
                onClick={ () => this.handleClick(index) }
                className={ `info-abilits__img-abilits--img${index + 1}`
                }>
                <img src={ displayIcon } alt={ displayName } />
              </div>
            )) }
          </section>
          <section className='info-abilits__describe-abilits'>
            <div className='info-abilits__describe-abilits--paragraph'>
              <h3>{ abilities[indexState].displayName }</h3>
              <p>{ abilities[indexState].description }</p>
            </div>
          </section>
        </div >
        <section
          className='container__video'>
          <video
            key={ Breach[indexState] }
            autoPlay
            muted
            loop
            poster="true"
            className='video'
          >
            <source src={ Breach[indexState] } type="video/mp4" />
          </video>
        </section>
      </div >
    )
  }
}