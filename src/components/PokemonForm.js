import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    }

  handleFormChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSpriteChange = e => {
    this.setState({
      sprites: {
        ...this.state.sprites,
        [e.target.name]: e.target.value}
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon',
    {method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify ({
      name: this.state.name,
      hp: parseInt(this.state.hp),
      sprites: {
        front: this.state.sprites.front,
        back: this.state.sprites.back
      }
    })
  }
  )
  .then(this.props.fetchPokemon())
  .then(this.setState({
    name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
  }))
}

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" value={this.state.name} placeholder="Name" name="name" onChange={this.handleFormChange}/>
            <Form.Input fluid label="hp" value={this.state.hp} placeholder="hp" name="hp" onChange={this.handleFormChange} />
            <Form.Input fluid label="Front Image URL" value={this.state.sprites.front} placeholder="url" name="front" onChange={this.handleSpriteChange} />
            <Form.Input fluid label="Back Image URL" value={this.state.sprites.back} placeholder="url" name="back" onChange={this.handleSpriteChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
