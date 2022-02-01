import React, { Component } from 'react';
import Header from '../../components/Header/index';
import CharactersList from '../../components/CharactersList/index';
import { displayNome } from '../../services/data/AgentsImage';
import { requestCharacters } from '../../services/data/fetch';
import './index.css';
import '../../services/data/colors.css'

export default class index extends Component {
  constructor(props) {
    super()

    this.getCharacters = this.getCharacters.bind(this)

    this.state = {
      data: [],
      personagemInfo: {},
    }
  }

  componentDidMount() {
    this.getCharacters()
  }

  async getCharacters() {
    const { data } = await requestCharacters()
    this.setState({ data: data.filter(e => e.displayName !== 'Neon') }, () => {
      const { data } = this.state;
      this.setState({ personagemInfo: data[0] })
    })
  }

  handleClick = ({ target }) => {
    const { data } = this.state
    this.setState({
      personagemInfo: data.find(e => e.uuid === target.getAttribute('id')
        || e.developerName === target.getAttribute('alt'))
    })
  }

  render() {
    const { personagemInfo, data } = this.state;
    return (
      <>
        <Header pageAtual='inicio' />
        <main className='main'>
          <CharactersList
            data={ data }
            callback={ this.handleClick }
          />
          <section className={ ` personagem-info ${personagemInfo.developerName}` }>
            <section
              className={ personagemInfo.developerName }
              style={ { display: 'flex', overflow: 'hidden' } }
            >
              <img src={ personagemInfo.background } alt=""
                style={ { transform: 'scale(1.4)' } }
              />
              <img src={ displayNome[personagemInfo.displayName] } alt=""
                style={ { transform: 'translateX(-150px)' } }
              />
            </section>
          </section>
        </main>
      </>
    )
  }
}
