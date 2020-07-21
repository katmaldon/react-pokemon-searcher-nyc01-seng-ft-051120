import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showBack: false
  }

  flipCard = () =>{
    this.setState({ showBack: !this.state.showBack })
  }


  render() {
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={this.state.showBack ? this.props.sprites.back : this.props.sprites.front } alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
