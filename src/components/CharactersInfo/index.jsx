import React, { Component } from 'react';
import { displayNome } from '../../services/data/AgentsImage';
import './index.css';

export default class index extends Component {
  constructor(props) {
    super()

    this.test = this.test.bind(this)

    this.state = {
      descricaoView: props.personagemInfo.abilities[0].description,
      test: props.personagemInfo.displayName,
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
    const { personagemInfo: { abilities, developerName, displayName, background, description } } = this.props
    const [skil1, skil2, skil3, ultimate] = abilities || []
    return (
      <section
        className={developerName + ' personagem-container'}
      >
        <img src={background} alt=""
          className='personagem-background'
          style={{filter: 'brightness(0)'}}
        />
        <img src={displayNome[displayName]} alt=""
          className='personagem-IMG'
        />
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
                <img src={skil1.displayIcon} width='50px' height='50px' alt={skil1.displayName} />
                <img src={skil2.displayIcon} width='50px' height='50px' alt={skil2.displayName} />
                <img src={skil3.displayIcon} width='50px' height='50px' alt={skil3.displayName} />
                <img src={ultimate.displayIcon} width='50px' height='50px' alt={ultimate.displayName} />
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
