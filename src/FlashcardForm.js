import React from 'react';

class FlashcardForm extends React.Component {
  state = { quote: '' , character: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.quote)
    this.setState({ quote: '', character:'' })
  }

  handleChange = (e) => {
    this.setState({ quote: e.target.value })
  }

  render() {
    const { quote, character } = this.state;
    return (
      <div>
        <h6>Add a Quote:</h6>
        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.quote}
            onChange={this.handleChange}
            required 
            placeholder="Add Quote" 
          />
          <input 
            value={this.state.character}
            onChange={this.handleChange}
            required
            placeholder="Add Character"
          />
        </form>
      </div>
    )
  }
}

export default FlashcardForm;