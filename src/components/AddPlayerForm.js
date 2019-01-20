import React, { Component } from 'react';



class AddPlayerForm extends Component {

state = {
  value: ""
}

handleValueChange = (e) => {
  this.setState({
    value: e.target.value
  })
}

  render() {
    console.log(this.state.value)
    return (
      <form>
        <input
          onChange={this.handleValueChange}
          type="text"
          value={this.state.value}
          placeholder="Enter a player's name"
        />
        <input
          type="submit"
          value="Add Player"
        />
      </form>
    )

  }
}

export default AddPlayerForm;
