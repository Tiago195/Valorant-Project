import React, { Component } from 'react';
import Header from '../../components/Header/index';
import CharactersList from '../../components/CharactersList/index';
import CharactersInfo from '../../components/CharactersInfo/index';
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
            data={data}
            callback={this.handleClick}
          />
          {personagemInfo.displayName && (
            <section className={` personagem-info ${personagemInfo.developerName}`}>
              <CharactersInfo personagemInfo={personagemInfo} />
            </section>
          )}
        </main>
      </>
    )
  }
}
