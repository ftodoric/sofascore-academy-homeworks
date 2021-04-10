import React from 'react'

const defaultState = { name: '' }

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.onSubmit(this.state)

    this.setState(defaultState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input value={this.state.name} onChange={this.handleNameChange} />
            <button>Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default Form
