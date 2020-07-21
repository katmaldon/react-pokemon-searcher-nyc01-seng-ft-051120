import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () =>{
    return this.props.pokemonArray.map(poke => <PokemonCard key={poke.id} {...poke} />)
  }

  render() {
    // console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
