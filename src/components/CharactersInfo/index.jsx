import React, { Component } from 'react';
import { displayNome } from '../../services/data/AgentsImage';
import './index.css';

export default class index extends Component {
  constructor(props) {
    super()

    this.handleIndexState = this.handleIndexState.bind(this)
    this.state = {
      indexState: 0,
    }
  }

  handleIndexState({ target }) {
    if(target.nodeName === 'IMG')
    this.setState({ indexState: Number(target.id) })
  }

  render() {
    const { indexState } = this.state
    const { personagemInfo: { abilities, developerName, displayName, background, description }, callback, anime } = this.props
    const [skil1, skil2, skil3, ultimate] = abilities || []
    return (
      <section
        className={ developerName + ' personagem-container' }
      >
        <section className='IMGs'>
          <img src={ background } alt=""
            className={ `personagem-background ${anime ? 'animacaoBackground' : ''}` }
          />
          <img src={ displayNome[displayName] } alt=""
            className={ `personagem-IMG ${anime ? 'animacao' : ''}` }
            onAnimationEnd={ () => callback({ anime: false }) }
            onAnimationStart={ () => this.setState({ indexState: 0 }) }
          />
        </section>

        <section
          className='info-dos-personagens'
        >
          <h1>{ displayName }</h1>
          <p>{ description }</p>
          { abilities && (
            <section
              className='skils-do-personagem'
              onClick={ this.handleIndexState }
            >
              <section style={ { display: 'flex', justifyContent: 'space-evenly' } }>
                <img
                  src={ skil1.displayIcon }
                  className={ `icon-skils ${indexState === 0 && 'selected'}` }
                  alt={ skil1.displayName }
                  id='0' />
                <img
                  src={ skil2.displayIcon }
                  className={ `icon-skils ${indexState === 1 && 'selected'}` }
                  alt={ skil2.displayName }
                  id='1' />
                <img
                  src={ skil3.displayIcon }
                  className={ `icon-skils ${indexState === 2 && 'selected'}` }
                  alt={ skil3.displayName }
                  id='2' />
                <img
                  src={ ultimate.displayIcon }
                  className={ `icon-skils ${indexState === 3 && 'selected'}` }
                  alt={ ultimate.displayName }
                  id='3' />
              </section>
              <section>
                <p>{ abilities[indexState].description }</p>
              </section>
            </section>
          ) }
        </section>
      </section>
    );
  }
}
