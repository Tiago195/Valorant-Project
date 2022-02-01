import React, { Component } from 'react';
import { displayNome } from '../../services/data/AgentsImage';
import './index.css';

export default class index extends Component {
  constructor(props) {
    super()

    this.test = this.test.bind(this)

    this.state = {
      descricaoView: props.personagemInfo.abilities[0].description,
    }
  }

  test({ target }) {
    const { personagemInfo: { abilities } } = this.props;
    if (target.nodeName === 'IMG') {
      this.setState({ descricaoView: abilities.find(e => e.displayName === target.alt).description })
    }
  }

  render() {
    const { descricaoView } = this.state;
    const { personagemInfo: { abilities, developerName, displayName, background, description }, callback, anime } = this.props
    const [skil1, skil2, skil3, ultimate] = abilities || []
    return (
      <section
        className={developerName + ' personagem-container'}
      >
        <section className='IMGs'>
        <img src={background} alt=""
          className='personagem-background'
        />
        <img src={displayNome[displayName]} alt=""
          className={`personagem-IMG ${anime ? 'animacao' : ''}`}
          onAnimationEnd={ () => callback({anime: false})}
        />
        </section>

        <section
          className='info-dos-personagens'
        >
          <p>{description}</p>
          {abilities && (
            <section
              className='skils-do-personagem'
              onClick={this.test}
            >
              <section style={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={skil1.displayIcon} className='icon-skils' alt={skil1.displayName} />
                <img src={skil2.displayIcon} className='icon-skils' alt={skil2.displayName} />
                <img src={skil3.displayIcon} className='icon-skils' alt={skil3.displayName} />
                <img src={ultimate.displayIcon} className='icon-skils' alt={ultimate.displayName} />
              </section>
              <section>
                <p>{descricaoView}</p>
              </section>
            </section>
          )}
        </section>
      </section>
    );
  }
}
