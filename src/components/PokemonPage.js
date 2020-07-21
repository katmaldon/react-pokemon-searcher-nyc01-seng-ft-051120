import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemonArray: [],
    search: "",
    }

  componentDidMount() {
      this.fetchPokemon()
  }

  fetchPokemon = () => {
      fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemon => {
      this.setState({pokemonArray: pokemon})
    })
  }



  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  // filterPoke = () => {
  //   return this.state.pokemon.filter(poke => poke.name.toLowerCase().includes(this.state.search.toLowerCase()) )
  // }

  render() {
    console.log(this.state) 
    let filterPoke = this.state.pokemonArray.filter(poke => poke.name.toLowerCase().includes(this.state.search.toLowerCase()) )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon} />
        <br />
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <br />
        <PokemonCollection pokemonArray={filterPoke} />
      </Container>
    )
  }
}

export default PokemonPage
